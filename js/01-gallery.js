import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

function createGallery(imagesList) {
  return imagesList
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
    `;
    })
    .join("");
}

const galleryList = createGallery(galleryItems);
gallery.insertAdjacentHTML("afterbegin", galleryList);

gallery.addEventListener("click", handleClick);

function handleClick(e) {
  if (e.target === e.currentTarget) {
    return;
  }
  e.preventDefault();
  const instance = basicLightbox.create(`
    <img src="${e.target.dataset.source}" width="800" height="600">
`);
  instance.show();

  window.addEventListener("keydown", escapeClose.bind(instance));
}

function escapeClose(e) {
  if (e.code === "Escape") {
    this.close();
  }
}
