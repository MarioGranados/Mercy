
window.onscroll = function () {navChangeOnScroll()}
function navChangeOnScroll() {
    if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById('navbar').classList.add('active_navbar');
    } else {
        document.getElementById('navbar').classList.remove('active_navbar');
    }
}