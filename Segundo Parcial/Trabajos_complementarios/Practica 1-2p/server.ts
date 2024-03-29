// Creamos el server
import express,{Router, Express } from 'express'
 import cors from 'cors';

import { router as gasto } from './routes/Gasto'
import { dbConnection } from './database/config'

class Server
{
    app: Router;
    router: Router;
    port: Number;
    paths: { [key:string]:string };
    private _express: Express;

    constructor(){
        this.app = Router();
        this.router = Router();
        this.port= Number( process.env["PORT"])
        this.paths= {
            gasto:'/api/gasto',
            
        }


        this.conectarDb();
        this.middlewares();
        this.routes();
        this.router.use('/v1/sextoa', this.app);
        this._express=  express().use(this.router);
    }
    private async conectarDb(){
        await dbConnection();
    }
    private middlewares(){
        this.app.use(cors());
        this.app.use(express.json())
    }
    private routes(){
        this.app.use(this.paths.gasto , gasto )
    }
    listen(){
        this._express.listen(this.port, ()=>{
            console.log(`Servidor ejecutando 
            en http://localhost:${this.port}/v1/sextoa/api/gasto`);
        })
    }

}

export {Server}