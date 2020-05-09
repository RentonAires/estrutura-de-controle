function getInteiroAleatorioEntre(min, max){
    const valor = Math.random() * (max - min) +  min
    return Math.floor(valor)
}
let opcao = 0

do {
    opcao = getInteiroAleatorioEntre(-1, 20)
    console.log('opçao escolhida foi .' + opcao);
    console.log('mais um loop do Do While');
    
    
} while(opcao != -1)
console.log('fim!!');