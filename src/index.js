const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let mus = expr.split("**********");
    let musWord=[];
    let result=[];   
    let letterBin="";
    let str="";
    let count=0;
    function letter(str){
     let result="";   
     for (let i=str.length-1; i>=0; i-=2){
         if (str[i-1]+str[i]=="10"){
             result+=".";
         }else if (str[i-1]+str[i]=="11"){
             result+="-";
         }
     }
     let newResult=result.split("").reverse().join("");
     return MORSE_TABLE[newResult];
    }
    for (let i=0; i<mus.length; i++){
        for (let j=0; j<mus[i].length; j++){
         count++;
         str+=mus[i][j];
         if (count==10){
                count=0;
                musWord.push(letter(str));
                str="";
         }
      }
      result.push(musWord.join(""));
      musWord.splice(0);
    }
    return result.join(" ");
 }

module.exports = {
    decode
}
