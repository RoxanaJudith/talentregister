import { AppError } from '../../utils/AppError';
import { AppDataSource } from '../../database';
import { City } from './city.entity';

const citysRepository= AppDataSource.getRepository(City)

export class CityService {

  public async findAll(){
    try {
      const citys = await citysRepository.find();
      return citys;
    } catch (error) {
      throw new AppError({ message: 'Error', httpCode: 400 });
    }
  }

  public async findById(id: number){
    try {
      const city = await citysRepository.findOneBy({id});
      return city;
    } catch (error) {
      throw new AppError({ message: 'Error', httpCode: 400 });
    }
  }

  public async create(city: City){
    try {
      const newCity = await citysRepository.save(city);
      return newCity;
    } catch (error) {
      throw new AppError({ message: 'Error', httpCode: 400 });
    }
  }

  public async update(id: number, city: City) {
    try {
      await citysRepository.update(id, city);
      const updatedCity = await citysRepository.findOneBy({id});
      return updatedCity;
    } catch (error) {
      throw new AppError({ message: 'Error', httpCode: 400 });
    }
  }

  public async delete(id: number) {
    try {
      const cityToDelete = await citysRepository.findOneBy({id});
      await citysRepository.delete(id);
      return cityToDelete;
    } catch (error) {
      throw new AppError({ message: 'Error', httpCode: 400 });
    }
  }
}
