window.onload = function () {

    var ship = document.getElementById("ship");

    ship.addEventListener("touchmove", swipe);
    
    function swipe(ev) {
        
    var borderL = 0;
    var borderR = outerWidth - outerWidth * 0.26;
    
    ev.preventDefault();
        
    var touch = ev.targetTouches[0];
    var x = touch.clientX;
        
    if (touch.clientX > borderL && touch.clientX < borderR) {
    ship.style.left = x + "px";
        }
    }
}