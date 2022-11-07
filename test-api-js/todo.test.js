

var todoservice = require('./todo.service.js');
describe('todo test suite', () => {

    test("truth_value", () => {
        expect(true).toBe(true);
    });
    
    let todo_service = new todoservice();

    test("if service instance is created", () => {
        expect(todo_service instanceof todoservice).toBe(true);
    });

    
    // Initial length of the todo list is 3 // 3 default tasks
    test("get_todos", () => {
        expect(todo_service.get_todos().todo.length).toEqual(3);
    });

    

    // Write all your test cases here that corresponds to software requirements


    test("add_todos", () => {
        expect(todo_service.add_todo().todo.length).toEqual(4);
    });

  //deleting an element added in add_todos a deleted element is undefined
    test("delete_todo(todo) ", () =>{
        expect(todo_service.delete_todo().todo[3]).toEqual(undefined)
    })

    //updating an element and testing
    test("update_todo(todo)", () =>{

        expect(todo_service.update_todo().todo[2]).toEqual(
            {"description": "D5", "done": false, "title": "T5"})
    })



});