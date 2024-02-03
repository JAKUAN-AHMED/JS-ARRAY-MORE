/* Reverse the words of a sentence. Only the position of the word will be reversed. check out the output
Input: const statement = 'I am a hard working person'
Output:
'person working hard a am I' */


//if you want to reverse as word use space in bracket else remove space in brackets

let statement='hello,I am here to talk with you';
let modified=statement.split(' ').reverse().join(' ');
console.log(modified);

