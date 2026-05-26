
//car
let carArr = [];

class Car {
   
    constructor(nome, preco, alturaCacamba, alturaVeiculo, alturaSolo, capacidadeCarga, motor, potencia, volumeCacamba, roda, image){
       this.nome = nome;
       this.preco = preco;
       this.alturaCacamba = alturaCacamba;
       this.alturaVeiculo = alturaVeiculo;
       this.alturaSolo = alturaSolo;
       this.capacidadeCarga = capacidadeCarga;
       this.motor = motor;
       this.potencia = potencia;
       this. volumeCacamba = volumeCacamba;
       this.roda = roda;
       this.image = image;
    }
} 

// search on array if exist carClass returning 1 if not return -1
function GetCarArrPosition(arr, carClass) {
    for(let i = 0; i < arr.length; i++){
        if(arr[i].nome  === carClass.nome)
            return i;
    }
    return -1;
}

function SetCarToCompare(el, carClass) {
   
    if(carClass instanceof Car){       
        if(el.checked){
            carArr.push(carClass);
    
            
        } else {
          carArr.pop(carClass);
        } 
    } else {
        throw "You need set a Car Class";
    }
}

function ShowCompare() {
    if(carArr.length != 2) {
        alert("Precisa marcar 2 carros para apresentar a comparação");
        return;
    }

    UpdateCompareTable();
    document.getElementById("compare").style.display = "block";
}

function HideCompare(){
    document.getElementById("compare").style.display = "none"; 
}

function UpdateCompareTable() {
    document.getElementById("compare_image_0").src = carArr[0].image;
    document.getElementById("compare_image_1").src = carArr[1].image;

    document.getElementById("compare_modelo_0").textContent = carArr[0].nome;
    document.getElementById("compare_modelo_1").textContent = carArr[1].nome;

    document.getElementById("compare_alturacacamba_0").textContent = carArr[0].alturaCacamba;
    document.getElementById("compare_alturacacamba_1").textContent = carArr[1].alturaCacamba;

    document.getElementById("compare_alturaveiculo_0").textContent = carArr[0].alturaVeiculo;
    document.getElementById("compare_alturaveiculo_1").textContent = carArr[1].alturaVeiculo;

    document.getElementById("compare_alturasolo_0").textContent = carArr[0].alturaSolo;
    document.getElementById("compare_alturasolo_1").textContent = carArr[1].alturaSolo;
    
    document.getElementById("compare_capacidadecarga_0").textContent = carArr[0].capacidadeCarga;
    document.getElementById("compare_capacidadecarga_1").textContent = carArr[1].capacidadeCarga;
    
    document.getElementById("compare_motor_0").textContent = carArr[0].motor;
    document.getElementById("compare_motor_1").textContent = carArr[1].motor;

    document.getElementById("compare_potencia_0").textContent = carArr[0].potencia;
    document.getElementById("compare_potencia_1").textContent = carArr[1].potencia;

    document.getElementById("compare_volumecacamba_0").textContent = carArr[0].volumeCacamba;
    document.getElementById("compare_volumecacamba_1").textContent = carArr[1].volumeCacamba;

    document.getElementById("compare_roda_0").textContent = carArr[0].roda;   
    document.getElementById("compare_roda_1").textContent = carArr[1].roda;   

    document.getElementById("compare_preco_0").textContent = carArr[0].preco;
    document.getElementById("compare_preco_1").textContent = carArr[1].preco;   
}
