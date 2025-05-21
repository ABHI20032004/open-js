#  solution code

## project 2

```javascript

const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = ' Please give a valid height.';
    return;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = ' Please give a valid weight.';
    return;
  }

  const BMI = (weight / (height ** 2 / 10000)).toFixed(2);

  let message = '';
  if (BMI < 18.6) {
    message = 'Underweight';
  } else if (BMI >= 18.6 && BMI <= 24.9) {
    message = 'Normal weight';
  } else {
    message = 'Overweight';
  }

  results.innerHTML = `Your BMI is : ${BMI}. Category: ${message}`;
});

```