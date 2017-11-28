window.onload = function movement() {

    // defining basic elements of the game
    var ship = document.getElementById("ship");
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
}
    
    
window.addEventListener("touchstart", fallLoop);

    
    function fallLoop() {
        
    var meteors = [
        document.getElementById("meteor1"),
        document.getElementById("meteor2"),
        document.getElementById("meteor3"),
        document.getElementById("meteor4"),
        document.getElementById("meteor5"),
        document.getElementById("meteor6")]

    
    function fall() {
        var randMeteor = meteors[Math.floor(Math.random()*meteors.length)];
        var pos = 0;
        var id = setInterval(frame, 1);
        function frame() {
            if (pos == 1000) {
                clearInterval(id);
                } 
            else {
                pos++; 
                randMeteor.style.top = pos + 'px';  
                }
        }
    }
        
    fall();

    
    }
            
     /*   var i = 0;
    while (i<100) {
        fall();
        i++;
    }

// positions of ship and meteors
/*    var shipL = ship.offsetLeft;
    var shipR = shipL + 100;
    var shipT = ship.offsetTop;
    
    var meteorL = meteors[2].offsetLeft;
    var meteorT = meteors[2].offsetTop;*/


// script for falling meteors loop
    /*ground.addEventListener("touchstart", fallLoop);
    
    var shipPos = ship.getBoundingClientRect();
    var meteor1Pos = meteors[0].getBoundingClientRect();
    var meteor2Pos = meteors[1].getBoundingClientRect();
    var meteor3Pos = meteors[2].getBoundingClientRect();
    var meteor4Pos = meteors[3].getBoundingClientRect();
    var meteor5Pos = meteors[4].getBoundingClientRect();
    var meteor6Pos = meteors[5].getBoundingClientRect();
    
    
    function fallLoop() {
        while (meteor1Pos.top != shipPos.top && meteor1Pos.left != shipPos.left) {
                fall();
                if (meteor1Pos.top = shipPos.top && meteor1Pos.left != shipPos.left) {
                    break;
                }
            }
        } */
                        