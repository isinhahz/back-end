/************************************************************************
 * Objetivo: Apresentar comandos básicos de node.js
 * Autor: Isabelle
 * Data: 29/07/2025
 * Versão: 1.0
 *************************************************************************/

//Comentário em linha
/*
  Comentário em bloco
*/

//Import da classe readline no node.JS
var readline = require('readline')

//Cria uma interface de comunicação com o terminal para entrada e saída de dados 
// interagindo com o usuário

var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


entradaDeDados.question('Digite seu nome:', function(nome){

    var nomeUsuario = nome
//Validação de entrada de dados vazio
    if(nomeUsuario == ''){
        console.log('ERRO: Não foi possivel processar a requisição, campo obrigatório')
    }else{
        //String() -> converte uma variavel em String
        //toUpperCase() -> converte o conteúdo de uma variável em MAIUSCULO
         console.log('O nome digitado foi: ' + String(nomeUsuario).toUpperCase())
    console.log(nome)
    }
   
})

/*
//Permite escrever o conteúdo de uma String ou objeto no terminal
console.log('Aula 01 de node.JS')

//Permite criar uma variável
var nome = 'Isabelle'

//Exemplo de concatenação de conteúdos (String + variável)
console.log('O nome digitado foi: ' + nome)

//Concatena usando a crase no lugar da aspas, para colocar a variavel dentro do bloco
console.log(`O nome digitado foi: ${nome}`)

//typeof() -> Retorna o tipo de dados de uma variavel ou objeto

console.log(typeof(nome))

*/