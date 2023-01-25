import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

function createGallery(imagesList) {
  return imagesList
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
    `;
    })
    .join('');
}

const galleryList = createGallery(galleryItems);
gallery.insertAdjacentHTML('afterbegin', galleryList);
