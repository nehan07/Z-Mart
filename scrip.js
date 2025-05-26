let cart = [];
        const cartItemsContainer = document.getElementById('cart-items');
        const cartTotal = document.getElementById('cart-total');
        document.querySelectorAll('.add-to-cart').forEach(button => {
            button.addEventListener('click', () => {
                const productName = button.getAttribute('data-name');
                const productPrice = parseFloat(button.getAttribute('data-price'));
                // Add product to cart
                cart.push({ name: productName, price: productPrice });
                updateCart();
            });
        });
        function updateCart() {
            cartItemsContainer.innerHTML = '';
            let total = 0;
            if (cart.length === 0) {
                cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
            } else {
                cart.forEach(item => {
                    const itemDiv = document.createElement('div');
                    itemDiv.className = 'cart-item';
                    itemDiv.innerHTML = `${item.name} - Tk.${item.price}`;
                    cartItemsContainer.appendChild(itemDiv);
                    total += item.price;
                });
            }
            cartTotal.innerHTML = `Total: Tk.${total}`;
        }