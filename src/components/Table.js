import React from "react";

const styles = {
  background: "lightblue",
  border: "1px solid black",
};
function Table(props) {
  return (
    <table className="table" style={styles}>
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
          <td><img src={props.image} alt=""/></td>
          <td>{props.name.first} {props.name.last}</td>
          <td>{props.phone}</td>
          <td>{props.email}</td>
          <td>{props.dob}</td>
        </tr>
      </tbody>
    </table>
  );
}
export default Table;
