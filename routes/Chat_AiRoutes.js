const express = require("express");
const {SindChatAI, GetChatAI, CreateNewThread, DeleteThread, upload} = require("../services/chat_AiServices");


const { check_login } = require("../services/authServicrs");

const chat_routes = express.Router();

chat_routes.route("/")
.post(check_login, upload.array('files', 5), SindChatAI);

chat_routes.route("/craete")
.post(check_login, CreateNewThread);

chat_routes.route("/:id")
.get(check_login, GetChatAI)
.delete(check_login, DeleteThread);

module.exports = chat_routes;