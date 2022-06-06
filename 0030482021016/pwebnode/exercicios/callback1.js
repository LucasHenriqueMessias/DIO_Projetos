const prompt = require('prompt-sync')();

function saudacao(nome){
	console.log(' Olá ' + nome +', tudo bem?');
}

function entradaNome(callback){
	var nome = prompt('Digite seu nome: ');
	callback(nome);
}

entradaNome(saudacao);