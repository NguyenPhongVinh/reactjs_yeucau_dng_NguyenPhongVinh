import Item from "./Item";

function BudgetIncomes({ listData }) {
  return (
    <div className="income">
      <h2 className="icome__title">Income</h2>
      <div className="income__list">
        {listData.map((value) => <Item key={value.id} data={value} />)}
      </div>
    </div>
  );
}

export default BudgetIncomes;