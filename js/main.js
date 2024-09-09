document
  .querySelector(".load-more-button")
  .addEventListener("click", function () {
    const productList = document.querySelector(".product-list");

    const productsToClone = productList.cloneNode(true);

    productList.appendChild(productsToClone);
  });
