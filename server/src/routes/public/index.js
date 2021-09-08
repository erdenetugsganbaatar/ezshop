import express from 'express';

import customerRouter from "./customer";
import userRouter from "./user";
import categoryRouter from "./category";
import productRouter from "./product";
import bannerRouter from "./banner";
import brandRouter from "./brand";
const router = express.Router();


//= ===============================
// Public routes
//= ===============================
router.use("/customer",customerRouter)
router.use("/user",userRouter)
router.use("/category",categoryRouter)
router.use("/product",productRouter)
router.use("/banner",bannerRouter)
router.use("/brand",brandRouter)

// TEMPORARY
import multerUpload from '../../helpers/multerUpload';
router.post("/upload/image", multerUpload.single("image"), (req, res) => {
  res.send("Successful upload!");
})
module.exports = router;
