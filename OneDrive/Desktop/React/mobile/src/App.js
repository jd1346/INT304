import React, { useState, useEffect } from 'react';
import './App.css';
import EmployeeForm from './components/EmployeeForm';

function App() {
  const [employees, setEmployees] = useState(() => {
    const savedData = localStorage.getItem('employeeData');
    return savedData ? JSON.parse(savedData) : [];
  });

  // Automatically sync to localStorage whenever employees state changes
  useEffect(() => {
    localStorage.setItem('employeeData', JSON.stringify(employees));
  }, [employees]);

  const addEmployee = (newEmployee) => {
    setEmployees((prevEmployees) => [...prevEmployees, newEmployee]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Employee Management System</h1>
      </header>
      <main>
        <EmployeeForm onAddEmployee={addEmployee} />
      </main>
    </div>
  );
}

export default App;