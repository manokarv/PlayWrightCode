// function display() :void
// {

//     console.log("Hello")

// }
// display()

// function addNumber(x:number, y:number):number
// {
//     return x+y

// }
// //console.log(addNumber(5,7))
// let z:number= addNumber(12,24);

//Named function with rest parameter

function addNumbers(...nums:number[])
{
    let i:number;

    let sum:number=0

    for(i=0;i<nums.length;i++)
    {
       // sum =sum+nums[i];
       sum += nums[i]!
    }
    console.log("Sum of the number is:" + sum)
    


}
addNumbers(5,6,7);