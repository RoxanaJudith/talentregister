import { NextFunction, Request, Response } from 'express';
import { ContactUs } from './contacUs.entity';
import { ContactUsService } from './contactUs.service';

export class ContactUsController {
  private contactUsService: ContactUsService;

  constructor() {
    this.contactUsService = new ContactUsService();
  }
  findAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const contactUs = await this.contactUsService.findAll();
      res.send(contactUs); 
    } catch (error) {
      next(error);
    }
  };

  findById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const contactUs = await this.contactUsService.findById(Number(id));
      if (contactUs) {
        res.send(contactUs);
      } else {
        res.status(404).json({ message: 'contactUs not found' });
      }
    } catch (error) {
      next(error);
    }
  };

  create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const contactUs: ContactUs = req.body;
      const newCreatedContactUs = await this.contactUsService.create(contactUs);
      res.send(newCreatedContactUs);
    } catch (error) {
      next(error);
    }
  };

  update = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id: number = Number(req.params['id']);
      const updatedContactUs: ContactUs = req.body;
      const contactUs = await this.contactUsService.update(
        id,
        updatedContactUs
      );
      res.send(contactUs);
    } catch (error) {
      next(error);
    }
  };

  delete = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id: number = Number(req.params['id']);
      const deletedContactUs = await this.contactUsService.delete(id);
      res.send(deletedContactUs);
    } catch (error) {
      next(error);
    }
  };
}
