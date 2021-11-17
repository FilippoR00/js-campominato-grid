let difficulty = document.getElementById("difficulty");
let content = "";
let box = document.querySelector(".box");
let bombs = [];

function getSquares(value) {
    if (value == "easy") {
        content = "";
        for (let i = 1; i <= 100; i++) {
            content += 
            `
            <div class="square easy">${i}</div>
            `
        }
        for (let i = 0; i < 10; i++) {
            bombs[i] = random(100, 1);
        }
        console.log(bombs);
    }
    if (difficulty.value == "hard") {
        content = "";
        for (let i = 1; i <= 81; i++) {
            content +=
            `
            <div class="square hard">${i}</div>
            `
        }
        for (let i = 0; i < 10; i++) {
            bombs[i] = random(81, 1);
        }
        console.log(bombs);
    }
    if (difficulty.value == "extreme") {
        content = "";
        for (let i = 1; i <= 49; i++) {
            content +=
                `
            <div class="square extreme">${i}</div>
            `
        }
        for (let i = 0; i < 10; i++) {
            bombs[i] = random(49, 1);
        }
        console.log(bombs);
    }
    box.innerHTML = content;
}

function click(square){
    for (let i = 0; i < square.length; i++) {
        square[i].addEventListener("click", function () {
            square[i].classList.add("safe");
            for (let j = 0; j < bombs.length; j++) {
                if(i == bombs[j]){
                    square[i].classList.remove("safe");
                    square[i].classList.add("bomb");
                }
            }
        })
    }
}

function random(max, min) {
    let randNum = Math.floor(Math.random() * (max - min + 1) + min);
    return randNum;
}

document.getElementById("btn").addEventListener("click", function() {
    getSquares(difficulty.value);
    let square = document.getElementsByClassName("square");
    click(square);
    
    
})


