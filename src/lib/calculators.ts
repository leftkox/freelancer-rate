export const employeeToFreelancer = (netSalary: number, efkaClass: number, fromCurrency: 'GBP' | 'EUR', toCurrency: 'GBP' | 'EUR'): number => {
	const EFKA_CLASS_AMOUNTS = [142.93, 238.22, 285.87, 342.59, 411.78, 493.46, 642.06];

	const GP_TAX_RATE = 0.22;

	const ACCOUNTANT_SALARY = 600;

	const taxableAmount = netSalary / (1 - GP_TAX_RATE);

	const annualGross = taxableAmount + ACCOUNTANT_SALARY + 12 * EFKA_CLASS_AMOUNTS[efkaClass];

	let rate = 1;
	if (fromCurrency !== toCurrency) {
		rate = Math.pow(0.85604041, fromCurrency === 'EUR' ? 1 : -1);
	}
	return rate * annualGross / 230;
};

export const freelancerToEmployee = (dailyRate: number, efkaClass: number, fromCurrency: 'GBP' | 'EUR', toCurrency: 'GBP' | 'EUR'): number => {
	const EFKA_CLASS_AMOUNTS = [142.93, 238.22, 285.87, 342.59, 411.78, 493.46, 642.06];

	const GP_TAX_RATE = 0.22;

	const ACCOUNTANT_SALARY = 600;

	const taxableAmount = dailyRate * 230 - ACCOUNTANT_SALARY - 12 * EFKA_CLASS_AMOUNTS[efkaClass];
	const tax = taxableAmount * GP_TAX_RATE + 1000;
	const netAmount = taxableAmount - tax;
	let rate = 1;
	if (fromCurrency !== toCurrency) {
		rate = Math.pow(0.85604041, fromCurrency === 'EUR' ? 1 : -1);
	}
	return rate * netAmount;
};

export const EFKA_CLASS_AMOUNTS = [142.93, 238.22, 285.87, 342.59, 411.78, 493.46, 642.06];

