function nW() {
    window.open("./login.html", "newWindow", `width=${screen.width/2}, height=${screen.height/2}`);
    
}

function new4terSizedWindow(e) {
    e.stopPropagation();
    nW();
}