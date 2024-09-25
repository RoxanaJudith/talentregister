import { AppDataSource } from '../../database';
import { AppError } from '../../utils/AppError';
import { Country } from './country.entity';

const countryRepository = AppDataSource.getRepository(Country);

export class CountryService {
  public async findAll() {
    try {
      const countrys = await countryRepository.find({
        relations: {
          cities: true,
        },
      });
      return countrys;
    } catch (error) {
      throw new AppError({ message: 'Error', httpCode: 400 });
    }
  }

  public async findById(id: number) {
    try {
      const country = await countryRepository.findOneBy({ id });
      return country;
    } catch (error) {
      throw new AppError({ message: 'Error', httpCode: 400 });
    }
  }

  public async create(country: Country) {
    try {
      const newCountry = await countryRepository.save(country);
      return newCountry;
    } catch (error) {
      throw new AppError({ message: 'Error', httpCode: 400 });
    }
  }

  public async update(id: number, country: Country) {
    try {
      await countryRepository.update(id, country);
      const updatedCountry = await countryRepository.findOneBy({ id });
      return updatedCountry;
    } catch (error) {
      throw new AppError({ message: 'Error', httpCode: 400 });
    }
  }

  public async delete(id: number) {
    try {
      const countryToDelete = await countryRepository.findOneBy({ id });
      await countryRepository.delete(id);
      return countryToDelete;
    } catch (error) {
      throw new AppError({ message: 'Error', httpCode: 400 });
    }
  }
}
