"use strict";
exports.__esModule = true;
var express_1 = require("express");
var loginSchema_1 = require("../schemas/loginSchema");
var validateSchema_1 = require("../middleware/validateSchema");
var userController_1 = require("../controller/userController");
var userRouter = (0, express_1.Router)();
userRouter.post('/signin', (0, validateSchema_1.validateSchemaMiddleware)(loginSchema_1["default"]), userController_1.login);
exports["default"] = userRouter;
