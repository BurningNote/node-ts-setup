import exp from "constants";
import Redis from "ioredis";

class RedisHandler {
    private static instance: RedisHandler;
    private redis: any;

    private constructor() {
        this.redis = new Redis();
    }

    public static getInstance(): RedisHandler {
        if (!RedisHandler.instance) {
            RedisHandler.instance = new RedisHandler();
        }

        return RedisHandler.instance;
    }

    public async set(key: string, value: string): Promise<void> {
        await this.redis.set(key, value);
    }

    public async get(key: string): Promise<string> {
        return await this.redis.get(key);
    }

    public async del(key: string): Promise<void> {
        await this.redis.del(key);
    }
}

export default RedisHandler.getInstance();