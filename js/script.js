let difficulty = document.getElementById("difficulty");
let content = "";
let box = document.querySelector(".box");


function getSquares(value) {
    if (value == "easy") {
        content = "";
        for (let i = 1; i <= 100; i++) {
            content += 
            `
            <div class="square easy">${i}</div>
            `
        }
    }
    if (difficulty.value == "hard") {
        content = "";
        for (let i = 1; i <= 81; i++) {
            content +=
            `
            <div class="square hard">${i}</div>
            `
        }
    }
    if (difficulty.value == "extreme") {
        content = "";
        for (let i = 1; i <= 49; i++) {
            content +=
                `
            <div class="square extreme">${i}</div>
            `
        }
    }
    box.innerHTML = content;
}

function click(square){
    for (let i = 0; i < square.length; i++) {
        square[i].addEventListener("click", function () {
            square[i].classList.add("safe");
        })
    }
}


document.getElementById("btn").addEventListener("click", function() {
    getSquares(difficulty.value);
    let square = document.getElementsByClassName("square");
    click(square);
    
    
})


