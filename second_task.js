/* Write a JavaScript code to get the even numbers from an array using any looping technique.
Input: const numbers = [12, 98, 5, 41, 23, 78, 46];
Output:
[12, 98, 76, 46] */

const numbers=[1,3,4,6,8,9];
for(let i=0;i<numbers.length;i++)
{
    if((numbers[i]&1)==0)
    {
        console.log(numbers[i]);
    }
}
