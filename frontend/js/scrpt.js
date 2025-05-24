var swiper = new Swiper(".slide-content", {
        slidesPerView: 3,
        spaceBetween: 25,
        loop: true,
        centerSlide: 'true',
        fade: 'true',
        garbCursor:'true',
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          dynamicBullets:'true',
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },

        breakpoints:{
            0:{
                slidesPerView:1,
            },
            520:{
                slidesPerView:2,
            },
            950:{
                slidesPerView:3,
            },
        }
      });

      /* MENU-CONENT-SLIDER-BUTTONS */

      
    document.querySelectorAll('.menu-content').forEach(menuContent => {
    const decreaseBtn = menuContent.querySelector('.decrease-button');
    const increaseBtn = menuContent.querySelector('.increase-button');
    const quantitySpan = menuContent.querySelector('.quantity');

    decreaseBtn.addEventListener('click', () => {
      let currentQuantity = parseInt(quantitySpan.textContent);
      if (currentQuantity > 1) {
        quantitySpan.textContent = currentQuantity - 1;
      }
    });

    increaseBtn.addEventListener('click', () => {
      let currentQuantity = parseInt(quantitySpan.textContent);
      quantitySpan.textContent = currentQuantity + 1;
    });

    const addButton = menuContent.querySelector('.add-button');
    addButton.addEventListener('click', () => {
      const itemName = menuContent.getAttribute('data-item');
      const qty = quantitySpan.textContent;
      alert(`Added ${qty} x ${itemName} to cart!`);
    });
  });

  //CART-SECTION//

  // Sample data for cart items
    const cartData = [
      {
        id: 1,
        name: "Spaghetti Carbonara",
        price: 12.99,
        quantity: 2,
        image: "https://images.unsplash.com/photo-1603133872876-c1ecabdc11f0?auto=format&fit=crop&w=80&q=80"
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

