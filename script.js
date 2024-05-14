let numberOne = Number(prompt('Digite o primeiro numero: '))
let numberTwo = Number(prompt('Digite o segundo numero: '))

const soma = numberOne + numberTwo
const subtracao = numberOne - numberTwo
const multiplicacao = numberOne * numberTwo
const divisao = numberOne / numberTwo
const restDivisao = numberOne % numberTwo

alert(`Os resultados da operação: Soma: ${soma}`)
alert(`Os resultados da operação: Subtração: ${subtracao}`)
alert(`Os resultados da operação: Multiplicação: ${multiplicacao}`)
alert(`Os resultados da operação: Divisao: ${divisao}`)
alert(`Os resultados da operação: Resto da Divisao: ${restDivisao}`)
if ((soma % 2) === 0){
  alert(`Os resultados da Soma é PAR: ${soma}`)
} else {
  alert(`Os resultados da Soma é IMPAR: ${soma}`)
}

if(numberOne != numberTwo){
  alert('Os Numeros inseridos sao diferentes')
} else {
  alert('Os Numeros inseridos sao iguais')
}
