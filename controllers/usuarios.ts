import { Request, Response } from "express";


export const findAll = async(req: Request, res: Response) => {

    res.status(200).json({
        msg: 'findAll'
    });

}

export const findOne = async(req: Request, res: Response) => {

    const { id } = req.params;

    res.status(200).json({
        msg: 'findOne',
        id
    });

}

export const create = async(req: Request, res: Response) => {

    const { body } = req;

    res.status(200).json({
        msg: 'create',
        body
    });

}

export const update = async(req: Request, res: Response) => {
    const { id } = req.params;
    const { body } = req;

    res.status(200).json({
        msg: 'update',
        body,
        id
    });

}


export const deleteOne = async(req: Request, res: Response) => {

    const { id } = req.params;

    res.status(200).json({
        msg: 'delete',
        id
    });

}