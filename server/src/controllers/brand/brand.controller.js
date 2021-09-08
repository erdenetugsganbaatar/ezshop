import crud from "../../helpers/crud"
import { Brand, Product } from "../../models"
import { successResponse, errorResponse } from "../../helpers"

const controller = {};
controller.crud = crud(Brand);
controller.getWithProducts = async (req, res) => {
    try {
        const docs = await Brand.findAll({include: Product});
        return successResponse(req, res, { result:docs })
    }
    catch (e) {
        return errorResponse(req, res, e.message)
    }
}

module.exports = controller;