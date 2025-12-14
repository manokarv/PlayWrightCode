

class Car
{
    name:string;
    colour:string;
    model:string

    constructor(name:string,colour:string,model:string)
    {
        this.name=name
        this.colour=colour
        this.model=model

    }

    start()
    {
        console.log("Machine started")

    }

    stop()
    {console.log("car stopped")}

    displayInformation()
    {
        console.log(`name:${this.name}, colour:${this.colour},model:${this.model}`)
    }
}

class Maruti extends Car
{
    year:number

    constructor(name:string,colour:string,model:string,year:number)
    {
        super(name,colour,model)
        this.year=year

    }

    start()
    {
        console.log("Maruti car started")
    }
    yom()
    {
        console.log(`name:${this.name}, colour:${this.colour},model:${this.model},year:${this.year}`)
    }

}

class Honda extends Car
{
    year:number

    constructor(name:string,colour:string,model:string,year:number)
    {
        super(name,colour,model)
        this.year=year

    }

    start()
    {
        console.log("Honda car started")
    }
    yom()
    {
        console.log(`name:${this.name}, colour:${this.colour},model:${this.model},year:${this.year}`)
    }

}

let honda = new Honda("Honda City","Blue","ZX",2017,)

console.log(honda.name)
console.log(honda.colour)
console.log(honda.model)
console.log(honda.year)

honda.start() //overrided
honda.displayInformation()  //parent
honda.stop()  //parent

honda.yom()  //child class


let maruti = new Maruti("SX4","Black","Suzuki",2011)

maruti.start()  //child class
maruti.displayInformation()  //parent class
maruti.stop()  //parent class
maruti.yom()  //child class


//parent class variable holding the child class object

let car:Car=new Honda("Honda City","Blue","ZX",2017,)

car.displayInformation()
car.start()
//car.yom() //not able to access child class method
