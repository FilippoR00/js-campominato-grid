let difficulty = document.getElementById("difficulty");
let content = "";
let box = document.querySelector(".box");

function getSquares(value) {
    if (value == "easy") {
        content = "";
        for (let i = 0; i < 100; i++) {
            content += 
            `
            <div class="square easy"></div>
            `
        }
    }
    if (difficulty.value == "hard") {
        content = "";
        for (let i = 0; i < 81; i++) {
            content +=
            `
            <div class="square hard"></div>
            `
        }
    }
    if (difficulty.value == "extreme") {
        content = "";
        for (let i = 0; i < 49; i++) {
            content +=
                `
            <div class="square extreme"></div>
            `
        }
    }
    box.innerHTML = content;
}




document.getElementById("btn").addEventListener("click", function() {
    getSquares(difficulty.value);


})
