import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { Status } from '../../modules/status/status.entity';

export default class StatusSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager
  ): Promise<any> {
    console.log('Running status seeder');
    const repository = dataSource.getRepository(Status);
    repository.query('TRUNCATE status RESTART IDENTITY CASCADE');
    await repository.insert([
      {
        name: 'Active',
      },
      {
        name: 'Job Ready',
      },
    ]);
  }
}
