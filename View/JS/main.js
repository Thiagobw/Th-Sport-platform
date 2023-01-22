
// variables for timer

var sec = 60;
var min = 9;
var interval;

//------------------


// variables for points

var ptsAthlet1 = 0;
var ptsAthlet2 = 0;

//------------------


// variables for punishment and advantage

var ptsAdvantage1 = 0;
var ptsAdvantage2 = 0;
var ptsPunishment1 = 0;
var ptsPunishment2 = 0;

//----------------------


// control for time
function start () {
    started();
    counter();
    interval = setInterval(counter,1000);
}

function pause () {
    paused();
    clearInterval(interval);
}

function stop () {
    stopped();
    clearInterval(interval);
    sec=60;
    min=4;
    document.getElementById('timer').innerText ='00:00';
}

function counter () {
    sec--;

    if (sec < 0) {
        sec = 59;
        min--;
    }
    
    console.log(min, sec);
    document.getElementById('timer').innerText = twodigits(min)+':'+twodigits(sec);
    
    if(min < 0){
        stop();
    }
}

function twodigits (number) {

    if (number<10) {
        return ('0'+number);

    }else{
        return (number);
    }
}

function started () {
    document.getElementById('btn-start').style.display = 'none';
    document.getElementById('btn-pause').style.display = 'inline-block';
    document.getElementById('btn-restart').style.display = 'inline-block';
}

function paused () {
    document.getElementById('btn-pause').style.display = 'none';
    document.getElementById('btn-start').style.display = 'inline-block';
    document.getElementById('btn-restart').style.display = 'inline-block';
}

function stopped () {
    document.getElementById('btn-start').style.display = 'inline-block';
    document.getElementById('btn-pause').style.display = 'none';
    document.getElementById('btn-restart').style.display = 'none';
}


//control of points, punishments and advantages
function addPoints (athlet, points) {

    if (athlet == 1) {
        ptsAthlet1 += points;
        document.getElementById('athlete-score-1').innerText = ptsAthlet1;
    }

    if (athlet == 2) {
        ptsAthlet2 += points;
        document.getElementById('athlete-score-2').innerText = ptsAthlet2;
    }
}

function addPunishment (athlet) {

    if (athlet == 1) {
        ptsPunishment1 ++;
        document.getElementById('athlete-punishment-1').innerText = ptsPunishment1;
    }

    if (athlet == 2) {
        ptsPunishment2 ++;
        document.getElementById('athlete-punishment-2').innerText = ptsPunishment2;
    }
}

function removePunishment (athlet) {

    if (athlet == 1) {

        if (ptsPunishment1 > 0) {
            ptsPunishment1 --;
        document.getElementById('athlete-punishment-1').innerText = ptsPunishment1;
        }
    }

    if (athlet == 2) {

        if (ptsPunishment2 > 0) {
            ptsPunishment2 --;
            document.getElementById('athlete-punishment-2').innerText = ptsPunishment2;
        }
    }

}

function addAdvantage (athlet) {

    if (athlet == 1) {
        ptsAdvantage1 ++;
        document.getElementById('athlete-advantage-1').innerText = ptsAdvantage1;
    }

    if (athlet == 2) {
        ptsAdvantage2 ++;
        document.getElementById('athlete-advantage-2').innerText = ptsAdvantage2;
    }
}

function removeAdvantage (athlet) {

    if (athlet == 1) {
        
        if (ptsAdvantage1 > 0) {
            ptsAdvantage1 --;
            document.getElementById('athlete-advantage-1').innerText = ptsAdvantage1;
        }
    }

    if (athlet == 2) {

        if (ptsAdvantage2 > 0) {
            ptsAdvantage2 --;
            document.getElementById('athlete-advantage-2').innerText = ptsAdvantage2;
        }
    }
}


// control visibility for buttons
function showButtonsControlPoints (athlet) {

    if (athlet == 1) {

        setTimeout(function() {
            document.querySelectorAll('#btn-punishment-1').forEach(element => {
                element.classList.remove('disabled');
            })
            document.querySelectorAll('#btn-advantage-1').forEach(element => {
                element.classList.remove('disabled');
            })
            document.querySelectorAll('#btn-pts-1').forEach(element => {
                element.classList.remove('disabled');
            }), 300
        })
        document.getElementById('content-btns-pts-1').style.opacity = 1;
        document.getElementById('content-btns-punishment-advantage-1').style.opacity = 1;
    }

    if (athlet == 2) {

        setTimeout(function() {
            document.querySelectorAll('#btn-punishment-2').forEach(element => {
                element.classList.remove('disabled');
            })
            document.querySelectorAll('#btn-advantage-2').forEach(element => {
                element.classList.remove('disabled');
            })
            document.querySelectorAll('#btn-pts-2').forEach(element => {
                element.classList.remove('disabled');
            }), 300
        })
        document.getElementById('content-btns-pts-2').style.opacity = 1;
        document.getElementById('content-btns-punishment-advantage-2').style.opacity = 1;
    }    
}

function hiddenButtonsControlPoints (athlet) {

    if (athlet == 1) {

        document.querySelectorAll('#btn-punishment-1').forEach(element => {
            element.classList.add('disabled');
        })
        document.querySelectorAll('#btn-advantage-1').forEach(element => {
            element.classList.add('disabled');
        })
        document.querySelectorAll('#btn-pts-1').forEach(element => {
            element.classList.add('disabled');
        })
        document.getElementById('content-btns-pts-1').style.opacity = 0;
        document.getElementById('content-btns-punishment-advantage-1').style.opacity = 0;
    }

    if (athlet == 2) {

        document.querySelectorAll('#btn-punishment-2').forEach(element => {
            element.classList.add('disabled');
        })
        document.querySelectorAll('#btn-advantage-2').forEach(element => {
            element.classList.add('disabled');
        })
        document.querySelectorAll('#btn-pts-2').forEach(element => {
            element.classList.add('disabled');
        })
        document.getElementById('content-btns-pts-2').style.opacity = 0;
        document.getElementById('content-btns-punishment-advantage-2').style.opacity = 0;
    }
}

$(window).on('load',function() {
    sessionStorage.clear();
    $('#setUPFight').modal('show');

    if (window.matchMedia('(min-width: 768px) and (max-whidth: 1440px)').matches) {

        document.querySelectorAll('#btn-punishment-2').forEach(element => {
            element.classList.remove('btn-sm');
        })
        document.querySelectorAll('#btn-advantage-2').forEach(element => {
            element.classList.remove('btn-sm');
        })
        document.querySelectorAll('#btn-pts-2').forEach(element => {
            element.classList.remove('btn-sm');
        })
    }
});

function showSelectedTime() {
    document.getElementById('timeSelected').innerText = document.getElementById('timeFight').value;
}

//submission of fight configuration form
$('#setupFightForm').on('submit', function(event) {
    event.preventDefault();
    let athlet1 = $('#athletName1').val();
    let athlet2 = $('#athletName2').val();
    if((athlet1 != '' && (athlet1.length >= 1 && athlet1.length <= 47)) &&
       (athlet2 != '' && (athlet2.length >= 1 && athlet2.length <= 47))) {

        

    }
});