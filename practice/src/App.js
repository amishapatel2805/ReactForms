// import Demo from './demo1';

// function App() {
//   let name='Amisha'
//   return (
   
//   <div>
//     <Demo name={name} course='Python'/>
//     </div>
//   );
// }

// export default App;


import Register from './Regestration';
import Login from './Login';
import Hooks1 from './Hooks';
import Task1 from './Task';
import { useState } from 'react';


function App(){
  const[isRegister,SetisRegister]=useState(true)
  const isLogin=()=>{
    SetisRegister(false)
  }
  return(
    <>
    <div>
      {/* <Register/> */}
      {isRegister? <Register isLogin={isLogin}/>:<Login/>}
      {/* </Register> */}
    </div>

    <div>
      {/* <Loginform/> */}
    </div>

    <div>
      {/* <Hooks1/> */}
    </div>

    <div>
      {/* <Task1/> */}
    </div>
    </>
  );
}

export default App;
