//set up function to change style of nav-bar when click
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