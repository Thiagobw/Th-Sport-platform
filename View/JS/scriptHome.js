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

$('#sendMailForm').on('submit', function(event) {
    event.preventDefault();
    
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
                maxlength: 50
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
                required: "Por favor, digite seu nome",
                minlength: "Seu nome precisa ter pelo menos 10 caracteres",
                maxlength: "Seu nome não pode ter mais do que 50 caracteres"
            },
            email: {
                required: "Por favor, digite seu email",
                email: "Por favor, digite um email válido",
                minlength: "Seu email precisa ter pelo menos 10 caracteres",
                maxlength: "Seu email não pode ter mais do que 50 caracteres"
            },
            subject: {
                required: "Por favor, digite o assunto",
                maxlength: "O assunto não pode ter mais do que 50 caracteres"
            },
            message: {
                required: "Por favor, digite sua mensagem",
                maxlength: "Sua mensagem não pode ter mais do que 400 caracteres"
            }
        },
        submitHandler: function(form) {
            // Faça algo aqui, como enviar o formulário via AJAX
            alert('deu bom');
        }
    });
});

function emailIsValid (email) {
    var emailRegex = /^([a-zA-Z0-9_.-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{3,4})+$/;
    if(!emailRegex.test(email)) {
        return false;
    } else {
        return true;
    }
}