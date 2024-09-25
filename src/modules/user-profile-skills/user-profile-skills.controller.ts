import { NextFunction, Request, Response } from "express";
import { UserProfileSkillService } from "./user-profile-skills.service";
import { UserProfileSkills } from "./user-profile-skills.entity";

export class UserProfileController{

  private userProfileSkill: UserProfileSkillService;

  constructor(){
    this.userProfileSkill = new UserProfileSkillService();
  }

  findAll = async (req: Request, res: Response, next: NextFunction) => {
    try{
      const users = await this.userProfileSkill.findAll();
      res.send(users);
    } catch(error){
      next(error);
    }
  }

  findById = async (req: Request, res: Response, next: NextFunction) => {
    try{
      const id: number = Number(req.params['id']);
      const userProfileSkill = await this.userProfileSkill.findById(id);
      res.send(userProfileSkill);
    } catch(error){
      next(error);
    }
  }

  create = async (req: Request, res: Response,next: NextFunction) =>{
    try {
      const userProfileSkill:UserProfileSkills = req.body;
      // const newUserProfileskill = await this.userProfileSkill.create(userProfileSkill);
      // res.send(newUserProfileskill);
    }catch(err) {
      next(err);
    }
  }

  update =  async (req: Request, res: Response, next: NextFunction) => {
    try{
      const userProfileskill:UserProfileSkills = req.body;
      const id: number = Number(req.params['id']);
      const updateUserProfileskill = await this.userProfileSkill.update(id, userProfileskill);
      res.send(updateUserProfileskill);
    } catch (error) {
      next(error);
    }
  }

  delete = async (req: Request, res: Response, next: NextFunction) => {
    try{
      const id:Number = Number(req.params['id']);
      const deleteUserProfileskill = await this.userProfileSkill.delete(Number(id));
      res.send(deleteUserProfileskill);
    }catch(error){
      next(error);
    }
  }
}