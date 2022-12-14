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
that is clicked */

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

/** sey up music box function to play the music
 * 
 */

{
const playList = [ {
    id: 'song-1',
    songName: '君が好きだと叫びたい',
    singer: 'BAAD',
    path: '../audio/song1.mp3'
},
{
    id: 'song2',
    songName: '世界が終るまでは…',
    singer: 'WANDS',
    path: '../audio/song2.mp3'
},
{
    id: 'song3',
    songName: 'ぜったいに 誰も',
    singer: 'ZYYG',
    path: '../audio/song3.mp3'
},
{
    id: 'song4',
    songName: 'あなただけ見つめてる',
    singer: '大黑摩季',
    path: '../audio/song4.mp3'
}
]



}