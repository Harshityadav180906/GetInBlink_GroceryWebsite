// Load cart from localStorage or create empty cart
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(productName, price) {
    // Check if product already exists
    let existingProduct = cart.find(item => item.name === productName);

    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push({
            name: productName,
            price: price,
            quantity: 1
        });
    }

    // Save to localStorage
    localStorage.setItem("cart", JSON.stringify(cart));

    alert(productName + " added to cart!");
    console.log(cart);
}
