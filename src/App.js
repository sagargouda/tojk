import './App.css'
import {useState} from "react";

function App(){
    const [inputvalue ,setinputValue] =  useState('')
    const [todo ,setTodo] = useState([])

//     add todo
    function handleAdd(){
        setTodo([...todo , inputvalue])
    }

    function handleDelete(requiredIndex){
        const filtered =   todo.filter((todo , index)=>{
            return index !== requiredIndex
        })
        setTodo(filtered)
    }

    return (
        <div>
            <h1>To do list</h1>
            <input type="text" placeholder="add todop here" value={inputvalue} onChange={(e)=>{
                setinputValue(e.target.value)
            }} />
            <button onClick={handleAdd}>Add todo</button>

            {/* show the values */}
            <ul>
                {
                    todo.map((todo , index)=>{
                        return(
                            <div key={index}>
                                <li>{todo}</li>
                                <button onClick={()=>handleDelete(index)}> Delete</button>
                            </div>
                        )
                    })


                }
            </ul>

        </div>
    )
}
export default App