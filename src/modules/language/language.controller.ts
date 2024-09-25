import { NextFunction, Request, Response } from "express";
import { LanguageService } from "./language.service";
import { Language } from "./language.entity";

export class LanguageController {
  private languageService: LanguageService;
  
  constructor(){
    this.languageService = new LanguageService();
  }

  findAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const languages = await this.languageService.findAll();
      res.send(languages);
    } catch (error) {
      next(error);
    }
  }

  findById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id: number = Number(req.params['id']);
      const language = await this.languageService.findById(id);
      res.send(language);
    } catch (error) {
      next(error);
    }
  }

  create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const language: Language = req.body;
      const newLanguage = await this.languageService.create(language);
      res.send(newLanguage);
    } catch (error) {
      next(error);
    }
  }

  update = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const language: Language = req.body;
      const id: number = Number(req.params['id']);
      const updatedLanguage = await this.languageService.update(id, language);
      res.send(updatedLanguage);
    } catch (error) {
      next(error);
    }
  }

  delete = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id: number = Number(req.params['id']);
      const deletedLanguage = await this.languageService.delete(id);
      res.send(deletedLanguage);
    } catch (error) {
      next(error);
    }
  }
}
