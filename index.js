let num1 = 1

let num2 = 0





let resultado1 = somar(num1, num2)

function somar (num1, num2){
    return num1 + num2
}

console.log(resultado1)

//------------------------------------------------------------------

let num3 = 2

let num4 = 3


const subitrair = (num3,num4) => num3 - num4

let resultado2 = subitrair(num3, num4)

//function subitrair (num3,num4){
   // return num3-num4
//}



console.log(resultado2)

//------------------------------------------------------------------

let num5 = 1

let num6 = 0

let resultado3 = multiplicar(num5, num6)

function multiplicar (num5,num6){
    return num5*num6
}

console.log(resultado3)

//------------------------------------------------------------------

let num7 = 1

let num8 = 2


let resultado4 = dividir(num7, num8)

function dividir (num7,num8){
    
if(num8 == 0){
    return "erro"

}else {
    return num7/num8}

}

console.log(resultado4)

//------------------------------------------------------------------

let num9 = 1

let num10 = 3 


let resultado5 = potensiacao(num9, num10)

function potensiacao (num9,num10){
    return num9**num10
}

console.log(resultado5)