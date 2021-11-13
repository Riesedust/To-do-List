const { Router } = require('express');
const router = Router();
const todo = require("./todo")
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/todo", todo)

module.exports = router;
