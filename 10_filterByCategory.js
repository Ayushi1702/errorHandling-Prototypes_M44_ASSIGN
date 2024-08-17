function filterbyCategory(){
    return function(category){
        return products.filter(function(product){
            return product.category === category;
        });
    }
}
var products = [
    {name: " shirt", category:"clothes"},
    {name: " t-shirt", category:"clothes"},
    {name: " hoodie", category:"clothes"},
    {
        name: "headphone", category : "electronics"
    }
]
var clothesProd = filterbyCategory(products)("clothes");
console.log(clothesProd);