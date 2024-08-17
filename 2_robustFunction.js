function getPerson(person){
    try{
        if(typeof person !== "object" || !person.name || !person.age){
            throw new Error("invalid parameter type");
        }
        return `Name: ${person.name}, Age: ${
            person.age
        }`;
    }catch (error){
        return error.message;
    }
}
console.log(getPerson({name: "pippa", age: "22"}));
console.log(getPerson({name: "welloo"}))