document.addEventListener('DOMContentLoaded', function() {
    const CIC = document.querySelector('.Items'); 
    const TPE = document.querySelector('.total-price'); 
    const RCB = document.querySelector('.reset-cart'); 
    const BuyButton = document.querySelector('.buy-button'); 
    const BNI = document.querySelector('.Buyer_name'); 
    const TYM = document.querySelector('.Thank_you_message'); 
    let totalPrice = 0;

    // To update the total price in the cart
    function updateTotalPrice() {
        TPE.textContent = `Total: Php ${totalPrice.toFixed(2)}`;
    }

    // To add products to the cart
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function() {
            const productElement = this.parentElement;
            const productName = productElement.getAttribute('data-name');
            const productPrice = parseFloat(productElement.getAttribute('data-price'));

            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');
            cartItem.innerHTML = `
                <span>${productName}</span>
                <span>Php ${productPrice.toFixed(2)}</span>
            `;

            CIC.appendChild(cartItem);

            totalPrice += productPrice;
            updateTotalPrice();
        });
    });

    // Reset Cart Button functionality
    RCB.addEventListener('click', function() {
        CIC.innerHTML = ''; 
        totalPrice = 0; 
        updateTotalPrice(); 
        TYM.style.display = 'none'; 
        BNI.value = ''; 
    });

    // Buy Button functionality
    BuyButton.addEventListener('click', function() {
        const buyerName = BNI.value.trim();
        if (buyerName && totalPrice > 0) {
            TYM.textContent = `Thank you for your purchase, ${buyerName}! Your total is Php ${totalPrice.toFixed(2)}.`;
            TYM.style.display = 'block';
        
            CIC.innerHTML = '';
            totalPrice = 0;
            updateTotalPrice();
        } else if (totalPrice === 0) {
            alert('Your cart is empty.');
        } else if (buyerName === '') {
            alert('Please enter your name.');
        }
    });
});
