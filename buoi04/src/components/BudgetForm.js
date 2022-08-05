import { useState, useRef } from 'react'
import cls from 'classnames'
import { useDispatch } from 'react-redux'
import { actAddIncome } from '../store/actions'

function BudgetForm() {
  const dispatch = useDispatch()
  const refDescEl = useRef(null)
  const [formData, setFormData] = useState({
    sign: '+',
    description: '',
    amount: ''
  })

  function onChangeData(evt) {
    let key = evt.target.name
    let value = evt.target.value

    if (key === 'amount' && value !== '') {
      value = Number(value)
    }

    if (value < 0) {
      return
    }

    setFormData({
      ...formData,
      [key]: value
    })
  }

  function handleSubmit() {
    if (!formData.amount || !formData.description) {
      return
    }

    dispatch(actAddIncome(formData))
    setFormData({
      sign: '+',
      description: '',
      amount: ''
    })
    refDescEl.current.focus()
  }

  function handleKeyUpAmount(evt) {
    if (evt.key === 'Enter') {
      handleSubmit()
    }
  }

  const isShowRed = formData.sign === '-'
  
  return (
    <div className = "add" >
      <div className="add__container">
        <select className={cls('add__type', {
          'red-focus': isShowRed
        })} value={formData.sign} onChange={onChangeData} name="sign">
          <option value="+">+</option>
          <option value="-">-</option>
        </select>
        
        <input 
          type="text" 
          value={formData.description} 
          onChange={onChangeData} 
          name="description"
          ref={refDescEl}
          className={cls('add__description', {
            'red-focus': isShowRed
          })} placeholder="Add description" />
        
        <input 
          type="number" 
          value={formData.amount} 
          onChange={onChangeData} 
          name="amount" 
          className={cls('add__value', {
            'red-focus': isShowRed
          })}
          onKeyUp={handleKeyUpAmount}
          placeholder="Value" 
        />

        <button onClick={handleSubmit} className={cls('add__btn', {
          red: isShowRed
        })}><i className="ion-ios-checkmark-outline" /></button>
      </div>
    </div >
  )
}

export default BudgetForm