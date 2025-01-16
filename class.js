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

// class product{
//     name;
//     price;
//     discount;
//     discountAmount = 0;
//     afterDiscount = 0;
//     constructor(_name, _price, _discount)
//     {
//       this.name = _name;
//       this.price = _price;
//       this.discount = _discount;
//     }
//   DiscountAmount()
// {
//   this.discountAmount = this.price * (this.discount / 100);
//   return this.discountAmount;
// }

// Afterdiscount()
// {
//   this.afterDiscount = this.price - this.discountAmount;
//   return this.afterDiscount;
// }
// }

// const prod = new product("samsung", 36000, 15);
// prod.DiscountAmount();
// prod.Afterdiscount();

// console.log(prod);


class Item{
 name;
 price;
 discount;
 constructor(a,b,c)
 {
  this.name=a;
  this.price=b;
  this.discount=c;
 }
 discount_amount()
{
this.discountAmount=this.price*(15/100)
return this.discountAmount
}
 after_discount()
 {
  this.afterDiscount=this.price-this.discountAmount
  return this.afterDiscount
 }
}

const obj = new Item("SAMSUNG",45000,15);
obj.discount_amount();
obj.after_discount();
console.log(obj);


