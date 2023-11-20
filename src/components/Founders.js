import React from 'react';

function Founders() {
    const containerStyles = {
        textAlign: "center",
    };

    const cardStyles = {
        display: "inline-block",
        width: "18rem",
        margin: "0 35px", // Adjust the margin based on your layout preferences
    };

    return (
        <div>
            <h1 style={{ textAlign: "center" }}>Founders of House Hunter</h1>
            <br></br>
            <div style={containerStyles}>
                <div className="card" style={cardStyles}>
                    <img style={{ height: "35vh" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkaxp6nuQ-qYG54YUCJaqAEwJlABfWoyycljLH0Bj8TJL4JlHJ0RMb5K6b1khhcQzz95U&usqp=CAU" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Poojitha</h5>
                        <p className="card-text">Civil Engineer</p>
                    </div>
                </div>

                <div className="card" style={cardStyles}>
                    <img style={{ height: "35vh" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-reMTROwKgLJT74sBvxDS_nTpAfWVZPDw_A&usqp=CAU" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Pranav</h5>
                        <p className="card-text">Architect Designer</p>
                    </div>
                </div>

                <div className="card" style={cardStyles}>
                    <img style={{ height: "35vh" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-reMTROwKgLJT74sBvxDS_nTpAfWVZPDw_A&usqp=CAU" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Swamy</h5>
                        <p className="card-text">Mechanical Engineer</p>
                    </div>
                </div>
            </div>

            <br></br>
            <br></br>

            <div style={containerStyles}>
                <div className="card" style={cardStyles}>
                <img style={{ height: "35vh" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-reMTROwKgLJT74sBvxDS_nTpAfWVZPDw_A&usqp=CAU" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Dinesh</h5>
                        <p className="card-text">Computer science Engineer</p>
                    </div>

                </div>

                <div className="card" style={cardStyles}>
                <img style={{ height: "35vh" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-reMTROwKgLJT74sBvxDS_nTpAfWVZPDw_A&usqp=CAU" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Saikiran</h5>
                        <p className="card-text">Electrical Engineer</p>
                    </div>
                    {/* Content for the new card 2 */}
                </div>
            </div>
        </div>
    );
}

export default Founders;
