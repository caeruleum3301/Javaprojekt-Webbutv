const cartButton = document.getElementsByClassName("cart-button");
let output = document.getElementById("output-div");
let cartList = [];

for (var i = 0; i < cartButton.length; i++) {
  cartButton[i].addEventListener("click", function showComment(event) {
    console.log(event.target);
    cartList.push(event.path[2]);
    console.log(cartList);
    output.insertAdjacentHTML("beforeend", event.path[2]);
  });
}

function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
