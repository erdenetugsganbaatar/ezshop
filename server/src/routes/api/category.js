import express from 'express';
import categoryController from '../../controllers/category/category.controller';
import multerUpload from '../../helpers/multerUpload';

const router = express.Router();

router.route("/")
    .post(multerUpload.fields([
        { name: 'smallCategoryImagePath', maxCount: 1 },
        { name: 'coverImagePath', maxCount: 1 }
    ]), (req, res, next) => {
        const {coverImagePath : coverImageArray, smallCategoryImagePath : smallCategoryImageArray} = req.files
        req.body.coverImagePath = coverImageArray[0].path;
        req.body.smallCategoryImagePath = smallCategoryImageArray[0].path;
        next();
    }, categoryController.crud.createOne)
    .put(categoryController.crud.updateOne)
    .delete(categoryController.crud.removeOne)
    .get(categoryController.crud.getMany)
    .get(categoryController.crud.getMany)
router.route("/:id")
    .get(categoryController.crud.getOne)

module.exports = router;