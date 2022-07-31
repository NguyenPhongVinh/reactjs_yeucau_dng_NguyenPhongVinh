import Item from "./Item";

function BudgetExpenses({ listData, total }) {
  return (
    <div className="expenses">
      <h2 className="expenses__title">Expenses</h2>
      <div className="expenses__list">
        {listData.map((value) => <Item key={value.id} data={value} total={total} />)}
      </div>
    </div>
  );
}

export default BudgetExpenses;