import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { DataSource } from 'typeorm';

import config from '../../utils/config';
import { Role } from '../../modules/role/role.entity';
import { User } from '../../modules/user/user.entity';

export default class RoleSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager
  ): Promise<any> {
    console.log('Running roles seeder');
    const repository = dataSource.getRepository(Role);
    repository.query('TRUNCATE roles RESTART IDENTITY CASCADE');
    await repository.insert([
      {
        name: config.roles.ADMIN,
      },
      {
        name: config.roles.USER,
      },
    ]);
  }
}
