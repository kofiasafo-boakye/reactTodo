import nextId from "react-id-generator";

const Home = ({inputText, setInputText, todos, setTodos}) => {

    const todoId = nextId();
    // const [task, setTask] = useState('');
    const inputTextHandler = (e) =>{
        
        console.log(e.target.value);
        setInputText(e.target.value);
    }

    const submitTodoHandler = (e) => {
        e.preventDefault();
        if(inputText !== ""){
            
            setTodos([
                ...todos, {text: inputText, completed: false, id: todoId}
            ]);
            setInputText("");
            // console.log(todos)
        }
        

    }

    return ( 
        
        <div className="container">
        
            <form action="">
                <input onChange = {inputTextHandler} type="text" placeholder="Enter task..." value={inputText}/>
                <button onClick = {submitTodoHandler}>Add</button>

            </form>
        </div>
        
     );
}
 
export default Home;