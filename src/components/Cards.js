import React from 'react';


function Cards(props) {
    return <>
        <div className ="card" style={{width:"15rem"}}>
            <img className="card-img-top" src="https://randomuser.me/api/portraits/thumb/men/75.jpg" alt="employee-photo" />
            <div className="card-body">
                <h5 className="card-title">Employee Name{props.empName.first} {props.empName.last}{" "}</h5>
                <p className="card-text">Email{props.email}</p>
                <p className="card-text">Phone{props.phoneNumber}</p>
                <p className="card-text">DOB: {props.dob}</p>
            </div>
        </div>
    </>
}

export default Cards;