import React, { useEffect } from 'react' 
import Modal from 'react-modal'
import {useState} from 'react'
import './App.css'; 
import Task from './components/Task/Task';


function App() { 
  const [visible,setVisible]=useState(false) 
  const[taskName,setTaskName]=useState('')
  const[decription,setDescripition]=useState('') 
  const [taskList,setTaskList]=useState([]) 

  useEffect(()=>{
    let arr=localStorage.getItem('taskList')
    let obj=JSON.parse(arr)
    if(obj){
      setTaskList(obj)
    }
  },[])

  const handleChange=(e)=>{
    
    const {name,value}=e.target 

    if(name==="taskName"){
      setTaskName(value)
    }else{
      setDescripition(value)
    }
  }  

  const saveTask=()=>{
    let taskObj={} 
    taskObj['Name']=taskName 
    taskObj['Descripition']=decription 
    let tempList=taskList
    tempList.push(taskObj)
    localStorage.setItem("taskList",JSON.stringify(tempList))
    setTaskList(tempList)
    setVisible(false)
    setTaskName('')
    setDescripition('')
  } 

  const deleteTask=(index)=>{
    let tempList=taskList
    tempList.splice(index,1)
    setTaskList(tempList)
    localStorage.setItem('taskList',JSON.stringify(tempList))
    setTaskList(tempList)
    window.location.reload()
  }

  return (
    <div className="App">
      <div className='logo' >
        <img className='image' alt='logo' src='https://images-platform.99static.com/0r9HnVszD8O1zOwmw9HtPjeW0Tk=/199x199:1799x1799/500x500/top/smart/99designs-contests-attachments/148/148211/attachment_148211701'/> 
        <h1 className='title' >Task App</h1>
      </div>
      <div className='taskdiv'>{taskList.map((eachTask,index)=><Task eachTask={eachTask} index={index} deleteTask={deleteTask} />)}</div>
      <button className='addtask' onClick={()=>setVisible(true)} >Add Task</button>

      
      <Modal className='model' isOpen={visible} onRequestClose={()=>setVisible(false)}>
        <form class="form">
          <p class="form-title">create task </p>
          <div class="input-container"> 
            <label>Name</label>
            <input name='taskName' value={taskName} onChange={handleChange} type='text' />
            <span>
            </span>
          </div>
          <label>Description</label>
          <textarea name='description' value={decription} onChange={handleChange} className='text-area'></textarea>
          <button onClick={saveTask}  class="submit">
            submit
        </button>
        <button class="submit" onClick={()=>setVisible(false)} >Cancle</button>
        </form>
      </Modal>
    </div>
  );
}

export default App;
