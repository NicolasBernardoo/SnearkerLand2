document.addEventListener("DOMContentLoaded", () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartItemsContainer = document.getElementById("cart-items");
    const cartTotalElement = document.getElementById("cart-total");

    // Verifica se o carrinho está vazio
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = "<li>O carrinho está vazio.</li>";
        return;
    }

    // Preencher os itens do carrinho no resumo
    let total = 0;

    cart.forEach((product) => {
        const item = document.createElement("li");
        item.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="cart-item-image">
            <div>
                <span>${product.name} - Tamanho: ${product.size}</span>
                <br>
                <span>Preço: R$ ${product.price}</span>
            </div>
        `;
        cartItemsContainer.appendChild(item);
        total += parseFloat(product.price.replace(",", "."));
    });

    cartTotalElement.textContent = total.toFixed(2).replace(".", ",");
});

// Gerenciar envio do formulário
document.getElementById("checkout-form").addEventListener("submit", (event) => {
    event.preventDefault();

    // Capturar dados do formulário
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const address = document.getElementById("address").value;
    const payment = document.getElementById("payment").value;

    // Simular envio (pode ser substituído por integração real com um backend)
    alert(`
        Obrigado pela sua compra, ${name}!
        Um e-mail foi enviado para ${email}.
        Sua entrega será enviada para o endereço: ${address}.
        Forma de pagamento escolhida: ${payment}.
    `);

    // Limpar o carrinho e redirecionar
    localStorage.removeItem("cart");
    window.location.href = "index.html";
});
