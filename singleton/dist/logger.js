"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.staterFunction = staterFunction;
const store_1 = require("./store");
function staterFunction() {
    setInterval(() => {
        store_1.GameManager.getInstance().log();
    }, 5000);
}
