import express from 'express';
import categoryController from '../../controllers/category/category.controller';

const router = express.Router();

router.route("/")
.get(categoryController.crud.getMany)
router.route("/root")
.get(categoryController.getParents)
router.route("/withSubCategory")
.get(categoryController.withSubCategory)
router.route("/all")
.get(categoryController.getParentsAll)
router.route("/:id")
.get(categoryController.crud.getOne)
router.route("/:id/all")
.get(categoryController.getOneAll)

module.exports = router;
