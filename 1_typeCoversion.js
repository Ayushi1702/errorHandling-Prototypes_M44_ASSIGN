function convertToString(str){
    try{
        const num = Number(str);
        if(Number.isNaN(num)){
         throw new Error("Invalid number");
        }
        return num;
    } catch (error){
        return error.message;
    }
}

console.log(convertToString("123"))
console.log(convertToString("sdnj"))