const {Todo}= require("../db")

async function addTodo(req, res, next){
    try {
        const {name} = req.body
        let todo={
            name,
        }
        
        let newTodo= await Todo.create(todo)
        res.send(newTodo)

    } catch (error) {
        next(error)
    }
}

async function getTodo(req, res, next){
    try {
        const allTodo= await Todo.findAll()
        res.json(allTodo)

    } catch (error) {
        next(error)
    }
}

async function getTodoById(req, res, next){
    try {
        const {idTodo}= req.params
        let todo= await Todo.findByPk(idTodo)

        res.json(todo)

    } catch (error) {
        next(error)
    }
}

async function editTodo(req, res, next){
    try {
        const {name}= req.body
        const {idTodo}= req.params
        let todo= await Todo.update({name: name},{
            where: {
                id: idTodo
            }
        })
        
        if(!todo){return "No existe"}

        res.json({msg: "Todo editada correctamente"})

    } catch (error) {
        next(error)
    }
}

async function removeTodo(req, res, next){
    try {
        const {idTodo} = req.params
        let todo= await Todo.destroy({where: {id: idTodo}})

        if(!todo){return "El todo no existe"}

        res.json({msg: "Todo eliminada correctamente"})
    } catch (error) {
        next(error)
    }
}

module.exports = {
    addTodo,
    getTodo,
    getTodoById,
    editTodo,
    removeTodo
}