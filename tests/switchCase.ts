//switch case

/* switch (expression)
{case value 1: statements;
                break;
case value 2: statements;
                break;
case value 3: statements;
                break;                
default : statements;
}
*/

let day:number=9;

switch(day)
{
    case 1: 
    console.log("Monday")
    break;
    case 2: 
    console.log("Tuesday")
    break;
    case 3: 
    console.log("Wednesday")
    break;
    case 4: 
    console.log("Thursday")
    break;
    case 5: 
    console.log("Friday")
    break;
    case 6: 
    console.log("Saturday")
    break;
    case 7: 
    console.log("Sunday")
    default: 
    console.log("Invalid day")
    
    
}

//Check if a character is uppercase.

let char='f'
if(char=== char.toUpperCase())
{
    console.log("Character is in uppercase")

}
else{
    console.log("Character is in lowercase")
}

//Check if a number is a multiple of 10.

let val:number=35;

if(val%10 == 0)
{
    console.log("val is multiple of 10");
}
else
    {
        console.log("val is not multiple of 10")
    }

    //Check if a person is a teenager (age between 13 and 19).

    let age:number=4

    if(age<18 && age>0)
    {
        console.log('Person is teenager')
    }else if(age>18 && age<35)
    {
        console.log("Person is Younger")
    }
    else if(age>35 && age<50)
    {
        console.log("Person is Adult")

    }
    else{
        console.log("Person is Older")
    }

    //Check if a number is positive, negative, or zero

    let no:number=87;

    if(no>0)
    {
        console.log("Number is positive")
    }
    else if(no<0)
    {
        console.log("Number is negative")
    }
    else
    {
        console.log("Number is zero");
    }

    //Switch case:. Perform basic arithmetic operations based on user input

    let x:number=34 ,y=45;

    let operator = '+'

    switch(operator)
    {
        case '-' : 
        console.log(x-y)
        break;
        case '+':
            console.log(x+y);
            break;
            default:
                console.log("Invalid operator");
    }
