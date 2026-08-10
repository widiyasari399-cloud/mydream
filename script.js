/* =====================================
   WIDIYA RESTAURANT
   SCRIPT.JS PART 3A
=====================================*/


// ================================
// SLIDER
// ================================

let slides = document.querySelectorAll(".slide");

let currentSlide = 0;


function showSlide(index){

    slides.forEach(slide=>{
        slide.classList.remove("active");
    });


    slides[index].classList.add("active");

}


function nextSlide(){

    currentSlide++;

    if(currentSlide >= slides.length){

        currentSlide = 0;

    }

    showSlide(currentSlide);

}



function prevSlide(){

    currentSlide--;

    if(currentSlide < 0){

        currentSlide = slides.length - 1;

    }

    showSlide(currentSlide);

}



document.querySelector(".next")
?.addEventListener("click",nextSlide);



document.querySelector(".prev")
?.addEventListener("click",prevSlide);



// Auto Slider

setInterval(()=>{

    nextSlide();

},4000);




// =================================
// SHOPPING CART
// =================================


let cart = [];


const cartCount = document.getElementById("cart-count");

const cartItems = document.querySelector(".cart-items");

const cartSidebar = document.querySelector(".cart-sidebar");



const menuButtons = document.querySelectorAll(".add-cart");



menuButtons.forEach(button=>{


button.addEventListener("click",function(){


let card=this.closest(".menu-card");


let name=card.querySelector("h3").innerText;


let priceText=card.querySelector(".price-cart span").innerText;


let price=parseInt(
priceText.replace(/[^0-9]/g,"")
);



let image=card.querySelector("img").src;



let item={

name:name,

price:price,

image:image

};



cart.push(item);


updateCart();


alert(name+" berhasil ditambahkan ke keranjang");


});


});



// UPDATE CART


function updateCart(){


cartCount.innerText = cart.length;


cartItems.innerHTML="";


let total=0;



if(cart.length===0){

cartItems.innerHTML=

"<p>Keranjang masih kosong</p>";

}



cart.forEach((item,index)=>{


total+=item.price;



let div=document.createElement("div");


div.classList.add("cart-item");



div.innerHTML=`

<img src="${item.image}">

<div>

<h4>${item.name}</h4>

<span>
Rp ${item.price.toLocaleString()}
</span>

</div>


<button 
class="remove-item"
onclick="removeItem(${index})">

X

</button>

`;



cartItems.appendChild(div);


});



document.querySelector(".cart-footer h3").innerText=

"Total : Rp "+total.toLocaleString();



}




function removeItem(index){


cart.splice(index,1);


updateCart();


}




// OPEN CART


document.querySelector(".cart")
.addEventListener("click",()=>{


cartSidebar.classList.add("active");


});




// CLOSE CART


document.getElementById("closeCart")
.addEventListener("click",()=>{


cartSidebar.classList.remove("active");


});






// =================================
// SEARCH MENU
// =================================


const searchInput=

document.querySelector(".search-box input");



searchInput.addEventListener("keyup",()=>{


let keyword=

searchInput.value.toLowerCase();



let menuCards=

document.querySelectorAll(".menu-card");



menuCards.forEach(card=>{


let name=

card.querySelector("h3")
.innerText
.toLowerCase();



if(name.includes(keyword)){


card.style.display="block";


}

else{


card.style.display="none";


}



});


});





// =================================
// LANGUAGE SWITCH
// =================================


const language =

document.getElementById("language");



language.addEventListener("change",()=>{


if(language.value==="en"){


document.querySelector(".hero-content h1")
.innerText=

"Fresh Bread, Fresh Happiness";



document.querySelector(".hero-content p")
.innerText=

"Enjoy premium bread, cake and pastry with the best taste.";


}

else{


document.querySelector(".hero-content h1")
.innerText=

"Fresh Bread, Fresh Happiness";



document.querySelector(".hero-content p")
.innerText=

"Nikmati berbagai pilihan roti, cake, dan pastry premium dengan cita rasa terbaik.";


}


});





// =================================
// BACK TO TOP
// =================================


const topBtn=

document.getElementById("topBtn");



window.addEventListener("scroll",()=>{


if(window.scrollY>300){


topBtn.style.display="flex";


}

else{


topBtn.style.display="none";


}


});



topBtn.addEventListener("click",()=>{


window.scrollTo({

top:0,

behavior:"smooth"

});


});





// =================================
// SCROLL REVEAL
// =================================



const reveals=

document.querySelectorAll(".reveal");



window.addEventListener("scroll",()=>{


reveals.forEach(item=>{


let position=

item.getBoundingClientRect().top;



if(position < window.innerHeight-100){


item.classList.add("active");


}



});


});

Halo kak aku mau pesan makanannya ....
