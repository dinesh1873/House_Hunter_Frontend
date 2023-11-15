import Axios from "axios";
import { useState } from 'react';
import {Link} from "react-router-dom";
import { Dashboard } from "./Dashboard";
import { AddProperty } from "./AddProperty";
import { ListProperty } from "./ListProperty";
import { Route,Routes } from "react-router-dom";
import { Signup } from "./Signup";
export function LoginForm(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loggedin, setLogin] = useState(false);
    const [dash, setDash] = useState(null);

    const handleClick = (event) => {
        event.preventDefault(); // Prevent the form from submitting the traditional way

        const data = { email, password }; // Using shorthand property names

        Axios.post("https://realback-iz4i.onrender.com/SellerRoute/search", data)
            .then((res) => {
                if (res.status === 200) {
                    alert("Login Successful");
                    const {_id, name, property} = res.data;
                    const dash = {id: _id, name, property};
                    props.setdata(dash);
                    setDash(dash); // Update the dash state
                    setLogin(true); // Set loggedin to true
                } else {
                    return Promise.reject();
                }
            })
            .catch((err) => alert(err));
    }

    return (
        <>
            {loggedin ? (
                <Dashboard obj={dash}/>
            ) : (
                <div className="container m-3">
                    <form style={{ width: "50%", margin: "auto" }} onSubmit={handleClick}>
                        <h2 className="text-center">Seller Login Form</h2>
                        <div className="mb-3 mt-3">
                            <label htmlFor="email" className="form-label">Email:</label>
                            <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" value={email} onChange={(event) => setEmail(event.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="pwd" className="form-label">Password:</label>
                            <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pswd" value={password} onChange={(event) => setPassword(event.target.value)} />
                        </div>
                        <button type="submit" className="btn btn-primary">Login</button>
                        <p>New to Website?<Link to="/signup">Sign up</Link> <span style={{textAlign:"end"}}>Forgot password:<Link to="/update">Forgot Password</Link></span></p>
                    </form>
                </div>
            )}
        </>
    )
}

export default LoginForm;
