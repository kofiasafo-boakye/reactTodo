const Todo = ({text, todo, todos, setTodos}) => {

    const deleteHandler = () => {
        // console.log(todo);
        
        // Filter method definition for below filter statement: return a new array where the id of any element
        //in the old array is not equal to the id selected
        setTodos(todos.filter((element)=>element.id !== todo.id))
    }

    const completeHandler = () => {
        //my hypothesis is that {} are used when coming to write some javascript logic
        //and uses () to render a component
        //In the case below for eg. we are writing javascript logic
        setTodos(todos.map((item) => {
            if(item.id === todo.id){
                return {
                    ...item, completed: !item.completed
                }
            }
            return item;
        }))
    }


    return ( 
        <div className="todo">
            <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</li>
            <button onClick={completeHandler} className="cross-out">&#x2714;</button>
            <button onClick={deleteHandler} className="delete">&#x2718;</button>
        </div>
     );
}
 
export default Todo;