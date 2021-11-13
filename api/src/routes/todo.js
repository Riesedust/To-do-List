const { Router } = require('express');
const router = Router();
const {addTodo, removeTodo, getTodo, editTodo}= require('../controllers/crudController')


router.post("/add", addTodo)
router.get("/", getTodo)
router.delete("/:idTodo", removeTodo)
router.put("/:idTodo", editTodo)

module.exports= router