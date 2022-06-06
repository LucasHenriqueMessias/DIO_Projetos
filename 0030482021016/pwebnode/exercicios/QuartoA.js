const fs = require('fs');
fs.readFile('Cidades_Quarto.txt', (err, data) =>{
	if(err) throw err;
	console.log(data.toString());
});

for (var i = 1; i <= 10; i++){
	console.log("Segunda parte = " + i);
}