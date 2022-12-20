


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
 *  Make images in the middle of screen by using screen width devided by each image's box height.
 *  Set up images position which allows the second row of images going to underneath first row of 
 *  images that have smallest height.
 */

window.onload = function() {

    waterFall();

    function waterFall() {
        let gallery = document.querySelector('.gallery');
        let screenWidth = document.documentElement.clientWidth || document.body.clientWidth;
        let galleryBox = document.querySelectorAll('.gallery-box');
        let galleryBoxWidth = galleryBox[0].offsetWidth;
        let rowsNum = Math.floor(screenWidth / galleryBoxWidth);
        gallery.style.width = galleryBoxWidth * rowsNum + 'px';
        gallery.style.height = '100%';
        gallery.style.margin = '70px auto';
        let arr = [];
        for(let i = 0; i < galleryBox.length; i++) {
            galleryBox[i].style = '';
            if(i < rowsNum) {
                arr.push(galleryBox[i].offsetHeight);
            } else {
                let minHeightOfRows = Math.min.apply(null, arr);
                let minHeightOfIndex = arr.indexOf(minHeightOfRows);
                galleryBox[i].style = `position:absolute;left:${minHeightOfIndex * galleryBoxWidth}px;top:${minHeightOfRows}px`;
                arr[minHeightOfIndex] += galleryBox[i].offsetHeight;
            }
        }
    }
    window.addEventListener('resize', function(){
        waterFall();
    })
}







