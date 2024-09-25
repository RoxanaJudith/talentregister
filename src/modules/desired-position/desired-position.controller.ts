import { NextFunction, Request, Response } from "express";
import { DesiredPositionService } from "./desire-position.service";
import { DesiredPosition } from "./desired-position.entity";

export class DesiredPositionController {
  private desiredPositionService: DesiredPositionService;
  
  constructor(){
    this.desiredPositionService = new DesiredPositionService();
  }

  findAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const desiredPositions = await this.desiredPositionService.findAll();
      res.send(desiredPositions);
    } catch (error) {
      next(error);
    }
  }

  findById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id: number = Number(req.params['id']);
      const desiredPosition = await this.desiredPositionService.findById(id);
      res.send(desiredPosition);
    } catch (error) {
      next(error);
    }
  }

  create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const desiredPosition: DesiredPosition = req.body;
      const newDesiredPosition = await this.desiredPositionService.create(desiredPosition);
      res.send(newDesiredPosition);
    } catch (error) {
      next(error);
    }
  }

  update = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const desiredPosition: DesiredPosition = req.body;
      const id: number = Number(req.params['id']);
      const updatedDesiredPosition = await this.desiredPositionService.update(id, desiredPosition);
      res.send(updatedDesiredPosition);
    } catch (error) {
      next(error);
    }
  }

  delete = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id: number = Number(req.params['id']);
      const deletedDesiredPosition = await this.desiredPositionService.delete(id);
      res.send(deletedDesiredPosition);
    } catch (error) {
      next(error);
    }
  }
}
