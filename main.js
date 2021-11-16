
let spaghettiCarbonara = document.querySelector("#carbonara");
let gemelliFunghi = document.querySelector("#funghi");
let papardelleRagu = document.querySelector("#ragu");

let nextButton = document.querySelector(".next-btn");

function nextDish(){
    if (spaghettiCarbonara.classList.contains("hide") == false){
        spaghettiCarbonara.classList.add("hide");
        gemelliFunghi.classList.remove("hide");
    } else if (gemelliFunghi.classList.contains("hide") == false){
        gemelliFunghi.classList.add("hide");
        papardelleRagu.classList.remove("hide");
    } else {
        papardelleRagu.classList.add("hide");
        spaghettiCarbonara.classList.remove("hide");
    }
}

nextButton.addEventListener("click", nextDish);