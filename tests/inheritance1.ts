export{}
class Car
{
    name:string
    color:string
    model:string


    constructor(name:string,color:string,model:string)
    {
        this.name=name
        this.color=color
        this.model=model


    }

    start()
    {
        console.log("car engine start")

    }
    stop()
    {
        console.log(" car engine stooped")
    }

    display()
    {console.log(`name:${this.name}, color:${this.color},model:${this.model}`)
}


}

class Honda extends Car
{
    year:number

    constructor(name:string,color:string,model:string,year:number)
    {
        super(name,color,model)
        this.year=year
    }

    start()
    {
        console.log("Honda car started")
    }

    displayInfo()
    {console.log(`name:${this.name}, color:${this.color},model:${this.model}, year:${this.year}`)}
}

let honda = new Honda("Mercedes","Black","TopEnd",2017)

honda.display()
honda.displayInfo()
honda.start()
honda.stop()