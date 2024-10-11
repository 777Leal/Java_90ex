//--------------- Exercício 1 --------------//
let Banana = 50
let Picles = 90
let Beringela = 60

if(Banana> Picles && Beringela){
    console.log("Banana é maior")
}else if (Picles>Beringela &&  Banana){
    console.log("Picles é maior")
}else if(  Beringela>Picles && Banana){
    console.log("Beringela é maior")
};


//--------------- Exercício 2 --------------//
let Texto1 = `Opa, tá ok?`
let TextoCharat = (Texto1.charAt(0));
if (TextoCharat >= `A` && TextoCharat <= `Z`){
    console.log(`A primeira letra (${TextoCharat}) da palavra é maiúscula.`)
} else {
    console.log(`A primeira letra (${TextoCharat}) da palavra é minúscula.`)
}


//--------------- Exercício 3 --------------//
let graus= 20
if(graus<=15){
    console.log("Tá tremendo a friaca!")
}else if (graus>15 &&  graus <30){
console.log("Tranquilo papito, na temperatura ideal!")
}else if( graus>=30){
    console.log("Tá derretendo até os eggs!") }


//--------------- Exercício 4 --------------//
let AnoEscolhido = 2024

if (AnoEscolhido % 4 === 0){
    console.log(`Este ano é Bissexto.`)
} else {
    console.log(`Este ano não é Bissexto.`)
}


//--------------- Exercício 5 --------------//
function DIVISOR(PARAMS){
    return PARAMS % 5 ==0 ? "É divisor  de 5" : "Não é divisor de 5"
}
console.log(DIVISOR(19))


//--------------- Exercício 6 --------------//
let farol= "verde"

if (farol === "vermelho"){
    console.log("Pare o carro cacetudo!")
}else if  (farol === "verde"){
 console.log("Pode seguir, tá open papito")
} else if (  farol === "amarelo"){
 console.log("Cuidado, acelere até o talo")
}


//--------------- Exercício 7 --------------//
let Nprimo = 3;
let Nprimos = [1, 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]

if (Nprimos.includes(Nprimo)){
    console.log("É primo")
} else{
    console.log("Não é primo")
}


//--------------- Exercício 8 --------------//
let perfeito = 4;
let soma2 = 0;

for (let i = 1; i <= perfeito /2; i++) {
    if(perfeito % i === 0) {
        soma2 += i;
    }
}
for(;soma2 === perfeito;){
    console.log(`${perfeito} é um número perfeito`)
    break;
}
for(;soma2 !== perfeito;){
    console.log(`${perfeito} não é um número perfeito`)
    break;
}


//--------------- Exercício 10 --------------//
