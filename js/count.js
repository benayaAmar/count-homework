let count = 0;
let plus = document.getElementById("plus");
let reduce = document.getElementById("minus");
let score = document.getElementById("score");



function add() {
    count += 1;
    score.innerHTML = count;
    let bgColor = randColor();
    document.body.style.backgroundColor = bgColor;
}
function minus() {
    count -= 1;
    score.innerHTML = count;
    let bgColor = randColor();
    document.body.style.backgroundColor = bgColor;
}


//
function randColor() {

    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let a = Math.random();

    return "rgba(" + r + "," + g + "," + b + "," + a + ")";
  }

//   function changeRandColor() {
//     let bgColor = randColor();

//   }
