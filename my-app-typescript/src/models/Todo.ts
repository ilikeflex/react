class Todo {

    id:string;
    text:string;

    constructor(todotext: string){
        this.text = todotext;
        this.id = Math.random().toString();
    }
    
}

export default Todo;