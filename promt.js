const prompt = require("prompt-sync")();

let nombre = prompt ("¿Cual  es tu nombre? ")
let edad = prompt ("¿cual es tu edad? ")
let comuna = prompt ("¿En que comuna vives? ")
console.log(`Hola mundo mi nombre es ${nombre}`)



//Tarea 

let nombre2 = prompt ("Cual es tu nombre?")
let trabajo = prompt ("¿Cual es el nombre de tu trabajo? ")
let adjetivo1 = prompt (" adjetivo " )   
let adjetivo2 = prompt (" adjetivo ")
let comida1 = prompt ( "¿Que tienes para comer?")
let comida2 = prompt ("¿Que postres comeras? ")
let sentimiento = prompt ("¿Como te sientes hoy?")
console.log(`${nombre} comenzó hoy su primer curso de Generation.

 Está entrenando para ser ${trabajo}
 Encontró que su grupo era muy ${adjetivo1}, pero su profesor era, al menos, ${adjetivo2}.

 y mi segunda comida favorita es ${comida1}
 Para el postre tiene ${comida2} y mientras revisa sus apuntes.
 Se siente ${sentimiento}, pero esta muy bien.`)
