//Defining variables
var budgetValue = document.getElementById("budget-value"),
expenseName = document.getElementById("expense-name"),
expenseValue = document.getElementById("expense-value"),
bud = document.getElementById("bud"),
exp = document.getElementById("exp"),
bal = document.getElementById("bal"),
deactivate = document.getElementById("deactivate");
remark = document.getElementById("remark"),
contentX = document.getElementById("content-x"),
sum = 0;
//Defining functions
function setBudget() {
    bud.innerHTML = budgetValue.value;
    budgetValue.value = ""
    deactivate.style.display = "none";
}
function saveExpense() {
    sum += Number(expenseValue.value);
    exp.innerHTML = sum;
    bal.innerHTML = bud.innerHTML - exp.innerHTML;
    
    addToLog(expenseName.value, expenseValue.value);
    
    expenseValue.value = "";
    expenseName.value = "";

    if (bal.innerHTML > 0) {
        remark.style.display = "block";
        remark.style.color = "black";
        remark.innerHTML = "Keep going..."
    } else {
        remark.style.display = "block"
        remark.style.color = "red";
        remark.innerHTML = "Dude, watch ur cost &excl;";
    }
}
function addToLog(expense, cost) {
    var newExpense = document.createElement("p"),
    newCost = document.createElement("p"),
    content = document.createElement("div"),
    expenseText = document.createTextNode(expense),
    costText = document.createTextNode(cost);
    newExpense.appendChild(expenseText);
    newCost.appendChild(costText);
    newCost.style.width = "25%";
    newCost.style.margin = "0 auto";
    newExpense.style.margin = "0 auto";
    newExpense.style.width = "25%";
    content.appendChild(newExpense);
    content.appendChild(newCost);
    contentX.appendChild(content);
    content.style.display = "flex";
    content.style.width = "95%";
    content.style.marginLeft = "5px";
    content.style.borderBottom = "1px solid #C7C7C7"
}