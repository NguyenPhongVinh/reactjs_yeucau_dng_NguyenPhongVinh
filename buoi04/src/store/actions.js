// Action Types
export const ACT_ADD_INCOME = 'ACT_ADD_INCOME'
export const ACT_DELETE_INCOME = 'ACT_DELETE_INCOME'



// Action Creator
export function actAddIncome(data) {
  return {
    type: ACT_ADD_INCOME,
    payload: {
      data
    }
  }
}
export function actDeleteIncomeById(id) {
  return {
    type: ACT_DELETE_INCOME,
    payload: {
      id
    }
  }
}