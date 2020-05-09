function soBoaNoticia(nota){
    if(nota >= 7){ //testando condiçao SE for verdadeira
        console.log('aprovado com ' + nota);
        
    }
}

soBoaNoticia(8.1);


function soSeForVerdade(valor){
    if(valor){
        console.log('É verdade... ' + valor);
        
    }
}

soSeForVerdade() //falso
soSeForVerdade(null) //falso
soSeForVerdade(undefined) //falso
soSeForVerdade(NaN) //falso
soSeForVerdade('') //falso
soSeForVerdade(0) //falso
soSeForVerdade(-1) //verdade
soSeForVerdade(' ') //verdade
soSeForVerdade([]) //verdade
soSeForVerdade([1, 2]) //verdade
soSeForVerdade({}) //verdade
soSeForVerdade('?') //verdade