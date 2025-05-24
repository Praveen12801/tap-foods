const form = document.getElementById('checkoutForm');
    const messageBox = document.getElementById('message');

    form.addEventListener('submit', function(e) {
      e.preventDefault();
      messageBox.textContent = '';
      
      if (!form.checkValidity()) {
        // show custom validation messages if needed
        if (!form.name.checkValidity()) {
          messageBox.style.color = 'red';
          messageBox.textContent = 'Please enter your name.';
          form.name.focus();
          return;
        }
        if (!form.phone.checkValidity()) {
          messageBox.style.color = 'red';
          messageBox.textContent = 'Please enter a valid phone number.';
          form.phone.focus();
          return;
        }
        if (!form.address.checkValidity()) {
          messageBox.style.color = 'red';
          messageBox.textContent = 'Please enter your address.';
          form.address.focus();
          return;
        }
        if (!form.paymentMode.checkValidity() || form.paymentMode.value === '') {
          messageBox.style.color = 'red';
          messageBox.textContent = 'Please select a payment mode.';
          form.paymentMode.focus();
          return;
        }
      }

      // On successful validation
      messageBox.style.color = '#28a745';
      messageBox.textContent = 'Order placed successfully! Thank you for your purchase.';
      form.reset();
    });