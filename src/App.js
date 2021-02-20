import logo from './logo.svg';
import './App.css';
import API from './utils/API';
import EmployeeTable from './Components/EmployeeTable';
import Nav from "./Components/Nav";

function App() {
  return (
    <div>
      <Nav />
      <EmployeeTable />
    </div>
  );
}

export default App;
