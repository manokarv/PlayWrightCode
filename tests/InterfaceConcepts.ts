
//basic interface
interface Person
{
    name:string
    age:number
}

let student: Person={ 
    name:"Harry",
    age: 25

}

console.log(student.name)
console.log(student.age)
console.log(student)  //{ name: 'Harry', age: 25 }

//optional Interface

interface Employee
{
    ename:string
    eid: number
    edepartment?:string
}

let emp:Employee={
    ename:"Rajesh",
    eid:33,

}
let emp1:Employee={
    ename:"Rajesh",
    eid:33,
    edepartment:"Computer"

}
console.log(emp.ename,emp.eid,emp.edepartment)
console.log(emp1.ename,emp1.eid,emp1.edepartment)


//ReadOnly concept in Interface

interface Book
{
    bookname:string
    readonly isbn:string

}

let b1:Book={
    bookname:"Harry Potter",
    isbn:"2004-ABC"
}

console.log(b1.bookname, b1.isbn)
console.log("after changing the values")

b1.bookname="TwoSteps"
//b1.isbn="345-XYZ"  // cant change the value as this is readonly property.
console.log(b1.bookname, b1.isbn)