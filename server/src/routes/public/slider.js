import express from 'express';
import sliderController from '../../controllers/slider/slider.controller';

const router = express.Router();

router.route("/")
    .get(sliderController.crud.getMany)
router.route("/:id")
    .get(sliderController.crud.getOne)
router.route("/category/:id")
    .get(sliderController.getSliderByCategoryId)

module.exports = router;
