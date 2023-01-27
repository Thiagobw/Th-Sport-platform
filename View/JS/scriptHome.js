$(document).ready(function(){
    if (window.matchMedia('(min-width: 992px)').matches) {
        $('.menuButton').hide();
        $("#checkMenu").addClass('disabled');
    }
});

$(window).on('resize', function() {
    
    if (($(window).width() < 992) && ($("#checkMenu").hasClass('disabled') && $(".menuButton").is(':hidden'))) {
        $("#checkMenu").removeClass('disabled');
        $('.menuButton').show();
    }
    if (($(window).width() > 991) && (!$("#checkMenu").hasClass('disabled') && !$(".menuButton").is(':hidden'))) {
        $("#checkMenu").addClass('disabled');
        $('.menuButton').hide();
    }
});

function teste () {
    if ($('#checkMenu').is(':checked')) {

        $('.navbar').toggleClass("navbar-show");
    } else {
        $('.navbar').toggleClass("navbar-show", false);
    }
}