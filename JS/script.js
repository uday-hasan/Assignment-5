// function getInput(value) {
//     const userInput = document.getElementById(value + 'input');
// }

document.getElementById('calculate-expenses').addEventListener('click', function () {
    const userInput = document.getElementById('income-input');
    const userIncome = parseFloat(userInput.value);
    const foodInput = document.getElementById('food-input');
    const foodExpenses = parseFloat(foodInput.value);
    const rentInput = document.getElementById('rent-input');
    const rentExpenses = parseFloat(rentInput.value);
    const clothesInput = document.getElementById('clothes-input');
    const clothesExpenses = parseFloat(clothesInput.value);
    const expenses = foodExpenses + rentExpenses + clothesExpenses;

    document.getElementById('total-expenses').innerText = expenses;
    document.getElementById('balance').innerText = userIncome - expenses;
    // document.getElementById('income-input').value = '';
    userInput.value = '';
    foodInput.value = '';
    rentInput.value = '';
    clothesInput.value = '';
})