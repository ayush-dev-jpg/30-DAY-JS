let textArea = document.querySelector("#charInp");
let value = document.querySelector("#value");

textArea.addEventListener('input',()=>{
    const currentLength = textArea.value.length;
    value.textContent =`${currentLength}`
})