import { NextFunction, Request, Response } from "express";
import { RoleService } from "./role.service";
import { Role } from "./role.entity";

export class RoleController{
  private roleService: RoleService;
  
  constructor(){
    this.roleService = new RoleService();
  }

  findAll = async (req: Request, res: Response, next: NextFunction) => {
    try{
      const roles = await this.roleService.findAll();
      res.send(roles);
    } catch(error){
      next(error);
    }
  }

  findById = async (req: Request, res: Response, next: NextFunction) => {
    try{
      const id: number = Number(req.params['id']);
      const role = await this.roleService.findById(id);
      res.send(role);
    } catch(error){
      next(error);
    }
  }

  create = async (req: Request, res: Response,next: NextFunction) =>{

    try {
      const role:Role = req.body;
      const newRole = await this.roleService.create(role);
      res.send(newRole);
    }catch(err) {
      next(err);
    }
    
  }

  update =  async (req: Request, res: Response, next: NextFunction) => {
    try{
      const role:Role = req.body;
      const id: number = Number(req.params['id']);
      const updateRole = await this.roleService.update(id, role);
      res.send(updateRole);
    } catch (error) {
      next(error);
    }
  }

  delete = async (req: Request, res: Response, next: NextFunction) => {
    try{
      const id:Number = Number(req.params['id']);
      const deleteRole = await this.roleService.delete(Number(id));
      res.send(deleteRole);
    }catch(error){
      next(error);
    }
  }
}