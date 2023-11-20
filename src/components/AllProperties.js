import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import "./AllProperties.css";

export function AllProperties(props) {
    const location = props.obj.location.toLowerCase();
    const minbudget = props.obj.minbudget;
    const maxbudget = props.obj.maxbudget;
    const propertyType=props.obj.propertyType;
    const data = { location: location, minbudget: minbudget, maxbudget: maxbudget,propertyType:propertyType };
    const [arr, setArr] = useState([]);
    const [showAllListings, setShowAllListings] = useState(true);
    
    const showListings = () => {
        setShowAllListings(true);
    };

    const showFilteredListings = () => {
        setShowAllListings(false);
    };
    useEffect(() => {
        Axios.get("https://house-hunter-backend.onrender.com/SellerRoute")
            .then((res) => {
                if (res.status === 200) {
                    setArr(res.data);
                } else {
                    return Promise.reject();
                }
            })
            .catch((err) => alert(err));

        if (!showAllListings) {
            Axios.post("https://house-hunter-backend.onrender.com/SellerRoute/filter", data)
                .then((res) => {
                    if (res.status === 200) {
                        console.log(res.data);
                    } else {
                        return Promise.reject();
                    }
                })
                .catch((err) => alert(err));
        }
    }, [location, showAllListings, minbudget,propertyType]);

    return (
        <div>
            <div class="d-flex justify-content-end">
                <button onClick={showListings} class="btn btn-primary m-2">
                    Show All Listings
                </button>
                <button onClick={showFilteredListings} class="btn btn-primary m-2">
                    Show Filtered Listings
                </button>
            </div>

            <div className="d-flex flex-wrap justify-content-center">
                {arr.map((value) =>
                    value.property.map((propertyValue, index) => (
                        showAllListings || (propertyValue.location.toLowerCase() === location && propertyValue.budget >= minbudget && propertyValue.budget <= maxbudget && propertyValue.propertyType===propertyType) ? (
                            <div className="card m-2 w-25" key={index}>
                                <img className="card-img-top" src={`https://house-hunter-backend.onrender.com/uploads/${propertyValue.image}`} alt="Card" />
                                <div>
                                    <div style={{display : "flex", gap : "6%" , paddingTop : "6%"}}>
                                        <div>
                                    <h4 className='card-title p-2'>{propertyValue.propertyType}</h4>
                                    </div>
                                    </div>
                                    <p className="card-text p-1"><b>Location:</b>{propertyValue.location.charAt(0).toUpperCase() + propertyValue.location.slice(1)}</p>
                                    <p className="card-text p-1"><b>Selling Price:</b>{propertyValue.budget}</p>
                                    <p className="card-text p-1"><b>Seller Contact No:</b>{value.mobile}</p>
                                </div>
                            </div>
                        ) : null
                    ))
                )}
            </div>
        </div>
    )
}