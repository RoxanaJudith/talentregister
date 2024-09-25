import { Router } from 'express';
import evaluationsController from './evaluations.controller';

const router = Router();
router.get('/', evaluationsController.findAll);
router.get('/actives', evaluationsController.findActiveEvaluations);
router.post('/', evaluationsController.create);
router.get('/:id', evaluationsController.findOne);
router.put('/:id', evaluationsController.update);
router.delete('/:id', evaluationsController.delete);

export default router;
