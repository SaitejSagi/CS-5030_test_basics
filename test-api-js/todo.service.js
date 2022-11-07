class todoservice{
    todo_data = {
        "todo":[{
            "title": "T1",
            "description": "D1",
            "done": false
        },{
            "title": "T1",
            "description": "D1",
            "done": false
        },{
            "title": "T1",
            "description": "D1",
            "done": false
        }]
    }
    constructor(){
        this.todos=this.todo_data;
    }

    get_todos(){
        return this.todos;
    }

    add_todo(todo){

        todo={"title": "T2",
        "description": "D2",
        "done": false

        }

        this.todos.todo.push(todo)
        //console.log(this.todos)
        return this.todos
    }

    delete_todo(id){
        this.todos.todo.splice(3)
       return this.todos
    }

    update_todo(id, todo){

        todo={"title": "T5",
        "description": "D5",
        "done": false}

      //let index = this.todos.todo.findIndex(todo => todo.id == id)
      this.todos.todo[2]=todo
        console.log(this.todos)
        return this.todos

    }
}


module.exports= todoservice;