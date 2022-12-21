


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
        _column = 4;
    }

    if (width < 1200 && width >= 992) {
        _column = 3;
    }

    if (width < 992 && width >= 768) {
        _column = 2;
    }

    if (width < 768) {
        _column = 1;
    }
    return _column;
}

function render() {
    let gallery = document.querySelector('.gallery');
    gallery.style.marginTop = 70 + 'px';
}
 







