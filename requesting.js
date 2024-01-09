let no_bt = document.querySelector(".no_bt");
no_bt.addEventListener("mouseover",moveBt);
let asking_text = document.querySelector(".asking");

function moveBt(){
  let i = Math.floor(Math.random()*90) + 1;
  let j = Math.floor(Math.random()*88) + 1;

  no_bt.style.top = i + "vh";
  no_bt.style.left = j + "vw";
}

let yes_button = document.querySelector(".yes_bt");
yes_button.addEventListener("click",show);
let mocha2 = document.querySelector(".mocha2");
let mocha = document.querySelector(".mocha");

let clippath1 = document.querySelector(".clip_path1");
let clippath2 = document.querySelector(".clip_path2");
let clippath3 = document.querySelector(".clip_path3");
let clippath1another = document.querySelector(".clip_path1another");
let after_yes_div = document.querySelector(".after_yes");


function show(){
  mocha2.classList.add("show");
  mocha.classList.add("hide");
  clippath1.classList.add("hide");
  clippath2.classList.add("hide");
  clippath3.classList.add("hide");
  after_yes_div.classList.add("show");
  no_bt.classList.add("hide");
  yes_button.classList.add("hide");
  asking_text.classList.add("hide");

  yey();
}


function yey(){
  clippath1another.classList.add("animation_clippath1another");
  clippath2.classList.add("animation_clippath2");
  clippath3.classList.add("animation_clippath3");
}