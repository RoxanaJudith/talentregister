import { Request, Response, NextFunction } from 'express';
import evaluationService from './evaluations.service';

async function findAll(req, res) {
  try {
    const evaluations = await evaluationService.findAll();
    res.json(evaluations);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}

async function findActiveEvaluations(req, res) {
  try {
    const evaluations = await evaluationService.findActiveEvaluations();
    res.json(evaluations);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}

async function create(req, res) {
  try {
    const evaluation = await evaluationService.create(req.body);
    res.status(201).json(evaluation);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}

async function findOne(req, res) {
  try {
    const id = parseInt(req.params.id);
    const evaluation = await evaluationService.getById(id);
    if (evaluation) {
      res.json(evaluation);
    } else {
      res.status(404).json({ error: 'Evaluation not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}

async function update(req, res) {
  try {
    const id = parseInt(req.params.id);
    const evaluation = await evaluationService.update(id, req.body);
    if (evaluation) {
      res.json(evaluation);
    } else {
      res.status(404).json({ error: 'Evaluation not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}

async function deleteEvaluation(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const id = parseInt(req.params.id);
    const deleteSkill = await evaluationService.deleteEvaluation(Number(id));
    res.send(deleteSkill);
  } catch (error) {
    next(error);
  }
}

export default {
  create,
  findOne,
  update,
  findAll,
  delete: deleteEvaluation,
  findActiveEvaluations
};
