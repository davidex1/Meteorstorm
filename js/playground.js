function start() {
    movement();
    fallLoop();
    collision();
}

window.onload = start;

function movement() {

    // defining basic elements of the game
    var ship = document.getElementById("ship");
    var ground = document.getElementById("playground");

    // scripts for ship movement
    ground.addEventListener("mousemove", shipMove);
    ground.addEventListener("touchmove", shipMoveTouch);
    
    function shipMove(ev) {

        var R = window.innerWidth;
        var borderL = 0;
        var borderR = R - 100;

        var x = ev.clientX - 50;

        if (x > borderL && x < borderR) {
            ship.style.left = x + "px";
        }
    }

    function shipMoveTouch(ev) {

        var R = window.innerWidth;
        var borderL = 50;
        var borderR = R - 50;
        ev.preventDefault();
        var touch = ev.targetTouches[0];
        var x = touch.clientX - 50;

        if (touch.clientX > borderL && touch.clientX < borderR) {
            ship.style.left = x + "px";
        }
    }
}

function fallLoop() {
    
    var meteors = [
    document.getElementById("meteor1"),
    document.getElementById("meteor2"),
    document.getElementById("meteor3"),
    document.getElementById("meteor4"),
    document.getElementById("meteor5"),
    document.getElementById("meteor6")];

    function fall() {
        var randMeteor = meteors[Math.floor(Math.random()*meteors.length)];
        var pos = 0;
        var id = setInterval(frame, 0.5);

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

    var falling = setInterval(fall, 2500);

}

function collision() {
    
    var i = 0;
    function counter() {
        document.getElementById("counter").innerHTML = "Score: " + i;
        i++;
    }
    
    var counterStart = setInterval(counter, 1000);
    
    function getPosition() {
        
        var shipL = $("#ship").offset().left,
            shipR = $("#ship").offset().left + 100,
            shipT = $("#ship").offset().top,
            shipB = $("#ship").offset().top + 50;
    
        var meteorW = $("#meteor1").width();
        var meteorH = $("#meteor1").height();
    
        var meteor1L = $("#meteor1").offset().left + meteorW/2,
            meteor1B = $("#meteor1").offset().top + meteorH;
        var meteor2L = $("#meteor2").offset().left + meteorW/2,
            meteor2B = $("#meteor2").offset().top + meteorH;
        var meteor3L = $("#meteor3").offset().left + meteorW/2,
            meteor3B = $("#meteor3").offset().top + meteorH;
        var meteor4L = $("#meteor4").offset().left + meteorW/2,
            meteor4B = $("#meteor4").offset().top + meteorH;
        var meteor5L = $("#meteor5").offset().left + meteorW/2,
            meteor5B = $("#meteor5").offset().top + meteorH;
        var meteor6L = $("#meteor6").offset().left + meteorW/2,
            meteor6B = $("#meteor6").offset().top + meteorH;

        
    
        if ((shipL < meteor1L && meteor1L < shipR && meteor1B > shipT && meteor1B < shipB) ||
            (shipL < meteor2L && meteor2L < shipR && meteor2B > shipT && meteor2B < shipB) ||
            (shipL < meteor3L && meteor3L < shipR && meteor3B > shipT && meteor3B < shipB) ||
            (shipL < meteor4L && meteor4L < shipR && meteor4B > shipT && meteor4B < shipB) ||
            (shipL < meteor5L && meteor5L < shipR && meteor5B > shipT && meteor5B < shipB) ||
            (shipL < meteor6L && meteor6L < shipR && meteor6B > shipT && meteor6B < shipB)) 
            {
                $("#menu").css("visibility","visible");
            
                $(".clickHide").click (function(){
                    $("#menu").css("visibility","hidden");
                }); 
                
                clearInterval(counterStart);
            }
    }
    
    setInterval(getPosition, 1);
    
}



