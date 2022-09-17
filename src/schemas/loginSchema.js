"use strict";
exports.__esModule = true;
var joi_1 = require("joi");
var loginSchema = joi_1["default"].object({
    email: joi_1["default"].string().required(),
    password: joi_1["default"].string().min(10).required()
});
exports["default"] = loginSchema;
