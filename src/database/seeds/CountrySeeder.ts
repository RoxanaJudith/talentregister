import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { Country } from '../../modules/country/country.entity';
import { City } from '../../modules/city/city.entity';

export default class CountrySeeder implements Seeder {
  public async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager
  ): Promise<void> {
    const countryRepository = dataSource.getRepository(Country);
    const cityRepository = dataSource.getRepository(City);
    countryRepository.query('TRUNCATE countries RESTART IDENTITY CASCADE');
    await countryRepository.insert([
      { name: 'Argentina' },
      { name: 'Bolivia' },
      { name: 'Chile' },
      { name: 'Mexico' },
      { name: 'Perú' },
      { name: 'Uruguay' },
    ]);
    await cityRepository.insert([
      { name: 'Buenos Aires', countryId: { id: 1 } },
      { name: 'La Paz', countryId: { id: 2 } },
      { name: 'Santiago', countryId: { id: 3 } },
      { name: 'Ciudad de México', countryId: { id: 4 } },
      { name: 'Lima', countryId: { id: 5 } },
      { name: 'Montevideo', countryId: { id: 6 } },
    ]);
  }
}
