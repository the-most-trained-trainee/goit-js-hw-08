// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from "simplelightbox";
// import "/node_modules/simplelightbox/dist/simple-lightbox.min.css";
import "simplelightbox/dist/simple-lightbox.min.css";

// console.log(galleryItems);


// Gallery Construction

const galleryContainer = document.querySelector(".gallery");
const galleryToInclude = galleryItems.map(item => `
    <a class="gallery__item" href="${item.original}">
    <img class="gallery__image" src="${item.preview}" alt="${item.description}"/>
    </a>    
`).join("");

galleryContainer.innerHTML = galleryToInclude;

const galleryLinkElement = document.querySelectorAll(".gallery__link");

galleryLinkElement.forEach(() => {
    addEventListener("click", (event) => event.preventDefault());
});

// Simple Light Box initialisation 

let gallery = new SimpleLightbox('.gallery a', { captionsData: "alt", captionDelay: 250 });