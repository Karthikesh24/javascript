import React, from 'react'

function App(){
  const [tasks,setTask]=useState([])
  const [tasks,setText]=useState("")

  const AddTask=()=>{
    setTask([...tasks,{name:text,completed : false}])
    setText("")
  }
  const deleteTask=(index)=>{
    setTask(tasks.filter((_,i)=>i !== index))
  }
  return(
    <div>
      <h2>ToDoList</h2>
      <input
      value={text}
      placeholder='Enter Task'
      onChange={(e)=>setText(e.target.value)}
      />
      <button onClick={AddTask}>Add</button>
      <ul>
        {tasks.map((Display,index)=>(
          <li key={index}>
            <input
            type="checkbox"
            />
            <span>{Display.name}</span>
            <button onClick={()=>deleteTask(index)}>delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}