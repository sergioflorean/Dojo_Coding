
const express = require("express")
const { faker} = require("@faker-js/faker") 
const app = express()
const port = 8080


class User {
    constructor () {
        this._id = faker.string.uuid();
        this.firstName = faker.person.firstName();
        this.lastName = faker.person.lastName();
        this.number = faker.phone.number();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}
class Product {
    constructor() {
      this.name = faker.commerce.productName();
      this.price = "$" + faker.commerce.price();
      this.department = faker.commerce.department();
    }
  }
      
  console.log(new Product());

console.log(new User());

class Company {
    constructor() {
        this._id = faker.string.uuid();
        this.name =  faker.company.name();
        this.address = {
            street: faker.location.street(),
            city: faker.location.city(),
            state: faker.location.state(),
            zipCode: faker.location.zipCode(),
            country: faker.location.country()
        }

    }
}

console.log(new Company());

app.get("/api", (req, res) => {
    res.json({ message: "Hello World" });
});

app.get("/api/users/new", (req, res) => {
    res.json(new User());
});
app.get("/api/product/new", (req, res) => {
    res.json(new Product());
});
app.get("/api/companies/new", (req, res) => {
    res.json(new Company());
});

app.get("/api/user/company", (req, res) => {
    res.json(new User());
    res.json(new Company());
});



app.listen( port, () => console.log(`Listening on port: ${port}`) );