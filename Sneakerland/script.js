// Função para adicionar o produto ao carrinho
function addToCart(product) {
  let cart = JSON.parse(localStorage.getItem("cart")) || []

  // Verifica se o produto já está no carrinho
  const existingProductIndex = cart.findIndex(
    (item) => item.id === product.id && item.size === product.size
  )
  if (existingProductIndex > -1) {
    // Se o produto já estiver no carrinho, aumenta a quantidade
    cart[existingProductIndex].quantity += 1
  } else {
    // Caso contrário, adiciona o produto ao carrinho com quantidade 1
    cart.push({ ...product, quantity: 1 })
  }

  // Salva o carrinho no localStorage
  localStorage.setItem("cart", JSON.stringify(cart))

  // Atualiza a quantidade de itens no carrinho
  updateCartCount()
}

// Atualiza o contador de itens no carrinho
function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem("cart")) || []
  const cartLink = document.getElementById("cart-link")
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0)
  cartLink.innerText = `Carrinho (${totalItems})`
}

// Exibe os itens no carrinho
function displayCartItems() {
  const cart = JSON.parse(localStorage.getItem("cart")) || []
  const cartContainer = document.getElementById("cart-container")
  cartContainer.innerHTML = "" // Limpa os itens do carrinho

  // Se o carrinho estiver vazio
  if (cart.length === 0) {
    cartContainer.innerHTML = "<p>Seu carrinho está vazio.</p>"
    return
  }

  // Exibe todos os itens no carrinho
  cart.forEach((item) => {
    const productElement = document.createElement("div")
    productElement.classList.add("cart-item")

    productElement.innerHTML = `
            <img src="${item.image}" alt="${item.name}" />
            <div class="item-info">
                <h3>${item.name}</h3>
                <p>R$ ${item.price}</p>
                <p>Tamanho: ${item.size}</p>
                <p>Quantidade: ${item.quantity}</p>
            </div>
            <div class="item-actions">
                <button class="remove-from-cart" onclick="removeFromCart(${item.id}, '${item.size}')">Remover</button>
            </div>
        `

    cartContainer.appendChild(productElement)
  })
}

// Inicializa o carrinho e exibe o número de itens
document.addEventListener("DOMContentLoaded", function () {
  updateCartCount()
})

// Função para adicionar o produto ao carrinho
function addToCart(product) {
  let cart = JSON.parse(localStorage.getItem("cart")) || []

  // Verifica se o produto já está no carrinho
  const existingProductIndex = cart.findIndex(
    (item) => item.id === product.id && item.size === product.size
  )
  if (existingProductIndex > -1) {
    // Se o produto já estiver no carrinho, aumenta a quantidade
    cart[existingProductIndex].quantity += 1
  } else {
    // Caso contrário, adiciona o produto ao carrinho com quantidade 1
    cart.push({ ...product, quantity: 1 })
  }

  // Salva o carrinho no localStorage
  localStorage.setItem("cart", JSON.stringify(cart))

  // Atualiza a quantidade de itens no carrinho
  updateCartCount()
}

// Atualiza o contador de itens no carrinho
function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem("cart")) || []
  document.getElementById("cart-count").innerText = cart.length
}

// Exibe os itens no carrinho
function displayCartItems() {
  const cart = JSON.parse(localStorage.getItem("cart")) || []
  const cartContainer = document.getElementById("cart-container")
  cartContainer.innerHTML = "" // Limpa os itens do carrinho

  // Se o carrinho estiver vazio
  if (cart.length === 0) {
    cartContainer.innerHTML = "<p>Seu carrinho está vazio.</p>"
    return
  }

  // Exibe todos os itens no carrinho
  cart.forEach((item) => {
    const productElement = document.createElement("div")
    productElement.classList.add("cart-item")

    productElement.innerHTML = `
            <img src="${item.image}" alt="${item.name}" />
            <div class="item-info">
                <h3>${item.name}</h3>
                <p>R$ ${item.price}</p>
                <p>Tamanho: ${item.size}</p>
                <p>Quantidade: ${item.quantity}</p>
            </div>
            <div class="item-actions">
                <button class="remove-from-cart" onclick="removeFromCart(${item.id}, '${item.size}')">Remover</button>
            </div>
        `

    cartContainer.appendChild(productElement)
  })
}

// Função para remover um produto do carrinho
function removeFromCart(productId, size) {
  let cart = JSON.parse(localStorage.getItem("cart")) || []
  cart = cart.filter((item) => item.id !== productId || item.size !== size) // Filtra o item para removê-lo

  // Salva novamente o carrinho atualizado
  localStorage.setItem("cart", JSON.stringify(cart))

  // Atualiza a exibição do carrinho
  displayCartItems()

  // Atualiza a quantidade de itens no carrinho
  updateCartCount()
}

// Inicializa o carrinho e exibe o número de itens
document.addEventListener("DOMContentLoaded", function () {
  updateCartCount()
})

// Função para adicionar produto ao carrinho
function addToCart(product) {
  let cart = JSON.parse(localStorage.getItem("cart")) || []

  // Verifica se o produto já está no carrinho
  const existingProductIndex = cart.findIndex((item) => item.id === product.id)
  if (existingProductIndex > -1) {
    // Se o produto já estiver no carrinho, aumenta a quantidade
    cart[existingProductIndex].quantity += 1
  } else {
    // Caso contrário, adiciona o produto ao carrinho com quantidade 1
    cart.push({ ...product, quantity: 1 })
  }

  // Salva o carrinho atualizado no localStorage
  localStorage.setItem("cart", JSON.stringify(cart))

  // Atualiza a quantidade de itens no carrinho
  updateCartCount()
}

// Atualiza a quantidade de itens no carrinho
function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem("cart")) || []
  document.getElementById("cart-count").innerText = `(${cart.length})`
}

// Exibe todos os itens no carrinho
function displayCartItems() {
  const cart = JSON.parse(localStorage.getItem("cart")) || []
  const cartContainer = document.getElementById("cart-container")
  cartContainer.innerHTML = "" // Limpa os itens do carrinho antes de adicionar novos

  // Verifica se o carrinho está vazio
  if (cart.length === 0) {
    cartContainer.innerHTML = "<p>Seu carrinho está vazio.</p>"
    return
  }

  // Itera sobre todos os itens do carrinho e os exibe
  cart.forEach((item) => {
    const productElement = document.createElement("div")
    productElement.classList.add("cart-item")

    // Exibe o nome, preço, imagem e quantidade do produto
    productElement.innerHTML = `
      <img src="${item.image}" alt="${item.name}" />
      <div class="item-info">
        <h3>${item.name}</h3>
        <p>R$ ${item.price}</p>
        <p>Quantidade: ${item.quantity}</p>
      </div>
      <div class="item-actions">
        <button class="remove-from-cart" onclick="removeFromCart(${item.id})">Remover</button>
      </div>
    `
    cartContainer.appendChild(productElement)
  })
}

// Remove um produto do carrinho
function removeFromCart(productId) {
  let cart = JSON.parse(localStorage.getItem("cart")) || []
  cart = cart.filter((item) => item.id !== productId) // Filtra o item para removê-lo

  // Salva o carrinho atualizado
  localStorage.setItem("cart", JSON.stringify(cart))

  // Atualiza a exibição do carrinho
  displayCartItems()

  // Atualiza a contagem de itens no carrinho
  updateCartCount()
}

// Limpa todos os itens do carrinho
document.getElementById("clear-cart").addEventListener("click", () => {
  localStorage.removeItem("cart")
  displayCartItems()
  updateCartCount()
})

// Inicializa a página do carrinho
document.addEventListener("DOMContentLoaded", function () {
  displayCartItems()
  updateCartCount()
})


function addToCart(product) {
  let cart = JSON.parse(localStorage.getItem("cart")) || []

  // Verifica se o produto com o mesmo tamanho já está no carrinho
  const existingProductIndex = cart.findIndex(
    (item) => item.id === product.id && item.size === product.size
  )

  if (existingProductIndex > -1) {
    // Se já existir, aumenta a quantidade
    cart[existingProductIndex].quantity += 1
  } else {
    // Adiciona um novo item ao carrinho
    cart.push({ ...product, quantity: 1 })
  }

  // Atualiza o localStorage
  localStorage.setItem("cart", JSON.stringify(cart))

  // Atualiza a quantidade no link do carrinho
  updateCartCount()
}

// Atualiza o contador de itens no carrinho
function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem("cart")) || []
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0)
  document.getElementById("cart-count").innerText = totalItems
}
