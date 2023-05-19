import React,{useState} from "react";
import './regestration.css'


function Register(props){
  console.log(props)
  const handleLogin=()=>{props.isLogin()}
  

  const handleSignin=()=>{
    localStorage.setItem('E-mail',Email)
    localStorage.setItem('Username',Uname)
    localStorage.setItem('Password',Pass)
  }

  const[FName,SetFname]=useState()
  const handleFnameChange=(e)=>{
    console.log(e.target.value)
    SetFname(e.target.value)}

    const[LName,SetLname]=useState()
    const handleLnameChange=(e)=>{
      console.log(e.target.value)
      SetLname(e.target.value)
}

    const[Email,SetEmail]=useState()
    const handleEmailChange=(e)=>{
      console.log(e.target.value)
      SetEmail(e.target.value)
}

    const[Uname,SetUname]=useState()
    const handleUnameChange=(e)=>{
      console.log(e.target.value)
      SetUname(e.target.value)
}

    const[Pass,SetPass]=useState()
    const handlePassChange=(e)=>{
      console.log(e.target.value)
      SetPass(e.target.value)
}

    const[CheckPass,SetCheckPass]=useState()
    const handleCheckPassChange=(e)=>{
      console.log(e.target.value)
      SetCheckPass(e.target.value)
}

    const[Num,SetNum]=useState()
    const handleNumChange=(e)=>{
      console.log(e.target.value)
      SetNum(e.target.value)
}

// console.log("demo2",props)
    return(
        <>
        {/* <div>
            This is demo2 of {props.name}
        </div> */}

      <div className="container1"> 
        <div className="row">
          <div className="col-md-3"></div>
            <div className="col-md-6" style={{paddingLeft:'60px' }}>
              <div style={{backgroundColor:'whitesmoke',borderRadius:'30px',border:'2px solid brown'}} className="px-5 py-3">
              
              <form className="row g-3" style={{textAlign:'center'}}>
                  <h3>Create New Account</h3 >

                    <div className="col-md-6">
                      <label for="fn" className="form-label">First Name</label>
                      <input type="text" className="form-control" id="fn" placeholder="Enter your firstname" onChange={(e)=>handleFnameChange(e)}></input>
                    </div>

                    <div className="col-md-6">
                      <label for="ln" className="form-label">Last Name</label>
                      <input type="text" className="form-control" id="ln" placeholder="Enter your last name" onChange={(e)=>handleLnameChange(e)}></input>
                    </div>
                    
                    <div className="col-md-6">
                      <label for="Email" className="form-label">Email</label>
                      <input type="email" className="form-control" id="Email" placeholder="xyz@g-mail.com" onChange={(e)=>handleEmailChange(e)}></input>
                    </div>

                    <div className="col-md-6">
                      <label for="un" className="form-label">Username</label>
                      <input type="text" className="form-control" id="un" placeholder="xyz_553" 
                      onChange={(e)=>handleUnameChange(e)}></input>
                    </div>

                    <div className="col-6">
                      <label for="password" className="form-label">Password</label>
                      <input type="password" className="form-control" id="password" placeholder="skty@557" onChange={(e)=>handlePassChange(e)}></input>
                    </div>

                    <div className="col-6">
                      <label for="checkpassword" className="form-label">Confirm Password</label>
                      <input type="password" className="form-control" id="checkpassword" placeholder="skty@557" onChange={(e)=>handleCheckPassChange(e)}></input>
                    </div>

                    <div className="col-md-6">
                      <label for="contactnum" className="form-label">Contact Number</label>
                      <input type="tel" className="form-control" id="contactnum" placeholder="777-9090913" onChange={(e)=>handleNumChange(e)}></input>
                    </div>

                    <div className="col-md-6">
                      <label for="qualification" className="form-label">Qualification</label>
                      <select id="qualification" className="form-select">
                        <option selected>Choose</option>
                        <option value="10th">10th Pass</option>
                        <option value="12th">12th Pass</option>
                        <option value="graduate">Graduate</option>
                        <option value="post graduate">Post Graduate</option>
                        <option value="phd">Phd</option>
                      </select>
                    </div>

                    <div className="col-md-5">
                      <label for="inputCity" className="form-label">City</label>
                      <select id="inputCity" className="form-select">
                        <option selected>Choose</option>
                        <option value="ahmedabad">Ahmedabad</option>
                        <option value="surat">Surat</option>
                        <option value="vadodra">Vadodra</option>
                        <option value="rajkot">Rajkot</option>
                        <option value="pune">Pune</option>
                        <option value="nagpur">Nagpur</option>
                        <option value="Thane">Thane</option>
                        <option value="nashik">Nashik</option>
                        <option value="kolhapur">Kolhapur</option>
                        <option value="bhopal">Bhopal</option>
                        <option value="gawalior">Gawalior</option>
                        <option value="ujjain">Ujjain</option>
                        <option value="indore">Indore</option>
                        <option value="varanasi">Varanasi</option>
                        <option value="lakhnow">Lakhnow</option>
                        <option value="agra">Agra</option>
                        <option value="vrindavan">Vrindavan</option>
                      </select>
                    </div>

                    <div className="col-md-4">
                      <label for="inputState" className="form-label">State</label>
                      <select id="inputState" className="form-select">
                        <option selected>Choose</option>
                        <option value="maharastra">Maharastra</option>
                        <option value="gujarat">Gujarat</option>
                        <option value="madhyapardesh">Madhyapardesh</option>
                        <option value="uttrpardesh">Uttrpardesh</option>
                      </select>
                    </div>

                    <div className="col-md-3">
                      <label for="inputZip" className="form-label">Zip</label>
                      <input type="text" className="form-control" id="inputZip" placeholder="380027"></input>
                    </div>

                    <div className="col-12">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="gridCheck"></input>
                        <label className="form-check-label" for="gridCheck">
                          <h5>I agree to Terms of Service & Privacy Policy</h5>
                        </label>
                      </div>
                    </div>

                    <div className="d-grid gap-2 col-6 mx-auto" style={{textAlign:'left', marginBottom: '15px'}}>
                      <button type="submit" className="btn btn-primary" style={{backgroundColor:'brown', borderColor:'brown'}} onClick={()=>{handleSignin()}}>Sign in</button>
                    </div>

                    <div className="d-grid gap-2 col-6 mx-auto" style={{textAlign:'right', marginBottom: '15px'}}>
                      <button type="submit" className="btn btn-primary" style={{backgroundColor:'brown',borderColor:'brown'}} onClick={()=>{handleLogin()}}>Login</button>
                    </div>
                    
                    </form>
                    </div>
        </div>
        <div className="col-md-3">
            </div>

        </div>
        </div>
    </>
        
        
    )
      }

export default Register