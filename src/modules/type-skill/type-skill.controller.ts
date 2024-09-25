import { NextFunction, Request, Response } from "express";
import { TypeSkillService } from "./type-skill.service";
import { TypeSkills } from "./type-skill.entity";

export class TypeSkillController{

  private tipeSkillService: TypeSkillService;

  constructor(){
    this.tipeSkillService = new TypeSkillService();
  }

  findAll = async (req: Request, res: Response, next: NextFunction) => {
    try{
      const users = await this.tipeSkillService.findAll();
      res.send(users);
    } catch(error){
      next(error);
    }
  }

  findById = async (req: Request, res: Response, next: NextFunction) => {
    try{
      const id: number = Number(req.params['id']);
      const skill = await this.tipeSkillService.findById(id);
      res.send(skill);
    } catch(error){
      next(error);
    }
  }

  create = async (req: Request, res: Response,next: NextFunction) =>{
    try {
      const skill:TypeSkills = req.body;
      const newSkill = await this.tipeSkillService.create(skill);
      res.send(newSkill);
    }catch(err) {
      next(err);
    }
  }

  update =  async (req: Request, res: Response, next: NextFunction) => {
    try{
      const skill:TypeSkills = req.body;
      const id: number = Number(req.params['id']);
      const updateSkill = await this.tipeSkillService.update(id, skill);
      res.send(updateSkill);
    } catch (error) {
      next(error);
    }
  }

  delete = async (req: Request, res: Response, next: NextFunction) => {
    try{
      const id:Number = Number(req.params['id']);
      const deleteSkill = await this.tipeSkillService.delete(Number(id));
      res.send(deleteSkill);
    }catch(error){
      next(error);
    }
  }
}