class Car{
    constructor(company,model,year){
        this.company = company;
        this.model = model;
        this.year = year;
    }
    getDescription(){
        return`This ia a ${this.year} ${this.company} ${
            this.model}}`
    }
}
const myCar = new Car("slazaar", "yippei", 2043)
console.log(myCar.getDescription())