import React from 'react'

function Task1() {
    const[value,Setvalue]=React.useState(0)

    const buttonclick=(type)=>{
        console.log('Clicked',type)

        if(type==='initial'){
            Setvalue(value+1)
        }
        else if(type==='end'){
            Setvalue(value-1)
    }
}
  return (
    <div>
        <button type="button" class="btn btn-outline-dark" onClick={()=>buttonclick("initial")}>Inrement</button>
        <h3>{value}</h3>
        <button type="button" class="btn btn-outline-dark" onClick={()=>buttonclick("end")}>Decrement</button>
    </div>
  )
}

export default Task1