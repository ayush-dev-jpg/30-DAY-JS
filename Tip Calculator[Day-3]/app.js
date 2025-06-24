let btn = document.querySelector("#calc");
btn.addEventListener("click",()=>{
    let bill = parseFloat(document.querySelector("#billAmount").value);
    let tip = parseFloat(document.querySelector("#tip").value);

    let tipAmount = bill * (tip/100);
    let total = bill+tipAmount;

    let result = document.querySelector("#result");
    result.innerText= `Tip: ₹${tipAmount.toFixed(2)} | Total: ₹${total.toFixed(2)}`;
})
