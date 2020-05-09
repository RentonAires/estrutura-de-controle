function getInteiroAleatorioEntre(min, max){
    const valor = Math.random() * (max - min) +  min
    return Math.floor(valor)
}
let opcao = 0

while(opcao != -1) {
    opcao = getInteiroAleatorioEntre(-1, 20)
    console.log('opçao escolhida foi .' + opcao);
    console.log('mais um loop do while');
    
    
}
console.log('fim!!');




/**
 * enquanto a a expressao for verdadeira
 * continua e executando 
 */