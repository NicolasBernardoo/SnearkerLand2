function addToCart(product) {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    const size = prompt("Escolha um tamanho (36 a 44):");
    if (!size || size < 36 || size > 44) {
        alert("Tamanho inválido! Escolha um número entre 36 e 44.");
        return;
    }

    // Adicionar produto ao carrinho com tamanho selecionado
    cart.push({ ...product, size });
    localStorage.setItem("cart", JSON.stringify(cart));

    // Atualizar contador do carrinho
    const cartCount = document.getElementById("cart-count");
    cartCount.textContent = cart.length;
    alert("Produto adicionado ao carrinho!");
}
