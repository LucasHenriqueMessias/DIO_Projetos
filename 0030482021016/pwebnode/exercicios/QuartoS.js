const fs = require('fs');
const data = fs.readFileSync('Cidades_Quarto.txt'); 
console.log(data.toString());