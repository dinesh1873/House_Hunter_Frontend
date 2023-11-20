import React, { useState, useEffect } from "react";
import Axios from "axios";

export function ListProperty(props){
    const id = props.userid;
    const [arr, setArr] = useState([]);

    useEffect(() => {
        const getList = () => {
            Axios.get(`https://house-hunter-backend.onrender.com/SellerRoute/list-property/${id}`)
            .then((res) => {
                if(res.status === 200){
                    const proparr = res.data.property;
                    console.log(proparr);
                    setArr(proparr); 
                } else {
                    return Promise.reject();
                }
            })
            .catch((err) => alert(err));
        }

        getList(); 
    }, [id]);

    const handleClick = (propertyId) => {
        Axios.put(`https://house-hunter-backend.onrender.com/SellerRoute/delete-property/${id}/${propertyId}`)
            .then((res) => {
                if (res.status === 200) {
                    alert("Property deleted successfully");
                    setArr(res.data.property);
                } else {
                    alert("Error deleting property");
                }
            })
            .catch((err) => alert(err));
    }

    return(
        <div>
            <h6 className="m-4">YOUR LISTINGS</h6>
            <div className="d-flex flex-wrap justify-content-center">
                {
                    arr.map((value) => (
                        <div className="card m-2 w-25" key={value._id}>
                            <img class="card-img-top" src={`https://house-hunter-backend.onrender.com/uploads/${value.image}`} alt="Card image"></img>
                            <div className="card-body">
                                <h4 className="card-title">{value.propertyType}</h4>
                                <p className="card-text"><b>Location:</b>{value.location.charAt(0).toUpperCase()+value.location.slice(1)}</p>
                                <p className="card-text"><b>Selling Price:</b>{value.budget}</p>
                                <button onClick={() => handleClick(value._id)} className="btn btn-primary">Delete</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
