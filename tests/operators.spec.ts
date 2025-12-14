import test from "@playwright/test"
test("ArithmaticOperators", async({page})=>
{

    let a:number=10, b:number=20;

    //Arithmatic Opration
    console.log(a+b)
    console.log(a-b)
    console.log(a*b)
    console.log(a/b)
    console.log(a%b)
    console.log(a**b)

        //Assignmentn operator =

        a=24;
        b=34;

        //a=a+b;
         a+=b
    console.log(a)

    //relational operator
    //returns boolean true/false
    // > < >= <= == != ===(strict equality)

    a=35
    b=5

    console.log(a<b)// false
    console.log(a>b)//true
    console.log(a==b)
    console.log(a<=b)
    console.log(a>=b)
    console.log(a===b)
    console.log(a!=b)

    //diff between == & ===

    let num1:any=10
    let num2:any="10"

    console.log(num1==num2)//true
    console.log(num1===num2)//false

    //logical operators
    // && ||  !
    //returns true/false
    let b1 = true
    let b2 = false

    console.log(b1 && b2)//false
    console.log(b1 || b2)//true
    console.log(!b1)//false

    //increment and decrement operator
    // ++-increment
    //-- decrement

    let x:number=10;

    x++;//post increment
    console.log(x)
    x--;//post decrement

    console.log(x)

    ++x//preincrament
    --x //predecrement

    //Ternary operator
    // ?:
    // exp? res1: res2;
    
    let c:number=100, d:number=200;

    let res:number= (c>d) ? c: d; //if expression is true then print c or print d

    console.log(res)

    //example

    let personAge:number=30

    let personStr:string = (personAge>=18)? "adult": "minor";

    console.log(personStr)
})