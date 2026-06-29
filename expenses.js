let nameInput = document.getElementById("name");
let amountInput = document.getElementById("amount");
let addBtn = document.getElementById("addBtn");
let list = document.getElementById("list");
let total = document.getElementById("total");

let totalExpense = 0;

addBtn.addEventListener("click", () => {

    let expenseName = nameInput.value;
    let expenseAmount = Number(amountInput.value);

    if(expenseName === "" || expenseAmount <= 0){
        alert("Enter valid details");
        return;
    }

    let li = document.createElement("li");

    li.innerHTML = `
        ${expenseName} - ₹${expenseAmount}
        <button class="delete">Delete</button>
    `;

    list.appendChild(li);

    totalExpense += expenseAmount;
    total.textContent = totalExpense;

    nameInput.value = "";
    amountInput.value = "";

    let deleteBtn = li.querySelector(".delete");

    deleteBtn.addEventListener("click", () => {
        totalExpense -= expenseAmount;
        total.textContent = totalExpense;
        li.remove();
    });

});