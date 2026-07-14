import React from 'react';
import './App.css';
// Ensure this path matches the exact lowercase folder where EmployeeForm.js sits
import EmployeeForm from './components/EmployeeForm'; 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Employee Management System</h1>
      </header>
      <main>
        {/* Render the component */}
        <EmployeeForm />
      </main>
    </div>
  );
}

export default App;
