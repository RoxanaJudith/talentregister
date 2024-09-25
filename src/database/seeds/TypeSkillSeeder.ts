import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { TypeSkills } from '../../modules/type-skill/type-skill.entity';
import { Skills } from '../../modules/skill/skill.entity';

export default class TypeSkillSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager
  ): Promise<any> {
    const repository = dataSource.getRepository(TypeSkills);
    const skillRepository = dataSource.getRepository(Skills);
    const { tableName } = repository.metadata;
    console.log(`Running ${tableName} seeder`);
    repository.query(`TRUNCATE ${tableName} RESTART IDENTITY CASCADE`);
    const devLanguages = await repository.save({ name: 'Lenguajes' });
    const databases = await repository.save({ name: 'Bases de datos' });
    const frameworks = await repository.save({ name: 'Frameworks' });
    const tools = await repository.save({ name: 'Herramientas' });
    await skillRepository.insert(
      [
        {
          description: 'Python',
        },
        {
          description: 'JavaScript',
        },
        {
          description: 'HTML/CSS',
        },
        {
          description: 'Java',
        },
        {
          description: 'PHP',
        },
        {
          description: 'Ruby',
        },
        {
          description: 'Scala, Perl y/o Go',
        },
        {
          description: 'C/C++',
        },
        {
          description: 'Kotlin',
        },
        {
          description: 'Swift',
        },
        {
          description: 'C#',
        },
        {
          description: 'TypeScript',
        },
        {
          description: 'Assembly',
        },
        {
          description: 'R',
        },
        {
          description: 'Go',
        },
        {
          description: 'Bash/Shell',
        },
      ].map((s) => ({ ...s, typeSkill: devLanguages }))
    );
    await skillRepository.insert(
      [
        {
          description: 'Oracle',
        },
        {
          description: 'Cassandra',
        },
        {
          description: 'SQLite',
        },
        {
          description: 'Redis',
        },
        {
          description: 'MongoDB',
        },
        {
          description: 'PostgreSQL',
        },
        {
          description: 'MySQL',
        },
        {
          description: 'Firebase',
        },
        {
          description: 'MariaDB',
        },
        {
          description: 'Microsoft SQL Server',
        },
      ].map((s) => ({ ...s, typeSkill: databases }))
    );
    await skillRepository.insert(
      [
        {
          description: 'JQuery',
        },
        {
          description: 'React.js',
        },
        {
          description: 'Spring',
        },
        {
          description: 'Angular.js',
        },
        {
          description: 'Vue.js',
        },
        {
          description: 'Laravel',
        },
        {
          description: 'Django',
        },
        {
          description: 'Ruby on Rails',
        },
        {
          description: 'ASP.NET',
        },
        {
          description: 'Flask',
        },
        {
          description: 'Express.js',
        },
        {
          description: 'FastAPI',
        },
        {
          description: '.NET',
        },
        {
          description: 'Node.js',
        },
      ].map((s) => ({ ...s, typeSkill: frameworks }))
    );
    await skillRepository.insert(
      [
        {
          description: 'Github',
        },
        {
          description: 'Adobe Illustrator',
        },
        {
          description: 'Adobe Photoshop',
        },
        {
          description: 'Adobe XD',
        },
        {
          description: 'AWS',
        },
        {
          description: 'Docker',
        },
        {
          description: 'Figma',
        },
        {
          description: 'GIT',
        },
        {
          description: 'Google Analytics',
        },
        {
          description: 'Google Cloud Plataform',
        },
        {
          description: 'Google Data Studio',
        },
        {
          description: 'Invision',
        },
        {
          description: 'InVision studio',
        },
        {
          description: 'Jira',
        },
        {
          description: 'Kubernetes',
        },
        {
          description: 'Marvel',
        },
        {
          description: 'Microsoft Excel',
        },
        {
          description: 'Microsoft Azure',
        },
        {
          description: 'Miro',
        },
        {
          description: 'Power BI',
        },
        {
          description: 'Proto.io',
        },
        {
          description: 'Qlik',
        },
        {
          description: 'Sketch',
        },
        {
          description: 'SPSS',
        },
        {
          description: 'Tableau',
        },
        {
          description: 'Unity 3D',
        },
        {
          description: 'Unreal Engine',
        },
        {
          description: 'Zepelin',
        },
      ].map((s) => ({ ...s, typeSkill: tools }))
    );
  }
}
