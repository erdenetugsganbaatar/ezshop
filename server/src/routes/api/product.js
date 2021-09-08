import express from 'express';
import productController from '../../controllers/product/product.controller';
import multerUpload from '../../helpers/multerUpload';

const router = express.Router();

router.route("/")
    .post(multerUpload.single("productImage"), (req, res, next) => {
        req.body.filepath = req.file.path;
        next();
    }, productController.crud.createOne)
    .put(productController.crud.updateOne)
    .delete(productController.crud.removeOne)
    .get(productController.crud.getMany)
router.route("/all")
    .get(productController.crud.getAll)
router.route("/:id")
    .get(productController.crud.getOne)
router.route("/brand/:id")
    .get(productController.getByBrandID)


module.exports = router;
