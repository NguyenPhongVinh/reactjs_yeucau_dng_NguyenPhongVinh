// Elements
const eleBudgetValue = document.querySelector('.budget__value');
const eleBudgetIncomeValue = document.querySelector('.budget__income--value');
const eleBudgetExpensesValue = document.querySelector('.budget__expenses--value');
const eleBudgetExpensesPercentage = document.querySelector('.budget__expenses--percentage');

const eleListIncomes = document.getElementById('list-incomes');
const eleListExpenses = document.getElementById('list-expenses');

const eleAddType = document.querySelector('.add__type');
const eleAddDescription = document.querySelector('.add__description');
const eleAddValue = document.querySelector('.add__value');
const eleAddBtn = document.querySelector('.add__btn');

let listIncomes = [];
let listExpenses = [];
let totalAmountIncome = 0;
let totalAmountExpense = 0;
let totalAmount = 0;

getListData();

function getBudget() {
  return JSON.parse(localStorage.getItem('listBudget'));
}

function setBudget(data = []) {
  localStorage.setItem('listBudget', JSON.stringify(data));
  getListData();
}

function addBudget(obj) {
  let budgets = getBudget();
  if (budgets) {
    budgets.push(obj);
  } else {
    budgets = [obj];
  }
  setBudget(budgets);
}

eleAddBtn.addEventListener('click', handleClickAddBudget);

function handleClickAddBudget() {
  let _vlEleValue = parseInt(eleAddValue.value);
  const _vlEleDes = eleAddDescription.value;

  if (!_vlEleValue || _vlEleValue < 1) return;
  if (_vlEleDes === '') return;
  if (eleAddType.value == 'exp') _vlEleValue *= -1;
  addBudget({
    id: createUUID(),
    description: _vlEleDes,
    amount: _vlEleValue
  });
  resetInputAdd();
}

function resetInputAdd() {
  eleAddValue.value = '';
  eleAddDescription.value = '';
}

eleAddType.addEventListener('change', handleChangeType);

function handleChangeType(e) {
  const type = e.target.value;
  if (type === 'exp') {
    eleAddType.classList.add('red-focus');
    eleAddDescription.classList.add('red-focus');
    eleAddValue.classList.add('red-focus');
    eleAddBtn.classList.add('red');
  } else {
    eleAddType.classList.remove('red-focus');
    eleAddDescription.classList.remove('red-focus');
    eleAddValue.classList.remove('red-focus');
    eleAddBtn.classList.remove('red');
  }
}

function getListData() {
  const listData = getBudget();
  listIncomes = listData.filter(dataItem => dataItem.amount > 0);
  listExpenses = listData.filter(dataItem => dataItem.amount < 0);
  totalAmountIncome = calTotalAmount(listIncomes);
  totalAmountExpense = calTotalAmount(listExpenses);
  totalAmount = calTotalAmount(listData);
  renderBudgetList();
}

// render component
function renderBudgetList() {
  eleListIncomes.innerHTML = listIncomes.map(item => renderBudgetItem(item, totalAmount)).join('');
  eleListExpenses.innerHTML = listExpenses.map(item => renderBudgetItem(item, totalAmount)).join('');
  eleBudgetValue.innerHTML = formatStringAmount(totalAmount);
  eleBudgetIncomeValue.innerHTML = formatStringAmount(totalAmountIncome);
  eleBudgetExpensesValue.innerHTML = formatStringAmount(totalAmountExpense);
  eleBudgetExpensesPercentage.innerHTML = formatPercentAmount(totalAmountExpense, totalAmount);
}

function renderBudgetItem(data, total) {
  const {
    id,
    amount,
    description
  } = data;
  const percent = amount < 0 ? `<div class="item__percentage">${formatPercentAmount(amount, total)}</div>` : '';
  return /* html */ `
  <div class="item clearfix">
    <div class="item__description">${description}</div>
    <div class="right clearfix">
      <div class="item__value">${formatStringAmount(amount)}</div>
      ${percent}
      <div class="item__delete">
        <button class="item__delete--btn" onclick="handleClickBtnRemove('${id}')"><i class="ion-ios-close-outline"></i></button>
      </div>
    </div>
  </div>
  `;
}

function handleClickBtnRemove(id) {
  const budgets = getBudget();
  const data = budgets.filter(dataItem => dataItem.id != id);
  setBudget(data);
}

// Helpers
function createUUID() {
  let dt = new Date().getTime();
  let uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    let r = (dt + Math.random() * 16) % 16 | 0;
    dt = Math.floor(dt / 16);
    return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
  });
  return uuid;
}

function formatStringAmount(amount) {
  let sign = '+';
  let amountFormatted = amount;

  if (amount < 0) {
    sign = '-';
    amountFormatted = -1 * amount;
  }

  amountFormatted = new Intl.NumberFormat('vi-VI', {
    style: 'currency',
    currency: 'VND'
  }).format(amountFormatted);

  return `${sign} ${amountFormatted}`;
}

function calTotalAmount(listData) {
  let total = 0;

  for (let index = 0; index < listData.length; index++) {
    const data = listData[index];
    const amount = data.amount;

    total = total + amount;
  }

  return total;
}

function formatPercentAmount(amount, total) {
  if (!total) {
    return '0%';
  }

  let percent = Math.round((amount / total) * 100)

  if (percent < 0) {
    percent = percent * (-1);
  }

  return percent + '%';
}