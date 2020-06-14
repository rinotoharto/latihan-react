const initialState = {
  employees: [],
  employee: {}
}

export default function employeeReducer(state = initialState, action) {

  switch (action.type) {
    case 'GET_EMPLOYEES':
      return { ...state, employees: state.employees = action.payload };
    case 'NEW_EMPLOYEE':
      return { ...state, employees: state.employees.concat(action.payload) };
    case 'DELETE_EMPLOYEE':
      let filtered = state.employees.filter((employee) => {
        return employee.id !== action.payload
      })
      return { ...state, employees: state.employees = filtered };
    case 'GET_ID':
      return { ...state, employee: state.employee = action.payload};
    case 'EDIT_EMPLOYEE':
      console.log(action.payload, 'ini di reducer')
      let filter = state.employees.filter((employee) => {
        return employee.id !== action.payload.id
      })
      filter.concat(action.payload)
      return {...state, employees: state.employees = filter};
  
    default:
      return state;
  }
}