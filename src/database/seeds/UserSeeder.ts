import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { DataSource } from 'typeorm';

import { User } from '../../modules/user/user.entity';
import { Status } from '../../modules/status/status.entity';
import { Role } from '../../modules/role/role.entity';
import config from '../../utils/config';
import Encryption from '../../utils/encryption';

const encryption = new Encryption();

export default class UserSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager
  ): Promise<any> {
    console.log('Running users seeder');
    const statusRepository = dataSource.getRepository(Status);
    const roleRepository = dataSource.getRepository(Role);
    const repository = dataSource.getRepository(User);

    const userRole = await roleRepository.findOneBy({
      name: config.roles.USER,
    });
    const adminRole = await roleRepository.findOneBy({
      name: config.roles.ADMIN,
    });
    const activeStatus = await statusRepository.findOneBy({ name: 'Active' });
    console.log('entro a if', config.roles.USER, 'll', adminRole,'sss', activeStatus);

    if (userRole && adminRole && activeStatus) {

      await repository.insert([
        {
          email: 'user@registro.com',
          firstName: 'User',
          lastName: 'Devsafio',
          password: await encryption.password('Ab123123-'),
          role: userRole,
          status: activeStatus,
        },
        {
          email: 'admin@registro.com',
          firstName: 'Admin',
          lastName: 'Devsafio',
          password: await encryption.password('Ab123123-'),
          role: adminRole,
          status: activeStatus,
        },
        
      ]);
    }
  }
}
