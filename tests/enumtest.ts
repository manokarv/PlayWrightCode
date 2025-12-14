// enum pub{
//     "kf",
//     "df","sf"
// }

// console.log(pub[2])

// //print the 4 to 0 numbers

// for(let i=4;i>=0;i--)
// {
//     console.log("Value of i is: ", i)
// }


// let myName:string = "My Name is Vyankatesh"

// for(let i=0;i<myName.length;i++)
// {
//     console.log("Array is: ", myName[i])
// }

// for(let i of myName)
// {
//     console.log(i.toUpperCase())
// }
export{}

let arr: number[][] = [[12,34,65,78,5],[43,343,343,34,54]]
for(let i =0; i<arr.length;i++)
{
  for(let j=0;j<arr[i].length;j++)
  {
    console.log(arr[i][j])
  }
}


let arr1: number[][] = [
  [12, 34, 65],
  [43, 343, 343]
];

for (let i = 0; i < arr1.length; i++) {
    if (arr1[i]) {
  for (let j = 0; j < arr1[i].length; j++) {
    console.log(arr1[i]![j]!);
  }
}
}
