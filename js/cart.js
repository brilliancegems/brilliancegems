
function addToCart() {
  const productName = document.querySelector(".display-6")?.textContent.trim();
  const productPriceText = document.querySelector(".price")?.textContent.trim();
  const productPrice = parseFloat(productPriceText.replace("A$", "").replace(",", ""));

  if (!productName || isNaN(productPrice)) {
    alert("Invalid product details");
    return;
  }

  let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

  const existingItem = cartItems.find(item => item.name === productName);

  if (existingItem) {
    existingItem.quantity += 1;
    existingItem.total = existingItem.price * existingItem.quantity;
  } else {
    cartItems.push({
      name: productName,
      price: productPrice,
      quantity: 1,
      total: productPrice
    });
  }

  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  updateCartSummary(cartItems);
}

function updateCartSummary(cartItems) {
  const count = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const total = cartItems.reduce((acc, item) => acc + item.total, 0);
  document.getElementById("itemCount").textContent =
    `${count} item${count !== 1 ? "s" : ""}`;
  document.getElementById("totalPrice").textContent =
    `A$${total.toFixed(2)}`;
}

// Load cart summary on page load
document.addEventListener("DOMContentLoaded", () => {
  const storedCart = JSON.parse(localStorage.getItem("cartItems")) || [];
  updateCartSummary(storedCart);
});

function clearCart() {
  localStorage.removeItem("cartItems");
  updateCartSummary([]);
}
