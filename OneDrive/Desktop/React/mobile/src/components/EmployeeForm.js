import React from 'react';
import '../EmployeeForm.css';

class EmployeeForm extends React.Component {
  constructor(props) {
    super(props);
    // 1. Initialize the state with empty strings for each field
    this.state = {
      name: '', 
      email: '', 
      title: '', 
      department: ''
    };

    // 2. Bind the change handler method to the component instance
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // 3. Define the method to handle all input field changes dynamically
  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name; // Retrieves 'name', 'email', 'title', or 'department'

    // Dynamically update the state key that matches the input's "name" attribute
    this.setState({
      [name]: value
    });
  }
  // 7. Define the method to handle form submission
  handleSubmit(event) {
    // Prevent the default browser behavior of refreshing the page
    event.preventDefault();

    // Log the current state data to the developer console
    console.log('Submitted Employee Data:', this.state);

    // Reset the state to clear out the input fields
    this.setState({
      name: '',
      email: '',
      title: '',
      department: ''
    });
  }
  
  render() {
    return (
      <form className="employee-form" onSubmit={this.handleSubmit}>
        <h2>Add New Employee</h2>
        
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name" /* Must match the state key exactly */
            value={this.state.name}
            onChange={this.handleInputChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={this.state.email}
            onChange={this.handleInputChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="title">Job Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={this.state.title}
            onChange={this.handleInputChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="department">Department:</label>
          <input
            type="text"
            id="department"
            name="department"
            value={this.state.department}
            onChange={this.handleInputChange}
          />
        </div>

        <button type="submit" className="submit-btn">Submit</button>
      </form>
    );
  }
}

export default EmployeeForm;