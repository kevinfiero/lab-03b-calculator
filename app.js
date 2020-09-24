// import functions and grab DOM elements

const firstVal = document.getElementById('first');
const secondVal = document.getElementById('second');
const calcVal = document.getElementById('calculate');
const outputVal = document.getElementById('output');

// set event listeners to update state and DOM

calcVal.addEventListener('click', () => {  
     
    const result = Number(firstVal.value) + Number(secondVal.value);
    outputVal.textContent = result;
    firstVal.value = "";
    secondVal.value ="";
})