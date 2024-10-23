interface Game {
  id: string;
  whitePLayerName: string;
  blackPlayerName: string;
  moves: string[];
}

// export const games: Game[] = [];

//singleton pattern lets you create only one instance that means it let you initialize only once
//static attributes are directly associated with the class not with the objects of the class

export class GameManager {

  games: Game[] = [];
  private static instance: GameManager;

  private constructor() {
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

  addMove(gameId: string, move: string) {
    console.log(`Adding move ${move} to game id ${gameId}`);
    const game = this.games.find((game) => game.id === gameId);
    game?.moves.push(move);
  }

  addGame(gameId: string) {
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

// export const gameManager = new GameManager();