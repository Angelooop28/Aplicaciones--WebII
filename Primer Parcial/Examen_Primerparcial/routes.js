const express = require("express");

const router = express.Router();
const userSchema = require("./schema")
router.post("/gasto", (req,res) =>  {
    const gasto = userSchema(req.body);
    gasto.save().then((data) => res.json(data)).catch((error)=>res.json({message: error}));
})


router.delete("/gasto/:idcliente", (req, res) => {
    const {idcliente} = req.params;
    userSchema
    .remove({_idcliente: idcliente})
    .then((data)=> res.json(data))
    .catch((error)=> res.json({message:error}))
})

module.exports = router;
