var menu = document.querySelector(".menu")
var ham = document.querySelector(".ham")
var xIcon = document.querySelector(".xIcon")
var menuIcon = document.querySelector(".menuIcon")

ham.addEventListener("click", toggleMenu)

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu")
    xIcon.style.display = "none"
    menuIcon.style.display = "block"
  } else {
    menu.classList.add("showMenu")
    xIcon.style.display = "block"
    menuIcon.style.display = "none"
  }
}

var menuLinks = document.querySelectorAll(".menuLink")

menuLinks.forEach(function (menuLink) {
  menuLink.addEventListener("click", toggleMenu)
})
function Gallery(gallery) {
  if (!gallery) {
    throw Error(`No gallery found!!`)
  }
  this.gallery = gallery
  // select the element we need
  this.images = Array.from(gallery.querySelectorAll(`img`))
  this.modal = document.querySelector(`.modal`)
  this.images.forEach(image => {
    image.addEventListener(`click`, e => this.showImage(e.currentTarget))
  })

}

// use it on the page
Gallery.prototype.handleClickOutside = function (e) {
  if (e.currentTarget === e.target) {
    this.closeModal()
  }
}

Gallery.prototype.openModal = function () {
  this.modal.classList.add(`open`)
  // event listener to be bound when we open the modal
  window.addEventListener(`keyup`, this.handleKeyUp)
  this.modal.addEventListener(`click`, this.handleClickOutside)
}
Gallery.prototype.closeModal = function () {
  this.modal.classList.remove(`open`)
  //TODO: add event listeners for clicks and keyboard
  window.addEventListener(`keyup`, this.handleKeyUp)
  this.modal.removeEventListener(`click`, this.handleClickOutside)
}

Gallery.prototype.showImage = function (el) {
  // update the modal with this info
  let clickedImage = (this.modal.querySelector(`img`).src = el.src)
  this.images.forEach(image => {
      image.classList.remove("image-thumbnail-selected")
  })
  el.classList.add("image-thumbnail-selected")

  // store the reference of the current  image useful for later
  this.currentImage = el
  this.openModal()
}

const gallery = new Gallery(document.querySelector(`.gallery`))
