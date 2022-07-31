import TotalAmount from "./TotalAmount";
import TotalExpense from "./TotalExpense";
import TotalIncome from "./TotalIncome";

import { calTotalAmount } from '../helpers';
import { useSelector } from "react-redux";
function BudgetHeader() {
  const listData = useSelector((state) => state.listDataIncome);
  const listIncomes = listData.filter(dataItem => dataItem.amount > 0);
  const listExpenses = listData.filter(dataItem => dataItem.amount < 0);
  const totalAmountIncome = calTotalAmount(listIncomes);
  const totalAmountExpense = calTotalAmount(listExpenses);
  const totalAmount = totalAmountIncome + totalAmountExpense;
  return (
    <div className="top">
      <div className="budget">
        <div className="budget__title">
          Available Budget in <span className="budget__title--month">%Month%</span>:
        </div>
        <TotalAmount amount={totalAmount}/>
        <TotalIncome amount={totalAmountIncome}/>
        <TotalExpense amount={totalAmountExpense} total={totalAmount}/>
      </div>
    </div>
  );
}

export default BudgetHeader;