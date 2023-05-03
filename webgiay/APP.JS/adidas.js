let data = [
  {
    id: 1,
    quantity: 1,
    name: "GIÀY ULTRABOUNCE",
    price: "2.400.000",
    img: "./IMG./adidas 1.jpeg",
  },
  {
    id: 2,
    quantity: 1,
    name: "GIÀY ĐÁ BÓNG TURF X SPEEDPORTA",
    price: "3.300.000",
    img: "./IMG./adidas2.jpeg",
  },
  {
    id: 3,
    quantity: 1,
    name: "set quần áo adidas",
    price: "900.000",
    img: "./IMG./mizuno img/mizuno3.jpeg",
  },
  {
    id: 4,
    quantity: 1,
    name: "Quần áo trẻ em",
    price: "1.300.000",
    img: "./IMG./adidas4.webp",
  },
  {
    id: 5,
    quantity: 1,
    name: "ADIDAS VIC PRO",
    price: "4.300.000",
    img: "./IMG./adidas5.webp",
  },
  {
    id: 6,
    quantity: 1,
    name: "GIÀY ĐÁ BÓNG FIRM GROUND ",
    price: "1.300.000",
    img: "./IMG./adidas6.webp",
  },
  {
    id: 7,
    quantity: 1,
    name: "Giày Đá Bóng Adidas Copa Sense .",
    price: "3.050.000",
    img: "./IMG./adidas7.webp",
  },
  {
    id: 8,
    quantity: 1,
    name: "ÁO ADIDAS KARAGU",
    price: "800.000",
    img: "./IMG./adidas 8.webp",
  },
  {
    id: 9,
    quantity: 1,
    name: "GIÀY ĐÁ BÓNG X SPEEDPORTAL MESSI",
    price: "5.300.000",
    img: "./IMG./adidas9.webp",
  },
  {
    id: 10,
    quantity: 1,
    name: "ADIDAS giày giới hạn",
    price: "4.100.000",
    img: "./IMG./adidas10.webp",
  },
  {
    id: 11,
    quantity: 1,
    name: "Adidas baby ii",
    price: "1.400.000",
    img: "./IMG./adidas11.jpeg",
  },
  {
    id: 12,
    quantity: 1,
    name: "Áo Adidas xanh dương",
    price: "900.000",
    img: "./IMG./adidas12.webp",
  },
];
localStorage.setItem("data", JSON.stringify(data));
console.log("data");
// let data = JSON.parse(localStorage.getItem("data"));
// let cart = JSON.parse(localStorage.getItem("cart"));
let resultCart = document.getElementById("result");
