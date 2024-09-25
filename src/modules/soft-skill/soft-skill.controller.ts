import { NextFunction, Request, Response } from "express";
import { SoftSkillService } from "./soft-skill.service";
import { SoftSkill } from "./soft-skill.entity";

export class SoftSkillController{

  private softskillService: SoftSkillService;

  constructor(){
    this.softskillService = new SoftSkillService();
  }

  findAll = async (req: Request, res: Response, next: NextFunction) => {
    try{
      const users = await this.softskillService.findAll();
      res.send(users);
    } catch(error){
      next(error);
    }
  }

  findById = async (req: Request, res: Response, next: NextFunction) => {
    try{
      const id: number = Number(req.params['id']);
      const softskill = await this.softskillService.findById(id);
      res.send(softskill);
    } catch(error){
      next(error);
    }
  }

  create = async (req: Request, res: Response,next: NextFunction) =>{
    console.log('kkkk'+ req);
    

    try {
      const softskill:SoftSkill = req.body;
      const newSoftskill = await this.softskillService.create(softskill);
      res.send(newSoftskill);
    }catch(err) {
      next(err);
    }
  }

  update =  async (req: Request, res: Response, next: NextFunction) => {
    try{
      const user:SoftSkill = req.body;
      const id: number = Number(req.params['id']);
      const updateSoftkill = await this.softskillService.update(id, user);
      res.send(updateSoftkill);
    } catch (error) {
      next(error);
    }
  }

  delete = async (req: Request, res: Response, next: NextFunction) => {
    try{
      const id:Number = Number(req.params['id']);
      const deleteSoftkill = await this.softskillService.delete(Number(id));
      res.send(deleteSoftkill);
    }catch(error){
      next(error);
    }
  }
}