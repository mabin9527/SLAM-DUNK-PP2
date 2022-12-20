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
 * Let the comments displayed on the comments-board. Use if else to judge whether clients leave 
 * the comments. If not, return an alert to remind user of leaving their thinking. 
 */

let messege = document.querySelector('#messege');
let btn = document.querySelector('#submit-btn');
let commentBoard = document.querySelector('.comment-board');

btn.addEventListener('click', function(){
    if(messege == '') {
        alert('Please type your comment');
        return false;
    }
    
})