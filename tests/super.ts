export{}
class Parent
{
    num:number=10

    constructor()
    {
        console.log("Parent class constructor called")
    }

    displayInfo()
    {
        console.log("this is displayInfo method from parent class")
    }

}

class Child extends Parent
{
    num:number=20;

    constructor()
    {
        super()
        console.log("Calling child class constructor")
    }

    show()
    {
        super.displayInfo()
        console.log("CHild show method")
    }

    displayInfo()
    {
        super.displayInfo()
        console.log("THis is displayinfo method of child class")

    }
}

let demo = new Child()
demo.displayInfo()
demo.show()