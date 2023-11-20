import { useState } from 'react';
import Axios from 'axios';

export function AddProperty(props) {
    const [location, setLocation] = useState("");
    const [budget, setBudget] = useState();
    const [propertyType,setType]=useState("");
    const [file,setFile]=useState();
    const handleClick = () => {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('id', props.userid);
        formData.append('location', location.toLowerCase());
        formData.append('budget', budget);
        formData.append('propertyType', propertyType);
        console.log(propertyType);
        Axios.post("https://house-hunter-backend.onrender.com/SellerRoute/add-property", formData)
            .then((res) => {
                if (res.status === 200) {
                    alert("Property added successfully");
                    console.log(res.data);
                } else {
                    return Promise.reject();
                }
            })
            .catch((err) => alert(err));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        handleClick();
        event.target.reset();
    }
    console.log("dinesh");
    return (
        <div className="container m-3">
            <form style={{ width: "50%", margin: "auto" }} enctype="multipart/form-data" onSubmit={handleSubmit}>
                <h2 className="text-center">Property Details Form</h2>
                <div className="mb-3 mt-3">
                    <label htmlFor="propertyType" className="form-label">Property Type:</label>
                    <select class="form-select"  onChange={(event)=>setType(event.target.value)}>
                        <option>Select Your Selling Property</option>
                        <option value="2BHK Flat">2BHK Flat</option>
                        <option value="3BHK Flat">3BHK Flat</option>
                        <option value="Villa">Villa</option>
                        <option value="Plot">Plot</option>
                    </select>
                </div>
                <div className="mb-3 mt-3">
                    <label htmlFor="location" className="form-label">Location:</label>
                    <input type="text" className="form-control" id="location" placeholder="Enter the location" name="location" onChange={(event) => setLocation(event.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="budget" className="form-label">Budget:</label>
                    <input type="number" className="form-control" id="budget" placeholder="Enter Selling amount" min="0" name="budget" onChange={(event) => setBudget(event.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="image" className="form-label">Property Image (.png, .jpg, .jpeg):</label>
                    <input type="file" className="form-control" id="image"  accept=".png, .jpg, .jpeg" onChange={(event)=>setFile(event.target.files[0])}/>
                </div>
                <button type="submit" className="btn btn-primary" >Submit</button>
            </form>
        </div>
    )
}
