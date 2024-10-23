"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameManager = void 0;
// export const games: Game[] = [];
//singleton pattern lets you create only one instance that means it let you initialize only once
//static attributes are directly associated with the class not with the objects of the class
class GameManager {
    constructor() {
        this.games = [];
        this.games = [];
    }
    static getInstance() {
        //if it already exists then it returns the previous instance
        if (GameManager.instance) {
            return GameManager.instance;
        }
        //if not it create the new instance
        GameManager.instance = new GameManager();
        return GameManager.instance;
    }
    addMove(gameId, move) {
        console.log(`Adding move ${move} to game id ${gameId}`);
        const game = this.games.find((game) => game.id === gameId);
        game === null || game === void 0 ? void 0 : game.moves.push(move);
    }
    addGame(gameId) {
        const game = {
            id: gameId,
            whitePLayerName: "joseph",
            blackPlayerName: "vijay",
            moves: [],
        };
        this.games.push(game);
    }
    log() {
        console.log(this.games);
    }
}
exports.GameManager = GameManager;
// export const gameManager = new GameManager();
