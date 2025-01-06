stores=[
    {
        name: "Electronics",
        children:[
            {
            name:"TV",
            children:[{name:"Samsung",children:null},{name:"Sony",children:null},{name:"LG",children:null},{name:"OnePlus",children:null},{name:"Mi",children:null}]
            },
            {
            name:"Smartphones",
            children:[{name:"Samsung",children:null},{name:"Apple",children:null},{name:"OnePlus",children:null},{name:"Xiaomi",children:null},{name:"Realme",children:null}]
            },
            {
            name:"Laptops",
            children:[{name:"Dell",children:null},{name:"HP",children:null},{name:"Lenovo",children:null},{name:"Apple",children:null},{name:"Asus",children:null}]
            }]
    },
    {
        name: "Grocery",
        children:[
            {
            name:"Vegetables",
            children:[{name:"Potato",children:null},{name:"Tomato",children:null},{name:"Onion",children:null},{name:"Carrot",children:null},{name:"Cabbage",children:null}]
            },
            {
            name:"Fruits",
            children:[{name:"Apple",children:null},{name:"Banana",children:null},{name:"Mango",children:null},{name:"Grapes",children:null},{name:"Orange",children:null}]
            }
        ]
    }
];
function children(child,i)
{
    i=i+i;
    if(child!=null){
        for(let keys of child)
        {
            console.log(i+keys.name);
            children(keys.children,i)
        }
    }
{

}
}
for(let keys of stores)
{
    console.log(keys.name);
    children(keys.children,i="  ")
}