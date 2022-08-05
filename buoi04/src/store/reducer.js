import { v4 as uuidv4 } from 'uuid';
import { ACT_DELETE_INCOME, ACT_ADD_INCOME } from './actions';

function getDataFromLocalStorage() {
  try {
    const dataFromLocalStorage = localStorage.getItem('listBudget') || '[]'
    return JSON.parse(dataFromLocalStorage)
  } catch(err) {
    return []
  }
}

const initState = {
  isShowForm: true,
  listDataIncome: getDataFromLocalStorage()
}

function reducer(state = initState, action) {
  switch (action.type) {
    case ACT_DELETE_INCOME:
      return {
        ...state,
        listDataIncome: state.listDataIncome
          .filter(dataItem => {
            return dataItem.id !== action.payload.id
          })
      };
    case ACT_ADD_INCOME:
      const data = action.payload.data
      return {
        ...state,
        listDataIncome: [
          ...state.listDataIncome,
          {
            id: uuidv4(),
            description: data.description,
            amount: data.sign === '+' ? data.amount : data.amount * (-1)
          }
        ]
      }
    default:
      return state
  }
}

export default reducer