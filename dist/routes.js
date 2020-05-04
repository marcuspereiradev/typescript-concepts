"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var CreateUser_1 = __importDefault(require("./services/CreateUser"));
var helloWorld = function (request, response) {
    var user = CreateUser_1.default({
        email: "email@email.com",
        password: "123456789990",
    });
    return response.json(user);
};
exports.default = helloWorld;
