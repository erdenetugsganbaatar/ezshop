import express from 'express';
import validate from 'express-validation';

import * as userController from '../../controllers/user/user.controller';
import * as userValidator from '../../controllers/user/user.validator';
import productRouter from "./product"
import categoryRouter from "./category"
import brandRouter from "./brand"
import customerRouter from "./customer"
import bannerRouter from "./banner";


const router = express.Router();

//= ===============================
// API routes
//= ===============================
router.get('/me', userController.profile);
router.post(
  '/changePassword',
  validate(userValidator.changePassword),
  userController.changePassword,
);
router.use("/product", productRouter);
router.use("/category", categoryRouter);
router.use("/brand", brandRouter);
router.use("/customer", customerRouter);
router.use("/banner", bannerRouter);



module.exports = router;
