import { useState,useEffect } from "react";
import Filter from './Filter'; 
import Axios from "axios";
import { Link} from "react-router-dom";
import Buyer from './Buyer.jpg';


export function BuyerLogin(props){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loggedin, setLogin] = useState(false);
    const [dash, setDash] = useState(null);
    const [mailData, setInfo] = useState({});

    useEffect(() => {
        Axios.post("https://house-hunter-backend.onrender.com/Mail/loginmail", mailData)
          .then((res) => {
            if (res.status === 200) {
              alert("email sent");
            } else {
              return Promise.reject();
            }
          })
          .catch((err) => alert(err));
    
      }, [mailData]); 

    const handleClick = (event) => {
        event.preventDefault(); // Prevent the form from submitting the traditional way

        const data = { email, password }; // Using shorthand property names

        Axios.post("https://house-hunter-backend.onrender.com/BuyerRoute/search", data)
            .then((res) => {
                if (res.status === 200) {
                    alert("Login Successful");
                    const {_id, name,email, property} = res.data;
                    const dash = {id: _id, name, property};
                    const mailinfo = { name: name, email: email };
                    setInfo(mailinfo);
                    props.set(dash);
                    setDash(dash); // Update the dash state
                    setLogin(true); // Set loggedin to true
                } else {
                    return Promise.reject();
                }
            })
            .catch((err) => alert(err));
    }
    
    return(
        <>
            {loggedin ? (
                <div>
                    <Filter />
                </div>
            ) : (
                
                <div class="container-fluid pt-5 mt-5 ">
               <div class="row">
               <div class="col-sm-6 bg-white">
                <img style={{height : "60vh", width : "95%" , paddingLeft : "9%"}} src={Buyer} alt="Logo"></img>
               </div>
               <div class="col-sm-6 bg-white">
               <div className="container m-3" >
                    <form style={{ width: "75%", margin: "auto", paddingTop : "2%" }} onSubmit={handleClick}>
                        <h2 className="text-center">Welcome to Buyer Portal</h2>
                        <br></br>
                        <p>Login to access your account and manage your property listings.</p>

                        <div className="mb-3 mt-3">
                            <label htmlFor="email" className="form-label">Email:</label>
                            <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" value={email} onChange={(event) => setEmail(event.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="pwd" className="form-label">Password:</label>
                            <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pswd" value={password} onChange={(event) => setPassword(event.target.value)} />
                        </div>
                        <button type="submit" className="btn btn-primary">Login</button>
                        <br></br>
                        <br></br>
                        <p>New to Website?  <Link to="/signup">Sign up</Link> <span style={{textAlign:"end"}}>Forgot password:<Link to="/update">Forgot Password</Link></span></p>
                    </form>
                </div>
             </div>
            </div>
            </div>
              
                
            )}
        </>
    )
}