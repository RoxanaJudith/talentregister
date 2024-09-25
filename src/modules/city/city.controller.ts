import { Request, Response } from 'express';
import { City } from './city.entity';
import { CityService } from './city.service';

const cityService = new CityService();

export class CityController {
  public async findAll(req: Request, res: Response) {
    try {
      const citys = await cityService.findAll();
      res.json(citys);
    } catch (error) {
      res.status(400).json({ message: 'Error' });
    }
  }

  public async findById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const city = await cityService.findById(Number(id));
      if (city) {
        res.json(city);
      } else {
        res.status(404).json({ message: 'city not found' });
      }
    } catch (error) {
      res.status(400).json({ message: 'Error' });
    }
  }

  public async create(req: Request, res: Response) {
    try {
      const newCity: City = req.body;
      const createdCity = await cityService.create(newCity);
      res.json(createdCity);
    } catch (error) {
      res.status(400).json({ message: 'Error' });
    }
  }

  public async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const updatedCity: City = req.body;
      const city = await cityService.update(Number(id), updatedCity);
      if (city) {
        res.json(city);
      } else {
        res.status(404).json({ message: ' not found' });
      }
    } catch (error) {
      res.status(400).json({ message: 'Error' });
    }
  }

  public async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const deletedCity = await cityService.delete(Number(id));
      if (deletedCity) {
        res.json(deletedCity);
      } else {
        res.status(404).json({ message: ' not found' });
      }
    } catch (error) {
      res.status(400).json({ message: 'Error' });
    }
  }
}
