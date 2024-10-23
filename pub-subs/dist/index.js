"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const store_1 = require("./store");
setInterval(() => {
    store_1.PubsubManager.getInstance().userSubscribe(Math.random().toString(), "APPLE");
}, 5000);
