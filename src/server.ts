import { Sequelize } from 'sequelize-typescript';
// src/app.ts
import express, { Application, NextFunction, Request, Response } from "express";
import { UserRoutes } from "./modules/user/routes";
import sequelize from "./storageHandlers/database.handler";
import User from './modules/user/controllers/user';
import { IndexRoutes } from './routes';

class Server {

  public app: Application;
  private BASE_URI = "/api";
  private API_VERSION = "v1";

  constructor() {
    this.app = express();
    this.config();
    this.routes();
    this.establishDbConnection();
  }

  private config(): void {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
  }

  private routes(): void {
    this.app.use(`${this.BASE_URI}/${this.API_VERSION}`,(new IndexRoutes()).router);
  }

  private async establishDbConnection(): Promise<any> {
    sequelize
      .authenticate()
      .then(() => {
        console.log('Connection has been established successfully.');
      })
      .catch(err => {
        console.error('Unable to connect to the database:', err);
      });

    sequelize.sync({ force: true }).then(() => { console.log("Database & tables created!"); }).catch((err) => { console.log(err); });
  }
}

const server = new Server();
export default server.app;
