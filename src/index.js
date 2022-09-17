"use strict";
exports.__esModule = true;
var express_1 = require("express");
var dotenv_1 = require("dotenv");
var index_1 = require("./Routers/index");
var errorMiddleware_1 = require("./middleware/errorMiddleware");
var app = (0, express_1["default"])();
dotenv_1["default"].config();
app.use((0, express_1.json)());
app.use(index_1["default"]);
app.use(errorMiddleware_1.errorHandlerMiddleware);
var PORT = Number(process.env.PORT) || 5000;
app.listen(PORT, function () {
    console.log("Servidor funfando de boas na porta: ".concat(PORT));
});
