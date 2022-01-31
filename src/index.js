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

    let arrayWithWords = expr.split("**********");
    let mainArray = [];
    let result = '';
    
    for (let word of arrayWithWords) {
      for (let i = 0; i < word.length; i += 2) {
        let item = word.slice(i, i + 2);
        (item == '00') ? mainArray.push(' ') :
          (item == '10') ? mainArray.push('.') :
            (item == '11') ? mainArray.push('-') : mainArray;
      }
      mainArray.push("\n");
    }
    
    
    mainArray.length = mainArray.length - 1;
    
    for (let i = 0; i < mainArray.length; i += 5) {
      if (mainArray[i] == '\n') {
        i++;
        result = result + ' ';
      }
    
      let solution = mainArray.slice(i, i + 5).join('').trim();
      result = result + MORSE_TABLE[solution];
    }
    
    return result;
}

module.exports = {
    decode
}