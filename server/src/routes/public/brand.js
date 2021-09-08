import express from 'express';
import brandController from '../../controllers/brand/brand.controller';

const router = express.Router();

router.route("/")
    .get(brandController.crud.getMany)
router.route("/product")
        .get(brandController.getWithProducts)
router.route("/:id")
    .get(brandController.crud.getOne)

module.exports = router;
