import { staterFunction } from "./logger";
import { GameManager } from "./store";

// import { games } from "./store";

staterFunction();
setInterval(() => {
  GameManager.getInstance().addGame(Math.random().toString());
}, 5000);
