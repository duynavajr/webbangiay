// let cart = JSON.parse(localStorage.getItem("products"));
// let cart = [];
let cart = JSON.parse(localStorage.getItem("cart")) || []
console.log(cart);
// localStorage.setItem("cart", JSON.stringify(cart));

let giay = document.getElementById("list-giay");

let tong = document.getElementById("sum");

let sum = 0;
// tinh toan tong so tien
for (const element of cart) {
  // convert price ve dang number
  sum = sum + element.quantity * Number(element.price.replaceAll(".", ""));
}
console.log(sum);
tong.innerHTML = `${sum.toLocaleString()}đ`;

renderNikeCart(cart);
function renderNikeCart(a) {
  giay.innerHTML = "";
  for (let i in a) {
    giay.innerHTML += `<div class="giay-dep" id="giay-dep">
        <div>
        <img src="${a[i].img}" />
      </div>
      <div class="font-giohang">
        <div class="name-sanpham">${a[i].name}</div>
        <div class="gia-sanpham">giá:${a[i].price} đ</div>
        <div>
          <label>Chọn kích thước giày dép:</label>
          <select name="size" class="size-giay-dep">
            <option value="size">size</option>
            <option value="39">39</option>
            <option value="40">40</option>
            <option value="41">41</option>
            <option value="42">42</option>
            <option value="43">43</option>
            <option value="44">44</option>
          </select>
        </div>
        <div>
          <label></label>
          <input class="sl-sanpham" type="number" min="0" max="100" value="${a[i].quantity}" />
        </div>
      </div>
      <div style="margin-left: 200px; font-size: 2em">
        <ion-icon name="close-outline" id="${i}" class="delete"></ion-icon>
      </div></div>`;
  }
}
giay.onclick = function (e) {
  let check = -1;
  // log ra de xem an su kien chua
  if (e.target.classList.contains("delete")) {
    for (let i in cart) {
      if (e.target.id == cart[i].id) {
        check = i;
      }
    }
    cart.splice(check, 1);
    localStorage.setItem("cart", cart);
    renderNikeCart(products);
  }
};


// let input = document.getElementsByClassName('sl-sanpham')[0]
// console.log(input);