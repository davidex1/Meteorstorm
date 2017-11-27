window.onload = function () {

    // defining basic elements of the game
    var ship = document.getElementById("ship")
    var ground = document.getElementById("playground");
    
    // script for ship movement
    ground.addEventListener("touchmove", shipMove);
    
    function shipMove(ev) {
        
        var borderL = 0;
        var borderR = outerWidth - outerWidth * 0.26;
    
        ev.preventDefault();
        
        var touch = ev.targetTouches[0];
        var x = touch.clientX;
        
        if (touch.clientX > borderL && touch.clientX < borderR) {
        ship.style.left = x + "px";
        }
    }
    
    // defining meteor elements
    var meteors = [
        document.getElementById("meteor1"),
        document.getElementById("meteor2"),
        document.getElementById("meteor3"),
        document.getElementById("meteor4"),
        document.getElementById("meteor5"),
        document.getElementById("meteor6")
    ]
    
    //script for falling meteors
    var randMeteor = meteors[Math.floor(Math.random()*meteors.length)];
    
    function fall() {
        randMeteor.className += " meteorDown";
    }
    
    // script for falling meteors loop
    ground.addEventListener("touchstart", fallLoop);
    
    /* loop in progress :)
    
    function fallLoop() {
        while (true) {
            if ()
        
            else
                fall()
            }
                        
    }*/ 
    

    
    
    
    
}