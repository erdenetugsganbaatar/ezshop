import express from 'express';
import bannerController from '../../controllers/banner/banner.controller';

const router = express.Router();

router.route("/")
    .get(bannerController.crud.getMany)
router.route("/:id")
    .get(bannerController.crud.getOne)
router.route("/category/:id")
    .get(bannerController.getBannerByCategoryId)

module.exports = router;
