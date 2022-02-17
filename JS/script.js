function getInput(inpt) {
    const userInput = document.getElementById(inpt + 'input');
    const userIncome = parseFloat(userInput);
    return userIncome;
}
const userInput = document.getElementById('income-input').addEventListener('focus', function () {
    const he = getInput('income');
    console.log(he);
})

/* document.getElementById('calculate-expenses').addEventListener('click', function () {
    const userInput = document.getElementById('income-input');
    const userIncome = parseFloat(userInput.value);
    const foodInput = document.getElementById('food-input');
    const foodExpenses = parseFloat(foodInput.value);
    const rentInput = document.getElementById('rent-input');
    const rentExpenses = parseFloat(rentInput.value);
    const clothesInput = document.getElementById('clothes-input');
    const clothesExpenses = parseFloat(clothesInput.value);
    const expenses = foodExpenses + rentExpenses + clothesExpenses;

    if (expenses > userIncome) {
        document.getElementById('display-expenses-balance').style.display = 'none';
        document.getElementById('expenses-error').style.display = 'block';
    }
    else if (foodExpenses < 0) {
        document.getElementById('food-error').style.display = 'block';
    }
    document.getElementById('total-expenses').innerText = expenses;
    document.getElementById('balance').innerText = userIncome - expenses;
    // document.getElementById('income-input').value = '';
    userInput.value = '';
    foodInput.value = '';
    rentInput.value = '';
    clothesInput.value = '';
}) */