import { ADD_BUDGET, REMOVE_BUDGET } from './action';

function getBudget() {
  return JSON.parse(localStorage.getItem('listBudget'));
}

function setBudget(data = []) {
  localStorage.setItem('listBudget', JSON.stringify(data));
}

const initState = {
  listDataIncome: getBudget() ?? []
};

function reducer(state = initState, action) {
  let listNew;
  let stateNew = state;
  switch (action.type) {
    case ADD_BUDGET:
      listNew = [...state.listDataIncome, action.payload];
      stateNew = { ...state, listDataIncome: listNew };
      setBudget(listNew);
      return stateNew;

    case REMOVE_BUDGET:
      listNew = state.listDataIncome.filter(item => item.id != action.payload);
      stateNew = { ...state, listDataIncome: listNew };
      setBudget(listNew);
      return stateNew;
    
    default: return state;
  }
}

export default reducer;