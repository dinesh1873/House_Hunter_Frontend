import Axios from "axios";
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Dashboard } from "./Dashboard";

export function LoginForm(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedin, setLogin] = useState(false);
  const [dash, setDash] = useState(null);
  const [mailData, setInfo] = useState({});

  useEffect(() => {
    Axios.post("http://localhost:4000/Mail/loginmail", mailData)
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
    event.preventDefault();

    const data = { email, password };

    Axios.post("https://house-hunter-backend.onrender.com/SellerRoute/search", data)
      .then((res) => {
        if (res.status === 200) {
          alert("Login Successful");
          const { _id, name, email, property } = res.data;
          const mailinfo = { name: name, email: email };
          setInfo(mailinfo);
          const dash = { id: _id, name, property };
          props.setdata(dash);
          setDash(dash);
          setLogin(true);
        } else {
          return Promise.reject();
        }
      })
      .catch((err) => alert(err));
  }

  return (
    <>
      {loggedin ? (
        <Dashboard obj={dash} />
      ) : (
          <div class="container-fluid pt-5 mt-5 ">
            <div class="row">
              <div class="col-sm-6 bg-white">
                <img style={{ height: "60vh", width: "95%", paddingLeft: "9%" }} src="https://img.freepik.com/free-photo/blue-house-with-blue-roof-sky-background_1340-25953.jpg?size=626&ext=jpg&ga=GA1.1.1880011253.1699056000&semt=ais" alt="Logo"></img>
              </div>
              <div class="col-sm-6 bg-white">
                <div className="container m-3" >
                  <form style={{ width: "75%", margin: "auto", paddingTop: "2%" }} onSubmit={handleClick}>
                    <h2 className="text-center">Welcome to Seller Portal</h2>
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
                    <p>New to Website?  <Link to="/signup">Sign up</Link> <span style={{ textAlign: "end" }}>Forgot password:<Link to="/update">Forgot Password</Link></span></p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        )}
    </>
  )
}

export default LoginForm;
