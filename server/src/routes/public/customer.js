import express from 'express';
import validate from 'express-validation';

import * as customerController from '../../controllers/customer/customer.controller';
import * as customerValidator from '../../controllers/customer/customer.validator';

const router = express.Router();


router.post(
  '/login',
  validate(customerValidator.login),
  customerController.login,
);
router.post(
  '/register',
  validate(customerValidator.register),
  customerController.register,
);

module.exports = router;
