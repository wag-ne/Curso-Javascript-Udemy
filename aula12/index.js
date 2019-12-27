let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

const varTempA = varA;
varA = varB;
varB = varC;
varC = varTempA;


console.log(varA, varB, varC)