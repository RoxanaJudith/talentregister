import { Request, Response } from 'express';
import { UserLanguage } from './user-language.entity';
import { UserLanguageService } from './user-language.service';

const userLanguageService = new UserLanguageService();

export class UserLanguageController {
  public async findAll(req: Request, res: Response) {
    try {
      const userLanguages = await userLanguageService.findAll();
      res.json(userLanguages);
    } catch (error) {
      res.status(400).json({ message: 'Error' });
    }
  }

  public async findById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const userLanguage = await userLanguageService.findById(Number(id));
      if (userLanguage) {
        res.json(userLanguage);
      } else {
        res.status(404).json({ message: 'UserLanguage not found' });
      }
    } catch (error) {
      res.status(400).json({ message: 'Error' });
    }
  }

  public async create(req: Request, res: Response) {
    try {
      const newUserLanguage: UserLanguage = req.body;
      const createdUserLanguage = await userLanguageService.create(newUserLanguage);
      res.json(createdUserLanguage);
    } catch (error) {
      res.status(400).json({ message: 'Error' });
    }
  }

  public async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const updatedUserLanguage: UserLanguage = req.body;
      const userLanguage = await userLanguageService.update(Number(id), updatedUserLanguage);
      if (userLanguage) {
        res.json(userLanguage);
      } else {
        res.status(404).json({ message: 'UserLanguage not found' });
      }
    } catch (error) {
      res.status(400).json({ message: 'Error' });
    }
  }

  public async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const deletedUserLanguage = await userLanguageService.delete(Number(id));
      if (deletedUserLanguage) {
        res.json(deletedUserLanguage);
      } else {
        res.status(404).json({ message: 'UserLanguage not found' });
      }
    } catch (error) {
      res.status(400).json({ message: 'Error' });
    }
  }
}
