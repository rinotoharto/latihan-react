import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getEmployeeId } from '../store/action/employeesAction'
import { Table, Button } from 'react-bootstrap'

const DetailPage = () => {
  const {id} = useParams()
  const employee = useSelector( state => state.employeeReducer.employee )
  const dispatch = useDispatch()
  console.log(id, employee)

  useEffect(() => {
    dispatch(getEmployeeId(id))
  },[dispatch, id])

  return (
    <div className="container">
      <h1>Detail Page</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Division</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{employee.id}</td>
            <td>{employee.name}</td>
            <td>{employee.division}</td>
            <td>
              <Button variant="danger" size="sm">Delete</Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  )

}

export default DetailPage