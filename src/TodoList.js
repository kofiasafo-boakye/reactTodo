import Todo from "./Todo";

const TodoList = ({todos, setTodos}) => {
    return ( 
        // {if(toodos.length);}
        <div className="todo-container">
            {/* try just making it a div just like net ninja and lets see if itll work
            or even try this method still and lets see if itll work */}
            <ul className="todo-list">
                {todos.map((todo) =>(
                    //my hypothesis is that {} are used when coming to write some javascript logic
                    //and uses () to render a component
                    //In the case below for eg. we are rendering a component
                    <Todo todo = {todo} text = {todo.text} key = {todo.id} todos = {todos} setTodos ={setTodos}></Todo>
                ))}
            </ul>
        </div>
     );
}
 
export default TodoList;