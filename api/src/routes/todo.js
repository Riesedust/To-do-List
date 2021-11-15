const { Router } = require('express');
const router = Router();
const {addTodo, removeTodo, getTodo, editTodo, getTodoById}= require('../controllers/crudController')


router.post("/add", addTodo)
router.get("/", getTodo)
router.get("/:idTodo", getTodoById)
router.delete("/:idTodo", removeTodo)
router.put("/:idTodo", editTodo)

module.exports= router