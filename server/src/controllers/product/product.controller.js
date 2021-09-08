import crud from "../../helpers/crud"
import { Product } from "../../models"
import { successResponse, errorResponse } from "../../helpers"

const controller = {};
controller.crud = crud(Product);
controller.getByBrandID = async (req, res) => {
    try {
        const docs = await Product.findAll({ where: { brandId: req.params.id } });
        return successResponse(req, res, { result:docs })
    }
    catch (e) {
        return errorResponse(req, res, e.message)
    }
}

module.exports = controller;