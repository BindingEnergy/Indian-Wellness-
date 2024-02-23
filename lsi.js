let calculateButton = document.querySelector('#calculate');
calculateButton.addEventListener('click', calculateBMI);

function calculateBMI() {
    let age = parseFloat(document.querySelector('#age').value);
    let weight = parseFloat(document.querySelector('#weight').value);
    let height = parseFloat(document.querySelector('#height').value);

    let bmi = weight / (height * height);

    let resultElement = document.querySelector('#result');
    resultElement.textContent = 'Your BMI is: ' + bmi.toFixed(2);

    if (bmi < 19.5) {
        resultElement.textContent += ' You are Underweight !';
    } else if (bmi >= 19.5 && bmi < 25) {
        resultElement.textContent += ' - You are Healthy !';
    } else if (bmi > 25){
        resultElement.textContent += ' You are Overweight !';
    } else {
        resultElement.textContent += ' Enter valid values!';
    }


}