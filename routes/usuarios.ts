import { Router } from 'express';
import { create, deleteOne, findAll, findOne, update } from '../controllers/usuarios';

const router = Router();
 
router.get('/', findAll);
router.get('/:id', findOne);
router.post('/', create);
router.put('/:id', update);
router.delete('/:id', deleteOne);

export default router;