var sec = 60;
var min = 4;
var interval;

function twodigits(number) {

    if (number<10) {
        return ('0'+number);

    }else{
        return (number);
    }
}

function start() {
    counter();
    interval = setInterval(counter,1000);
}

function pause() {
    clearInterval(interval);
}

function stop() {
    clearInterval(interval);
    sec=60;
    min=4;
    document.getElementById('timer').innerText ='00:00';
}

function counter() {
    sec--;

    if(sec < 0) {
        sec = 59;
        min--;
    }
    
    console.log(min, sec);
    document.getElementById('timer').innerText = twodigits(min)+':'+twodigits(sec);
    
    if(min < 0){
        stop();
    }
}