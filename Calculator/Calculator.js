


var input = document.querySelector("input");

var no = document.querySelectorAll(".sub-middle");
var opr = document.querySelectorAll(".right-side");
var equal = document.querySelector(".equal");

no.forEach(digit => {
  digit.addEventListener('click', () => {
    if (digit.innerHTML === '00') {
      if (input.value === '0') {
        input.value = '0'; // Keep the value as 0 if it's already 0
      } else {
        input.value += '00';
      }
    } else if (digit.innerHTML === 'AC') {
      input.value = '0';
    }
    else if (digit.innerHTML === '.') {
      if (!input.value.includes('.')) { // Check if there's already a decimal point
        if (input.value === '') {
          input.value = '0.';
        } else {
          input.value += '.';
        }
      }
    }
    else if(digit.innerHTML === 'DE'){
      input.value = input.value.toString().slice(0,-1);
    }
    else {
      var val = digit.innerHTML;
      if (input.value === '0') {
        input.value = val;
      } else {
        input.value += val;
      }
    }
  });
});

opr.forEach(operator => {
  operator.addEventListener('click', () => {
    if (input.value && input.value !== '0') {
      var val = operator.innerHTML;
      input.value += val;
    }
  });
});

equal.addEventListener('click', () => {
  try {
    input.value = eval(input.value);
  } catch (e) {
    input.value = "Error";
  }
});
