/*Autor:     Geanderson de Araújo
Objetivo:    Testa se são maiores ou menores que 10 e 20(apenas essas duas comparações contempladas) e se os números inseridos são iguais.
Versão:      1.0
*/

function verifyNumbers(a, b){
(a === b)?console.log(' Os números '+a+' e ' +b+ ' são iguais.'):console.log(' Os números '+a+' e '+b+' não são iguais.');

    console.log('Sua soma é '+ (a+b)+ ' que é'+ (a+b >10?' maior ':' menor ')+ 'que 10 e'+ (a+b >20?' maior ':' menor ')+'que 20.');
        
}
verifyNumbers(2, 11);
verifyNumbers(2, 15);
verifyNumbers(34, 90);
verifyNumbers(2, 2);



