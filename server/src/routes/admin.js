import express from 'express';
import * as adminController from '../controllers/admin/admin.controller';

const router = express.Router();

//= ===============================
// Admin routes
//= ===============================
router.get('/allUsers', adminController.allUsers);
router.post('/changeUserPassword', adminController.changeUserPassword);
router.post('/addUser', adminController.addUser);
router.post('/removeUser', adminController.removeUser);

module.exports = router;
