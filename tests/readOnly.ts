/* class
2.read only properties
3. Optional Properties
4. Static Variables and methods */

class Student
{
    readonly studentId:number

    name:string
    email?:string |undefined
    static schoolName:string ="Modern School"

    constructor(studentId:number, name:string,email?:string)
    {   
        this.studentId =studentId
        this.name=name
        this.email=email
        Student.schoolName
    }

    displayInfo()
    {
        console.log(this.studentId)
       console.log(this.name)
       console.log(Student.schoolName)
       
         if(this.email)
        {
        console.log(this.email)
    }
    else{
        console.log("Email is not provied")
    }  
    }
}

let case1 =new Student(101,"Rajesh")

case1.displayInfo()

