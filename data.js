const products = [
    { id: 1, name: "Butterscotch", price: 150 },
    { id: 2, name: "Chocolate", price: 160 },
    { id: 3, name: "Matcha", price: 170 },
    { id: 4, name: "Mocha", price: 170 },
    { id: 5, name: "Java Chip", price: 180 },
    { id: 6, name: "Caramel Latte", price: 190 },
    { id: 7, name: "Americano", price: 100 },
    { id: 8, name: "Latte", price: 140 },
    { id: 9, name: "Cappuccino", price: 160 },
    { id: 10, name: "Hazelnut", price: 180 },
    { id: 11, name: "Vanilla Latte", price: 150 },
    { id: 12, name: "Spanish Latte", price: 150 }
];

const customers = [
    { id: 1, name: "Alas", email: "alas@example.com" },
    { id: 2, name: "Friench", email: "friench@example.com" },
    { id: 3, name: "Alex", email: "alex@example.com" },
    { id: 4, name: "Byrone", email: "by@example.com" },
    { id: 5, name: "Humphrey", email: "humph@example.com" }
];

const contactMessages = [
    { id: 1, name: "alas", email: "alas@example.com", message: "Great coffee!", dateSent: "2024-10-01" },
    { id: 2, name: "marionne", email: "marionne@example.com", message: "I love your products!", dateSent: "2024-10-02" }
];

function getProducts() {
    return products;
}

function getCustomers() {
    return customers;
}

function getContactMessages() {
    return contactMessages;
}
