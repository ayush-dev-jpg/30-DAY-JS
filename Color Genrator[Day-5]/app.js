let btn=document.querySelector("#gen");

btn.addEventListener("click",()=>{
    let h3=document.querySelector("#heading");
    let container=document.querySelector("#container");
    let randomColor=getRandomColor();
    h3.innerText=randomColor;
    container.style.backgroundColor=randomColor;
})

let  getRandomColor = ()=>{
    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);

    let color = `rgb(${red},${green},${blue})`
    return color
}