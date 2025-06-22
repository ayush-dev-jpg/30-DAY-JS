let count=0;
let b1 = document.querySelector("#increment");
let display = document.querySelector("#counter");
let b2=document.querySelector("#decrement");
let reset=document.querySelector("#reset");
b1.addEventListener("click",()=>{
    count++;
    display.innerText = count;
})
b2.addEventListener("click",()=>{
    count--;
    display.innerText = count;
})
reset.addEventListener("click",()=>{
    count=0;
    display.innerText = count;
})
