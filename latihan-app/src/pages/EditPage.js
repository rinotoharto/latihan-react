import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { editEmployee, getEmployeeId } from '../store/action/employeesAction'
import { Form, Button } from 'react-bootstrap'

const EditPage = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const employee = useSelector( state => state.employeeReducer.employee )
  const [name, setName] = useState('')
  const [division, setDivision] = useState('')

  useEffect(() => {
    dispatch(getEmployeeId(id))
  },[dispatch, id])

  useEffect(() => {
    setName(employee.name)
    setDivision(employee.division)
  },[employee])

  const addName = (e) => {
    let newName = e.target.value
    setName(newName)
  }
  
  const addDivision = (e) => {
    let newDivision = e.target.value
    setDivision(newDivision)
  }

  const edit = (e) => {
    e.preventDefault()
    let editedEmployee = {
      id: employee.id,
      name: name,
      division: division
    }
    if(name && division) {
      dispatch(editEmployee(editedEmployee))
      setName('')
      setDivision('')
    } else {
      console.log('Please fill the form')
    }
  }

  return(
    <div className="container">
      <Form onSubmit={edit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control value={name} onChange={addName} type="text" />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Division</Form.Label>
          <Form.Control value={division} onChange={addDivision} as="select">
            <option value="Backend">Backend</option>
            <option value="Frontend">Frontend</option>
            <option value="Mobile">Mobile</option>
        </Form.Control>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <h1>{employee.name}</h1>
      <h1>{employee.division}</h1>
    </div>
  )

}

export default EditPage