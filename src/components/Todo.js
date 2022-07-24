import React, { useState } from "react";
import "./todo.css";

function Todo() {
  const [inputData,setInputData]=useState("")
  const [items,setItems]=useState([])

  function addItems(){
    if(!inputData){
      alert("Please add a note")
    }
    else{
      setItems([...items,inputData])
    }
    setInputData("")
  }
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
        <p>Add your list here ✌👇</p>
      </div>
      <div className="addItems">
        <div className="additemsone">
          <input type="text" placeholder="Enter your note✍✍" value={inputData} onChange={(e)=>{
            setInputData(e.target.value)
          }} />
        </div>
        <div className="additemstwo">
          <div className="leston">
            <i class="fa-solid fa-circle-plus fa-2x" onClick={()=>{
              addItems()
            }}></i>
          </div>
        </div>
      </div>


{
  items.map((a,b)=>{
    return (
      <div className="showitemsone">
      <div className="paraitemone">
      <p>{a} </p>
      <div className="logos">
      <i class="fa-solid fa-pen-to-square fa-2x  btnone"></i>
      <i class="fa-solid fa-trash-can fa-2x btntwo" ></i>
      </div>
    </div>
   
    </div>
    )
  })
}


      <div className="showitems">
        <button className="showbutton">Checklist</button>
      </div>
    </div>
  );
}

export default Todo;
