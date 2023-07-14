class Car {
    name: string
    price: number

    constructor(name:string, price:number){
        this.name = name
        this.price = price
    }

    protected getInfo():string{
        return `${this.name} - ${this.price}`
    }

    any(){
        this.getInfo()
    }
}

class Bus extends Car{
    constructor(name:string, price:number){
        super(name, price)
    }

    test(){
        return this.getInfo()
    }
}

//Есть 3 типа методов внутри класса:
//1) Public - доступен везде
//2) Private - доступен только внутри данного класса
//3) protected - доступен только внутри данного класса и класса, который extend'ится от данного
