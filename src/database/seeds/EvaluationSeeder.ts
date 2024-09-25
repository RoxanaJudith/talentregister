import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { Evaluation } from '../../modules/evaluations/evaluations.entity';

export default class EvaluationSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager
  ): Promise<void> {
    const evaluationRepository = dataSource.getRepository(Evaluation);
    evaluationRepository.query(
      `TRUNCATE ${evaluationRepository.metadata.tableName} RESTART IDENTITY CASCADE`
    );
    await evaluationRepository.insert([
      {
        name: 'HTML CSS',
        duration: 25,
        state: true,
        image: 'https://openwebsolutions.in/blog/wp-content/uploads/2018/01/banner-1.jpg',
        url: 'https://www.digitallearning.es/tests/test-html-css.html',
      },
      {
        name: 'Javascript',
        duration: 45,
        state: true,
        image: 'https://1000marcas.net/wp-content/uploads/2020/11/JavaScript-logo.png',
        url: 'https://www.digitallearning.es/tests/javascript.html',
      },
      {
        name: 'Azure Devops',
        duration: 30,
        state: false,
        image: 'https://www.incredibuild.com/wp-content/uploads/2020/09/azure_devops-1.png',
        url: 'https://devopslatam.com/courses/cursos-a-demanda/microsoft-azure-devops-fundamentals-evaluacion-software/',
      },
    ]);
  }
}
