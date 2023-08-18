import { validationResult } from 'express-validator';
import { NextFunction, Request, Response } from 'express';

export const validarCampos = (req: Request, res: Response, next: NextFunction) => {

    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json(errors);
    }

    //si el middleware pasa entonces sigue con el siguiente middleware(si ya no hay middleware entonces sigue con el controlador)
    next();

}
