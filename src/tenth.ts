// Objects In TS

//In JavaScript, the fundamental way that we group and pass around data is through objects. In TypeScript, we represent those through object types.


const person = {
    name:"musfira",
    age: 12,
    DOB: "23 oct 2011",
    isStudent:true,
    adress:{
        city:"Karachi",
        country: "Pakistan"
    }
}

//Todo Acessing the object data /sppelciy country
console.log(person.adress.country);

//Todo Updating Object properties

person.adress.country = "UAE"
console.log(person.adress.country);

const musfira:{

} = {
    name: "warda",
    age: 27,
    isStudent:true,
    address:{
        city: "Pune",
        country: "America"
    }
}

console.log(musfira);

// HomeWork
//Create a Product Object:
//Difine a product with properties for name, price, and quantity. Create a product object with the following data:

//Name: "Laptop"
//Price: 10000
// Quantity: 5

const Laptop:{

} = {
    name: "Laptop",
    price: 10000,
    Quantity:5,
    shop:{
        city: "New york",
        country: "America"
    }
}

console.log(Laptop);
