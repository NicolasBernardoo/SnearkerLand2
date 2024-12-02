// Carregar os produtos do carrinho e exibi-los
document.addEventListener("DOMContentLoaded", () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartItemsContainer = document.getElementById("cart-items");
    const cartTotalElement = document.getElementById("cart-total");

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = "<li>O carrinho está vazio.</li>";
        return;
    }

    let total = 0;

    cart.forEach((product) => {
        const item = document.createElement("li");
        item.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="cart-item-image">
            <span>${product.name} (Tamanho: ${product.size}) - R$ ${product.price}</span>
        `;
        cartItemsContainer.appendChild(item);
        total += parseFloat(product.price.replace(",", "."));
    });

    cartTotalElement.textContent = total.toFixed(2).replace(".", ",");
});

// Gerenciar envio do formulário
document.getElementById("checkout-form").addEventListener("submit", (event) => {
    event.preventDefault();

    // Coletar dados do formulário
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const address = document.getElementById("address").value;
    const payment = document.getElementById("payment").value;

    // Simular envio dos dados
    alert(`Obrigado pela sua compra, ${name}! Um e-mail de confirmação foi enviado para ${email}.`);

    // Limpar o carrinho
    localStorage.removeItem("cart");

    // Redirecionar para a página inicial
    window.location.href = "index.html";
});
