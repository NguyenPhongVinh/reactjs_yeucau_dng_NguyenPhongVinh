import { formatStringAmount, formatPercentAmount } from '../helpers';
import { removeBudget } from '../store/action';
import { useDispatch } from 'react-redux';

function Item({ data, total }) {
  const { id, description, amount } = data;
  const dispatch = useDispatch();

  function handleClickBtnRemove(id) {
    dispatch(removeBudget(id));
  }

  return (
    <div className="item clearfix">
      <div className="item__description">{description}</div>
      <div className="right clearfix">
        <div className="item__value">{formatStringAmount(amount)}</div>
        {amount < 0 && <div className="item__percentage">{formatPercentAmount(amount, total)}</div>}
        <div className="item__delete">
          <button className="item__delete--btn" onClick={() => handleClickBtnRemove(`${id}`)}><i className="ion-ios-close-outline" /></button>
        </div>
      </div>
    </div>
  );
}

export default Item;