import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddEmployeeForm({ onAddEmployee }) {
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [department, setDepartment] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name) return alert('Please enter a name');

    // Call the parent function passed from App.js
    onAddEmployee({ name, position, department });

    // Clear form inputs
    setName('');
    setPosition('');
    setDepartment('');

    // Navigate back to the employee list to see the new entry
    navigate('/');
  };

  return (
    <div className="form-container">
      <h2>Add New Employee</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Position: </label>
          <input 
            type="text" 
            value={position} 
            onChange={(e) => setPosition(e.target.value)} 
          />
        </div>
        <div>
          <label>Department: </label>
          <input 
            type="text" 
            value={department} 
            onChange={(e) => setDepartment(e.target.value)} 
          />
        </div>
        <button type="submit" style={{ marginTop: '10px' }}>Add Employee</button>
      </form>
    </div>
  );
}

export default AddEmployeeForm;