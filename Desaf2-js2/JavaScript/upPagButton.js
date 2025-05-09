
function uS() {
    if (confirm("Are you sure you want to go to the top of the page?")) {
        window.scrollTo({top:0, left:0, behavior:'smooth'});   
    }
}
function upScroll(e) {
    e.stopPropagation();
    uS();
}