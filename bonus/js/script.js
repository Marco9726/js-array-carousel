//Creo array immagini
const imagesArray = [
    "01.webp",
    "02.webp",
    "03.webp",
    "04.webp",
    "05.webp"
]
//array nome giochi
const gamesnames = [
    "Spiderman",
    "Ratchet & Clank",
    "Fortnite",
    "Stray",
    "Avengers"
]
//array prezzo giochi
const gamesprice = [
    "80,99",
    "59,99",
    "29,99",
    "29,99",
    "59,99"
]

//Creiamo dinamicamente i div con le immagini del carosello
let itemsContent = '';

for(let i = 0; i < imagesArray.length; i++){
    itemsContent += `<div class="item">
        <img src="./img/${imagesArray[i]}">
    </div>`
}

//inseriamo le immagini nel div che le deve contenere
const itemsSlider = document.querySelector('.item-slider');
itemsSlider.innerHTML += itemsContent;

//Prendiamo la prima immagine dell'array e la rendiamo attiva

//const items = document.querySelector('.item'); //ALTERNATIVA

const items = document.getElementsByClassName('item');
let itemActive = 0;

items[itemActive].classList.add('active');

//rendo attivo anche il primo cerchio di navigazione

const thum = document.getElementsByClassName('thum-img');

thum[itemActive].classList.add('active');

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

document.getElementById('cart-container').innerHTML = "Il tuo carrello è vuoto";

next.addEventListener('click', function(){
    // elimino la classe active dagli elemnti precedenti
    items[itemActive].classList.remove('active');
    thum[itemActive].classList.remove('active');
    //incremento il suo valore di 1
    itemActive += 1
    i++
    if (i > imagesArray.length - 1){
        i = 0;
    }
    // se itemActive arriva 5, visualizza la prima immagine
    if (itemActive > imagesArray.length - 1){
        itemActive = 0;
    }
    //aggiungere la class active al nuovo elemento dell'array items
    items[itemActive].classList.add('active');
    thum[itemActive].classList.add('active');
    
});

let i = 0
prev.addEventListener('click', function(){
    // elimino la classe active dagli elemnti precedenti
    items[itemActive].classList.remove('active');
    thum[itemActive].classList.remove('active');
    //incremento il suo valore di 1
    itemActive -= 1
    i--
    if (i < 0){
        i = 4;
    }
    // se itemActive arriva a -1, visualizza l'ultima immagine 
    if (itemActive < 0){
        itemActive = 4;
    }
    //aggiungere la class active al nuovo elemento dell'array items 
    items[itemActive].classList.add('active');
    thum[itemActive].classList.add('active');
})

////////////


const cart = document.getElementById('cart-circle');

let totalCart = 0;
console.log(totalCart);

// document.getElementById('total-cart').innerText = "ciaociao"//// perche non viene visualizzato niente ??
cart.addEventListener('click', function(){
    
    document.getElementById('cart-container').innerHTML += `<li> ${gamesnames[i]}  ${gamesprice[i]} </li>`

    
    

    console.log(itemActive);

})


