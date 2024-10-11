//--------------- Exercício 1 --------------//
let digiteAqNum1 = 4;
let digiteAqNum2 = 2;

if (digiteAqNum1 % 2 === 0 && digiteAqNum2 % 2 === 0) {
    console.log(`Ambos os números são pares`);
} else {
    console.log(`Pelo menos um dos dois números não é par`)
}


//--------------- Exercício 2 --------------//
const nascimento= 2000

if (nascimento<=2006){
    console.log("Você tem mais de 18, parabéns Sr.Envelhecimentos")
}else{
    console.log("Volte mais tarde, quando tiver a idade necessária, já lance o 22!")
}


//--------------- Exercício 3 --------------//
let nota=  10
let  nota2=  0

let media=( nota+nota2) /2

if (media<=7){
    console.log("Você está reprovado")
}else{
    console.log("Você está aprovado")
}


//--------------- Exercício 4 --------------//
const idadeVotar= 2000

if (idadeVotar<=2006){
    console.log("Avonts, basta votar!")
}else{
    console.log("Volte mais tarde, quando ter 18 faça o 22")
}


//--------------- Exercício 5 --------------//
let a=10
let  b= 0

let maior=(a > b) ?  a : b;

console.log (`Número 1: ${a} Número 2:${b}, O maior é ${maior} `);


//--------------- Exercício 6 --------------//
let horas= 60
if(horas>=40){
    console.log("Você trabalhou mais de 40 horas");
}else {
    console.log("Vai trabalhar, vagabundo.")
};


//--------------- Exercício 7 --------------//
let numeroAleatório= 69
if(numeroAleatório>=50 &&  numeroAleatório<=100){
console.log(`Está entre 50 e 100`)
}else{
    console.log(`Não está entre 50 e 100`)
}


//--------------- Exercício 8 --------------//
let letter = "Jumento avantajado";

if ("aeiouAEIOU".includes(letter)) {
    console.log("Tem vogal");
} else {
    console.log("Não tem vogal");
}


//--------------- Exercício 9 --------------//
let mesRandom = "abril"
if (mesRandom === "dezembro" || mesRandom === "janeiro" || mesRandom === "julho"){
    console.log("Basta hibernar, descansar papito")
}else{
    console.log("Vai trabalhar papito, sustentar 17 filhos")
}


//--------------- Exercício 10 --------------//
let NotaRandom = 10
if(NotaRandom>=9){
    console.log("A")
}else if(NotaRandom >=8){
    console.log("B")
}
else if (NotaRandom >= 7){
    console.log("C")
}else if (NotaRandom >= 6){
console.log("D")
}  else if (NotaRandom >= 5){
    console.log("F")
}