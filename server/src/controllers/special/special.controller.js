import crud from "../../helpers/crud"
import { Special, Product } from "../../models"
import { successResponse, errorResponse } from "../../helpers"

const controller = {};
controller.crud = crud(Special);

controller.getWithProducts = async (req, res) => {
    try {
        const limit = Number(req.query.limit) || 24;
        const docs = await Special.findAll({include: Product, limit});
        return successResponse(req, res, { result:docs })
    }
    catch (e) {
        return errorResponse(req, res, e.message)
    }
}

module.exports = controller;