// // function add(i:number,j:number)
// // {
// //     return i+j;
// // }

// //import { setMaxIdleHTTPParsers } from "http"

// // let result = add(23,45)

// // console.log(result)

// // function sub(a:number,b:number):number
// // {
// //     return a*b
// // }

// // let result1=sub(45,7)

// // console.log(result1)


// // const add2= (a: number, b: number): number => {
// //  return a }



//  class Student
//  {
//    readonly studentId:number
//     name:string
//     email?:string | undefined
//     static schoolName:string="Greenwood High";
 

//  constructor(sid:number,sname:string,email?:string)
//  {
//     this.studentId= sid 
//     this.name= sname 
//     this.email = email 

//  }

//    displayInfo():void
//  {
//     console.log("Student id is:" + this.studentId)
//     console.log("Student name is: "+this.name)

//     if(this.email)
//     {
//         console.log("email : " + this.email)
//     }
//     else{
//         console.log("Email ID is not provided")
//     }
//     console.log(("School Name:" + Student.schoolName))
//  }

 
// static changeSchoolname(name:string)
//  {
//     Student.schoolName = name
//  }

// }
//  const s11 = new Student(101, "John");

//  const s2 = new Student(102,"Harry","rajaram@gmail.com")

//  s11.displayInfo()
//  s2.displayInfo()

//  Student.changeSchoolname("Rajaram School")

//  s11.displayInfo()
//  s2.displayInfo()


export{}

// let arr: number[][] = [[12,34,65,78,5],[43,343,343,34,54]]
// for(let i =0; i<arr.length;i++)
// {
//   for(let j=0;j<arr[i].length;j++)
//   {
//     console.log(arr[i][j])
//   }
// }
 
// let t:[number,number] = [1,2]
//  let arr2:[number,number,number, string,...number[]] = [...t, 5 ,"hello",20,45,45,46]

//  console.log(arr2[3])

//  console.log(arr2.length)
//  console.log(arr2)



//  class IdCard
// {
//     name:string;
//     age:number;
//     empId:number;

//     constructor(newName:string, newAge:number, newEmpid:number)
//     {
//         this.name=newName;
//         this.age=newAge;
//         this.empId=newEmpid;
//     }

//     address():void
//     {
//         console.log("if ID card is found: return to this address");
//         let x:number=10;
//         console.log(this.name+x, this.age, this.empId);
//     }
// }

// const obj= new IdCard("john", 30, 6765);

// const obj2=new IdCard("vivek", 31, 12343);

// obj.address()

//  function addNumbers(...nums:number[])
//  {
//     let i;
//     let sum=0

//     for(i=0;i<nums.length;i++)
//     {
//         sum=sum+nums[i];
//     }

//         console.log("addion of Number is:",sum)

    
//  }
//  addNumbers(13,14,54,63,45)

//arr:string[] = []
// function capitalW(arr:string[]):string[]
// {
//     let result:string[] = []
//     for(let i=0; i < arr.length; i++)
//     {
//          result[i]= arr[i].toUpperCase()

//     }
//     return result
// }

// let word:string[]=["word","got",'scientist']

// console.log(capitalW(word))



function capitalW(arr: string[]): string[] {
    let result: string[] = [];
    for (let i = 0; i < arr.length; i++) {
        result[i] = arr[i].toUpperCase();
    }
    return result;
}

let word: string[] = ["word", "got", "scientist"];

console.log(capitalW(word));


 
 