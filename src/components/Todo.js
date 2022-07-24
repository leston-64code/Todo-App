import React from "react";
import "./todo.css";

function Todo() {
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
          <input type="text" placeholder="Enter your note✍✍" />
        </div>
        <div className="additemstwo">
          <div className="leston">
            <i class="fa-solid fa-circle-plus fa-2x"></i>
          </div>
        </div>
      </div>

<div className="showitemsone">
  <div className="paraitemone">
    <p>Apple </p>
    <div className="logos">
    <i class="fa-solid fa-pen-to-square fa-2x  btnone"></i>
    <i class="fa-solid fa-trash-can fa-2x btntwo" ></i>
    </div>
  </div>
 
  
</div>

      <div className="showitems">
        <button className="showbutton">Checklist</button>
      </div>
    </div>
  );
}

export default Todo;
