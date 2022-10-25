const imprimirNome = (nome) => {
    return `Olá ${nome}`
}

imprimirNome("Ozemela")


console.log(imprimirNome("Maria"))

const imprimir = function(nome){
    console.log(`Olá ${nome}, isso é uma função não nomeada`)
}

imprimir("Livia")



const numeroPar = (num) =>{
    const par = num % 2 
    const verificarPar = par === 0
    const soma = num + 10
    const mult = num*num

    return`O número ${num} é par? ${verificarPar}. Somando com 10 
    o resultado é ${soma} e multiplicado por ele mesmo é ${mult}`
}


console.log(numeroPar(2))


const numPar2 = function (){
    const par = num % 2 
    const verificarPar = par === 0
    const soma = num + 10
    const mult = num*num

    return`O número ${num} é par? ${verificarPar}. Somando com 10 
    o resultado é ${soma} e multiplicado por ele mesmo é ${mult}`

}


const autenticar = (login,senha) => {
    const  loginArmazenado = "Arthur"
    const senhaArmazenada = "1234"

    const loginVerificado = loginArmazenado === login
    const senhaVerificada = senhaArmazenada === senha

    const logar = loginVerificado && senhaVerificada 
    return logar

}

console.log(autenticar("Arthur", "1234"))


const maiorIdade = (nome, anoNascimento, anoAtual) =>{
    
    const idade = anoAtual - anoNascimento
    const verificacao = idade >= 18
    return `${nome} é maior de idade? ${verificacao}`

}

console.log(maiorIdade("Arthur", "1999", "2022"))





