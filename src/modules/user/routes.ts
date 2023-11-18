import { Router } from "express";
import UserController from "./controllers/user.controller";

export class UserRoutes {

    public router = Router();
    constructor() {
        this.setRoutes();
    }

    private setRoutes() {
        this.router.get("/", UserController.getUsers);
        this.router.get("/:id", UserController.getUser);
        this.router.post("/", UserController.createUser);
        this.router.put("/", UserController.updateUser);
        this.router.delete("/:id", UserController.deleteUser);
    }
}