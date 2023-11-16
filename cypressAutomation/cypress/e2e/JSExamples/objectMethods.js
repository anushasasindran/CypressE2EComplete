//Object methods. Method is defined as property in object
//the method name is key and function is parameter
const rectangle = {
    width: 10,
    height: 5,
    area: function() {
        return this.width * this.height;
    }
};
console.log("Example of object method:",rectangle.area());  // Outputs: 50

//Interacting with Object's Data: Instead of accessing and modifying an object's properties directly, 
//methods can be used to safely interact with an object's data. 
//This provides a level of abstraction and control.
const bankAccount = {
    balance: 1000,
    deposit: function(amount) {
        this.balance += amount;
    },
    withdraw: function(amount) {
        if (amount > this.balance) {
            console.log('Insufficient funds');
            return;
        }
        this.balance -= amount;
    }
};
bankAccount.deposit(500);
bankAccount.withdraw(200);
console.log(bankAccount.balance);  

// Outputs: 1300


//Object.Assign method
const obj4 = { a: 1, b: 2 };
const obj5 = { b: 3, c: 4};

const combined = Object.assign({}, obj4, obj5);
console.log("Object assign to combine objects:",combined); // { a: 1, b: 3, c: 4 }
//Note: If there are same properties in the source objects, the later source's property will overwrite the earlier one.

//Object.freeze method
//This method makes an object immutable, meaning that you can't change its properties or add new properties to it.
const obj6 = { a: 1, b: 2 };
Object.freeze(obj6);

obj6.a = 10; // Will not change
obj6.c = 3;  // Cannot add new properties
console.log("Freeze applied on object",obj6); // { a: 1, b: 2 }

//Object.seal()This method prevents new properties from being added to an object and marks all existing properties as non-configurable. 
//However, values of existing properties can still be changed if they are writable.

const obj7 = { a: 1, b: 2 };
Object.seal(obj7);

obj7.a = 10; // This change is allowed,since it is existing property
obj7.c = 3;  // Cannot add new properties
delete obj7.a; // Cannot delete properties`
console.log("seal applied on object:",obj7); // { a: 10, b: 2 }
