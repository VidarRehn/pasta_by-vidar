
let carbonaraServingsInput = document.querySelectorAll("select")[0];
let raguServingsInput = document.querySelectorAll("select")[1];
let funghiServingsInput = document.querySelectorAll("select")[2];

let carbonaraAmounts = document.querySelectorAll("#carbonara .amount");
let raguAmounts = document.querySelectorAll("#ragu .amount");
let funghiAmounts = document.querySelectorAll("#funghi .amount");

const carbonaraOriginalAmounts = [];
carbonaraAmounts.forEach((amount) =>{
    carbonaraOriginalAmounts.push(parseInt(amount.innerText));
})

const raguOriginalAmounts = [];
raguAmounts.forEach((amount) =>{
    raguOriginalAmounts.push(parseInt(amount.innerText));
})

const funghiOriginalAmounts = [];
funghiAmounts.forEach((amount) =>{
    funghiOriginalAmounts.push(parseInt(amount.innerText));
})

let carbonaraOptions = carbonaraServingsInput.querySelectorAll("option");
let raguOptions = raguServingsInput.querySelectorAll("option");
let funghiOptions = funghiServingsInput.querySelectorAll("option");


carbonaraServingsInput.addEventListener("change", ()=>{
    if (carbonaraServingsInput.value == 2){
        carbonaraAmounts.forEach((amount, index)=>{
            amount.innerText = `${(carbonaraOriginalAmounts[index])*0.5} `;
        })
    } else if (carbonaraServingsInput.value == 4){
        carbonaraAmounts.forEach((amount, index)=>{
            amount.innerText = `${(carbonaraOriginalAmounts[index])*1} `;
        })
    } else if (carbonaraServingsInput.value == 6){
        carbonaraAmounts.forEach((amount, index)=>{
            amount.innerText = `${(carbonaraOriginalAmounts[index])*1.5} `;
        })
    } else if (carbonaraServingsInput.value == 8){
        carbonaraAmounts.forEach((amount, index)=>{
            amount.innerText = `${(carbonaraOriginalAmounts[index])*2} `;
        })
    }
})

raguServingsInput.addEventListener("change", ()=>{
    if (raguServingsInput.value == 2){
        raguAmounts.forEach((amount, index)=>{
            amount.innerText = `${(raguOriginalAmounts[index])*0.5} `;
        })
    } else if (raguServingsInput.value == 4){
        raguAmounts.forEach((amount, index)=>{
            amount.innerText = `${(raguOriginalAmounts[index])*1} `;
        })
    } else if (raguServingsInput.value == 6){
        raguAmounts.forEach((amount, index)=>{
            amount.innerText = `${(raguOriginalAmounts[index])*1.5} `;
        })
    } else if (raguServingsInput.value == 8){
        raguAmounts.forEach((amount, index)=>{
            amount.innerText = `${(raguOriginalAmounts[index])*2} `;
        })
    }
})

funghiServingsInput.addEventListener("change", ()=>{
    if (funghiServingsInput.value == 2){
        funghiAmounts.forEach((amount, index)=>{
            amount.innerText = `${(funghiOriginalAmounts[index])*0.5} `;
        })
    } else if (funghiServingsInput.value == 4){
        funghiAmounts.forEach((amount, index)=>{
            amount.innerText = `${(funghiOriginalAmounts[index])*1} `;
        })
    } else if (funghiServingsInput.value == 6){
        funghiAmounts.forEach((amount, index)=>{
            amount.innerText = `${(funghiOriginalAmounts[index])*1.5} `;
        })
    } else if (funghiServingsInput.value == 8){
        funghiAmounts.forEach((amount, index)=>{
            amount.innerText = `${(funghiOriginalAmounts[index])*2} `;
        })
    }
})

