import React from "react";
import Demo2 from './demo2';

function Demo(props){
    let{name,course}=props;
    console.log(props)
    return(
        <>
        <div>
            This is Practice Page of {name} and course is {course}
        </div>
        <Demo2 name={name}/>
        </>
    )
}
export default Demo


