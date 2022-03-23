let hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const bg = document.body.style.backgroundColor;
const btn = document.querySelector(".btn");
const title = document.getElementById("title");



btn.addEventListener("click", function(){
    let randomColor = "#";
    for(let i = 0; i < 6; i++){
        randomColor += hex[getRandom()];
    }
    document.body.style.backgroundColor = randomColor;
    title.innerHTML = "Background Color: " + randomColor;
})

function getRandom(){
    return Math.floor(Math.random() * hex.length);
}