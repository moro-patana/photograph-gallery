console.log(`It works`);
console.log("let's code our gallery!");

function Gallery(gallery) {
    if (!gallery) {
        throw Error(`No gallery found!!`);
    }
this.gallery = gallery;
// select the element we need
 this.images = Array.from(gallery.querySelectorAll(`img`));
 this.modal = document.querySelector(`.modal`);
 this.prevButton = this.modal.querySelector(`.prev`);
 this.nextButton = this.modal.querySelector(`.next`);



this.images.forEach(image => {image.addEventListener(`click`, e => this.showImage(event.currentTarget));
});

// bind our method to the instance when we need
this.showNextImage = this.showNextImage.bind(this);
this.showPrevImage = this.showPrevImage.bind(this);
this.handleKeyUp = this.handleKeyUp.bind(this);
this.handleClickOutside = this.handleClickOutside.bind(this);

// loop over each image
this.images.forEach(image => {
    // attach an event listener for each image
    image.addEventListener(`keyup`, e => {
        // when that is keyup'd, check 
        if (e.key === `Enter`) {
            this.showImage(e.currentTarget);
        }
    })
})
};
// use it on the page
 Gallery.prototype.handleClickOutside = function(e) {
    if (e.currentTarget === e.target) {
        this.closeModal();
    }
 }
 
 Gallery.prototype.openModal = function() {
    console.log(`opening modal....`);
    if (this.modal.matches(`.open`)) {
        console.info(`Modal already open`);
        return;
    }
    this.modal.classList.add(`open`);
    // event listener to be bound when we open the modal
    window.addEventListener(`keyup`, this.handleKeyUp);
    this.modal.addEventListener(`click`, this.handleClickOutside);
    this.nextButton.addEventListener(`click`, this.showNextImage);
    this.prevButton.addEventListener(`click`,this.showPrevImage);

}
 Gallery.prototype.closeModal = function() {
    this.modal.classList.remove(`open`);
    //TODO: add event listeners for clicks and keyboard
    window.addEventListener(`keyup`, this.handleKeyUp);
    this.modal.removeEventListener(`click`, this.handleClickOutside);
    this.nextButton.removeEventListener(`click`, this.showNextImage);
    this.prevButton.removeEventListener(`click`, this.showPrevImage);

}
 Gallery.prototype.showNextImage = function() {
    this.showImage(this.currentImage.nextElementSibling || this.gallery.firstElementChild);
}
 Gallery.prototype.showPrevImage = function() {
    this.showImage(this.currentImage.previousElementSibling || this.gallery.lastElementChild);
}
 Gallery.prototype.handleKeyUp = function(e) {
    if (e.key === `Escape`) return this.closeModal();
        if (e.key === `ArrowLeft`) return this.showPrevImage();
        if (e.key === `ArrowRight`) return this.showNextImage();
    
};

 Gallery.prototype.showImage = function(el) {
    if (!el) {
        console.info(`no image to show`);
        return;
    }
    // update the modal with this info
    console.log(el);
    this.modal.querySelector(`img`).src = el.src;
    
    // store the reference of the current  image useful for later
    this.currentImage = el;
    this.openModal();
}

const gallery = new Gallery(document.querySelector(`.gallery`));

console.log(gallery);
