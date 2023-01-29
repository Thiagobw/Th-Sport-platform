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

function showAndHideBtnMenu () {
    if ($('#checkMenu').is(':checked')) {

        $('.navbar').toggleClass("navbar-show");
    } else {
        $('.navbar').toggleClass("navbar-show", false);
    }
}

$(document).ready(function() {
    $("#sendMailForm").validate({
        rules: {
            name: {
                required: true,
                minlength: 10,
                maxlength: 50
            },
            email: {
                required: true,
                email: true,
                minlength: 10,
                maxlength: 50,
            },
            subject: {
                required: true,
                maxlength: 50
            },
            message: {
                required: true,
                maxlength: 400
            }
        },
        messages: {
            name: {
                required: "Por favor, informe seu nome",
                minlength: "Seu nome deve ter pelo menos 10 caracteres",
                maxlength: "Seu nome deve ter no máximo 50 caracteres"
            },
            email: {
                required: "Por favor, informe seu email",
                email: "Por favor, informe um email válido",
                minlength: "Seu email deve ter pelo menos 10 caracteres",
                maxlength: "Seu email deve ter no máximo 50 caracteres",
            },
            subject: {
                required: "Por favor, informe o assunto",
                maxlength: "O assunto deve ter no máximo 50 caracteres"
            },
            message: {
                required: "Por favor, informe a mensagem",
                maxlength: "A mensagem deve ter no máximo 400 caracteres"
            }
        },
        submitHandler: function(form) {
            
        }
    });
});