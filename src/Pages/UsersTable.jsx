import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { Table } from 'react-bootstrap';

export default function UsersTable() {

  const [employeeData, setEmployeeData] = useState([])

  const navigate = useNavigate()

  useEffect(() => {
    showEmployees()
  }, [])

  // function showEmployees() {
  //   axios.get('/employee/findall')
  //     .then(res => {
  //       console.log(res.data);
  //       setEmployeeData(res.data.employeeData)
  //     }).catch(err => {
  //       console.log(err);
  //     })
  // }

  function showEmployees() {
    axios.get('http://localhost:8080/employee/findall')
      .then(res => {
        console.log(res.empData);  // Add this line to see the response data
        setEmployeeData(res.data.empData);
        // data is a property of the object res. It's being accessed as res.data.empData
        //res: This is the response object received from the API call.
        //res.data: This accesses the data property of the response object.
        //res.data.empData: This further accesses the empData property within the data object.
      })
      .catch(err => {
        console.log(err);
      });
  }



  function handleDelete(abc) {
    axios.delete(`http://localhost:8080/employee/delete/${abc}`)
      .then(res => {
        console.log(res.data);
        showEmployees()
      }).catch(err => {
        console.log(err);
      })
  }

  return (
    <Table className='table table-primary' bordered >
      <thead>
        <tr className=' text-center'>
          <th>Emp Name</th>
          <th>Emp Id</th>
          <th>Email</th>
          <th>Age</th>
          <th>Gender</th>
          <th colSpan="2">Skills</th>
          <th>City</th>
          <th colSpan="2">Joining Date</th>
          <th>Maternal Status</th>
          <th>Photo</th>
          {/* <th>id</th> */}
          <th className='text-center'>Action</th>
         <tr>
         
         </tr>
        </tr>
      </thead>

      <tbody>
        {
          employeeData.map((a, index) => {
            return (
              <tr className=' text-center' >
                <td>{a.empname}</td>
                <td>{a.empid}</td>
                <td>{a.email}</td>
                <td>{a.age}</td>
                <td>{a.gender}</td>

                {/* <td colSpan="2">{a.skills}</td> */}

                <td colSpan="2">
                  {Array.isArray(a.skills) ? a.skills.join(', ') : a.skills}
                </td>

                <td>{a.city}</td>
                <td colSpan="2">{a.joiningdate}</td>
                <td>{a.marritalstatus}</td>
                <td><img src={`http://localhost:8080/${a.image}`} alt="" className='img-fluid w-25 h-25' /></td>
                <td className='d-flex justify-content-evenly'>
                  <button className='btn btn-warning '
                    onClick={() => {
                      navigate('/updateform')
                      localStorage.setItem('empEmail', a.email)
                    }}>Update</button>
                  <button className='btn btn-danger'
                    onClick={() => {
                      handleDelete(a.email)
                    }}
                  >Delete</button>
                </td>
                {/* <td>{a._id}</td>                 */}
              </tr>
            )
          })
        }
      </tbody>
    </Table >
  )
}
