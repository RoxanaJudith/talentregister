import { NextFunction, Request, Response } from "express";
import { EducationService } from "./education.service";
import { Education } from "./education.entity";

export class EducationController{

  private educationService: EducationService;

  constructor(){
    this.educationService = new EducationService();
  }

  findAll = async (req: Request, res: Response, next: NextFunction) => {
    try{
      const education = await this.educationService.findAll();
      res.send(education);
    } catch(error){
      next(error);
    }
  }

  findById = async (req: Request, res: Response, next: NextFunction) => {
    try{
      const id: number = Number(req.params['id']);
      const education = await this.educationService.findById(id);
      res.send(education);
    } catch(error){
      next(error);
    }
  }

  create = async (req: Request, res: Response,next: NextFunction) =>{
    try {
      const education:Education = req.body;
      const newEducation = await this.educationService.create(education);
      res.send(newEducation);
    }catch(err) {
      next(err);
    }
  }
  
  update =  async (req: Request, res: Response, next: NextFunction) => {
    try{
      const education:Education = req.body;
      const id: number = Number(req.params['id']);
      const updateEducation = await this.educationService.update(id, education);
      res.send(updateEducation);
    } catch (error) {
      next(error);
    }
  }

  delete = async (req: Request, res: Response, next: NextFunction) => {
    try{
      const id:Number = Number(req.params['id']);
      const deleteEducation = await this.educationService.delete(Number(id));
      res.send(deleteEducation);
    }catch(error){
      next(error);
    }
  }
}