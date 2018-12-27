import React,{useState,useEffect} from 'react';
import './App.css'
import { format } from 'path';

const Todo= ({todo,index,completeTodo,removeTodo})=>{
    const completeStyle = {
        textDecoration:'line-through',
        color:'rgba(22,22,22,0.3)'
    }

    const dltShow = {
        opacity:1,
        visibility:'visible',
        transform:'translateX(-20px)'
    }

    const [show,setShow]=useState(false)

    const showDlt = ()=>{
        setShow(!show)
    }

    return (
        <div className="todo"
             style={todo.isCompleted?completeStyle:{}}
             onClick={()=>showDlt()}>
            <p>
                {todo.text}
            </p>
             

            <div>
                <button onClick={(e)=>completeTodo(index,e)} className="complete"
                        style={{background:todo.isCompleted?"#39cf5a":"#ff5722",
                                transform:show?"translateX(-50px)":null}}
                >
                    {todo.btnText}
                </button>

                <button onClick={()=>removeTodo(index)} className="dlt"
                        style={show?dltShow:{}} title="删除">
                        <i className="iconfont icon-shanchu"></i>
                </button>
            </div>
        </div>
    )
}

function TodoForm({addTodo}){
    const[value,setValue] = useState("");

    const handleSubmit= e =>{
        e.preventDefault();
        if(!value) return;
        addTodo(value);
        setValue("");
    };

    return(
        <form onSubmit ={handleSubmit}>
            <input 
                type="text"
                className="input"
                value={value}
                onChange={e=>setValue(e.target.value)}
            />
        </form>
    )
}

function App(){
    const [todos,setTodos] = useState([
        {
            text:"learn about React",
            isCompleted:false ,
            btnText:'待完成'
        },
        {
            text:"Meet friend for lunch",
            isCompleted:false ,
            btnText:'待完成'
        },
        {   
            text:"Build really cool todo app",
            isCompleted:false ,
            btnText:'待完成'
    }
    ]);

    //通过参数把数据传来传去
    const addTodo = text=>{
        
        const newTodos = [{text,isCompleted:false,btnText:'待完成'},...todos];
        setTodos(newTodos);
    }

    const completeTodo = (index,e)=>{
        // e.nativeEvent.stopImmediatePropagation();
        e.stopPropagation();
        const newTodos = [...todos];
        newTodos[index].isCompleted= !todos[index].isCompleted;
        newTodos[index].btnText==="待完成"?newTodos[index].btnText='已完成' :newTodos[index].btnText='待完成' 
        setTodos(newTodos);
    }

    const removeTodo = index=>{
        const newTodos = [...todos];
        newTodos.splice(index,1);
        setTodos(newTodos);
    }

    return(
        <div className="App">
            <div className="todo-list">
            <TodoForm addTodo={addTodo} />
                {todos.map((todo,index)=>(
                    <Todo
                        key={index}
                        index={index}
                        todo={todo} 
                        completeTodo={completeTodo}
                        removeTodo = {removeTodo}
                    />
                ))}
            </div>
        </div>
    )
}






export default App;