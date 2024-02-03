/* Write a JavaScript code to reverse the array colors without using the reverse method.
Input: const colors = ['red', 'blue', 'green', 'yellow', 'orange']
Output:
['orange', 'yellow', 'green', 'blue', 'red'] */
//alt+shift+a-to comment multiple line 
//shift+/=>for single line comment
let colors=['red','blue','green','yellow','orange'];
for(let i=colors.length-1;i>=0;i--)
{
    console.log(colors[i]);
}
