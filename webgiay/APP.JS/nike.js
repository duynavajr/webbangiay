// let data = [
//   {
//     id: 1,
//     quantity: 1,
//     name: "NIKE ZOOM SUPERFLY TRẮNG",
//     price: "1.300.000đ",
//     img: "./IMG./nike img/98484903dc0358f758cadd0937b8de04.jpeg",
//   },
//   {
//     id: 2,
//     quantity: 1,
//     name: "GIÀY NIKE JOYRIDE RUN",
//     price: "1.800.000đ",
//     img: "./IMG./nike img/nike2.jpeg",
//   },
//   {
//     id: 3,
//     quantity: 1,
//     name: "ÁO NIKE SWOOSH",
//     price: "700.000đ",
//     img: "./IMG./nike img/nike3.jpeg",
//   },
//   {
//     id: 4,
//     quantity: 1,
//     name: "NIKE MERCURIAL AO9469",
//     price: "1.400.000đ",
//     img: "./IMG./nike img/nike4.jpeg",
//   },
//   {
//     id: 5,
//     quantity: 1,
//     name: "NIKE PHANTOM GT ELITE FG",
//     price: "2.000.000đ",
//     img: "./IMG./nike img/nike5.jpeg",
//   },
//   {
//     id: 6,
//     quantity: 1,
//     name: "NIKE JORDAN TRẮNG XÁM",
//     price: "3.000.000đ",
//     img: "./IMG./nike img/nike6.jpeg",
//   },
//   {
//     id: 7,
//     quantity: 1,
//     name: "Sneaker Nike Air Jordan Cổ Cao Xanh",
//     price: "2.300.000đ",
//     img: "./IMG./nike img/nike7.webp",
//   },
//   {
//     id: 8,
//     quantity: 1,
//     name: "ÁO BIG SWOOSH NIKE",
//     price: "600.000đ",
//     img: "./IMG./nike img/nike8.webp",
//   },
//   {
//     id: 9,
//     quantity: 1,
//     name: "Nike Premier Sala II",
//     price: "900.000đ",
//     img: "./IMG./nike img/nike9.webp",
//   },
//   {
//     id: 10,
//     quantity: 1,
//     name: "Nike Dunk Low White Black",
//     price: "1.700.000đ",
//     img: "./IMG./nike img/nike10.jpeg",
//   },
//   {
//     id: 11,
//     quantity: 1,
//     name: "Nike Mercurial Superfly 8 Elite FG",
//     price: "4.300.000đ",
//     img: "./IMG./nike img/nike11.webp",
//   },
//   {
//     id: 12,
//     quantity: 1,
//     name: "NIKE MERCURIAL VAPOR 13 PRO",
//     price: "9.000.000đ",
//     img: "./IMG./nike img/nike12.webp",
//   },
// ];
// localStorage.setItem("data", JSON.stringify(data));

let data = JSON.parse(localStorage.getItem("data"));
let cart = JSON.parse(localStorage.getItem("cart"));
let resultCart = document.getElementById("result");

cart.forEach((element) => {

});

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
      } else {
        cart.push(clickProduct);
        localStorage.setItem("cart", JSON.stringify(cart));
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

bodyElement.forEach(x => {
    x.addEventListener("click", function(e){
        i++;
        if(e.target.getAttribute("type") == "submit"){
            let index = e.target.getAttribute("id");
            quantity.innerHTML = `GIỎ HÀNG: ${i}<i class="fa-solid fa-cart-shopping"></i>`;
            let check = false;
            for (let key in arr) {
                if(arr[key].id == index){
                    arr[key].quantity += 1;
                    check = true;
                }
            }
            if(check == false){
                arr.push(data[index - 1]);
            }
            localStorage.setItem("cart", JSON.stringify(arr));
        }
    })
})
