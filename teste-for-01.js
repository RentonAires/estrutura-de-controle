/**
 * contador
 * expressao
 * incremento
 */

let  contador = 1
while(contador <= 10){
    console.log('contador = ' + contador );
    contador ++
}

for(let  i = 1; i <= 10; i++){
    console.log('i = ' + i );  
}


/**
 * percorrendo array
 */
const notas = [6.3, 7.8, 10, 9.85, 12.45, ]
for(let i = 0; i < notas.length; i++){
    console.log('notas = ' + notas[i]);
}