import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Form, Button }  from 'react-bootstrap'
import { addNewEmployee } from '../store/action/employeesAction'

const AddPage = () => {
  const dispatch = useDispatch()
  const [name, setName] = useState('')
  const [division, setDivision] = useState('')

  const addName = (e) => {
    let employeeName = e.target.value
    setName(employeeName)
  }

  const addDivision = (e) => {
    let employeeDivision = e.target.value
    setDivision(employeeDivision)
  }

  const addEmployee = (e) => {
    e.preventDefault()
    let newEmployee = {
      name,
      division
    }
    if(division.length > 0 && name.length > 0) {
      dispatch(addNewEmployee(newEmployee))
    } else {
      console.log('Please fill the form')
    }
  }



  return (
    <div className="container">
      <Form onSubmit={addEmployee}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control onChange={addName} type="text" placeholder="Enter email" />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Category</Form.Label>
          <Form.Control value={division} onChange={addDivision} as="select">
            <option value="" selected>Choose Category</option>
            <option value="Backend">Backend</option>
            <option value="Frontend">Frontend</option>
            <option value="Mobile">Mobile</option>
        </Form.Control>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default AddPage