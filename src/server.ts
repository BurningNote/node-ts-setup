// src/app.ts
import express, { Application, NextFunction, Request, Response } from "express";

class Server {

  public app: Application;

  constructor() {
    this.app = express();
    this.config();
    this.routes();
  }

  private config(): void {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
  }

  private routes(): void {
    const router = express.Router();
    router.get("/sunil", (req: Request, res: Response, next: NextFunction) => {
      res.json({ message: "Hello, world!" });
    });
    this.app.use(router);
  }
}

const server = new Server();
export default server.app;
