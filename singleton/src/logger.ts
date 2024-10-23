import { GameManager } from "./store";

export function staterFunction() {
  setInterval(() => {
    GameManager.getInstance().log();
  }, 5000);
}
 