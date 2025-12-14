/*function Search(num:number,arr:number[])
{
    for(let i=0;i<arr.length;i++)
    {
        if(num===arr[i])
        {
            return true
        }

    }
    return false

}

let word:number[]=[10,20,30,40,50]

console.log(Search(20,word))

console.log(Search(70,word)) */

// function capitalizeWords(arr: string[]): string[] {
//  let result: string[] = [];
//  for (let i = 0; i < arr.length; i++) {
//  result[i] = arr[i].toUpperCase();
//  }
//  return result;
// }
// let words: string[] = ["hello", "world", "typescript"];


/* let arr:string[]=["rt","rtt","tr"]

arr.push("ram","raj")

console.log(arr)

let case1 = arr.pop()
console.log(case1)

console.log(arr)

let case2 = arr.shift()

console.log(case2)

console.log(arr)

let case3 = arr.unshift("t1","t2")

console.log(case3)
console.log(arr)

let str:string[]=["j1","j2","j3"]

 let case4 = str.concat(arr)

 console.log(case4)


 let case5= arr.slice(1,4)

 console.log(case5)

 arr.splice(1,2,"j1","j2")

 console.log(arr) */

 //--------------------------------------------------------------------------------------
//forEach
/*  let fruits:string[]=["mango","banana","kiwi","Orange"]

 fruits.forEach(function(Element,index)
{
    console.log(`${index}`,`${Element}`)
})

fruits.forEach((element)=>
{
    console.log(`${element.toUpperCase()}`)

})
 */ 
//--------------------------------------------------------------------------------------

//map()
let num:number[]=[1,2,3,4,5,6,7,8]

/* let doubleNumbers=num.map((element)=>
{
    return(element+element)
})
 */

/* let doubleNumbers=num.map((element)=>(element+element))

console.log(doubleNumbers) */

//--------------------------------------------------------------------------------------
//filter()

let filtervalue = num.filter((n1)=>
{
    return(n1%2!==0)

})

console.log(filtervalue)