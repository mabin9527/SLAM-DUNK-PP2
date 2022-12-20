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
 * the comments. If not, return an alert to remind user of leaving their thinking. If user has 
 * left a comment, create a list to fill in the content
 */

let messege = document.querySelector('#messege');
let btn = document.querySelector('#submit-btn');
let commentBoard = document.querySelector('.comment-board');

btn.onclick = function() {
    if (messege.value === '') {
        alert('Please type your feedback');
        return false;
    } else {
        let li = document.createElement('li');
        li.innerHTML = messege.value + '<a href="javascript:;"><i class="fa-solid fa-trash"></i></a>';
        commentBoard.insertBefore(li, commentBoard.children[0]);
        let aLink = document.querySelectorAll('a');
        for (let i in aLink) {
            aLink[i].onclick = function() {
                commentBoard.removeChild(this.parentNode);
            }
        }
    }
}
