const cart = [];

function addToCart(productName, productPrice, productImage) {
    const existingProduct = cart.find(item => item.name === productName);

    if (!existingProduct) {
        cart.push({ name: productName, price: productPrice, image: productImage, quantity: 1 });
    } else {
        existingProduct.quantity += 1;
    }
    updateCartDisplay();
}

function removeFromCart(productName) {
    const productIndex = cart.findIndex(item => item.name === productName);
    if (productIndex !== -1) {
        cart.splice(productIndex, 1);
        updateCartDisplay();
    }
}

function clearCart() {
    cart.length = 0;
    updateCartDisplay();
}

function updateCartDisplay() {
    const cartItemsContainer = document.querySelector('.Items');
    const totalPriceElement = document.querySelector('.total-price');
    let totalPrice = 0;

    cartItemsContainer.innerHTML = '';

    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="cart-item-image" style="width:50px; height:auto; margin-right:10px;">
            <span>${item.name} - Php ${item.price}.00 (x${item.quantity})</span>
            <button class="remove-from-cart" onclick="removeFromCart('${item.name}')">Remove</button>
        `;
        cartItemsContainer.appendChild(cartItem);

        totalPrice += item.price * item.quantity;
    });

    totalPriceElement.textContent = `Total: Php ${totalPrice}.00`;
}

// Event listeners for adding to cart
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const productElement = button.parentElement;
        const productName = productElement.dataset.name;
        const productPrice = parseInt(productElement.dataset.price);
        const productImage = productElement.querySelector('img').src;

        addToCart(productName, productPrice, productImage);
    });
});

// Clear cart functionality
document.querySelector('.reset-cart').addEventListener('click', clearCart);
