"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const controllers_1 = require("../controllers");
const { Crear_Gasto, Obtener_Gasto} = require("../controllers/Gasto");
const middlewares_1 = __importDefault(require("../middlewares"));
const { validarCampo } = middlewares_1.default;
const { Obtener_gasto, Obtener_Gasto, Crear_Gasto } = controllers_1.Gasto;
const router = (0, express_1.Router)();
exports.router = router;


router.get('/', Obtener_administradores);
router.get('/:id', (0, express_validator_1.check)('id', 'Debe ser un id de mongo').isMongoId(), validarCampo, Obtener_gasto);
router.post('/', (0, express_validator_1.check)('idcliente', 'El id del cliente es obligatorio').not().isEmpty(), validarCampo, Crear_Gasto);
