export const employeeToFreelancer = (netSalary: number, efkaClass: number): number => {

  const EFKA_CLASS_AMOUNTS = [
    142.93,
    238.22,
    285.87,
    342.59,
    411.78,
    493.46,
    642.06
  ];

  const GP_TAX_RATE = 0.22;

  const ACCOUNTANT_SALARY = 600;

  const taxableAmount = netSalary / (1 - GP_TAX_RATE);

  const annualGross = taxableAmount + ACCOUNTANT_SALARY + EFKA_CLASS_AMOUNTS[efkaClass];

  return annualGross / 230;
}