import React, { Component } from "react";
import API from "../utils/API";
import EmployeeRows from "./EmployeeRows";

class EmployeeTable extends Component {
    state = {
        employees: []
    }

    componentDidMount() {
        API.search()
            .then(() => API.search().then(res => console.log(res)))
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Image</th>
                            <th scope="col">Name</th>
                            <th scope="col">Cell</th>
                            <th scope="col">Email</th>
                            <th scope="col">Location</th>
                        </tr>
                    </thead>
                    <tbody>
                        <EmployeeRows />
                    </tbody>
                </table>
            </div>
        )
    }
}

export default EmployeeTable;