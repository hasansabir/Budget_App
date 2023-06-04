let monthlyBudget = 0;
let expenses = [];

// Get references to the elements

const budgetInput = document.getElementById("budget-input");
const addBudgetBtn = document.getElementById("add-budget-btn");
const descriptionInput = document.getElementById("description-input");
const amountInput = document.getElementById("amount-input");
const dateInput = document.getElementById("date-input");
const addExpenseBtn = document.getElementById("add-expense-btn");
const expenseTableBody = document.getElementById("expense-table-body");
const remainingBudget = document.getElementById("remaining-budget");



// Add event listeners

addBudgetBtn.addEventListener("click", () => {
  const budget = parseInt(budgetInput.value);
  if (!isNaN(budget)) {
    monthlyBudget = budget;
    updateRemainingBudget();
    budgetInput.value = "";
  }
});

addExpenseBtn.addEventListener("click", () => {
  const description = descriptionInput.value;
  const amount = parseInt(amountInput.value);
  const date = dateInput.value;
  if (description && !isNaN(amount) && date) {
    const expense = { description, amount, date };
    expenses.push(expense);
    renderExpense(expense);
    updateRemainingBudget();
    clearExpenseInputs();
  }
});

// Render expense in the table

function renderExpense(expense) {
  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${expense.description}</td>
    <td>${expense.amount}</td>
    <td>${expense.date}</td>
  `;
  expenseTableBody.appendChild(row);
}

// Update remaining budget

function updateRemainingBudget() {
  const totalExpense = expenses.reduce((sum, expense) => sum + expense.amount, 0);
  const remaining = monthlyBudget - totalExpense;
  remainingBudget.textContent = `Remaining Budget: ${remaining}`;
}

// Clear expense inputs

function clearExpenseInputs() {
  descriptionInput.value = "";
  amountInput.value = "";
  dateInput.value = "";
}
