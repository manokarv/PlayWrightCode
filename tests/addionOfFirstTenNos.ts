//Write a program to calculate the sum of the first 10 natural numbers using a while loop. 

let i:number=1
let j:number=0;
while(i<=10)
{
    j=i+j;
    //console.log(`sum of the first 10 natural numbers is ${j}`)
    i++
}
console.log(`sum of the first 10 natural numbers is ${j}`)