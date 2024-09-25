import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { DesiredPosition } from '../../modules/desired-position/desired-position.entity';

export default class DesiredPositionSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager
  ): Promise<any> {
    const repository = dataSource.getRepository(DesiredPosition);
    console.log(`Running ${repository.metadata.tableName} seeder`);
    repository.query(
      `TRUNCATE ${repository.metadata.tableName} RESTART IDENTITY CASCADE`
    );
    await repository.insert([
      { name: 'Desarrollador/a Full Stack' },
      { name: 'Desarrollador/a Back End' },
      { name: 'Desarrollador/a Front End' },
      { name: 'Diseñador/a UX / UX Research o UI' },
      { name: 'Ingeniería de Datos' },
      { name: 'Desarrollador/a Móvil' },
      { name: 'Data Scientist o especialista machine learning' },
    ]);
  }
}
