// class user{
//     name;
//     email;
//     #password;
     
//     //cannot be an async function
//     //cannot be an arrow function
//     //cannot called manually
//     constructor(){

//     }
// }

class product{
    name;
    price;
    discount;
    discountAmount=0;
    constructor(_name,_price,_discount)
    {
      this.name=_name;
      this.price=_price;
      this.discount=_discount;
      this.afterDiscount=0;
    }
  DiscountAmount()
{
  let discountAmount
  discountAmount=this.price*(15/100)
  return this.discountAmount
}

Afterdiscount()
{
  let afterDiscount
  afterDiscount=this.price-this.discountAmount
  return this.afterDiscount
}
}

const prod = new product("samsung",36000,15)
prod.DiscountAmount()
prod.Afterdiscount

console.log(prod);
