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

