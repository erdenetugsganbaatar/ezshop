import express from 'express';
import productController from '../../controllers/product/product.controller';

const router = express.Router();

router.route("/")
.post(productController.crud.createOne)
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
