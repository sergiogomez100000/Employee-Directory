import React from 'react';


function Cards() {
    return <>
        <div className ="card" style={{width:"8rem"}}>
            <img className="card-img-top" src="https://randomuser.me/api/portraits/thumb/men/75.jpg" alt="employee-photo" />
            <div className="card-body">
                <h5 className="card-title">Employee Name</h5>
                <p className="card-text">Email</p>
                <p className="card-text">Phone</p>
                <p className="card-text">Address</p>
            </div>
        </div>
    </>
}

export default Cards;