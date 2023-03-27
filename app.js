const redcolor = documen.queryselector(".red");
const blackcolor = documen.queryselector(".black");
const imagecard = documen.queryselector(".product-image");
const feedbackBtn = documen.queryselector(".feedback");
const graycolor = documen.getElementByName(".gray");
const cartbutton = document.getElementById("button");

const ItemTag = document.getElementsByTagName("h3")[0];

redcolor.addEventListener("click" , function(){
    cartbutton.style.backgroundColor = "red";
    ItemTag.style.backgroundColor = "red";
    imagecard.style.backgroundImage = 'url("assets/IMG-20230211-WA0007.jpg")';
});

graycolor.addEventListener("click" , function(){
    cartbutton.style.backgroundColor = "gray";
    ItemTag.style.backgroundColor = "gray";
    imagecard.style.backgroundImage = 'url("assets/IMG-20230211-WA0007.jpg")';
});

blackcolor.addEventListener("click" , function(){
    cartbutton.style.backgroundColor = "black";
    ItemTag.style.backgroundColor = "black";
    imagecard.style.backgroundImage = 'url("assets/IMG-20230211-WA0007.jpg")';
});