import { NextFunction, Request, Response } from "express";
import { UserProfileSoftSkillService } from "./user-profile-soft-skill.service";
import { UserProfileSoftSkill } from "./user-profile-soft-skill.entity";

export class SoftSkillController{

  private userProfileSoftSkillService: UserProfileSoftSkillService;

  constructor(){
    this.userProfileSoftSkillService = new UserProfileSoftSkillService();
  }

  findAll = async (req: Request, res: Response, next: NextFunction) => {
    try{
      const users = await this.userProfileSoftSkillService.findAll();
      res.send(users);
    } catch(error){
      next(error);
    }
  }

  findById = async (req: Request, res: Response, next: NextFunction) => {
    try{
      const id: number = Number(req.params['id']);
      const userSoftSkill = await this.userProfileSoftSkillService.findById(id);
      res.send(userSoftSkill);
    } catch(error){
      next(error);
    }
  }

  create = async (req: Request, res: Response,next: NextFunction) =>{
    try {
      const userSoftSkill:UserProfileSoftSkill = req.body;
      const newUserSoftSkill = await this.userProfileSoftSkillService.create(userSoftSkill);
      res.send(newUserSoftSkill);
    }catch(err) {
      next(err);
    }
  }

  update =  async (req: Request, res: Response, next: NextFunction) => {
    try{
      const user:UserProfileSoftSkill = req.body;
      const id: number = Number(req.params['id']);
      const updateUserSoftSkill = await this.userProfileSoftSkillService.update(id, user);
      res.send(updateUserSoftSkill);
    } catch (error) {
      next(error);
    }
  }

  delete = async (req: Request, res: Response, next: NextFunction) => {
    try{
      const id:Number = Number(req.params['id']);
      const deleteUserSoftSkill = await this.userProfileSoftSkillService.delete(Number(id));
      res.send(deleteUserSoftSkill);
    }catch(error){
      next(error);
    }
  }
}