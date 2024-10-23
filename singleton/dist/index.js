"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = require("./logger");
const store_1 = require("./store");
// import { games } from "./store";
(0, logger_1.staterFunction)();
setInterval(() => {
    store_1.GameManager.getInstance().addGame(Math.random().toString());
}, 5000);
