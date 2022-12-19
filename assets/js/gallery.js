


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


let gallery = document.querySelector('.gallery');
let screenWidth = document.documentElement.clientWidth;
let galleryBoxWidth = gallery.children[0].offsetWidth;
let rowsNum = Math.floor(screenWidth / galleryBoxWidth) - 1;

function waterFall() {
    window.addEventListener('resize', function (){
        gallery.style.cssText = 'width:' + rowsNum * galleryBoxWidth + 'px;margin: 70px auto;';
        getMinHeight();
    })
}
waterFall();



/**
 * Set up images position which allows the second row of images going to underneath first row of images that 
 * have smallest height.
 */

function getMinHeight() {
    let rowsHeightArray = [];
    for (let i = 0; i < gallery.children.length; i++) {
        if(i < rowsNum) {
            rowsHeightArray[i] = gallery.children[i].offsetHeight;
        } else {
            let minHeightOfRows = Math.min.apply(null, rowsHeightArray);
            let minHeightOfIndex = rowsHeightArray.indexOf(minHeightOfRows);
            gallery.children[i].style.position = 'absolute';
            gallery.children[i].style.top = minHeightOfRows + 'px'; 
            gallery.children[i].style.left = gallery.children[minHeightOfIndex].offsetLeft + 'px';
            rowsHeightArray[minHeightOfIndex] = rowsHeightArray[minHeightOfIndex] + gallery.children[i].offsetHeight;
        }
    }

}

