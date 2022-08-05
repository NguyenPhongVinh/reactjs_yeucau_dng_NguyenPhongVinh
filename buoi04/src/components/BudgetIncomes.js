
import Item from './Item'

function BudgetIncomes({ listData }) {
  return (
    <div className="income">
      <h2 className="icome__title">Income</h2>
      <div className="income__list">
        {
          listData.map(itemData => <Item data={itemData} key={itemData.id} />)
        }
      </div>
    </div>
  )
}

export default BudgetIncomes