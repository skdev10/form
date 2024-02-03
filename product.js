var splide = new Splide( '#first-slider', {
    perPage: 3,
    gap    : '1rem',
    perMove: '1',
    padding: '3rem',
    drag: 'free',
    snap: true,
    autoplay: true,
    type: 'loop',
    breakpoints: {
      640: {
        perPage: 2,
        gap    : '.7rem',
        
      },
      480: {
        perPage: 1,
        gap    : '.7rem',
       
      },
    },
  } );
   splide.mount();

  var splide = new Splide( '#second-slider', {
    perPage: 3,
    gap    : '1rem',
    perMove: '1',
    padding: '3rem',
    drag: 'free',
    snap: true,
    autoplay: true,
    type: 'loop',
    breakpoints: {
      640: {
        perPage: 2,
        gap    : '.7rem',
        
      },
      480: {
        perPage: 1,
        gap    : '.7rem',
       
      },
    },
  } );
  
  splide.mount();


  var splide = new Splide( '#third-slider', {
    perPage: 3,
    gap    : '1rem',
    perMove: '1',
    padding: '3rem',
    drag: 'free',
    snap: true,
    autoplay: true,
    type: 'loop',
    breakpoints: {
      640: {
        perPage: 2,
        gap    : '.7rem',
        
      },
      480: {
        perPage: 1,
        gap    : '.7rem',
       
      },
    },
  } );
  
  splide.mount();


  var splide = new Splide( '#fourth-slider', {
    perPage: 3,
    gap    : '1rem',
    perMove: '1',
    padding: '3rem',
    drag: 'free',
    snap: true,
    autoplay: true,
    type: 'loop',
    breakpoints: {
      640: {
        perPage: 2,
        gap    : '.7rem',
        
      },
      480: {
        perPage: 1,
        gap    : '.7rem',
       
      },
    },
  } );
  
  splide.mount();


  var splide = new Splide( '#fifth-slider', {
    perPage: 3,
    gap    : '1rem',
    perMove: '1',
    padding: '3rem',
    drag: 'free',
    snap: true,
    autoplay: true,
    type: 'loop',
    breakpoints: {
      640: {
        perPage: 2,
        gap    : '.7rem',
        
      },
      480: {
        perPage: 1,
        gap    : '.7rem',
       
      },
    },
  } );
  
  splide.mount();
 
  document.addEventListener("DOMContentLoaded", function () {
    // Find all buy buttons
    const buyButtons = document.querySelectorAll(".buy-btn");

    // Reference to the "Add to Cart" modal
    const addToCartModal = new bootstrap.Modal(document.getElementById('addToCartModal'));

    // Reference to the div inside the modal to display information
    // const addToCartInfoDiv = document.getElementById("addToCartInfo");

    // Reference to the cart menu
    const cartMenu = document.getElementById("cart-menu");

    // Reference to the cart items list
    const cartItemsList = document.getElementById("cart-items");

    // Reference to the button to open the cart menu
    const openCartBtn = document.getElementById("openCartBtn");

    // Reference to the close button in the cart menu
    const closeCartBtn = document.getElementById("closeCartBtn");
    const orderBtn = document.getElementById("orderBtn");
    

    orderBtn.addEventListener("click", function () {
      // Check if there are items in the cart
      if (Object.keys(productCounts).length > 0) {
          // Show a pop-up message
          alert("Thanks for the Order");

          // Clear the cart
          // productCounts = {};
          updateCartMenu();
      } else {
          // If no items in the cart, show a message
          alert("Your cart is empty. Add items before placing an order.");
      }
      
  });
  

    // Object to keep track of product counts
    const productCounts = {};

   // Add a click event listener to each buy button
   buyButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        // Get the product ID from the data-product-id attribute
        const productId = button.getAttribute("data-product-id");

        // Call a function to show a pop-up message for the selected product
        showBuyMessage(productId);

        // Call a function to add the product to the cart
        addToCart(productId);
    });
});

    // Add a click event listener to the button to open the cart menu
    openCartBtn.addEventListener("click", function () {
        // Update the cart menu before showing it
        updateCartMenu();
        // Show the cart menu
        cartMenu.style.display = "block";
    });

    // Add a click event listener to the close button in the cart menu
    closeCartBtn.addEventListener("click", function () {
        // Hide the cart menu
        cartMenu.style.display = "none";
    });

    // Function to add the product to the cart
    function addToCart(productId) {
        // Check if the product ID is in the counts object, initialize to 0 if not
        if (!productCounts[productId]) {
            productCounts[productId] = 0;
        }
        console.log(`Product added to cart: ${productId}`);
        // Increment the count for the product
        productCounts[productId]++;

        // Update the modal content with the new count
        // addToCartInfoDiv.innerHTML = `<p>${productId}: ${productCounts[productId]} added to cart</p>`;

        // Update the cart menu
        updateCartMenu();
    }

    // Function to update the cart menu
    function updateCartMenu() {
        // Clear the existing items in the cart menu
        cartItemsList.innerHTML = "";

        // Populate the cart menu with the current cart items
        for (const productId in productCounts) {
            const count = productCounts[productId];
            const listItem = document.createElement("li");
            listItem.textContent = `${productId}: ${count}`;
            cartItemsList.appendChild(listItem);
        }
    }
       // Function to show a pop-up message for the selected product
       function showBuyMessage(productId) {
        const productInfo = getProductInfo(productId);
        alert(`You have added "${productInfo.name}" to your cart. Click the cart icon to view your items.`);
    }

    // Function to get product information based on the product ID (add this function if not already present)
    function getProductInfo(productId) {
        // Replace this with your logic to fetch product information based on the productId
        // For example, you can have an array of products and find the one with the matching ID
        const products = [
            { id: "appleciderdonut", name: "Apple Cider Donut" },
            { id: "nutelladonut", name: "Nutella Donut" },
            { id: "oreodonut", name: "Oreo Donut" },
            { id: "strawberrydonut", name: "Strawberry Donut" },
            { id: "fluffernutterdonut", name: "Fluffernutter Donut" },
            { id: "biscoffdonut", name: "Biscoff Donut" },
            { id: "caramelbrownies", name: "Caramel Brownies" },
            { id: "mintcremebrownies", name: "Mint Creme Brownies" },
            { id: "nutellabrownie", name: "Nutella Brownies" },
            { id: "oreobrownie", name: "Oreo Brownies" },
            { id: "redvelvetbrownie", name: "Red Velvet Brownies" },
            { id: "peanutbutterbrownie", name: "Peanut Butter Brownies" },
            { id: "Oatmealraisincookies", name: "Oatmeal Raisin Cookies" },
            { id: "almondcookies", name: "Almond Cookies" },
            { id: "Peanutbuttercookies", name: "Peanut Butter Cookies" },
            { id: "Doublechocolatecookies", name: "Double Chocolate Cookies" },
            { id: "Chocolatecrinklecookies", name: "Chocolate Crinkle Cookies" },
            { id: "Chocolatechipcookies", name: "Chocolate Chip Cookies" },
            { id: "blueberrymacrons", name: "Blueberry Macrons" },
            { id: "caramelmacrons", name: "Caramel Macrons" },
            { id: "chocolatemacrons", name: "Chocolate Macrons" },
            { id: "pistachiomacrons", name: "Pistachio Macrons" },
            { id: "strawberrymacrons", name: "Strawberry Macrons" },
            { id: "oreomacrons", name: "Oreo Macrons" },
            { id: "nutellacake", name: "Nutella Cake" },
            { id: "lotuscake", name: "Lotus Cake" },
            { id: "blackforestcake", name: "Black Forest Cake" },
            { id: "threemilkcake", name: "Three Milk Cake" },
            { id: "oreocake", name: "Oreo Cake" },
            { id: "redvelvetcake", name: "Red Velvet Cake" },
            { id: "whitemug", name: "White Tea Mug" },
            { id: "brownmug", name: "Brown Tea Mug" },
            { id: "blacktshirt", name: "Black T-shirt" },
            { id: "whitetshirt", name: "White T-shirt" },
            { id: "browntshirt", name: "Brown T-shirt" },
            { id: "chefhat", name: "Chef's Hat" },
            { id: "cakestand", name: "Cake Stand" },
            { id: "apron", name: "Apron" },
            // Add other product entries as needed
        ];

        return products.find(product => product.id === productId);
    }
});