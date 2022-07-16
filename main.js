function Item (name,code,quantity,price){
    this.name=name;
    this.code=code;
    this.quantity=quantity;
    this.price=price;
};

const item1 = new Item("Smarties", "A01", 10, 1.60);
const item2 = new Item("Caramilk Bar", "A02", 5, 1.30 );
const item3 = new Item("Dairy Milk", "A03", 1, 1.35 );
const item4 = new Item("Aero", "A04", 1, 0.25 );
const item5 = new Item("Protein Bar", "B01", 6, 2.25 );
const item6 = new Item("Salt & Vinegar Chips", "B02", 10, 1.45 );
const item7 = new Item("Ketchup Chips","B03", 3, 1.45 );
const item8 = new Item("Chocolate Cookies", "B04", 1, 0.45 );
const item9 = new Item("Gummy Bears", "C02", 300, 0.01 );
const item10 = new Item("Caramels", "C01", 0, 3.25);
  
function VendingMachine(){
   this.items=[item1,item2,item3,item4,item5,item6,item7,item8,item9,item10];
    this.float=11.20;
    this.sales=0;
    this.isBroken=false;
};

VendingMachine.prototype.vend=function(code,givenmoney){
    let selectedItem = this.items.find(item => item.code === code);
    if(selectedItem === undefined){
            return `Invalid selection! : Money in vending machine = ${this.float}".`;
        }
    if (this.sales % 10 === 0 && this.sales !== 0) {
        this.isBroken = true; 
        }
         if(this.isBroken===true){
        return 'fnkfl38s!ERROR@893infk';
    };
     if(givenmoney<selectedItem.price){
         return "Not enough money!";
     }
    if(selectedItem.quantity === 0){
        return `${selectedItem.name}:Out of stock!`;
    }
    if(selectedItem.code === code){
        selectedItem.quantity--;
        this.sales++;
        let change=givenmoney-selectedItem.price;
        this.float -= change;
        if( change === 0){
        return `Vending ${selectedItem.name}`;
    }
        return `Vending ${selectedItem.name} with ${change.toFixed(2)} `;
    }
};

VendingMachine.prototype.repair=function(){
    this.isBroken=false;
    this.sales++;
};

VendingMachine.prototype.addItems=function(name,code,quantity,price){
    let foundItem = this.items.find(item=>item.code===code);
    if(foundItem){
        console.log(`Sorry, but the ${foundItem.name} is already using that code, please pick another`)
    }else {let item11 = new Item(name,code,quantity,price);  
       this.items.push(item11);
       console.log(`New product available: ${item11.name} for only ${item11.price}`);
    }
};

const vendingMachine = new VendingMachine;
// console.log(vendingMachine);
// console.log(vendingMachine.vend('B03',2.00));//Vending Ketchup Chips with 0.55 
// console.log(vendingMachine.vend('B03',1.30));//Not enough money!
// console.log(vendingMachine.vend('C02',0.01));//Vending Gummy Bears
// console.log(vendingMachine.vend('D05',3.00));//Invalid selection! : Money in vending machine = 10.649999999999999".
// console.log(vendingMachine.vend('C01',3.25));//Caramels:Out of stock!
// vendingMachine.addItems("milkbar","C03",5,1.50);//New product available: milkbar for only 1.5
// vendingMachine.addItems("milkbar","B03",5,1.50);//Sorry, but the Ketchup Chips is already using that code, please pick another
// console.log(vendingMachine);
// console.log(vendingMachine.vend('B02',2.00));
// console.log(vendingMachine.vend('B02',2.00));
// console.log(vendingMachine.vend('B02',2.00));
// console.log(vendingMachine.vend('B02',2.00));
// console.log(vendingMachine.vend('B02',2.00));
// console.log(vendingMachine.vend('B02',2.00));
// console.log(vendingMachine.vend('B02',2.00));
// console.log(vendingMachine.vend('B02',2.00));
// console.log(vendingMachine.vend('B02',2.00));//fnkfl38s!ERROR@893infk
// vendingMachine.repair();
// console.log(vendingMachine.vend('B02',2.00));//Vending Salt & Vinegar Chips with 0.55
// console.log(vendingMachine);
