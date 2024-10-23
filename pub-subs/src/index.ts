import { PubsubManager } from "./store";

setInterval(() => {
  PubsubManager.getInstance().userSubscribe(Math.random().toString(), "APPLE");
}, 5000);
