import { Request, Response, NextFunction } from "express";
import UserService from "../services/user.service";
import redisHandler from "../../../storageHandlers/redis.handler";

class UserController {
    public static async getUsers(req: Request, res: Response, next: NextFunction) {

        try {
            const users = await UserService.getUsers();
            res.status(200).json(users);
        } catch (error) {
            next(error);
        }
    }

    public static async createUser(req: Request, res: Response, next: NextFunction) {
        try {
            const user = await UserService.createUser(req.body);
            res.status(200).json(user);
        } catch (error) {
            next(error);
        }
    }

    public static async updateUser(req: Request, res: Response, next: NextFunction) {
        try {
            const user = await UserService.updateUser(req.body);
            res.status(200).json(user);
        } catch (error) {
            next(error);
        }
    }

    public static async deleteUser(req: Request, res: Response, next: NextFunction) {
        try {
            const params: any = req.params;
            const user = await UserService.deleteUser(params.id);
            // delete from redis if exist
            await redisHandler.del(params.id);
            res.status(200).json(user);
        } catch (error) {
            next(error);
        }
    }
    
    public static async getUser(req: Request, res: Response, next: NextFunction) {

        try {
            const params: any = req.params;
            const id = Number(params.id);
            const user = await redisHandler.get(params.id);
            if (user) {
                res.status(200).json(JSON.parse(user));
            } else {
                const user = await UserService.getUser(id);
                redisHandler.set(params.id, JSON.stringify(user));
                res.status(200).json(user);
            }
        } catch (error) {
            next(error);
        }
    }
}

export default UserController;