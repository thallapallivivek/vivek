const form = document.getElementById('bmi-form');
const weightInput = document.getElementById('weight');
const heightInput = document.getElementById('height');
const resultDiv = document.getElementById('result');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const weight = parseFloat(weightInput.value);
    const height = parseFloat(heightInput.value);

    if (isNaN(weight) || isNaN(height)) {
        resultDiv.innerText = 'Please enter valid numbers';
        return;
    }

    const bmi = calculateBMI(weight, height);
    const result = categorizeBMI(bmi);

    resultDiv.innerText = `Your BMI is ${bmi.toFixed(2)}. You are ${result}.`;
});

function calculateBMI(weight, height) {
    const heightInMeters = height / 100;
    return weight / (heightInMeters * heightInMeters);
}

function categorizeBMI(bmi) {
    if (bmi < 18.5) {
        return 'Underweight';
    } else if (bmi < 25) {
        return 'Normal';
    } else if (bmi < 30) {
        return 'Overweight';
    } else {
        return 'Obese';
    }
}