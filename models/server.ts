import express, { Application } from 'express';
import cors from 'cors';

import userRoutes from '../routes/usuarios';
import db from '../database/connection';

class Server {
    private app: Application;
    private port: String;
    private apiPaths = {
        usuarios: '/api/usuarios',
    }
    constructor(){
        this.app = express(); 
        this.port = process.env.PORT || '8000';

        //Conectar a base de datos
        this.dbConnection();

        //Middlewares
        this.middlewares();

        //rutas de mi aplicación
        this.routes();
    }

    async dbConnection(){
        try {
            await db.authenticate();
            console.log('Database online');
        } catch(error) {
            // ! utilizamos la verificación instanceof para asegurarnos de que el error sea una instancia de la clase Error. Si es así, simplemente relanzamos el mismo error. Si el error no es una instancia de Error, lanzamos un nuevo error con un mensaje genérico.
            if (error instanceof Error) {
                throw error; 
            } else {
                //! Si el error no es una instancia de Error, lanzamos un nuevo error
                throw new Error('Error desconocido al conectar a la base de datos'); 
            }
        }
    }

    middlewares(){
        //CORS
        this.app.use( cors() );

        // Lectura y parseo del body
        this.app.use( express.json() );

        //Directorio Público
        this.app.use( express.static('public') );
    }

    routes(){
        this.app.use(this.apiPaths.usuarios, userRoutes);
    }

    listen(){
        this.app.listen( this.port, () => {
            console.log(`Servidor corriendo en puerto ${this.port}`);    
        });
    }

}

export default Server;