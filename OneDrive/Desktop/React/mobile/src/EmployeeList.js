import React from 'react';
import { Link } from 'react-router-dom';

function EmployeeList(props) {
  return (
    <div className="employee-list">
      <h1>Employee List</h1>
      <ul>
        {props.employees.map((employee) => (
          <li key={employee.EmployeeId}>
            {/* Creates a dynamic link to the specific employee detail route */}
            <Link to={`/employees/${employee.EmployeeId}`}>
              {employee.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EmployeeList;