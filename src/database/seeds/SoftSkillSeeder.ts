import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { SoftSkill } from '../../modules/soft-skill/soft-skill.entity';

export default class SoftSkillSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager
  ): Promise<any> {
    const repository = dataSource.getRepository(SoftSkill);
    const { tableName } = repository.metadata;
    console.log(`Running ${tableName} seeder`);
    repository.query(`TRUNCATE ${tableName} RESTART IDENTITY CASCADE`);
    await repository.insert([
      {
        name: 'Lider',
      },
      {
        name: 'Resilente/Perseverante',
      },
      {
        name: 'Comunicación/Sociable',
      },
      {
        name: 'Colaborativo/Empatía',
      },
      {
        name: 'Aprendizaje ágil/Autónomo',
      },
      {
        name: 'Flexible/Adaptable',
      },
      {
        name: 'Responsable',
      },
      {
        name: 'Innovador/Curioso',
      },
      {
        name: 'Negociación',
      },
      {
        name: 'Resolución de problemas',
      },
      {
        name: 'Productividad/Iniciativa',
      },
    ]);
  }
}
