import crud from "../../helpers/crud"
import { Banner } from "../../models"
import {successResponse
    ,errorResponse} from "../../helpers"

const controller = {};

controller.getBannerByCategoryId = async (req, res) => {
    try {
        let { id } = req.params
        id = id == 0 ? null : id;
        const docs = await Banner.findAll({
            where: {
                categoryId : id
            }
        })
        return successResponse(req, res, {
            result: docs
        })
    }
    catch (e) {
        return errorResponse(req, res, e.message)
    }
}
controller.crud = crud(Banner);2

module.exports = controller;