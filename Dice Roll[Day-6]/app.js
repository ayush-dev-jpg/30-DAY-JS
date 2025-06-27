let btn=document.querySelector("#dice");
let output=document.querySelector("#output");
btn.addEventListener("click",()=>{
   let result= getRandomNum();
   output.innerText = `You rolled: ${result}`;
})
let getRandomNum=()=>{
   let num= Math.floor(Math.random()*6)+1;
return num;
}