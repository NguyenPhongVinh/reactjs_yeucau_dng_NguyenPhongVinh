import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { calTotalAmount } from "../helpers"

function useBudgetData() {
  const listData = useSelector(state => state.listDataIncome)
  
  const listIncomes = listData.filter(dataItem => dataItem.amount > 0)
  const listExpenses = listData.filter(dataItem => dataItem.amount < 0)

  const totalAmountIncome = calTotalAmount(listIncomes)
  const totalAmountExpense = calTotalAmount(listExpenses)

  const totalAmount = totalAmountIncome + totalAmountExpense

  useEffect(() => {
    localStorage.setItem('listBudget', JSON.stringify(listData))
  }, [listData])

  return {
    listIncomes,
    listExpenses,
    totalAmountIncome,
    totalAmountExpense,
    totalAmount
  }
}
export {
  useBudgetData
}
