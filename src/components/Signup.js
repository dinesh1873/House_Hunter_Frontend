import { useState } from "react";
import Axios from 'axios';
import "./Signup.css";
export function Signup(){
    const [submit,setSubmit]=useState(false);
    const [formData, setForm] = useState({
        "name":"",
        "password":"",
        "email":"",
        "mobile":"",
        "property":[]
    });
    const handleChange = (event) => {
        const { name, value } = event.target;
        setForm(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
       const data={email:formData.email};
        Axios.post("http://localhost:4000/SellerRoute/emailcheck",data)
        .then((res)=>{
            if(res.status===200){
                alert("Your email is already registered");
                setSubmit(false);
            }
            else{
                Promise.reject();
            }
        })
        .catch((err) => setSubmit(true));
        console.log(formData);
        event.target.reset();
    }
    if(submit){
        const data={name:formData.name,password:formData.password,email:formData.email,mobile:formData.mobile,property:formData.property};
        console.log(data);
        Axios.post("https://house-hunter-backend.onrender.com/SellerRoute/create-user",data)
        .then((res)=>{
            if(res.status===200){
                alert("Your Details Submitted Successfully");
            }else{
                Promise.reject();
            }
        })
        .catch((err)=>alert(err));
        Axios.post("https://house-hunter-backend.onrender.com/BuyerRoute/create-user",data)
        .then((res)=>{
            if(res.status===200){
                alert("Your Details Submitted Successfully");
            }else{
                Promise.reject();
            }
        })
        .catch((err)=>alert(err));
        Axios.post("https://house-hunter-backend.onrender.com/Mail/signupmail", data)
      .then((res) => {
        if (res.status === 200) {
          alert("email sent");
        } else {
          return Promise.reject();
        }
      })
      .catch((err) => alert(err));
    }

    return(
        <div  >
        <div className="container-fluid p-5 m-5">
          <div className="row">
            <div className="col-sm-6 bg-white">
              <img style={{height : "70vh"}} src="https://img.freepik.com/free-vector/beautiful-home_24877-50819.jpg" alt="home"></img>
            </div>
            <div className="col-sm-6 bg-white pt-5">
              <h2 style={{paddingLeft : "17%"}}>Welcome to House Hunter</h2>
              <form style={{ width: "60%", margin: "auto" }} onSubmit={handleSubmit}>
            
            <div className="mb-3 mt-3">
                <label htmlFor="name" className="form-label">Full Name:</label>
                <input type="text" className="form-control" id="name" placeholder="Enter Your Full Name" name="name" onChange={handleChange} />
            </div>
            <div className="mb-3 mt-3">
                <label htmlFor="email" className="form-label">Email:</label>
                <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" onChange={handleChange} />
            </div>
            <div className="mb-3 mt-3">
                <label htmlFor="pwd" className="form-label">Password:</label>
                <input type="password" className="form-control" id="pwd" placeholder="Create Your Password" name="password" onChange={handleChange} />
            </div>
            <div className="mb-3 mt-3">
                <label htmlFor="mobile" className="form-label">Mobile No:</label>
                <input type="text" className="form-control" id="mobile" placeholder="Enter Mobile No:" name="mobile" onChange={handleChange} />
            </div>
            <button type="submit" className="btn btn-primary">Submit Details</button>
        </form>
            </div>
          </div>
        </div>
      </div>
    
    
    )
}