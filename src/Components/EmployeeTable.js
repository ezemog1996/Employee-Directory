import React, { Component } from "react";
import API from "../utils/API";
import EmployeeRows from "./EmployeeRows";

class EmployeeTable extends Component {
    state = {
        employees: []
    }

    componentDidMount() {
        API.search()
            .then(res => this.setState({employees: res.data.results}))
            .catch(err => console.log(err));
    }

    sortByName = event => {
        event.preventDefault();
        this.setState({employees: this.state.employees.sort((a, b) => {
            if (a.name.first > b.name.first) return 1;
            if (a.name.first < b.name.first) return -1;
        })})
        console.log("yo")
    }

    render() {
        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Image</th>
                            <th scope="col"><i onClick={this.sortByName} className="fas fa-caret-up" style={{color: "orange", cursor: "pointer"}}></i> Name</th>
                            <th scope="col">Cell</th>
                            <th scope="col">Email</th>
                            <th scope="col">Location</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        <EmployeeRows employees={this.state.employees}/>

                        
                    </tbody>
                </table>
            </div>
        )
    }
}

export default EmployeeTable;