function createUser(email, birthdate) {
    const user = {
        email,
        birthdate,
        buy(item) {
            console.log(`${this.email} buys ${item.name}`);
        },
    };
    return user;
}
const item = {
    name: 'Sweater',
    price: 30000,
};  //Factory Function

const user1 = createUser('chris123@google.com', '1992-03-21');
const user2 = createUser('jerry99@google.com', '1995-07-19');
const user3 = createUser('alice@google.com', '1993-12-24');

console.log(user1.email);
console.log(user2.email);
console.log(user3.email);

user1.buy(item);
user2.buy(item);
user3.buy(item);