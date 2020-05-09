const notas = [6.7, 7.5, 8.2, 9.1, 9.9 ]

for(let i in notas){
    console.log('indice '+ i,'valor de nota ' + notas[i])
}

const pessoa = {
    nome: 'ana',
    sobreNome: 'silva',
    idade: 29,
    peso: 72,
    altura: 1.82
}
for(let atributo in pessoa){
    console.log(atributo, pessoa[atributo]);
    
}