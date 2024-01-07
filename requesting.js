let no_bt = document.querySelector(".no_bt");
no_bt.addEventListener("mouseover",moveBt);

function moveBt(){
  let i = Math.floor(Math.random()*100) + 1;
  let j = Math.floor(Math.random()*88) + 1;

  no_bt.style.top = i + "vh";
  no_bt.style.left = j + "vw";
}