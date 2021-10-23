import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryElem = document.querySelector('.gallery');

galleryElem.innerHTML = galleryItems
  .map(
    ({ original, preview, description }) =>
      `<li class="gallery__item"><a href="${original}" class="gallery__link"><img src="${preview}" alt="${description}" class="gallery__image"></a></li>`,
  )
  .join('');

let gallery = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });
