let red = document.getElementById('red');
let green = document.getElementById('green');
let blue = document.getElementById('blue');
let body = document.getElementById('body');
let ratio = document.getElementById('ratio');
var rf =0, gf=0,bf=0;
ratio.innerText = `RGB`;

red.addEventListener('click', () => {
    rf = red.value;
    body.style.backgroundColor = `rgb(${rf},${gf},${bf})`;
    ratio.innerText = `RGB(${rf},${gf},${bf})`;
    console.log(body);
})
green.addEventListener('click', () => {
    gf = green.value;
    body.style.backgroundColor = `rgb(${rf},${gf},${bf})`;
    ratio.innerText = `RGB(${rf},${gf},${bf})`;
    console.log(body);
})
blue.addEventListener('click', () => {
    bf = blue.value;
    body.style.backgroundColor = `rgb(${rf},${gf},${bf})`;
    ratio.innerText = `RGB(${rf},${gf},${bf})`;
    console.log(body);
})


