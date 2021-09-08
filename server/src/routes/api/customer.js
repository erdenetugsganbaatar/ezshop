import express from 'express';
import {customerCrud as customerController} from '../../controllers/customer/customer.controller';

const router = express.Router();

router
    .get("/", customerController.getMany)
    .post("/create", customerController.createOne)
    .post("/update", customerController.updateOne)
    .post("/delete", customerController.removeOne)
    .get("/:id", customerController.getOne)
module.exports = router;
