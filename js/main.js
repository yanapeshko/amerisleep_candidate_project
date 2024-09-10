// document
//   .querySelector(".load-more-button")
//   .addEventListener("click", function () {
//     const productItem = document.querySelector(".product-item");

//     const productsToClone = productItem.cloneNode(true);

//     productItem.appendChild(productsToClone);
//   });

document
  .querySelector(".load-more-button")
  .addEventListener("click", function () {
    const newSectionHTML = `
          <ul class="product-list">
            <li class="product-item">
              <div class="image-container">
                <img
                  src="assets/img/organica-mattress.jpg"
                  alt="Luxury Mattress"
                  class="product-image"
                />
                <button class="discount">
                  <p class="discount-text">Only today!</p>
                  <p class="discount-text">Save $450</p>
                </button>
              </div>
              <!-- Product Image -->
              <div>
                <div class="product-rating">
                  <div class="rating">
                    <img
                      src="assets/icon/star.svg"
                      alt="Icon Star"
                      class="icon-star"
                    />
                    <p class="rating-text">4.7</p>
                  </div>
                  <h2>Luxury Organic Mattress</h2>
                </div>

                <p class="product-text">Starting at</p>
                <div class="price">
                  <span class="current-price">$1099</span>
                  <span class="old-price">$1549</span>
                </div>

                <div class="product-highlights-container">
                  <ul class="highlights-list">
                    <li class="highlights-item">
                      <img src="assets/icon/waves.svg" alt="Waves Icon" />
                      <p class="product-highlights">Medium Firm</p>
                    </li>
                    <li class="highlights-item">
                      <img src="assets/icon/ruler.svg" alt="Ruler Icon" />
                      <p class="product-highlights">13-inch</p>
                    </li>
                    <li class="highlights-item">
                      <img src="assets/icon/snowflake.svg" alt="Cooling Icon" />
                      <p class="product-highlights">Refresh Cooling Tech.</p>
                    </li>
                  </ul>
                </div>
                <p class="availability">Available in 7 sizes</p>
                <button class="add-to-cart">
                  <img
                    src="assets/icon/shopping-cart.svg"
                    alt="Cart"
                    class="icon-cart"
                  />

                  <!-- Cart Icon -->
                  Add to Cart
                </button>
              </div>
            </li>
            <li class="product-item">
              <div class="image-container">
                <img
                  src="assets/img/foundation.jpg"
                  alt="Mattress"
                  class="product-image"
                />
                <button class="discount">
                  <p class="discount-text">Only today!</p>
                  <p class="discount-text">Save $450</p>
                </button>
              </div>
              <!-- Product Image -->
              <div>
                <div class="product-rating">
                  <div class="rating">
                    <img
                      src="assets/icon/star.svg"
                      alt="Icon Star"
                      class="icon-star"
                    />
                    <p class="rating-text">4.7</p>
                  </div>
                  <h2>Luxury Organic Mattress</h2>
                </div>

                <p class="product-text">Starting at</p>
                <div class="price">
                  <span class="current-price">$1099</span>
                  <span class="old-price">$1549</span>
                </div>

                <div class="product-highlights-container">
                  <ul class="highlights-list">
                    <li class="highlights-item">
                      <img src="assets/icon/waves.svg" alt="Waves Icon" />
                      <p class="product-highlights">Medium Firm</p>
                    </li>
                    <li class="highlights-item">
                      <img src="assets/icon/ruler.svg" alt="Ruler Icon" />
                      <p class="product-highlights">13-inch</p>
                    </li>
                    <li class="highlights-item">
                      <img src="assets/icon/snowflake.svg" alt="Cooling Icon" />
                      <p class="product-highlights">Refresh Cooling Tech.</p>
                    </li>
                  </ul>
                </div>
                <p class="availability">Available in 7 sizes</p>
                <button class="add-to-cart">
                  <img
                    src="assets/icon/shopping-cart.svg"
                    alt="Cart"
                    class="icon-cart"
                  />

                  <!-- Cart Icon -->
                  Add to Cart
                </button>
              </div>
            </li>
            <li class="product-item">
              <div class="image-container">
                <img
                  src="assets/img/flex-pillow.jpg"
                  alt="Mattress"
                  class="product-image"
                />
                <button class="discount">
                  <p class="discount-text">Only today!</p>
                  <p class="discount-text">Save $450</p>
                </button>
              </div>
              <!-- Product Image -->
              <div>
                <div class="product-rating">
                  <div class="rating">
                    <img
                      src="assets/icon/star.svg"
                      alt="Icon Star"
                      class="icon-star"
                    />
                    <p class="rating-text">4.7</p>
                  </div>
                  <h2>Luxury Organic Mattress</h2>
                </div>

                <p class="product-text">Starting at</p>
                <div class="price">
                  <span class="current-price">$1099</span>
                  <span class="old-price">$1549</span>
                </div>

                <div class="product-highlights-container">
                  <ul class="highlights-list">
                    <li class="highlights-item">
                      <img src="assets/icon/waves.svg" alt="Waves Icon" />
                      <p class="product-highlights">Medium Firm</p>
                    </li>
                    <li class="highlights-item">
                      <img src="assets/icon/ruler.svg" alt="Ruler Icon" />
                      <p class="product-highlights">13-inch</p>
                    </li>
                    <li class="highlights-item">
                      <img src="assets/icon/snowflake.svg" alt="Cooling Icon" />
                      <p class="product-highlights">Refresh Cooling Tech.</p>
                    </li>
                  </ul>
                </div>
                <p class="availability">Available in 7 sizes</p>
                <button class="add-to-cart">
                  <img
                    src="assets/icon/shopping-cart.svg"
                    alt="Cart"
                    class="icon-cart"
                  />

                  <!-- Cart Icon -->
                  Add to Cart
                </button>
              </div>
            </li>

                      </ul>
    `;

    const productContainer =
      document.querySelector(".product-list").parentElement;
    productContainer.insertAdjacentHTML("beforeend", newSectionHTML);
  });
