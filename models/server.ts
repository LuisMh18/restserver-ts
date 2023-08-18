import express, { Application } from 'express';
import cors from 'cors';

import userRoutes from '../routes/usuarios';

class Server {
    private app: Application;
    private port: String;
    private apiPaths = {
        usuarios: '/api/usuarios',
    }
    constructor(){
        this.app = express(); 
        this.port = process.env.PORT || '8000';

        //Middlewares
        this.middlewares();

        //rutas de mi aplicación
        this.routes();
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