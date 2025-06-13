let cart = [];

function addToCart(item, price) {
  cart.push({ item, price });
  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById('cart-items');
  const total = document.getElementById('total');
  cartItems.innerHTML = '';
  let sum = 0;

  cart.forEach((entry, index) => {
    const li = document.createElement('li');
    li.textContent = `${entry.item} - ₹${entry.price}`;
    cartItems.appendChild(li);
    sum += entry.price;
  });

  total.textContent = sum;
}

function toggleCart() {
  const cartDiv = document.getElementById('cart');
  const paymentDiv = document.getElementById('payment');

  if (!cartDiv.classList.contains('hidden')) {
    cartDiv.classList.add('hidden');
  } else {
    cartDiv.classList.remove('hidden');
    paymentDiv.classList.add('hidden');
  }
}

function placeOrder() {
  const cartDiv = document.getElementById('cart');
  const paymentDiv = document.getElementById('payment');

  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }

  cartDiv.classList.add('hidden');
  paymentDiv.classList.remove('hidden');
}

function clearCart() {
  cart = [];
  updateCart();
}

function toggleQR(showQR) {
  const qrBox = document.getElementById('qr-box');
  if (showQR) {
    qrBox.classList.remove('hidden');
  } else {
    qrBox.classList.add('hidden');
  }
}

function finalOrder() {
  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }

  const selectedPayment = document.querySelector('input[name="payment"]:checked');
  if (!selectedPayment) {
    alert("Please select a payment method.");
    return;
  }

  alert("✅ Your order has been placed successfully!\nPayment Method: " + selectedPayment.value);
  cart = [];
  updateCart();

  document.getElementById('payment').classList.add('hidden');
}

function goBackToCart() {
  const cartDiv = document.getElementById('cart');
  const paymentDiv = document.getElementById('payment');

  paymentDiv.classList.add('hidden');
  cartDiv.classList.remove('hidden');
}
