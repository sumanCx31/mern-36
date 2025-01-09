const products = [
    { name: 'Product 1', price: 100, discount: 10, category: 'Category A' },
    { name: 'Product 2', price: 200, discount: 15, category: 'Category B' },
    { name: 'Product 3', price: 300, discount: 20, category: 'Category C' },
    { name: 'Product 4', price: 400, discount: 25, category: 'Category A' },
    { name: 'Product 5', price: 500, discount: 30, category: 'Category B' },
    { name: 'Product 6', price: 600, discount: 35, category: 'Category C' },
    { name: 'Product 7', price: 700, discount: 40, category: 'Category A' },
    { name: 'Product 8', price: 800, discount: 45, category: 'Category B' },
    { name: 'Product 9', price: 900, discount: 50, category: 'Category C' },
    { name: 'Product 10', price: 1000, discount: 55, category: 'Category A' },
    { name: 'Product 11', price: 1100, discount: 60, category: 'Category B' },
    { name: 'Product 12', price: 1200, discount: 65, category: 'Category C' },
    { name: 'Product 13', price: 1300, discount: 70, category: 'Category A' },
    { name: 'Product 14', price: 1400, discount: 75, category: 'Category B' },
    { name: 'Product 15', price: 1500, discount: 80, category: 'Category C' }
];


let array=[]
const discountProduct = (prod) => {
    if(prod.discount<20)
    {
        array.push(prod);
    }
}


products.map(discountProduct)


console.log(array);


array = products.filter((prod) => prod.discount < 20);