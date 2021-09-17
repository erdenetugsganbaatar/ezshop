import express from 'express';
import specialController from '../../controllers/special/special.controller';

const router = express.Router();

router.route("/")
    .get(specialController.crud.getMany)
router.route("/all")
    .get(specialController.getWithProducts)
router.route("/:id")
    .get(specialController.crud.getOne)

module.exports = router;
