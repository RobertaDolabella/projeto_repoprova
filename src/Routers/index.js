"use strict";
exports.__esModule = true;
var express_1 = require("express");
var userRouter_1 = require("./userRouter");
var router = (0, express_1.Router)();
router.use(userRouter_1["default"]);
exports["default"] = router;
