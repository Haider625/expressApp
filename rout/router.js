const express = require('express');
const router = express.Router();
const {getall,getOne ,insertAll,deleteAll } =require("../controll/controller");

const multer = require("multer");
const upload = multer  ({
    dest :'productImage/'
});

router.get('/',getall);
router.get("/:id",getOne)
router.post('/',insertAll,upload.single('image'));
router.delete('/:id',deleteAll);
module.exports = router;