import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import axios from 'axios';
import { User } from '../../models';
import { successResponse, errorResponse, uniqueId } from '../../helpers';

export const allUsers = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const users = await User.findAndCountAll({
      order: [['createdAt', 'ASC'], ['firstname', 'ASC']],
      offset: (page - 1) * limit,
      limit,
    });
    return successResponse(req, res, { users });
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};

export const changeUserPassword = async (req, res) => {
  try {
    const { id } = req.body;
    const user = await User.scope('withSecretColumns').findOne({
      where: { id },
    });
    if (id === req.user.id) {
      return errorResponse(req, res, "Admin's password cannot be changed!")
    }
    if (!user) {
      return errorResponse(req, res, "User not found!", 404)
    }

    const newPass = crypto
      .createHash('md5')
      .update(req.body.password)
      .digest('hex');

    await User.update({ password: newPass }, { where: { id } });
    return successResponse(req, res, {});
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};

export const addUser = async (req, res) => {
  try {

    const user = await User.scope('withSecretColumns').findOne({
      where: { username:req.body.username },
    });
    if (user) {
      throw new Error('User already exists with same username!');
    }
    const reqPass = crypto
      .createHash('md5')
      .update(req.body.password)
      .digest('hex');
    req.body.password = reqPass
    const newUser = await User.create(req.body);
    return successResponse(req, res, { newUser });

  }
  catch (error) {
    return errorResponse(req, res, error.message);
  }
};

export const removeUser = async (req, res) => {
  try {
    if(req.user.id == req.body.id){
      throw new Error("Cannot delete super admin!")
    }
    await User.destroy({
      where: {
        id:req.body.id
      }
    });
    return successResponse(req,res,{});
  } catch (error) {
    return errorResponse(req, res, error.message, 500, error)
  }
};