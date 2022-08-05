import { useBudgetData } from "../hooks/useBudgetData"
import BudgetExpenses from "./BudgetExpenses"
import BudgetIncomes from "./BudgetIncomes"

function BudgetList() {
  const {
    listIncomes,
    listExpenses,
    totalAmountIncome
  } = useBudgetData()

  return (
    <div className="container clearfix">
      <BudgetIncomes listData={listIncomes} />
      <BudgetExpenses listData={listExpenses} total={totalAmountIncome} />
    </div>
  )
}

export default BudgetList