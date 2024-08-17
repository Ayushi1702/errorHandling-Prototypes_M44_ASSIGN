class person{
    constructor(name,age){
        this.name = name;
        this.age= age;
    }
    getDetails(){
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}
const person1= new person("giggi", 44);
console.log(person1.getDetails())