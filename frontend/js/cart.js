    // Sample data for cart items
    const cartData = [
      {
        id: 1,
        name: "Spag",
        price: 12.99,
        quantity: 2,
        img: "assets/menu-images/AlooDumBriyani.png"
      },
      {
        id: 2,
        name: "Grilled Chicken Salad",
        price: 9.49,
        quantity: 1,
        image: "https://images.unsplash.com/photo-1562967916-eb82221dfb23?auto=format&fit=crop&w=80&q=80"
      },
      {
        id: 3,
        name: "Vegetarian Pizza",
        price: 14.59,
        quantity: 3,
        image: "https://images.unsplash.com/photo-1548365328-89c7470520f6?auto=format&fit=crop&w=80&q=80"
      }
    ];

     const cartItemsTbody = document.getElementById('cart-items');
    const totalPriceEl = document.getElementById('total-price');
    // Function to format price as currency
    function formatPrice(price) {
      return '$' + price.toFixed(2);
    }
    // Function to recalc the total price
    function calculateTotal() {
      let total = 0;
      cartData.forEach(item => {
        total += item.price * item.quantity;
      });
      totalPriceEl.textContent = formatPrice(total);
    }

    // Function to render cart items in the table
    function renderCart() {
      cartItemsTbody.innerHTML = '';
      cartData.forEach(item => {
        const tr = document.createElement('tr');
        // Dish image cell
        const imgTd = document.createElement('td');
        imgTd.setAttribute('data-label', 'Dish');
        const img = document.createElement('img');
        img.src = item.image;
        img.alt = item.name + ' img';
        imgTd.appendChild(img);
        tr.appendChild(imgTd);
        // Name cell
        const nameTd = document.createElement('td');
        nameTd.setAttribute('data-label', 'Name');
        nameTd.textContent = item.name;
        tr.appendChild(nameTd);
        // Price cell
        const priceTd = document.createElement('td');
        priceTd.setAttribute('data-label', 'Price');
        priceTd.textContent = formatPrice(item.price);
        tr.appendChild(priceTd);

        // Quantity cell with controls
        const qtyTd = document.createElement('td');
        qtyTd.setAttribute('data-label', 'Quantity');
        const qtyControls = document.createElement('div');
        qtyControls.className = 'qty-controls';
        const minusBtn = document.createElement('button');
        minusBtn.className = 'qty-btn';
        minusBtn.setAttribute('aria-label', 'Decrease quantity');
        minusBtn.textContent = '−';
        minusBtn.disabled = item.quantity <= 1;
        minusBtn.addEventListener('click', () => {
          if (item.quantity > 1) {
            item.quantity--;
            renderCart();
            calculateTotal();
          }
        });

        const qtyDisplay = document.createElement('span');
        qtyDisplay.className = 'qty-display';
        qtyDisplay.textContent = item.quantity;
        const plusBtn = document.createElement('button');
        plusBtn.className = 'qty-btn';
        plusBtn.setAttribute('aria-label', 'Increase quantity');
        plusBtn.textContent = '+';
        plusBtn.addEventListener('click', () => {
          item.quantity++;
          renderCart();
          calculateTotal();
        });

        qtyControls.appendChild(minusBtn);
        qtyControls.appendChild(qtyDisplay);
        qtyControls.appendChild(plusBtn);
        qtyTd.appendChild(qtyControls);
        tr.appendChild(qtyTd);

        
        // Remove button cell
        const removeTd = document.createElement('td');
        removeTd.setAttribute('data-label', 'Remove');
        const removeBtn = document.createElement('button');
        removeBtn.className = 'remove-btn';
        removeBtn.textContent = 'Remove';
        removeBtn.setAttribute('aria-label', 'Remove ' + item.name + ' from cart');
        removeBtn.addEventListener('click', () => {
          const index = cartData.findIndex(i => i.id === item.id);
          if (index !== -1) {
            cartData.splice(index, 1);
            renderCart();
            calculateTotal();
          }
        });
        removeTd.appendChild(removeBtn);
        tr.appendChild(removeTd);
        cartItemsTbody.appendChild(tr);
      });
    }

    // Initial render and total calc
    renderCart();
    calculateTotal();
    // Button events
    document.getElementById('add-items-btn').addEventListener('click', () => {
      alert('Redirecting to add more items...');
    });
    document.getElementById('checkout-btn').addEventListener('click', () => {
      alert('Proceeding to checkout...');
    });
    