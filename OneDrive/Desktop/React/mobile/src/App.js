import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import EmployeeList from './EmployeeList'; // Adjust path if needed
import AddEmployeeForm from './EmployeeForm'; // Your form component
import './App.css';

function App() {
  // 1. Initialize state from LocalStorage (or default array if empty)
  const [employees, setEmployees] = useState(() => {
    const savedData = localStorage.getItem('employees');
    return savedData ? JSON.parse(savedData) : [
      { EmployeeId: '1', name: 'Jane Doe', position: 'Software Engineer', department: 'Engineering' },
      { EmployeeId: '2', name: 'John Smith', position: 'Product Manager', department: 'Product' }
    ];
  });

  // 2. Automatically sync to LocalStorage whenever 'employees' state changes
  useEffect(() => {
    localStorage.setItem('employees', JSON.stringify(employees));
  }, [employees]);

  // 3. Function to add a new employee from the form
  const handleAddEmployee = (newEmployee) => {
    // Generate a unique ID (timestamp or count)
    const employeeWithId = {
      ...newEmployee,
      EmployeeId: Date.now().toString()
    };
    
    // Add new employee to existing list
    setEmployees((prevEmployees) => [...prevEmployees, employeeWithId]);
  };

  return (
    <Router>
      <div className="App">
        <nav style={{ padding: '10px', background: '#f0f0f0', marginBottom: '20px' }}>
          <Link to="/" style={{ marginRight: '15px' }}>Employee List</Link> | 
          <Link to="/add" style={{ marginLeft: '15px' }}>Add New Employee</Link>
        </nav>

        <Routes>
          {/* Main List Route */}
          <Route 
            path="/" 
            element={<EmployeeList employees={employees} />} 
          />
          
          {/* Form Route - Passes handleAddEmployee as a prop */}
          <Route 
            path="/add" 
            element={<AddEmployeeForm onAddEmployee={handleAddEmployee} />} 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;