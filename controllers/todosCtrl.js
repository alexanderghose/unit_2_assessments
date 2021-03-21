
let todosModel = require('../models/todosModel.js')
let todoArray = todosModel.todos

function submitted(req,res) {
    // on the terminal
    console.log(req.body)
    console.log(todoArray) // empty array

    // push "eat breakfast" into []
    todoArray.push(req.body.todoInput)

    // ["eat breakfast", ]
    console.log(todoArray) // array aftr push
    
    // on the browser
    //res.send('thanks for submitting')
    res.redirect('/') // <-- go to homepage
}

module.exports = {
    submitted:submitted,
}