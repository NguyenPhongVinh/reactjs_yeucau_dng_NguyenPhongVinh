import { formatPercentAmount, formatStringAmount } from "../helpers"
import { useDispatch } from 'react-redux'
import { actDeleteIncomeById } from "../store/actions"

function Item({ data, total }) {
  const dispatch = useDispatch()
  const { id, amount, description } = data

  function handleDelete() {
    dispatch(actDeleteIncomeById(id))
  }

  return (
    <div className="item clearfix">
      <div className="item__description">{ description }</div>
      <div className="right clearfix">
        <div className="item__value">{ formatStringAmount(amount) }</div>
        {
          amount < 0 && 
          <div className="item__percentage">
            { formatPercentAmount(amount, total) }
          </div>
        }
        <div className="item__delete">
          <button className="item__delete--btn" onClick={handleDelete}>
            <i className="ion-ios-close-outline" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Item