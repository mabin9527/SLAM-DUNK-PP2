/*set up function to change style of every list by adding className 
 using for-loop when mouse is over and leaving icons*/
 
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

/* set up function for slides. when mouse clicked smaller images that will be fully displayed by using two 
for loops. The first one will remove class attribute and then second for add class attribute to the images
that is clicked*/

function setActive() {
    let wrapper = document.querySelector('.wrapper');
    
    for (let i = 0; i < wrapper.children.length; i++) {
        wrapper.children[i].addEventListener('click', function() {
            for (let i = 0; i < wrapper.children.length; i++) {
                wrapper.children[i].className = '';
            }
            this.className = 'active';
        })
    }
}
setActive();