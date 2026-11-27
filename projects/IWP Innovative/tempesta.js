const basePrice=2500000;
const configBtn= document.getElementById("configtemp");


configBtn.onClick()= function(){
    localStorage.setItem("baseModel", JSON.stringify(basePrice));
    window.location.href='Assesories.html';
}