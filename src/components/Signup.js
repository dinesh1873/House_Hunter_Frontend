import { useState } from "react";
import Axios from 'axios';
import { Link } from "react-router-dom";
export function Signup(){
    const [submit,setSubmit]=useState(false);
    const [formData, setForm] = useState({
        "name":"",
        "password":"",
        "email":"",
        "mobile":"",
        "property":[]
    });

    const styles = {
        borderRadius : "50%",
        height : "40vh",
        width : "40%",
        float : "left",
    };

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
        Axios.post("https://realback-iz4i.onrender.com/SellerRoute/emailcheck",data)
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
        Axios.post("https://realback-iz4i.onrender.com/SellerRoute/create-user",data)
        .then((res)=>{
            if(res.status===200){
                alert("Your Details Submitted Successfully");
            }else{
                Promise.reject();
            }
        })
        .catch((err)=>alert(err));
    }

    return(
        <div class="container-fluid pt-5 mt-5">
        <div class="row">
         <div class="col-sm-7 bg-white">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYK8hXUFuLlCzim6QiTP5r8sohUX7CmSbuQSiXXFrygdnUG-3LNjy1ILum82QSu9Z5ro8&usqp=CAU" alt="image" style={styles}></img>
          <h2 class="pt-5 mt-5 text-danger">Welcome to House Hunter!!</h2>
          <p style={{justifyContent : "center" , lineHeight : "1.7rem"}} class="pt-3">At House Hunter, we understand that finding the perfect home is a journey,
             and we're here to make that journey as seamless as possible for you.
              Whether you're looking to buy, sell, or rent a home or villa, we've got you covered.
              At House Hunter, we believe that finding the perfect home is not just about brick and mortar; it's about fulfilling dreams and creating lasting memories. 
              </p>
         </div>
         <div class="col-sm-5 bg-light">
         <form style={{ width: "50%", margin: "auto" }} onSubmit={handleSubmit}>
            <h3 className="text-center text-danger">SIGN UP FORM</h3>
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
            <p>Login page<Link to="*">Login</Link></p>
        </form>
       </div>
      </div>
    </div>
    
    )
}