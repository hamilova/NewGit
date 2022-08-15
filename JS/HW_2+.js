
   /*  for (let i = 1; i < 11; i++) {
    console.log (2**i)    }
    

    for (let i = 1; i < 11; i++) {
        console.log (Math.pow(2,i))    } */


/* const pow = function(counter) {
    for(let i = 1;i <=counter; i++){
        console.log(2**i)
    }
}       
pow(20)*/

let result = ''
let smile = ';)'
/*for (let i = 1; i < 6; i++){
    console.log(result += smile);
}*/
/* for (let i = 0; i < 6; i++) {
    console.log(smile.repeat(i))
} */

/* function smilik(str,numberOfRows) {
    for (let i = 1; i<=numberOfRows; i++) {
        result= result+ str
        console.log(result)
          }
}
smilik(';(',10) 
 */


/* function getWordStructure(word) {
    const vowels = 'aeiuyo'.split('');
    const consonants = 'qwrtpsdfghjklmnbvcxz'.split('');

    let vowelsCount = 0;
    let consonantsCount = 0;
    for (const char of word.toLowerCase()) {
       if(vowels.includes(char)) vowelsCount++
       else if(consonants.includes(char)) consonantsCount++
    }
    console.log(`v slove ${word} : ${vowelsCount} soglasnih i ${consonantsCount} glasnih bukv`)
}
getWordStructure("Check-list") */


/* function getWordStructure2(word) {
    console.log(`v slove ${word} : ${(word.match(/[aeiuyo]/gi)).length} soglasnih i  ${(word.match(/[qwrtpsdfghjklmnbvcxz]/gi)).length} glasnih bukv`)
    
}
getWordStructure2("Check-list") */


/* function getWordStructure2(word) {
    console.log(`v slove ${word} :
     ${(word.match(/[aeiuyo]/gi)) ? (word.match(/[aeiuyo]/gi)).length: 0} //eto ternarnii operator, on utochniaet, chto znachenie ne NULL
      soglasnih i  ${(word.match(/[qwrtpsdfghjklmnbvcxz]/gi)).length} glasnih bukv`)
    
}
getWordStructure2("Check-list") */



/* function isPalindrom(word) {
    word= word.toLowerCase()
  for( let i = 0, j = word.length - 1;i<word.length, j>=0; i++,j--)  {
    if(word[i] !== word[j]){return false}
}
return true}

console.log(isPalindrom('Abba')) */


function isPalindrom2(word){
    return word.toLowerCase() === word.toLowerCase().split('').reverse().join('')
}
console.log(isPalindrom2('Abba'))


function isPalindrom3(word){
    word=word.toLowerCase()
    for(let i = 0;i<= word.length/2;i++)
{if(word[i] !== word[word.length-1-i])return false}
return true
}
console.log(isPalindrom3('Abba'))