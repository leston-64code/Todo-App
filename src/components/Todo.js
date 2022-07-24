import React, { useEffect, useRef, useState } from "react";
import "./todo.css";

// getting data form localstorage
const getLocaldata=()=>{
  let localdata=localStorage.getItem("TodoLogs")
  if(localdata){
    return JSON.parse(localdata)
  }else{
    return []
  }
}

function Todo() {
  const [inputData,setInputData]=useState("")
  const [items,setItems]=useState(getLocaldata())
  const [count ,setCount]=useState(0)
  const [abc,setAbc]=useState(0)
  let inputRef=useRef(null)

  function addItems(){
    if(!inputData){
      alert("Please add a note")
    }
    else{
      let obj={
        id:Math.random(),
        name:inputData
      }
      setItems([...items,obj])
    }
    setInputData("")
  }

  function deleteItem(eleid){
    const updatedItems=items.filter((value,b)=>{
      return value.id !== eleid
    })
    setItems(updatedItems)
    console.log(updatedItems)
  }

  function removeAll(){
    setItems([])
  }

  function editItem(index){
    console.log(index)
    setCount(1)
      let editor=items.filter((values,b)=>{
        return index===values.id
      })
      console.log(count)
     console.log(editor)
      setInputData(editor[0].name)
     setAbc(editor[0].id)
     inputRef.current.focus()
      
  } 
  function updaterfunc(){
    console.log(abc)
    items.forEach((q,w)=>{
      if(q.id===abc){
        items[w].name=inputData
        
      }
    })
    console.log(inputData)
    setCount(0)
    setInputData("")
  }
 
useEffect(()=>{
  localStorage.setItem("TodoLogs",JSON.stringify(items))
})

  // console.log(items)
  return (
    <div className="one">
      <div className="firstimg">
        <img
          src="https://cdn.pixabay.com/photo/2016/12/21/05/44/reminder-1922255_960_720.png"
          alt="Sorry error"
          className="oneimg"
        />
      </div>
      <div className="para">
        <p>Add your notes here ✌👇</p>
      </div>
      <div className="addItems">
        <div className="additemer">
          <div className="additemsone"><input type="text" placeholder="Enter your note✍✍" value={inputData} onChange={(e)=>{
            setInputData(e.target.value)
          }} ref={inputRef} /></div>
          <div className="additemstwo"><div className="leston">
            <i class="fa-solid fa-circle-plus fa-3x" onClick={()=>{
              count===0?addItems():updaterfunc()
            }}></i>
          </div></div>
        </div>
      </div>


{
  items.map((a,b)=>{
    return (
      <div className="showitemsone" key={b}>
      <div className="paraitemone">
      <p>{a.name} </p>
      <div className="logos">
      <div className="loger">
      <div className="onner"><i class="fa-solid fa-pen-to-square fa-2x  btnone" onClick={()=>{
        editItem(a.id)
      }}></i></div>
      <div className="twoer"> <i class="fa-solid fa-trash-can fa-2x btntwo" onClick={()=>{
        deleteItem(a.id)
      }}></i></div>
      </div>
      </div>
    </div>
   
    </div>
    )
  })
}


      <div className="showitems">
        <button className="showbutton" onClick={()=>{
          removeAll()
        }}>Clear all notes</button>
      </div>
    </div>
  );
}

export default Todo;
