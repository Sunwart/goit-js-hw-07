import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryElem = document.querySelector('.gallery');

galleryElem.innerHTML = galleryItems
  .map(
    ({ original, preview, description }) =>
      `<div class="gallery__item"><a href="${original}" class="gallery__link"><img src="${preview}" data-source="${original}" alt="${description}" class="gallery__image"></a></div>`,
  )
  .join('');

galleryElem.addEventListener('click', viewImage);

function viewImage(event) {
  if (!event.target.classList.contains('gallery__image')) {
    return;
  }
  event.preventDefault();
  const imageInstance = basicLightbox.create(`<img src="${event.target.dataset.source}">`);

  imageInstance.show();

  let visible = true;

  document.addEventListener('keydown', closeModal);

  function closeModal(event) {
    if (event.key === 'Escape') {
      imageInstance.close();
      document.removeEventListener('keydown', closeModal);
      visible = false;
    }

    stopListeningKeyboard();
  }

  function stopListeningKeyboard() {
    if (visible !== imageInstance.visible()) {
      document.removeEventListener('keydown', closeModal);
    }
  }
}
