import React, { useState, useEffect } from 'react';

export const AddEmployee = () => {
  const [employees, setEmployees] = useState(() => {
    const savedEmployees = localStorage.getItem('employees');
    return savedEmployees ? JSON.parse(savedEmployees) : [];
  });
  
  useEffect(() => {
    localStorage.setItem('employees', JSON.stringify(employees));
  }, [employees]);

  function addFun(event) {
    event.preventDefault();
    const empID = document.getElementById('empID').value;
    const empName = document.getElementById('empName').value;
    const empDept = document.getElementById('Dept').value;
    const phNum = document.getElementById('phNum').value;
    const address=document.getElementById('address').value;
    const newEmployee = {
      id: empID,
      name: empName,
      department: empDept,
      phone: phNum,
      address: address
    };
    setEmployees([...employees, newEmployee]);
    window.location='/employee_management_system';
  }

  return (
    <div className="container minH mt-3">
      <h2>Add New Employee</h2>
      <form onSubmit={addFun}>
        <div className="mb-3">
          <label htmlFor="empID" className="form-label">
            ID
          </label>
          <input type="number" className="form-control" id="empID" autoComplete='off' required/>
        </div>
        <div className="mb-3">
          <label htmlFor="empName" className="form-label">
            Name
          </label>
          <input type="text" className="form-control" id="empName" autoComplete='off' required/>
        </div>
        <div className="mb-3">
          <label htmlFor="Dept" className="form-label">
            Department
          </label>
          <input type="text" className="form-control" id="Dept" autoComplete='off' required/>
        </div>
        <div className="mb-3">
          <label htmlFor="phNum" className="form-label">
            Phone No.
          </label>
          <input type="number" className="form-control" id="phNum" autoComplete='off' required/>
        </div>
        <div className="mb-3">
          <label htmlFor="address" className="form-label">
            Address
          </label>
          <input type="text" className="form-control" id="address" autoComplete='off' required/>
        </div>
        <button type="submit" className="btn btn-primary">
          Add Employee
        </button>
      </form>
    </div>
  );
};
