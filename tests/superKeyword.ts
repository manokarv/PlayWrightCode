
class Parent
{
    num:number=20

    constructor()
    {
        console.log(this.num)
        console.log("Parent constructor called")
    }

    displayInfo()
    {console.log("Parent class display method called")

    }

}

class Child extends Parent
{
    num:number=30

    constructor()
    {
        super()
        console.log("Child class constructor called")
    }
    displayInfo()
    {
        super.displayInfo()
        console.log("child class display method called")

    }


}

let c1 = new Child()
c1.displayInfo()
