class User {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword() {
        return `${this.password}abc`;
    }

    changeUsername() {
        return this.username.toUpperCase();
    }
}

const chai = new User("chai", "chai@gmail.com", 6775);

console.log(chai);
console.log(chai.encryptPassword());
console.log(chai.changeUsername());



////////////////////////////BEHIND THE SCENE////////////////////////////////////////
