
import React from 'react';

const styles = {
    background:"lightblue",
    border: "1px solid black"
}
function Table(props) {
        return (
          <table class="table"style={styles}>
            <thead>
              <tr>
                <th scope="col">Image</th>
                <th scope="col">Name</th>
                <th scope="col">Phone</th>
                <th scope="col">E-Mail</th>
                <th scope="col">DOB</th>
              </tr>
            </thead>
            <tbody>
                  <tr>
                    <td><img src= {props.image} /></td>
                    <td>{props.name.first} {props.name.last}</td>
                    <td>{props.phone}</td>
                    <td>{props.email}</td>
                    <td>{props.dob}</td>
                  </tr>
            </tbody>
          </table>
        );
      

    // return <>
    //     <div className ="card" style={styles}>
    //         <img className="card-img-top"style={{width:"50%"}} src={props.image} alt="employee-photo" />
    //         <div className="card-body">
    //             <h5 className="card-title">{props.name.first} {props.name.last}{" "}</h5>
    //             <p className="card-text">{props.email}</p>
    //             <p className="card-text">{props.phone}</p>
    //             <p className="card-text">{props.dob}</p>
    //         </div>
    //     </div>
    // </>
}

export default Table;