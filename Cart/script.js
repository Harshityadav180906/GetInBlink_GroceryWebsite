let cart = JSON.parse(localStorage.getItem("cart")) || [];
let cartItems = document.getElementById("cart-items");
let grandTotal = 0;

cart.forEach(item => {
    let total = item.price * item.quantity;
    grandTotal += total;

    let row = document.createElement("tr");
    row.innerHTML = `
        <td>${item.name}</td>
        <td>₹${item.price}</td>
        <td>${item.quantity}</td>
        <td>₹${total}</td>
    `;
    cartItems.appendChild(row);
});

document.getElementById("grand-total").innerHTML = `₹${grandTotal}`;
function clearCart() {
    localStorage.removeItem("cart");
    location.reload();
    alert("Order Placed")

}
