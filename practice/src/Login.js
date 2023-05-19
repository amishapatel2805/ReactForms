import React,{useState} from "react";
import './login1.css'


function Loginform(){
const handleClick=()=>{
  let email=localStorage.getItem('E-mail')
  let username = localStorage.getItem('Username')
  let password=localStorage.getItem('Password')

  if(email===Email && password===Pass){
    alert('login successful')
  }
  else{
    alert('login Failed')
  }
}

    const[Email,SetEmail]=useState()
    const handleEmailChange=(e)=>{
      console.log(e.target.value)
      SetEmail(e.target.value)
}

    const[Pass,SetPass]=useState()
    const handlePassChange=(e)=>{
      console.log(e.target.value)
      SetPass(e.target.value)
}

    return(
        <>
        <div className="login">
        <div className="container">
            <div className="row content d-flex justify-content-center align-items-center">
              <div className="col-md-5">
                <div className="box shadow bg-white p-4">
                  <h3 className="mb-4 text-center fs-1">Log In</h3>
                  <form className="mb-3">

                    <div className="form-floating mb-3">
                      <input type="email" className="form-control rounded-0" id="email" placeholder="name@gmail.com"  onChange={(e)=>handleEmailChange(e)}></input>
                      <label for="email" className="form-floating">E-mail</label>
                    </div>

                    <div className="form-floating mb-3">
                      <input type="password" className="form-control rounded-0" id="password" placeholder="xyyz789" onChange={(e)=>handlePassChange(e)}></input>
                      <label for="password" className="form-floating" >Password</label>
                    </div>

                    <div className="form-check mb-3">
                      <input className="form-check-input" type="checkbox" id="remember" style={{background:"checked ", borderColor: "#673AB7"}}>
                      </input>
                      <label className="form-check-label" for="remember">Remember me</label> 
                    </div>

                    <div className="d-grid gap-2 mb-3">
                      <button type="button" className="btn btn-dark btn-lg border-0 rounded-0" onClick={()=>{handleClick()}}>Log in</button>
                    </div>

                    <div className="forgot-password-link mb-3 text-right" style={{textAlign: "right"}}>
                      <a href="#" title="Forgot Password" className="text-decoration-none">Forgot Password?</a>
                    </div>

                      <div className="text-center">
                      <p>Not a member? <a href="Regestration(bootstrap).html">Register</a></p>
                      <p>or sign up with:</p>

                      <button type="button" className="btn btn-link btn-floating mx-1">
                        <i class=" bi bi-facebook " style={{color:'blue'}}></i>
                      </button>

                      <button type="button" className="btn btn-link btn-floating mx-1">
                        <i class="bi bi-google" style={{color:'blue'}}></i>
                      </button>

                      <button type="button" className="btn btn-link btn-floating mx-1">
                        <i class="bi bi-twitter" style={{color:'blue'}}></i>
                      </button>
      
                      <button type="button" className="btn btn-link btn-floating mx-1">
                        <i class="bi bi-github" style={{color:'blue'}}></i></button> 
                        </div>
                  </form>
                  </div>
                </div>
              </div>
      
            </div>
            <div className="col-md-6"></div>
            </div>
            
  </>
    )
}
export default Loginform