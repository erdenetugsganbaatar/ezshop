import crud from "../../helpers/crud"
import { Slider, Banner } from "../../models"
import {
    successResponse
    , errorResponse
} from "../../helpers"

const controller = {};

controller.getSliderByCategoryId = async (req, res) => {
    try {
        let { id } = req.params
        id = id == 0 ? null : id;
        const docs = await Slider.findAll({
            where: {
                categoryId: id
            },
            include: [
                {model : Banner, as : "banner"}
            ]
        })
        return successResponse(req, res, {
            result: docs
        })
    }
    catch (e) {
        return errorResponse(req, res, e.message)
    }
}
controller.crud = crud(Slider); 2

module.exports = controller;