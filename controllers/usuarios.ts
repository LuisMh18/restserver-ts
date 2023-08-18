import { Request, Response } from "express";
import Usuario from "../models/usuario";
import { FindOptions } from "sequelize";


export const findAll = async(req: Request, res: Response) => {

    const { limite = 10, desde = 0 } = req.query;
    const query = { where: { estado: true } };
    try {

        const options: FindOptions = { 
            offset: Number(desde), 
            limit: Number( limite ), 
            order: [
              ['id', 'DESC'],
            ],
            where: query.where
        };

        const [total, usuarios] = await Promise.all([
            Usuario.count(query),
            Usuario.findAll(options)
        ]);

        const data = {
            total,
            usuarios
        }

        res.status(200).json(data);

    } catch(e){
        console.log(e);
        res.status(500).json({
            msg:'Error interno del servidor'
        });
    }

}

export const findOne = async(req: Request, res: Response) => {

    const { id } = req.params;

    try {

        const usuario = await Usuario.findByPk(id);

        res.status(200).json({
            usuario
        });

    } catch(e){
        console.log(e);
        res.status(500).json({
            msg:'Error interno del servidor'
        });
    }

}

export const create = async(req: Request, res: Response) => {

    const { estado, ...data } = req.body;

    try {

        const usuario = await Usuario.create(data);

        res.status(200).json({
            usuario
        });

    } catch(e){
        console.log(e);
        res.status(500).json({
            msg:'Error interno del servidor'
        });
    }

}

export const update = async(req: Request, res: Response) => {
    const { id } = req.params;
    const { estado, createdAt, ...data } = req.body;
    const query = { where: { id: id } };

    try {

        await Usuario.update(data, query);
        const usuario = await Usuario.findByPk(id);

        res.status(200).json({
            usuario
        });

    } catch(e){
        console.log(e);
        res.status(500).json({
            msg:'Error interno del servidor'
        });
    }

}


export const deleteOne = async(req: Request, res: Response) => {

    const { id } = req.params;
    const data = { estado: false };
    const query = { where: { id: id } };
    try {

        // ! Eliminación fisica
        //await Usuario.destroy(query);

        // ! Eliminación logica
        await Usuario.update(data, query);
        const usuario = await Usuario.findByPk(id);
        
        res.status(200).json({
            usuario
        });

    } catch(e){
        console.log(e);
        res.status(500).json({
            msg:'Error interno del servidor'
        });
    }

}