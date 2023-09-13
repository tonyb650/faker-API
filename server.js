const {faker} = require('@faker-js/faker');
const express = require("express");
const app = express();
const port = 8000;

const createUser = () => {
    const fakeUser = {
        _id: faker.string.uuid(), // tried to use 'unique' but no it is deprecated in faker
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.number(),
        password: faker.internet.password()
    }
    console.log(fakeUser);
    return fakeUser;
}

const createCompany = () => {
    const fakeCompany = {
        _id: faker.string.uuid(), 
        companyName: faker.company.name(),
        addrStreet: faker.location.streetAddress(),
        addrCity: faker.location.city(),
        addrState: faker.location.state(),
        addrZip: faker.location.zipCode(),
        addrCountry: faker.location.country()
    }
    console.log(fakeCompany);
    return fakeCompany;
}

// req is shorthand for request
// res is shorthand for response
app.get("/api/users/new", (req, res) => {
    res.json( createUser() );
});

app.get("/api/companies/new", (req, res) => {
    res.json( createCompany() );
});

app.get("/api/user/company", (req, res) => {
    res.json( [createUser(), createCompany() ]);
});

// this needs to be below the other code blocks
app.listen( port, () => console.log(`Listening on port: ${port}`) );