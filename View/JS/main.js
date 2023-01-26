
// variables for timer

var sec = 0;
var min = 0;
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

    resetTime();
    resetPoints();
    $('#athlete-score-1').text(ptsAthlet1);
    $('#athlete-score-2').text(ptsAthlet2);
    $('#athlete-punishment-1').text(ptsPunishment1);
    $('#athlete-punishment-2').text(ptsPunishment2);
    $('#athlete-advantage-1').text(ptsAdvantage1);
    $('#athlete-advantage-2').text(ptsAdvantage2);
    if (min+1 == 10) {
        $('#timer').text(min+1 + ':00');
    } else {
        $('#timer').text('0' + (min+1) + ':00');
    }
}

function counter () {
    sec--;

    if (sec < 0) {
        sec = 59;
        min--;
    }
    
    $('#timer').text(twodigits(min)+':'+twodigits(sec));
    
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
        $('#athlete-score-1').text(ptsAthlet1);
    }

    if (athlet == 2) {
        ptsAthlet2 += points;
        $('#athlete-score-2').text(ptsAthlet2);
    }
}

function addPunishment (athlet) {

    if (athlet == 1) {
        ptsPunishment1 ++;
        $('#athlete-punishment-1').text(ptsPunishment1);
    }

    if (athlet == 2) {
        ptsPunishment2 ++;
        $('#athlete-punishment-2').text(ptsPunishment2);
    }
}

function removePunishment (athlet) {

    if (athlet == 1) {

        if (ptsPunishment1 > 0) {
            ptsPunishment1 --;
            $('#athlete-punishment-1').text(ptsPunishment1);
        }
    }

    if (athlet == 2) {

        if (ptsPunishment2 > 0) {
            ptsPunishment2 --;
            $('#athlete-punishment-2').text(ptsPunishment2);
        }
    }

}

function addAdvantage (athlet) {

    if (athlet == 1) {
        ptsAdvantage1 ++;
        $('#athlete-advantage-1').text(ptsAdvantage1);
    }

    if (athlet == 2) {
        ptsAdvantage2 ++;
        $('#athlete-advantage-2').text(ptsAdvantage2);
    }
}

function removeAdvantage (athlet) {

    if (athlet == 1) {
        
        if (ptsAdvantage1 > 0) {
            ptsAdvantage1 --;
            $('#athlete-advantage-1').text(ptsAdvantage1);
        }
    }

    if (athlet == 2) {

        if (ptsAdvantage2 > 0) {
            ptsAdvantage2 --;
            $('#athlete-advantage-2').text(ptsAdvantage2);
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
    checkTheme();
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


function checkField (option,inputId) {

    if (option == 1) {
        if ($('#'+inputId).val() == '') {

            document.getElementById(inputId).classList.add('is-invalid');
        }
        if ($('#'+inputId).val() != '') {
            document.getElementById(inputId).classList.add('is-valid');
        }
    }
    if (option == 2) {
        document.getElementById(inputId).classList.remove('is-invalid');
    }
}


// function that checks if the key pressed is a special character according to the ASCII table
function checkCaracter(e) {
    if((e.keyCode >= 65 && e.keyCode <= 90) || (e.keyCode >= 97 && e.keyCode <= 122) || (e.keyCode >= 48 && e.keyCode <= 57) || 
        e.keyCode === 8 || e.keyCode === 13 || e.keyCode == 9 || e.keyCode == 20) {

    } else {
        // if it's not a character of aA-zZ or 0-9 it doesn't allow to be inserted.
        e.preventDefault();
    }
}


// Associates the anonymous function to the 'submit' event of the form with id 'setupFightForm'
$('#setupFightForm').on('submit', function(event) {

    // Prevents the default behavior of the submit event
    event.preventDefault();

    // Captures the value of the fight time field
    let timeFight = $('#timeFight').val();

    // Captures the value of the athlete name 1 field
    let nameAthlet1 = $('#athletName1').val();

    // Captures the value of the athlete name 2 field
    let nameAthlet2 = $('#athletName2').val();

     // Check if the names of the athletes are not empty and if the length of the names is greater or equal to 1 and less or equal to 47 characters
    if((nameAthlet1 != '' && (nameAthlet1.length >= 1 && nameAthlet1.length <= 47)) && (nameAthlet2 != '' && (nameAthlet2.length >= 1 && nameAthlet2.length <= 47))) {

         // Declares the fight object
        var fight = {};
        // Creates a time list with minutes and seconds, minutes are always 60 seconds, so saves the minute with one less value than received.
        const time = {minute: timeFight-1, second: 60};

        // Check if the kimono colors were filled
        if ($('#kimonoColor2').val() != 0 && $('#kimonoColor1').val() != 0) {
            // If kimono color selected, adds the information of the athletes names, kimono color and fight time to the fight object
            fight = {
                nameAthlet1: nameAthlet1,
                kimonoColor1: $('#kimonoColor1').val(),
                nameAthlet2: nameAthlet2,
                kimonoColor2: $('#kimonoColor2').val(),
                timeFight: time
            }
        } else {
             // If no kimono color is selected, it only adds the information of the athletes names and fight time to the fight object
            fight = {
                nameAthlet1: nameAthlet1,
                nameAthlet2: nameAthlet2,
                timeFight: time
            }
        }

        // Stores the fight object in the browser's session memory
        sessionStorage.setItem('fightSetup', JSON.stringify(fight));

        min = time.minute;
        sec = time.second;

        // Update the time counter in HTML with the value of the minute + 1 and second '00'
        if (min+1 == 10) {
            $('#timer').text(time.minute+1 + ':00');
        } else {
              // Adds a zero in front of the value of the minute and updates the time counter in HTML with the value of the minute + 1 and second '00'
            $('#timer').text('0' + (time.minute+1) + ':00');
        }

        // Updates the name of athlete 1 in HTML with the value stored in the fight object
        $('#athleteName1').text(fight.nameAthlet1);

        //Updates the name of athlete 2 in HTML with the value stored in the fight object
        $('#athleteName2').text(fight.nameAthlet2);

        // Hides the fight configuration modal
        $('#setUPFight').modal('hide');
    }
});


function resetTime () {

    var getfightSetup = sessionStorage.getItem('fightSetup');
    
    var fight = JSON.parse(getfightSetup);
    min = fight.timeFight.minute;
    sec = 60;
}

function changeTheme () {
    if($(".theme").is(':checked')) {
        localStorage.setItem('theme', 'dark');
        
    } else {
        localStorage.setItem('theme', 'light');
    }
    checkTheme();
}

function resetPoints () {
    ptsAthlet1 = 0;
    ptsAthlet2 = 0;
    ptsAdvantage1 = 0;
    ptsAdvantage2 = 0;
    ptsPunishment1 = 0;
    ptsPunishment2 = 0;
}

function checkTheme () {

    if (localStorage.getItem('theme') == 'dark') {
        $('.theme').attr('checked', true);
        aplyTheme('dark');
    } else {
        $('.theme').attr('checked', false);
        aplyTheme('light');
    }
}


function aplyTheme (theme) {

    if (theme == 'dark') {
        if ($('.modal-content').hasClass('bg-light')) {
            $('.modal-content').removeClass('bg-light');
            $('.modal-content').addClass('text-white');
            $('.modal-content').addClass('bg-dark');
        }
        else if (!$('.modal-content').hasClass('bg-light') && !$('.modal-content').hasClass('bg-dark') && !$('.modal-content').hasClass('text-white')) {
            $('.modal-content').addClass('text-white');
            $('.modal-content').addClass('bg-dark');
        }
    } 
    else if (theme == 'light') {
        if ($('.modal-content').hasClass('bg-dark') && $('.modal-content').hasClass('text-white')) {
            $('.modal-content').removeClass('bg-dark');
            $('.modal-content').removeClass('text-white');
            $('.modal-content').addClass('bg-light');
        }
        else if (!$('.modal-content').hasClass('bg-dark') && !$('.modal-content').hasClass('text-white') && !$('.modal-content').hasClass('bg-light')) {
            $('.modal-content').addClass('bg-light');
        }
    }
}