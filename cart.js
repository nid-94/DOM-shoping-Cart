// Todo : clean code for dom
//! 1-declarer tableau

let favs = Array.from(document.querySelectorAll(".fa-heart"));
let deleteBtns = Array.from(document.querySelectorAll(".btn-delete"));
let cards = Array.from(document.querySelectorAll(".prodd"));
let plusBtns = Array.from(document.querySelectorAll(".btnp"));
let minusBtns = Array.from(document.querySelectorAll(".btnm"));

//! 2-Favourites

for (let fav of favs) {
    fav.addEventListener("click", function () {
        if (fav.style.color === "black") {
            fav.style.color = "red";
        } else {
            fav.style.color = "black";
        }
    });
}

//! 3-Remove button Part
for (let i in deleteBtns) {
    deleteBtns[i].addEventListener("click", function () {
        cards[i].remove();
        total();
    });
}

//! 4-Add button
for (let plusBtn of plusBtns) {
    plusBtn.addEventListener("click", function () {
        plusBtn.nextElementSibling.innerHTML++;
        total();
    });
}

//! 5-Minus button
for (let minusBtn of minusBtns) {
    minusBtn.addEventListener("click", function () {
        if (minusBtn.previousElementSibling.innerHTML > 0) {
            minusBtn.previousElementSibling.innerHTML--;
        } else {
            null;
        }
        total();
    });
}

//! 5-Total price
function total() {
    let qte = Array.from(document.querySelectorAll("#quantity"));
    let price = Array.from(document.querySelectorAll("#price"));
    let s = 0;
    for (let i = 0; i < price.length; i++) {
        s = s + price[i].innerHTML * qte[i].innerHTML;
    }
    document.getElementById("total").innerHTML = s;
}
