import React, { useState } from 'react'

function Hooks1() {
    const[color,Setcolor]=React.useState()
    const[Text,SetText]=useState()

    const handleButtonClick=(type)=>{
        console.log("Clicked",type)
        if(type==='Yellow'){
            Setcolor('yellow')
        }
        else if(type==='Blue'){
            Setcolor('blue')
        }
        else if(type==='White'){
            Setcolor('white')
        }

    }

    const handleTextChange=(e)=>{
        console.log(e.target.value)
        SetText(e.target.value)
    }

  return (
    <div>
        
        <button type="button" className="btn btn-warning" onClick={()=>handleButtonClick("Yellow")}>
            Yellow</button>

        <button type="button" className="btn btn-warning" onClick={()=>handleButtonClick("Blue")}>
            Blue</button>

        <button type="button" className="btn btn-warning" onClick={()=>handleButtonClick("White")}>
            White</button>

            <h3>The Color is: {color}</h3>
            <br></br>
            <h5>
            <div className='col-md-3'>
                <label for="exampleFormControlInput1" className="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"
                onChange={(e)=>handleTextChange(e)}></input>
            </div>
            </h5>
            <p> {Text} </p>
            
    </div>
  
  )
}

export default Hooks1