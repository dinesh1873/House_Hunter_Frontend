import {Link} from 'react-router-dom';
import Axios from 'axios';
import { useState } from 'react';
export function Updatepassword(){
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const handleClick=()=>{
        const data={email:email,password:password};
        Axios.put("https://realback-iz4i.onrender.com/SellerRoute/update",data)
        .then((res)=>{
            console.log(res.data);
            if(res.status===200){
                console.log(res);
                alert(res.data);
            }else{
                Promise.reject();
            }
        })
        .catch((err)=>alert(err));
    }
    return(
        <div className="container m-3">
                    <form style={{ width: "50%", margin: "auto" }} onSubmit={handleClick}>
                        <h2 className="text-center">Update Details Form</h2>
                        <div className="mb-3 mt-3">
                            <label htmlFor="email" className="form-label">Email:</label>
                            <input type="email" className="form-control" id="email" placeholder="Enter email" name="email"  onChange={(event) => setEmail(event.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="pwd" className="form-label">Password:</label>
                            <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pswd"  onChange={(event) => setPassword(event.target.value)} />
                        </div>
                        <button type="submit" className="btn btn-primary">Update Password</button>
                        <p>New to Website?<Link to="/selllogin">Login</Link></p>
                    </form>
                </div>
    )
}