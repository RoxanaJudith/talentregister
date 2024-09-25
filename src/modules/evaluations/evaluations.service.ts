import { AppDataSource } from '../../database';
import { AppError } from '../../utils/AppError';
import { Evaluation } from './evaluations.entity';

const evaluationRepository = AppDataSource.getRepository(Evaluation);

async function findAll() {
  const evaluations = await evaluationRepository.find();
  return evaluations;
}
async function findActiveEvaluations() {
  const evaluations = await evaluationRepository.find({
    where: {
      state: true,
    },
  });
  return evaluations;
}

async function create(createEvaluationsDto) {
  const evaluation = await evaluationRepository.save(createEvaluationsDto);
  return evaluation;
}

async function getById(id) {
  return await evaluationRepository.findOneBy({ id });
}

async function update(id, updateEvaluationsDto) {
  const evaluation = await evaluationRepository.update(
    id,
    updateEvaluationsDto
  );
  return evaluation;
}

async function deleteEvaluation(id: number) {
  try {
    const exist = await evaluationRepository.findOneBy({ id });
    if (!exist) throw new Error(`Evaluation not found`);

    await evaluationRepository.delete(id);
    return 'Evaluación eliminada correctamente';
  } catch (error) {
    throw new AppError({ message: (error as Error).message, httpCode: 400 });
  }
}

export default {
  create,
  getById,
  update,
  findAll,
  deleteEvaluation,
  findActiveEvaluations
};
