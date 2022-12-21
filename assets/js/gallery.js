


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

// make the gallery responsive

function createColumns(ele) {
    let width = ele.offsetWidth;
    if (width >= 1200) {
        column = 4;
    }

    if (width < 1200 && width >= 992) {
        column = 3;
    }

    if (width < 992 && width >= 768) {
        column = 2;
    }

    if (width < 768) {
        column = 1;
    }
    return column;
}

function render() {
    let gallery = document.querySelector('.gallery');
    gallery.style.marginTop = 70 + 'px';
    gallery.style.paddingBottom = 40 + 'px';
    let column = createColumns(gallery);
    let spacing = 0;
    let columnWidth = (gallery.offsetWidth - (column - 1) * spacing) / column;
    let galleryBox = document.querySelectorAll('.gallery-box');
    let arr = [];
    for (i = 0; i < galleryBox.length; i++) {
        galleryBox[i].style.width = columnWidth + 'px';
        if(i < column) {
            arr.push(galleryBox[i].offsetHeight);
            galleryBox[i].style.top = 0;
            galleryBox[i].style.left = (columnWidth + spacing) * i + 'px';
        } else {
            let minHeight = Math.min(...arr);
            let minHeightIndex = arr.indexOf(minHeight);
            galleryBox[i].style.top = minHeight + spacing + 'px';
            galleryBox[i].style.left = (spacing + columnWidth) * minHeightIndex + 'px';
            arr[minHeightIndex] += galleryBox[i].offsetHeight + spacing;
        }
    }
}

window.addEventListener('load', render);
window.addEventListener('resize', render);
 







