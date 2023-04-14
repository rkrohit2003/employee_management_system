import React, { useState } from 'react'
// import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
// import { useNavigate, useParams } from 'react-router-dom';

export const UpdateEmployee = () => {
  const location = useLocation();
  const [employee, setEmployee] = useState(location.state);
  // const [employees] = useState(() => {
  //   const savedEmployees = localStorage.getItem('employees');
  //   return savedEmployees ? JSON.parse(savedEmployees) : [];
  // });
  // const {id}=useParams();
  // const emp=employees.find((emp)=>emp.id===id)
  // const navigate=useNavigate();
  // const [employee,setEmployee]=useState(emp);
  // useEffect(() => {
  //   if (!employee) {
  //     navigate('*');
  //   }
  // }, [employee, navigate]);
  // if(!emp){
  //   navigate("*");
  //   return null;
  // }
//   console.log(emp);
// console.log(employee);
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEmployee({ ...employee, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Update employee data in local storage
    const employees = JSON.parse(localStorage.getItem('employees'));
    const updatedEmployees = employees.map((e) => {
      if (e.id === employee.id) {
        return employee;
      }
      return e;
    });
    localStorage.setItem('employees', JSON.stringify(updatedEmployees));
    window.location="/";
  };
  

  return (
    <>
      <div className="container minH mt-1">
      <h2>Update Employee</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={employee.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="department" className="form-label">
            Department
          </label>
          <input
            type="text"
            className="form-control"
            id="department"
            name="department"
            value={employee.department}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            Phone
          </label>
          <input
            type="text"
            className="form-control"
            id="phone"
            name="phone"
            value={employee.phone}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="address" className="form-label">
            Address
          </label>
          <input
            type="text"
            className="form-control"
            id="address"
            name="address"
            value={employee.address}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Update Employee
        </button>
      </form>
      </div>
    </>
  );
};

