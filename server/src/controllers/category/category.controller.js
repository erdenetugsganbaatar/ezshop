import crud from "../../helpers/crud"
import { Category } from "../../models"
import { successResponse, errorResponse } from "../../helpers"

const controller = {};
controller.crud = crud(Category);
controller.getParents = async (req, res) => {
    try {
        const docs = await Category.findAll({ where: { parentId: null } });
        return successResponse(req, res, { result: docs })
    }
    catch (e) {
        return errorResponse(req, res, e.message)
    }
}
controller.getOneAll = async (req, res) => {
    try {
        const docs = await Category.findOne({ where: { id: req.params.id }, include: { all: true } })
        return successResponse(req, res, { result: docs })
    }
    catch (e) {
        return errorResponse(req, res, e.message)
    }
}
controller.withSubCategory = async (req, res) => {
    try {
        const docs = await Category.findAll({
            where: { parentId: null },
            include: [{
                model: Category,
                as: 'subCategory'
            }]
        })
        return successResponse(req, res, { result: docs })
    }
    catch (e) {
        return errorResponse(req, res, e.message)
    }
}
controller.getParentsAll = async (req, res) => {
    try {
        const docs = await Category.findAll({
            where: { parentId: null },
            include: {all : true}
        })
        return successResponse(req, res, { result: docs })
    }
    catch (e) {
        return errorResponse(req, res, e.message)
    }
}

module.exports = controller;