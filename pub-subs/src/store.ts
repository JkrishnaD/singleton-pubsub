import { createClient } from "redis";
import { RedisClientType } from "./../node_modules/@redis/client/dist/lib/client/index.d";

export class PubsubManager {
  private static instance: PubsubManager;
  private redisClient: RedisClientType;
  private subscriptions: Map<string, string[]>;

  private constructor() {
    this.redisClient = createClient();
    this.redisClient.connect();
    this.subscriptions = new Map();
  }

  static getInstance() {
    if (!PubsubManager.instance) {
      PubsubManager.instance = new PubsubManager();
    }
    return PubsubManager.instance;
  }

  userSubscribe(userId: string, stock: string) {
    if (!this.subscriptions.has(stock)) {
      this.subscriptions.set(stock, []);
    }
    this.subscriptions.get(stock)?.push(userId);

    if (this.subscriptions.get(stock)?.length === 1) {
      this.redisClient.subscribe(stock, (message) => {
        this.handleMessage(stock, message);
      });
      console.log(`subscribed to redis ${stock}`);
    }
  }

  userUnsubscribe(userId: string, stock: string) {
    this.subscriptions.set(
      stock,
      this.subscriptions.get(stock)?.filter((sub) => sub !== userId) || []
    );
    if (this.subscriptions.get(stock)?.length === 1) {
      this.redisClient.unsubscribe(stock);
      console.log(`Unsubscribed to redis ${stock}`);
    }
  }

  handleMessage(stock: string, message: string) {
    console.log(`Message recieved on stock ${stock}:${message}`);
    // this.subscriptions.get(stock)?.forEach((sub) => {
    //   console.log(`sending message to user ${sub}`);
    // });
  }

  async disconnect() {
    await this.redisClient.quit();
  }
}
