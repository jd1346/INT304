import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function EmployeeList({ employees }) {
  const [searchTerm, setSearchTerm] = useState('');

  // Option B: Real-time filtering by name, position, or department
  const filteredEmployees = employees.filter((employee) => {
    const term = searchTerm.toLowerCase();
    return (
      employee.name?.toLowerCase().includes(term) ||
      employee.position?.toLowerCase().includes(term) ||
      employee.department?.toLowerCase().includes(term)
    );
  });

  return (
    <div className="employee-list-container">
      <header className="list-header">
        <h1>Employee Directory</h1>
        <p>Manage and view team members across departments.</p>
      </header>

      {/* Option B: Search / Filter Input Bar */}
      <div className="search-bar-container">
        <input
          type="text"
          className="search-input"
          placeholder="🔍 Search by name, position, or department..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {searchTerm && (
          <button className="clear-btn" onClick={() => setSearchTerm('')}>
            Clear
          </button>
        )}
      </div>

      {/* Option A: Modern Responsive Card Grid */}
      {filteredEmployees.length === 0 ? (
        <div className="no-results">
          <p>No employees match your search criteria.</p>
        </div>
      ) : (
        <div className="employee-grid">
          {filteredEmployees.map((employee) => (
            <div className="employee-card" key={employee.EmployeeId}>
              <div className="card-header">
                <h3>{employee.name}</h3>
                <span className="badge">{employee.department || 'General'}</span>
              </div>
              <p className="position-title">{employee.position || 'Staff Member'}</p>
              <div className="card-actions">
                <Link to={`/employees/${employee.EmployeeId}`} className="view-link">
                  View Details →
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default EmployeeList;