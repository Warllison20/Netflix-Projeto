var express = require('express');
var router = express.Router();

const controller = require("../controllers/HomeControllers");


router.get("/", controller.index )





module.exports = router;
