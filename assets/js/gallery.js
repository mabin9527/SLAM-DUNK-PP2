

function changeCurrent() {
    let navBar = document.querySelector('.nav-bar');

    for (let i = 0; i < navBar.children.length; i++) {
        navBar.children[i].addEventListener('mouseover', function() {
            this.className = 'current';
        })
        navBar.children[i].addEventListener('mouseout', function() {
            this.className = '';
        })
    }
}
changeCurrent();

/**
 * Set up all images in gallery responsive
 */

/**
 *  Make images in the middle of screen by using screen width devided by each image's box height.
 *  And let one image width to be blank on two side of images
 */

function waterFlow() {
    let gallery = document.querySelector('.gallery');
    let galleryBox = document.querySelector('.gallery-box');
    let screenWidth = document.documentElement.clientWidth;
    let galleryBoxWidth = galleryBox.offsetWidth;
    let rowsNum = Math.floor(screenWidth / galleryBoxWidth) - 1;
    gallery.style.cssText = 'width:' + rowsNum * galleryBoxWidth + 'px;margin: 70px auto;';
    getMinHeight(galleryBox, rowsNum);
}
waterFlow();

/**
 * Set up images position which allows the second row of images going to underneath first row of images that 
 * have smallest height.
 */

function getMinHeight(galleryBox, rowsNum) {

}
