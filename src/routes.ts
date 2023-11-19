import { Router } from "express";
import { UserRoutes } from "./modules/user/routes";

export class IndexRoutes {

    public router = Router();
    constructor() {
        this.setRoutes();
    }

    private setRoutes() {
        this.router.use("/user",  (new UserRoutes()).router);
    }
}