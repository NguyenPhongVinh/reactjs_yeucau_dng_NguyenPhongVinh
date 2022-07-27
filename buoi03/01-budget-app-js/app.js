let listData = [{
		id: createUUID(),
		description: 'Chi tieu ngay 26/07',
		amount: -100000
	},
	{
		id: createUUID(),
		description: 'Thu nhap thang 06',
		amount: 3000000
	},
	{
		id: createUUID(),
		description: 'Thu nhap thang 07',
		amount: 2000000
	},
	{
		id: createUUID(),
		description: 'Chi tieu ngay 27/07',
		amount: -150000
	},
];

function createUUID() {
	let dt = new Date().getTime();
	let uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
		let r = (dt + Math.random() * 16) % 16 | 0;
		dt = Math.floor(dt / 16);
		return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
	});
	return uuid;
}

let htmlIncome = '';
let htmlExpenses = '';
let totalIncome = 0;
let totalExpenses = 0;

function handerData() {
	listData.forEach(function (value, index) {
		const type = value.amount < 0 ? 'EXPENSES' : 'INCOME';
		value.type = type;
		if (type == 'EXPENSES') {
			totalExpenses += value.amount;
		} else {
			totalIncome += value.amount;
		}
	})

	listData.forEach(function (value, index) {
		const html = `<div class="item clearfix" id="${value.id}">
										<div class="item__description">${value.description}</div>
										<div class="right clearfix">
											<div class="item__value">${(value.amount > 0 ? '+' : '') + parseNumber(value.amount)} đ</div>
											${value.type == 'EXPENSES' ? `<div class="item__percentage">${percent(value.amount, totalIncome)}%</div>` : ''}
											<div class="item__delete">
												<button class="item__delete--btn">
													<i class="ion-ios-close-outline"></i>
												</button>
											</div>
										</div>
									</div>`;

		if (value.type == 'INCOME') {
			htmlIncome += html;
		} else {
			htmlExpenses += html;
		}
	})

	document.querySelector('#list-incomes').innerHTML = htmlIncome;
	document.querySelector('#list-expenses').innerHTML = htmlExpenses;
}
handerData();

function parseNumber(num) {
	return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function percent(amount, total) {
	return amount * -1 / total * 100;
}