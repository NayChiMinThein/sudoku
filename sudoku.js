// // Digits 1-9 
let numbers = "";
for(let n = 1; n <= 9; n++){
    numbers += `<div class="numbers">${n}</div>`;
}
document.getElementById('digits').innerHTML = numbers;