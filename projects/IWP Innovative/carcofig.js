let ruggito= document.getElementById('RuggitoBtn');
let soaring= document.getElementById('SoaringBtn');
let opera= document.getElementById('operaBtn');
const audio= document.getElementById('RuggitoSound');
const audio1= document.getElementById('SgorgareSound');
const audio2= document.getElementById('OperaSound');
let play = false;
let play1 = false;
let play2 = false;
const aero1= document.getElementById('Aero1');
const aero2= document.getElementById('Aero2');
const aero3= document.getElementById('Aero3');
const exh1= document.getElementById('Exhaust1');
const exh2= document.getElementById('Exhaust2');
const exh3= document.getElementById('Exhaust3');
const eng1= document.getElementById('Engine1');
const eng2= document.getElementById('Engine2');
const eng3= document.getElementById('Engine3');
const int1= document.getElementById('Interior1');
const int2= document.getElementById('Interior2');
const int3= document.getElementById('Interior3');
const finalbtn = document.getElementById('revealFinal');
let summary = document.getElementById('Mysummary');
const BookBtn= document.getElementById('Book');
const menuBtn = document.getElementById('menuOpen');
const closeBtn = document.getElementById('menuClose');
let navOverlayBg = document.querySelector('.carNavOverlayBg');

menuBtn.onclick = function() {
    navOverlayBg.style.display = 'block';
    navOverlayBg.style.transition = 'all 0.5s ease-in-out';
}
closeBtn.onclick = function() {
    navOverlayBg.style.display = 'none';
    navOverlayBg.style.transition = 'all 0.5s ease-in-out';
}
let net;

function CarDetails(baseModelPrice) {
    this.baseModelPrice = baseModelPrice;
    this.aerodynamics = 0;
    this.exhaust = 0;
    this.engineTuning = 0;
    this.interior = 0;
    this.name = '';
}
const cars= [];
const stored = localStorage.getItem("baseModel");
const basePrice = stored ? parseFloat(stored) : 0;
let currentCarIndex = -1;

if (basePrice==2500000){
    cars[0] = new CarDetails(2500000);
    cars[0].name = 'Tempesta';
    currentCarIndex = 0;
    aero1.onclick = function (){
        cars[0].aerodynamics=120000.00;
    }
    aero2.onclick = function (){
        cars[0].aerodynamics=240000.00;
    }
    aero3.onclick = function (){
        cars[0].aerodynamics=500000.00;
    }
    exh1.onclick = function (){
        cars[0].exhaust=240000.00;
    }
    exh2.onclick = function (){
        cars[0].exhaust=240000.00;
    }
    exh3.onclick = function (){
        cars[0].exhaust=320000.00;
    }
    eng1.onclick = function (){
        cars[0].engineTuning=120000.00;
    }
    eng2.onclick = function (){
        cars[0].engineTuning=240000.00;
    }
    eng3.onclick = function (){
        cars[0].engineTuning=500000.00;
    }
    int1.onclick = function (){
        cars[0].interior=240000.00;
    }
    int2.onclick = function (){
        cars[0].interior=240000.00;
    }
    int3.onclick = function (){
        cars[0].interior=320000.00;
    }
}
else if (basePrice==3800000){
    cars[1] = new CarDetails(3800000);
    cars[1].name = 'Lusso V10';
    currentCarIndex = 1;
    aero1.onclick = function (){
        cars[1].aerodynamics=120000.00;
    }
    aero2.onclick = function (){
        cars[1].aerodynamics=240000.00;
    }
    aero3.onclick = function (){
        cars[1].aerodynamics=500000.00;
    }
    exh1.onclick = function (){
        cars[1].exhaust=240000.00;
    }
    exh2.onclick = function (){
        cars[1].exhaust=240000.00;
    }
    exh3.onclick = function (){
        cars[1].exhaust=320000.00;
    }
    eng1.onclick = function (){
        cars[1].engineTuning=120000.00;
    }
    eng2.onclick = function (){
        cars[1].engineTuning=240000.00;
    }
    eng3.onclick = function (){
        cars[1].engineTuning=500000.00;
    }
    int1.onclick = function (){
        cars[1].interior=240000.00;
    }
    int2.onclick = function (){
        cars[1].interior=240000.00;
    }
    int3.onclick = function (){
        cars[1].interior=320000.00;
    }
}
else if (basePrice==5000000){
    cars[2] = new CarDetails(5000000);
    cars[2].name = 'Straventa';
    currentCarIndex = 2;
    aero1.onclick = function (){
        cars[2].aerodynamics=120000.00;
    }
    aero2.onclick = function (){
        cars[2].aerodynamics=240000.00;
    }
    aero3.onclick = function (){
        cars[2].aerodynamics=500000.00;
    }
    exh1.onclick = function (){
        cars[2].exhaust=240000.00;
    }
    exh2.onclick = function (){
        cars[2].exhaust=240000.00;
    }
    exh3.onclick = function (){
        cars[2].exhaust=320000.00;
    }
    eng1.onclick = function (){
        cars[2].engineTuning=120000.00;
    }
    eng2.onclick = function (){
        cars[2].engineTuning=240000.00;
    }
    eng3.onclick = function (){
        cars[2].engineTuning=500000.00;
    }
    int1.onclick = function (){
        cars[2].interior=240000.00;
    }
    int2.onclick = function (){
        cars[2].interior=240000.00;
    }
    int3.onclick = function (){
        cars[2].interior=320000.00;
    }
}

finalbtn.onclick = function(){
    if(currentCarIndex >= 0 && cars[currentCarIndex]) {
        const currentCar = cars[currentCarIndex];
        
        net = currentCar.aerodynamics + currentCar.engineTuning + currentCar.interior + currentCar.exhaust;
        const totalPrice = currentCar.baseModelPrice + net;
        
    
        summary.style.display = "block";
        summary.innerHTML = `
            <h3>Car Configuration Summary</h3>
            <p><strong>Model:</strong> ${currentCar.name}</p>
            <p><strong>Base Price:</strong> $${currentCar.baseModelPrice.toLocaleString()}</p>
            <p><strong>Aerodynamics:</strong> $${currentCar.aerodynamics.toLocaleString()}</p>
            <p><strong>Exhaust:</strong> $${currentCar.exhaust.toLocaleString()}</p>
            <p><strong>Engine Tuning:</strong> $${currentCar.engineTuning.toLocaleString()}</p>
            <p><strong>Interior:</strong> $${currentCar.interior.toLocaleString()}</p>
            <p><strong>Customization Total:</strong> $${net.toLocaleString()}</p>
            <span>Grand Total: $${totalPrice.toLocaleString()}</span>
        `;
    } else {
        summary.style.display = "block";
        summary.innerHTML = "<p>Please select a car model first.</p>";
    }
}




ruggito.onclick = function() {
    if(!play){
        if(play1||play2){
            audio1.pause();
            audio2.pause();
            play1=false;
            play2=false;
            audio.play();
            play=true;
        }
        else{
        audio.play();
        play=true;
        }
    }
    else{
        audio.pause();
        play=false;
    }
}
soaring.onclick = function() {
    if(!play1){
        if(play2||play){
            audio.pause();
            audio2.pause();
            play=false;
            play2=false;
            audio1.play();
            play1=true;
        }
        else{
        audio1.play();
        play1=true;
        }
    }
    else{
        audio1.pause();
        play1=false;
    }   
}
opera.onclick = function() {
    if(!play2){
        if(play1||play){
            audio1.pause();
            audio.pause();
            play1=false;
            play=false;
            audio2.play();
            play2=true;
        }
        else{
        audio2.play();
        play2=true;
        }
    }
    else{
        audio2.pause();
        play2=false;
    }   
}
