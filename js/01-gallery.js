import { galleryItems } from './gallery-items.js';
// Change code below this line

const appendPlace = document.querySelector("div.gallery");

let modalWindow;

const stringMarkup = makeMarkupFromArrData(galleryItems);

markupRender(appendPlace, stringMarkup);

appendPlace.addEventListener('click', event => clickValidate(imgClickHandler, event))

document.addEventListener("keydown", (event) =>{
    if(event.code === "Escape" && modalWindow.visible()){
        modalWindow.close();
    }
    })
    
function imgClickHandler(event) {
    event.stopPropagation();
    event.preventDefault();
    makeModalWithImg(event.target.dataset.source);
}

function clickValidate(evtHandler, evt){
    if(evt.target.nodeName !== "IMG"){
         return
     }
     evtHandler(evt);
}

function makeModalWithImg(imgUrl){
    modalWindow = basicLightbox.create(`<img src="${imgUrl}" width="auto" height="auto">`);
    modalWindow.show();
}

function makeMarkupFromArrData(arrayImg) {
    const markup = arrayImg.map(element =>  
        `<div class="gallery__item">
        <a class="gallery__link" href="${element.original}">
            <img
            class="gallery__image"
            src="${element.preview}"
            data-source="${element.original}"
            alt="${element.description}"
            />
        </a>
        </div>` 
    ).join("");
    return markup;
}

function markupRender (placeElement, stringData){
    placeElement.insertAdjacentHTML("beforeend", stringData);
}


//task-1
//1.Create and render markup based on the data array — galleryItems, and the provided gallery item template.
//2.Implementing delegation on div.gallery and getting the url of the big image.
//3.Connect the script and styles library of the modal window - basicLightbox .
// Use the CDN service - jsdelivr, and add links to the project the minified (.min) library files.
//4.Opening a modal window by clicking on a gallery element. To do this, read the documentation and examples.
//5. Replacing the value of the src attribute of the <img> element in the modal before opening.
// Use the ready markup of modal window with an image from the basicLightbox library examples.

// Gallery element markup

//The link to the original image must be kept in the data-attribute source on the <img> element,and specified in the href of the link.
//Do not add any other HTML tags or CSS classes other than those in this template.

/* <div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="small-image.jpg"
      data-source="large-image.jpg"
      alt="Image description"
    />
  </a>
</div> */
//

//Note that the image is wrapped in a link, which means that when clicked, the user will be redirected to another page by default.
// Disable this behavior by default.

//Closing from the keyboard
//ATTENTION
//This functionality is not required, but it will be a good additional practice.
//Add a closing modal window on pressing the Escape key. Do it so, that listening of the keyboard is only while the modal window is open.
//The basicLightbox library has a method to programmatically close a modal window.