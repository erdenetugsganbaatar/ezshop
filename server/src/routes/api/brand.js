import express from 'express';
import brandController from '../../controllers/brand/brand.controller';
import multerUpload from '../../helpers/multerUpload';

const router = express.Router();

router.route("/")
    .post(multerUpload.single("image"), (req, res, next) => {
        req.body.filepath = req.file.path;
        next();
    }, brandController.crud.createOne)
    .put(brandController.crud.updateOne)
    .delete(brandController.crud.removeOne)
    .get(brandController.crud.getMany)
router.route("/:id")
    .get(brandController.crud.getOne)

module.exports = router;
