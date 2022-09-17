"use strict";
exports.__esModule = true;
exports.login = void 0;
var userService_1 = require("../services/userService");
function login(req, res) {
    console.log("entrou aqui no login");
    var userData = req.body;
    (0, userService_1.loginUser)(userData);
    res.sendStatus(200);
}
exports.login = login;
var user = {
    login: login
};
exports["default"] = user;
