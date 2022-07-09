import { galleryItems } from './gallery-items.js';
// Change code below this line

const insertPlace = document.querySelector(".gallery");

function makeStringMarkUp(imgItemsArr) {
    return imgItemsArr.map(imgItem => 
    `<a class="gallery__item" href="${imgItem.original}">
      <img
        class="gallery__image" src="${imgItem.preview}" alt="${imgItem.description}"
      />
    </a>`).join("");
}
const stringMarkUp = makeStringMarkUp(galleryItems);

insertPlace.insertAdjacentHTML('beforeend', stringMarkUp);

insertPlace.addEventListener("click", event => {
    event.preventDefault();
    if(event.target.nodeName !== "IMG") {
        return;
    }
    let gallery = new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionDelay: '250',
    });
    gallery.on('show.simplelightbox');
})

//Task 2 - SimpleLightbox library
//Make the same gallery as in the first task, but using the SimpleLightbox library,
//which will take handle of processing clicks on images, opening and closing a modal window,
//and scrolling through images using the keyboard.
//Watch a demo video of the gallery with the connected library.

//You need to change the markup of the gallery card a bit, use this template.

//<a class="gallery__item" href="large-image.jpg">
//  <img class="gallery_image" src="small-image.jpg" alt="Image description" />
//</a>

//Do this task in 02-lightbox.html and 02-lightbox.js files. Break it down into several subtasks:

//1.Create and render markup based on the galleryItems data array, and the provided template of gallery item. Use the ready code from the first task.
//2.Connecting the script and styles of the library using the CDN service cdnjs. You need to add links to two files: simple-lightbox.min.js and simple-lightbox.min.css.
//3.Library initialization after gallery elements are created and added to div.gallery. To do this, read the SimpleLightbox documentation - primarily the "Usage" and "Markup" sections.
//4.Look in the documentation for the "Options" section and add the display discriptions of images from the alt attribute.
//Let the discription be at the bottom and appear 250 milliseconds after the image is opened.