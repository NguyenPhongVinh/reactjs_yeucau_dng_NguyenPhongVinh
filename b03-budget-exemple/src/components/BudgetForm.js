import { useDispatch } from "react-redux";
import { useRef, useState } from 'react';
import { addBudget } from '../store/action';
import { v4 as uuidv4 } from 'uuid';

function BudgetForm() {
  const dispatch = useDispatch();
  const eleAddDescription = useRef('');
  const eleAddValue = useRef('');
  const eleAddType = useRef('inc');

  const [classFocus, setClassFocus] = useState({
    input: '',
    btn: '',
  });

  function handleClickAddBudget() {
    let vlAddValue = parseInt(eleAddValue.current.value);
    const vlAddDes = eleAddDescription.current.value;
    const vlAddType = eleAddType.current.value;

    if (!vlAddValue || vlAddValue < 1) return;
    if (vlAddDes === '') return;
    if (vlAddType === 'exp') vlAddValue *= -1;

    dispatch(addBudget({
      id: uuidv4(),
      description: vlAddDes,
      amount: vlAddValue
    }))
    resetForm();
  }

  function resetForm() {
    eleAddValue.current.value = '';
    eleAddDescription.current.value = '';
  }

  function handleChangetype() {
    let inputClass = '';
    let inputBtn = '';

    if (eleAddType.current.value == 'exp') {
      inputBtn = 'red';
      inputClass = 'red-focus';
    }

    setClassFocus({
      input: inputClass,
      btn: inputBtn
    });
  }

  return (
    <div className="add">
      <div className="add__container">
        <select className={`add__type ${classFocus.input}`} ref={eleAddType} onChange={handleChangetype}>
          <option value="inc">+</option>
          <option value="exp">-</option>
        </select>
        <input type="text" ref={eleAddDescription} className={`add__description ${classFocus.input}`} placeholder="Add description" />
        <input type="number" ref={eleAddValue} className={`add__value ${classFocus.input}`} placeholder="Value" />
        <button className={`add__btn ${classFocus.btn}`} onClick={handleClickAddBudget}><i className="ion-ios-checkmark-outline" /></button>
      </div>
    </div>
  );
}

export default BudgetForm;