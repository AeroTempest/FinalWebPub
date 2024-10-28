// customers.js

// Function to display customers in the UI
function displayCustomers() {
    const customerList = document.getElementById('customerList');
    const customers = getCustomers();

    customerList.innerHTML = '';

    customers.forEach(customer => {
        const customerItem = document.createElement('div');
        customerItem.innerHTML = `
            <h2>${customer.name}</h2>
            <p>Email: ${customer.email}</p>
        `;
        customerList.appendChild(customerItem);
    });
}

// Function to filter customers based on search input
function filterCustomers() {
    const searchInput = document.getElementById('searchCustomers').value.toLowerCase();
    const customerList = document.getElementById('customerList');
    const customers = getCustomers();

    customerList.innerHTML = '';

    customers.forEach(customer => {
        if (customer.name.toLowerCase().includes(searchInput)) {
            const customerItem = document.createElement('div');
            customerItem.innerHTML = `
                <h2>${customer.name}</h2>
                <p>Email: ${customer.email}</p>
            `;
            customerList.appendChild(customerItem);
        }
    });
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    displayCustomers();
    document.getElementById('searchCustomers').addEventListener('input', filterCustomers);
});
