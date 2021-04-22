
import React from 'react';

const styles = {
    width:"19rem",
    display: "inline-flex",
    background:"lightblue"
}
function Cards(props) {
    return <>
        <div className ="card" style={styles}>
            <img className="card-img-top"style={{width:"50%"}} src={props.image} alt="employee-photo" />
            <div className="card-body">
                <h5 className="card-title">{props.name.first} {props.name.last}{" "}</h5>
                <p className="card-text">{props.email}</p>
                <p className="card-text">{props.phone}</p>
                <p className="card-text">{props.dob}</p>
            </div>
        </div>
    </>
}

export default Cards;