import { NextFunction, Request, Response } from "express";
import { SkillService } from "./skill.service";
import { Skills } from "./skill.entity";

export class SkillController{

  private skillService: SkillService;

  constructor(){
    this.skillService = new SkillService();
  }

  findAll = async (req: Request, res: Response, next: NextFunction) => {
    try{
      const users = await this.skillService.findAll();
      res.send(users);
    } catch(error){
      next(error);
    }
  }

  findById = async (req: Request, res: Response, next: NextFunction) => {
    try{
      const id: number = Number(req.params['id']);
      const skill = await this.skillService.findById(id);
      res.send(skill);
    } catch(error){
      next(error);
    }
  }

  create = async (req: Request, res: Response,next: NextFunction) =>{
    try {
      const newSkill = await this.skillService.create(req.body);
      res.send(newSkill);
    }catch(err) {
      next(err);
    }
  }

  update =  async (req: Request, res: Response, next: NextFunction) => {
    try{
      const skill = req.body;
      const id: number = Number(req.params['id']);
      const updateSkill = await this.skillService.update(id, skill);
      res.send(updateSkill);
    } catch (error) {
      next(error);
    }
  }

  delete = async (req: Request, res: Response, next: NextFunction) => {
    try{
      const id:Number = Number(req.params['id']);
      const deleteSkill = await this.skillService.delete(Number(id));
      res.send(deleteSkill);
    }catch(error){
      next(error);
    }
  }
}