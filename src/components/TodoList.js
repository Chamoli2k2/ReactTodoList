import React, {useState} from 'react'
import TodoForm from './TodoForm.js'
import Todo from './Todo.js';


const TodoList = () => {
    const [todos, setTodos] = useState([]);

    const addTodo = (todo)=>{
        if(!todo.text || /^\s*$/.test(todos.text)){
            return;
        }

        const newTodos = [todo,...todos];
        setTodos(newTodos);
        console.log(...todos);
    }

    const removeTodo = (id)=>{
        const removeArr = [...todos].filter((todo)=>{
            return todo.id !== id
        })

        setTodos(removeArr);
    }

    const updateTodo = (todoId,newValue)=>{
        if(!newValue.text || /^\s*$/.test(newValue.text)){
            return;
        }

        setTodos((prev)=>{
            return prev.map((item)=>{
                return (item.id === todoId ? newValue : item)
            })
        })
    }

    const completeTodo = (id)=>{
        let updateTodos = todos.map((todo)=>{
            if(todo.id === id){
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        })
        setTodos(updateTodos); 
    }

    return (
        <div>
            <h1>What's plan for today ?</h1>
            <TodoForm onSubmit={addTodo}/>
            <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo}/>
        </div>
    )
}

export default TodoList