import { NextFunction,Response, Request } from "express";
import { UserService } from "./user.service";
import { User } from "./user.entity";
import dotenv from 'dotenv';

dotenv.config();

export class UserController{
  private userService: UserService;
  
  constructor(){
    this.userService = new UserService();
  }

  findAll = async (req: Request, res: Response, next: NextFunction) => {
    try{
      const users = await this.userService.findAll();
      res.send(users);
    } catch(error){
      next(error);
    }
  }

  findById = async (req: Request, res: Response, next: NextFunction) => {
    try{
      const id: number = Number(req.params['id']);
      const user = await this.userService.findById(id);
      res.send(user);
    } catch(error){
      next(error);
    }
  }

  create = async (req: Request, res: Response,next: NextFunction) =>{
    
    try {
      const user: User = req.body;
      const newUser = await this.userService.create(user);
      res.send(newUser);

    }catch(err) {
      next(err);
    }
    
  }

  update =  async (req: Request, res: Response, next: NextFunction) => {
    try{
      const user:User = req.body;
      const id: number = Number(req.params['id']);
      const updateUser = await this.userService.update(id, user);
      res.send(updateUser);
    } catch (error) {
      next(error);
    }
  }

  delete = async (req: Request, res: Response, next: NextFunction) => {
    try{
      const id:Number = Number(req.params['id']);
      const deleteUser = await this.userService.delete(Number(id));
      res.send(deleteUser);
    }catch(error){
      next(error);
    }
  }
 
  findByEmail = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const email : string = req.body['email'];
      const user = await this.userService.findByEmail(email);
      if (!user) {
        return res.status(404).json({ message: 'No se encontró un usuario con ese correo electrónico.' });
      }
      res.json(user);
    } catch (error) {
      next(error);
    }
  };

  
}
 