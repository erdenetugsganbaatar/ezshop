import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import { Customer } from '../../models';
import { successResponse, errorResponse, uniqueId } from '../../helpers';
import crud from "../../helpers/crud";
export const register = async (req, res) => {
  try {

    const customer = await Customer.scope('withSecretColumns').findOne({
      where: { email: req.body.email },
    });
    if (customer) {
      throw new Error('Customer already exists with same email!');
    }
    const reqPass = crypto
      .createHash('md5')
      .update(req.body.password)
      .digest('hex');
    req.body.password = reqPass;
    delete req.body.verifyToken;
    const newCustomer = await Customer.create({
      ...req.body,
      isVerified: false,
      verifyToken: uniqueId(),
    });
    return successResponse(req, res, { newCustomer });

  }
  catch (error) {
    return errorResponse(req, res, error.message);
  }
};

export const login = async (req, res) => {
  try {
    const customer = await Customer.scope('withSecretColumns').findOne({
      where: { email: req.body.email },
    });
    if (!customer) {
      throw new Error('Incorrect Email Id/Password');
    }
    const reqPass = crypto
      .createHash('md5')
      .update(req.body.password || '')
      .digest('hex');
    if (reqPass !== customer.password) {
      throw new Error('Incorrect Email Id/Password');
    }
    const token = jwt.sign(
      {
        customer: {
          customerId: customer.id,
          email: customer.email,
          createdAt: new Date(),
        },
      },
      process.env.SECRET,
    );
    delete customer.dataValues.password;
    return successResponse(req, res, { customer, token });
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};

export const profile = async (req, res) => {
  try {
    const { customerId } = req.customer;
    const customer = await Customer.findOne({ where: { id: customerId } });
    return successResponse(req, res, { customer });
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};

export const changePassword = async (req, res) => {
  try {
    const { customerId } = req.customer;
    const customer = await Customer.scope('withSecretColumns').findOne({
      where: { id: customerId },
    });

    const reqPass = crypto
      .createHash('md5')
      .update(req.body.oldPassword)
      .digest('hex');
    if (reqPass !== customer.password) {
      throw new Error('Old password is incorrect');
    }

    const newPass = crypto
      .createHash('md5')
      .update(req.body.newPassword)
      .digest('hex');

    await Customer.update({ password: newPass }, { where: { id: customer.id } });
    return successResponse(req, res, {});
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};

export const customerCrud = crud(Customer);