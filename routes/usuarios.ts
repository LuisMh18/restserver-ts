import { Router } from 'express';
import { check } from 'express-validator';
import { create, deleteOne, findAll, findOne, update } from '../controllers/usuarios';
import { esEmailValido, existeUsuarioPorId } from '../helpers/db-validators';
import { validarCampos } from '../middlewares';

const router = Router();
 
router.get('/', findAll);
router.get('/:id', [
    check('id').custom( existeUsuarioPorId ),
    validarCampos
], findOne);
router.post('/',[
    check('nombre', 'El nombre es obligatorio').trim().not().isEmpty(),
    check('email', 'El email no es válido').isEmail(),
    check('email').custom( esEmailValido ),
    //check('rol', 'No es un rol válido').isIn(['ADMIN_ROLE', 'USER_ROLE']),
    validarCampos
], create);
router.put('/:id', [
    check('id').custom( existeUsuarioPorId ),
    validarCampos
], update);
router.delete('/:id',[
    check('id').custom( existeUsuarioPorId ),
    validarCampos
], deleteOne);

export default router;