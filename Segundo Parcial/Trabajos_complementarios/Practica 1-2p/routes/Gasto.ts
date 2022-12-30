import {Router} from 'express'
import{check}from 'express-validator'
import{Gasto} from '../controllers'
import funciones from '../middlewares'


const {validarCampo}=funciones

const {Obtener_gasto, Crear_gasto }=Crear_gasto

const router=Router()

//Establacemos las rutas para cada funcion que se realizo en la carpeta de controllers
router.get('/',Obtener_gasto)
router.get('/:id', check('id','Debe ser un id de mongo').isMongoId(),validarCampo,Obtener_gasto)
router.post('/',check('idcliente','El id del cliente es obligatorio').not().isEmpty(),validarCampo,Crear_Gasto)



//Exportamos la variable router
export {router}
