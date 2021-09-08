import express from 'express';
import bannerController from '../../controllers/banner/banner.controller';
import multerUpload from '../../helpers/multerUpload';

const router = express.Router();

router.route("/")
    .post(multerUpload.single("banner"), (req, res, next) => {
        req.body.filepath = req.file.path;
        next();
    }, bannerController.crud.createOne)
    .put(bannerController.crud.updateOne)
    .delete(bannerController.crud.removeOne)
    .get(bannerController.crud.getMany)
router.route("/:id")
    .get(bannerController.crud.getOne)
    router.route("/category/:id")
    .get(bannerController.getBannerByCategoryId)


module.exports = router;
