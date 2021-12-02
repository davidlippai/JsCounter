let counterNumber = 0;
let counterValue = document.getElementById("number");
let decreaseBtn = document.getElementById("decrease");
let resetBtn = document.getElementById("reset");
let increaseBtn = document.getElementById("increase");

decreaseBtn.addEventListener('click', function(){
  counterNumber--;
  counterValue.textContent = counterNumber;
})

increaseBtn.addEventListener('click', function(){
  counterNumber++;
  counterValue.textContent = counterNumber;
})

resetBtn.addEventListener('click', function(){
  counterNumber = 0;
  counterValue.textContent = 0;
})
