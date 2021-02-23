import React from "react";

function EmployeeRows(props) {
    return (
        props.employees.map((item, index) => {
            return (
                <tr key={index}>
                <th scope="row">{item.id.value}</th>
                <td><img src={item.picture.thumbnail}/></td>
                <td>{item.name.first} {item.name.last}</td>
                <td>{item.cell}</td>
                <td>{item.email}</td>
                <td>{item.location.city}, {item.location.country}</td>
                </tr>
            )
            
        })
    )
};

export default EmployeeRows;