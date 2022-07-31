import { formatStringAmount } from '../helpers';

function TotalAmount({amount}) {
  return (
    <div className="budget__value">{formatStringAmount(amount)}</div>
  );
}

export default TotalAmount;