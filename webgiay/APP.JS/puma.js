let data = [
  {
    id: 1,
    quantity: 1,
    name: "PUMA Future Ultimate Cage TT",
    price: "2.759.000",
    img: "./IMG./puma img/giay-da-banh-puma-future-ultimate-cage-1-4-tf-107174-01-xanh-cam-1_93f45529f0e44ae08a38aa048c92b888_grande.webp",
  },
  {
    id: 2,
    quantity: 1,
    name: "Puma x Rick And Morty",
    price: "4.300.999",
    img: "./IMG./nike img/nike2.jpeg",
  },
  {
    id: 3,
    quantity: 1,
    name: "Puma Ultra 2.1 TT",
    price: "2.300.000",
    img: "./IMG./puma img/puma2.jpeg",
  },
  {
    id: 4,
    quantity: 1,
    name: "PUMA rika house",
    price: "800.000",
    img: "./IMG./puma img/puma3.jpeg",
  },
  {
    id: 5,
    quantity: 1,
    name: "PUMA small world",
    price: "1.100.000",
    img: "./IMG./adidas4.webp",
  },
  {
    id: 6,
    quantity: 1,
    name: "PUMA Fast Ride",
    price: "5.300.000",
    img: "./IMG./adidas5.webp",
  },
  {
    id: 7,
    quantity: 1,
    name: "ÁO Thun PUMA Nam",
    price: "850.000",
    img: "./IMG./puma img/puma6.jpeg",
  },
  {
    id: 8,
    quantity: 1,
    name: "Giày Puma Skye Clean Pink",
    price: "1.390.000",
    img: "./IMG./puma img/puma7.jpeg",
  },
  {
    id: 9,
    quantity: 1,
    name: "Túi đưng PUMA",
    price: "600.000",
    img: "./IMG./puma img/puma8.webp",
  },
  {
    id: 10,
    quantity: 1,
    name: "Nữ Puma Future Rider Marble ",
    price: "2.350.000",
    img: "./IMG./puma img/puma9.webp",
  },
  {
    id: 11,
    quantity: 1,
    name: "Puma Future Pink",
    price: "300.000",
    img: "./IMG./puma img/puma10.webp",
  },
  {
    id: 12,
    quantity: 1,
    name: "Puma ÁO PHÔNG ",
    price: "600.000",
    img: "./IMG./puma img/puma12.jpeg",
  },
];
localStorage.setItem("data");
// let data = JSON.parse(localStorage.getItem("products"));
localStorage.setItem("products", JSON.stringify(data));

let data = JSON.parse(localStorage.getItem("products"));
let cart = JSON.parse(localStorage.getItem("cart"));
let resultCart = document.getElementById("result");
function renderCart() {
  let result = 0;
  cart.forEach((element) => {
    result = result + element.quantity;
  });
  resultCart.innerHTML = result;
}
renderCart();

let listImgElement = document.getElementById("listImg");

renderNike(data);
function renderNike(data) {
  listImgElement.innerHTML = "";
  for (let i in data) {
    listImgElement.innerHTML += `<div class="bodyElement">
        <img
          src="${data[i].img}"
          alt=""
        />
        <p>${data[i].name}</p>
        <br />
        <p>Giá :${data[i].price}đ</p>
        <button class="add-btn" id="${data[i].id}">Mua Sản phẩm</button>
      </div>`;
  }
}
let quantity = document.getElementById("cart");
let i = 0;
let bodyElement = document.querySelectorAll(".listImg .bodyElement");

let arr = [];

listImgElement.onclick = function (e) {
  if (e.target.classList.contains("add-btn")) {
    let i = findIndex(e.target, data);

    if (i > -1) {
      let clickProduct = data[i];
      let inCart = findIndex(clickProduct, cart);
      if (inCart > -1) {
        cart[inCart].quantity++;
        localStorage.setItem("cart", JSON.stringify(cart));
        renderCart();
      } else {
        cart.push(clickProduct);
        localStorage.setItem("cart", JSON.stringify(cart));
        renderCart();
      }
    }
  }
};

function findIndex(element, array) {
  let findIndex = -1;
  for (let i = 0; i < array.length; i = i + 1) {
    if (+element.id === array[i].id) {
      findIndex = i;
    }
  }
  return findIndex;
}
