import { NextFunction, Request, Response } from "express";
import { CountryService } from "./country.service";
import { Country } from "./country.entity";

export class CountryController {
  private countryService: CountryService;
  
  constructor(){
    this.countryService = new CountryService();
  }

  findAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const countrys = await this.countryService.findAll();
      res.send(countrys);
    } catch (error) {
      next(error);
    }
  }

  findById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id: number = Number(req.params['id']);
      const country = await this.countryService.findById(id);
      res.send(country);
    } catch (error) {
      next(error);
    }
  }

  create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const country: Country = req.body;
      const newCountry = await this.countryService.create(country);
      res.send(newCountry);
    } catch (error) {
      next(error);
    }
  }

  update = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const country: Country = req.body;
      const id: number = Number(req.params['id']);
      const updatedCountry = await this.countryService.update(id, country);
      res.send(updatedCountry);
    } catch (error) {
      next(error);
    }
  }

  delete = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id: number = Number(req.params['id']);
      const deletedCountry = await this.countryService.delete(id);
      res.send(deletedCountry);
    } catch (error) {
      next(error);
    }
  }
}
