var products = [
  {
    name: "A22",
    price: "899 dt",
    category: "Samsung",
    imgSrc:
      "https://selectshop.tn/18825-medium_default/smartphone-samsung-galaxy-a22-5g-64go-violet.jpg",
  },
  {
    name: "Iphone14",
    price: "5699 dt ",
    category: "Apple",
    imgSrc:
      "https://www.tunisianet.com.tn/286978-large/smartphone-apple-iphone-14-pro-max-6go-128-go-noir.jpg",
  },
  {
    name: "Realmec5",
    price: "500 dt",
    category: "xiaomi",
    imgSrc: "https://mobiledam.com.bd/assets/img/Realme-C5.webp",
  },
  {
    name: "Redmi12 ",
    price: "1799 dt",
    category: "xiaomi",
    imgSrc:
      "https://mk-media.mytek.tn/media/catalog/product/cache/8be3f98b14227a82112b46963246dfe1/s/m/smartphone-xiaomi-redmi-12-8go-128go-bleu.jpg",
  },
  {
    name: "oppoReno",
    price: "699 dt",
    category: "oppo",
    imgSrc:
      "https://mk-media.mytek.tn/media/catalog/product/cache/8be3f98b14227a82112b46963246dfe1/1/1/1110780555399_2_1.jpg",
  },
  {
    name: "iphone13",
    price: "3599 dt",
    category: "Apple",
    imgSrc:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/refurb-iphone-13-pro-max-gold-2023?wid=2000&hei=1897&fmt=jpeg&qlt=95&.v=1679072988850",
  },
  {
    name: "s23ultra ",
    price: "6999 dt",
    category: "Samsung",
    imgSrc:
      "https://www.tunisianet.com.tn/292067-large/smartphone-samsung-galaxy-s23-ultra-5g-12-go-256-go-vert.jpg",
  },

  {
    name: "iphone12",
    price: "3999 dt",
    category: "Apple",
    imgSrc:
      "https://mk-media.mytek.tn/media/catalog/product/cache/8be3f98b14227a82112b46963246dfe1/i/p/iphone-12-128go-noir-apple.jpg",
  },
  {
    name: "S22",
    price: "2999 dt",
    category: "samsung",
    imgSrc:
      "https://pimcdn.sharafdg.com/cdn-cgi/image/width=600,height=600,fit=pad/images/S225G_green_1?1691039485",
  },
  {
    name: "iphone11",
    price: "1799 dt",
    category: "Apple",
    imgSrc:
      "https://tunisiatech.tn/5558-large_default/apple-iphone-11-64go-black.jpg",
  },
  {
    name: "A52",
    price: "1999 dt",
    category: "samsung",
    imgSrc:
      "https://www.wiki.tn/62632/smartphone-samsung-galaxy-a52-8-128go-violet.jpg",
  },
  {
    name: "HUAWEINOVA",
    price: "1299 dt",
    category: "huawei",
    imgSrc:
      "https://khadraouitek.tn/925-large_default/smartphone-huawei-nova-9-8go-128go-noir.jpg ",
  },
];

function each(coll, f) {
  if (Array.isArray(coll)) {
    for (var i = 0; i < coll.length; i++) {
      f(coll[i], i);
    }
  } else {
    for (var key in coll) {
      if (coll.hasOwnProperty(key)) {
        f(coll[key], key);
      }
    }
  }
}

function map(array, f) {
  var acc = [];
  each(array, function (element, i) {
    acc.push(f(element, i));
  });
  return acc;
}

function filter(array, predicate) {
  var acc = [];
  each(array, function (element) {
    if (predicate(element)) {
      acc.push(element);
    }
  });
  return acc;
}

function reduce(array, f, acc) {
  if (acc === undefined) {
    acc = array[0];
    array = array.slice(1);
  }
  each(array, function (element, i) {
    acc = f(acc, element, i);
  });
  return acc;
}

$(document).ready(function () {
  var originalProducts = [...products]

  var productContainer = $("#product-container")

  function renderProducts(productArray) {
    productContainer.empty(); 

    each(productArray, function (product) {
      var card = $("<div class='product-card'></div>")

      var image = $("<img>").attr({
        src: product.imgSrc,
        alt: "Product Image",
      })
      var name = $("<h3>").addClass("product-name").text(product.name)

      var category = $("<p>")
        .addClass("product-category")
        .text("Category: " + product.category)

      var price = $("<p>")
        .addClass("product-price")
        .text("Price: " + product.price)

      card.append(image, name, category, price)
      productContainer.append(card)
    })
  }

  renderProducts(products); 

  $(".search-input").on("input", function (event) {
    var searchTerm = event.target.value.toLowerCase()

    if (searchTerm === "") {
      products = originalProducts
    } else {
      products = filter(originalProducts, function (product) {
        return product.name.toLowerCase().includes(searchTerm)
      })
    }
    renderProducts(products)
  })

  $(".samsung").on("click", function () {
  
    products = filter(originalProducts, function (product) {
      return product.category === "samsung"
    })
  renderProducts(products)
})

  $(".xiaomi").on("click", function () {

   products = filter(originalProducts,function(product){
    return product.category === "xiaomi"
   })
   renderProducts(products)

})


$(".Apple").on("click", function () {

  products = filter(originalProducts,function(product){
   return product.category === "Apple"
  })
  renderProducts(products)

})


$(".Oppo").on("click", function () {

  products = filter(originalProducts,function(product){
   return product.category === "oppo"
  })
  renderProducts(products)
  
})


$(".home").on("click", function () {
    window.location.reload()
})
})




const users = [
  { username: 'mouhib', password: 'mouhib123' },
  { username: 'farouk', password: 'farouk123' },
  { username: 'jdidi', password: 'jdidi123' }
]

const loginForm = document.getElementById('login-form')
const loginMessage = document.getElementById('login-message')


loginForm.addEventListener('submit', function(event) {
  event.preventDefault()

  const username = document.getElementById('username').value
  const password = document.getElementById('password').value

  const matchedUsers = filter(users, function(user) {
      return user.username === username && user.password === password
  });

  if (matchedUsers.length > 0) {
      loginMessage.textContent = 'welcome'
      window.location.href = 'file.html'
  } else {
      loginMessage.textContent = 'Login failed'
  }

  loginForm.reset()
})