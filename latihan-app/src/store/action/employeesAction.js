export function fetchEmployees() {
  return(dispatch) => {
    fetch('http://localhost:8000/employee', {
      method: 'GET'
    })
    .then( response => response.json() )
    .then( employees => {
      dispatch({
        type: 'GET_EMPLOYEES',
        payload: employees
      })
    })
    .catch(err => {
      console.log(err)
    })
  }
}

export function addNewEmployee(newEmployee) {
  return(dispatch) => {
    fetch('http://localhost:8000/employee', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newEmployee)
    })
    .then( response => response.json() )
    .then( (employee) => {
      dispatch({
        type: 'NEW_EMPLOYEE',
        payload: employee
      })
    })
    .catch(err => {
      console.log(err)
    })
  }
}


export function deleteEmployee(employeeId) {
  return(dispatch) => {
    fetch(`http://localhost:8000/employee/${employeeId}`, {
      method: 'DELETE',
    })
    .then( response => response.json() )
    .then( (employee) => {
      dispatch({
        type: 'DELETE_EMPLOYEE',
        payload: employeeId
      })
    })
    .catch(err => {
      console.log(err)
    })
  }
}

export function getEmployeeId(employeeId) {
  return(dispatch) => {
    fetch(`http://localhost:8000/employee/${employeeId}`, {
      method: 'GET'
    })
    .then(response => response.json())
    .then(employee => {
      dispatch({
        type: 'GET_ID',
        payload: employee
      })
    })
    .catch(err => {
      console.log(err)
    })
  }
}

export function editEmployee(newEmployee) {
  const { id } = newEmployee

  return(dispatch) => {
    fetch(`http://localhost:8000/employee/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newEmployee),
    })
    .then(response => response.json())
    .then(editedEmployee => {
      dispatch({
        type: 'EDIT_EMPLOYEE',
        payload: editedEmployee
      })
    })
    .catch(err => {
      console.log(err.message)
    })
  }
}
