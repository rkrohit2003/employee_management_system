import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const EmpList = () => {
  const [employees, setEmployees] = useState(() => {
    const savedEmployees = localStorage.getItem('employees');
    return savedEmployees ? JSON.parse(savedEmployees) : [];
  });
  
  useEffect(() => {
    localStorage.setItem('employees', JSON.stringify(employees));
  }, [employees]);
  function handleDelete(id) {
    setEmployees(employees.filter((employee) => employee.id !== id));
  }

  const navigate=useNavigate();
  function handleUpdate(id) {
    const employee = employees.find((emp) => emp.id === id);
    navigate(`/update/${id}`, { state: employee });
  }
  // function handleUpdate(id){
  //   navigate(`/update/${id}`);
  // }
  
  return (
    <div className="container minH mt-1">
      {employees.length>0 && (
        <div>
        <h2>Employee Details</h2>
        <div className="over">
        <table className="table table-hover">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Name</th>
                  <th scope="col">Department</th>
                  <th scope="col">Phone No.</th>
                  <th scope="col">Address</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {employees.map((employee) => (
                  <tr key={employee.id}>
                    <td>{employee.id}</td>
                    <td>{employee.name}</td>
                    <td>{employee.department}</td>
                    <td>{employee.phone}</td>
                    <td>{employee.address}</td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => handleDelete(employee.id)}
                      >
                        Delete
                      </button>
                      <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => handleUpdate(employee.id)}
                      >
                        Update
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            </div>
            </div>
      )
      }
        {employees.length===0 && (
          <h2>Sorry, currently we don't have any employee details to show you.</h2>
        )

        }
        </div>
  )
}
