import { NextFunction, Request, Response } from 'express';
import { UserProfileService } from './user-profile.service';
import { UserProfile } from './user-profile.entity';
import { CreateUserProfileDto } from './create-user-profile.dto';

export class UserProfileController {
  private userProfile: UserProfileService;

  constructor() {
    this.userProfile = new UserProfileService();
  }

  findAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const users = await this.userProfile.findAll();
      res.send(users);
    } catch (error) {
      next(error);
    }
  };

  findById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id: number = Number(req.params['id']);
      const userProfile = await this.userProfile.findById(id);
      res.send(userProfile);
    } catch (error) {
      next(error);
    }
  };

  create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userProfile: CreateUserProfileDto = req.body;
      const newUserProfile = await this.userProfile.create(
        userProfile,
        Number(req.userId),
      );
      res.send(newUserProfile);
    } catch (err) {
      next(err);
    }
  };

  update = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user: UserProfile = req.body;
      const id: number = Number(req.params['id']);
      const updateUserProfile = await this.userProfile.update(id, user);
      res.send(updateUserProfile);
    } catch (error) {
      next(error);
    }
  };

  delete = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id: Number = Number(req.params['id']);
      const deleteUserProfile = await this.userProfile.delete(Number(id));
      res.send(deleteUserProfile);
    } catch (error) {
      next(error);
    }
  };
}
