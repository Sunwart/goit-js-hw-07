import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryElem = document.querySelector('.gallery');

galleryElem.innerHTML = galleryItems
  .map(
    ({ original, preview, description }) =>
      `<a href="${original}" class="gallery__item"><img src="${preview}" alt="${description}" title="${description}" class="gallery__image"></a>`,
  )
  .join('');

let gallery = new SimpleLightbox('.gallery a', { captionDelay: 250 });
