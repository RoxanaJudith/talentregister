import { NextFunction,Response, Request } from "express";
import { StatusService } from "./status.service";
import { Status } from "./status.entity";

export class StatusController{
  private statusService: StatusService;
  
  constructor(){
    this.statusService = new StatusService();
  }

  findAll = async (req: Request, res: Response,next: NextFunction) => {
    try {
      const status = await this.statusService.findAll();
      res.send(status);
      }catch(err) {
      next(err);
    }
    
  }

  findById = async (req: Request, res: Response,next: NextFunction) => {
    try {
      const id: number = Number(req.params['id']);
      const status = await this.statusService.findById(id);
      res.send(status);
    } catch(err) {
        next(err);
      }
    
  }

  create = async (req: Request, res: Response,next: NextFunction) =>{

    try {
      const status:Status = req.body;
      const newStatus = await this.statusService.create(status);
      res.send(newStatus);

    } catch(err) {
        next(err);
      }
  }

  update = async (req: Request, res: Response,next: NextFunction) => {
    try {  
      const status:Status = req.body;
      const id: number = Number(req.params['id']);
      const updateStatus =  await this.statusService.update(status,id);
      res.send(updateStatus);
    } catch(err) {
      next(err);
      }
  }

  delete = async (req: Request, res: Response,next: NextFunction) => {
    try {
      const id:Number = Number(req.params['id']);
      const deleteStatus = await this.statusService.delete(Number(id));
      res.send(deleteStatus);
    } catch(err) {
      next(err);
    }
  }
}
