import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchEmployees, deleteEmployee } from '../store/action/employeesAction'
import { Table, Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const HomePage = () => {
  const employees = useSelector( state => state.employeeReducer.employees)
  const dispatch = useDispatch()
  const [division, setDivision] = useState('All')
  const [filterEmployee, setFilterEmployee] = useState([])

  useEffect(() => {
    dispatch(fetchEmployees())
  },[dispatch])

  useEffect(() => {
    if(division !== 'All') {
      let filtered = employees.filter((employee) => {
        return employee.division === division
      })
      setFilterEmployee(filtered)
    } else {
      setFilterEmployee(employees)
    }
  },[employees, division])

  const delEmployee = (employeeId) => {
    dispatch(deleteEmployee(employeeId))
  }

  const newDivision = (e) => {
    let newData = e.target.value
    setDivision(newData)
  }

  return (  
    <div className="container">
      <h1>Employee List</h1>
      <Form>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Filter employee by division</Form.Label>
          <Form.Control onChange={newDivision} as="select">
            <option value="All" >All</option>
            <option value="Backend">Backend</option>
            <option value="Frontend">Frontend</option>
            <option value="Mobile">Mobile</option>
          </Form.Control>
        </Form.Group>
      </Form>

      <Table className="table" striped bordered hover size="sm">
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Division</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
        {filterEmployee.map((employee, i) => {
          return (
            <tr key={employee.id}>
              <td>{i+1}</td>
              <td>{employee.name}</td>
              <td>{employee.division}</td>
              <td>
              <Button variant="danger" size="sm" onClick={() => delEmployee(employee.id)}>Delete</Button>
              <Button variant="success" size="sm">
                <Link className="link" to={`/Detail/${employee.id}`}> Detail </Link>
              </Button>
              <Button variant="warning" size="sm">
                <Link className="link" to={`/Edit/${employee.id}`}> Edit </Link>
              </Button>
              </td>
            </tr>
          )
        })}
        </tbody>
      </Table>
    </div>
  )
}

export default HomePage