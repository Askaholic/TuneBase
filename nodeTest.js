const Parser = require('abcjs/parse/abc_parse');

const tune = "X: 1\nT: Riding On A Load Of Hay\nR: polka\nM: 2/4\nL: 1/8\nK: Emin\nE>F GA|Be ef/2e/2|dB AG|FD DF|nE>F GA|Be ee/2f/2|g/2f/2e B^d|e2 e2:|\n|:e2 ee/2f/2|g/2f/2e fd|eB B>^c|dB AG|\nFD De/2f/2|g/2f/2e fd|eB B>^c|dB AF|\nE2 Ee/2f/2|g/2f/2e fd|eB B>^c|dB AG|\nFD DF|EG FA|GB ee/2f/2|1 g/2f/2e B^d:|2 g/2f/2e af|| "
console.log(Parser);

var p = new Parser();
console.log(p);
p.parse(tune)
console.log(p.getTune());
