import { useBudgetData } from "../hooks/useBudgetData"
import TotalAmount from "./TotalAmount"
import TotalExpense from "./TotalExpense"
import TotalIncome from "./TotalIncome"

function BudgetHeader() {
  const {
    totalAmount,
    totalAmountIncome,
    totalAmountExpense
  } = useBudgetData()

  return (
    <div className="top">
      <div className="budget">
        <div className="budget__title">
          Available Budget in <span className="budget__title--month">%Month%</span>:
        </div>
        <TotalAmount amount={totalAmount} />
        <TotalIncome amount={totalAmountIncome} />
        <TotalExpense amount={totalAmountExpense} total={totalAmountIncome} />
      </div>
    </div>
  )
}

export default BudgetHeader