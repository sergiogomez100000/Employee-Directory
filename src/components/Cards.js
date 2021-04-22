import React from 'react';


function Cards(props) {
    return <>
        <div className ="card" style={{width:"15rem"}}>
            <img className="card-img-top" src={props.image} alt="employee-photo" />
            <div className="card-body">
                <h5 className="card-title">Employee Name{props.name.first} {props.name.last}{" "}</h5>
                <p className="card-text">Email{props.email}</p>
                <p className="card-text">Phone{props.phoneNumber}</p>
                <p className="card-text">DOB: {props.dob}</p>
            </div>
        </div>
    </>
}

export default Cards;