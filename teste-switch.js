const imprimirResultado = function(nota){
    switch(Math.floor(nota)){
        case 10:
            console.log('sentença do caso');
            console.log(nota);
            
            break    
        case 9: 
            console.log('sentença do caso 02')
            console.log('com multiplas sentenças de codigo')
            console.log(nota);
            
            break
        case 8: case 7:
            console.log('sentença aprovada 8 e 7');
            console.log(nota);
            
            break
        case 6: case 5: case 4:
            console.log('sentança recuperaçao')
            console.log('numero 6,5 ou 4');
            console.log(nota);
             break

        case 3: case 2: case 1: case 0:
            console.log('reprovado');
            console.log('numero 3,2,1 ou 0');
            console.log(nota);
            break
            
            default:
            console.log('numero invalido!!')
            console.log(nota);
            break
    }
}

imprimirResultado(9.8)
imprimirResultado(9)
imprimirResultado(5)
imprimirResultado(3.4)
imprimirResultado(11)
