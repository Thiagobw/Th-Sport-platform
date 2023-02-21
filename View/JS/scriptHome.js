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

function validation (element) {
    var result = checkField(element);

    if (result[0] === true) {
        if (checkMessageErorExistence(element) && $(element).hasClass('is-invalid')) {
            $(element).next().remove();
            $(element).removeClass('is-invalid');
        }
        $(element).addClass('is-valid');
        return true;
    } else {

        if (!checkMessageErorExistence(element) && !$(element).hasClass('is-invalid')) {
            $(element).addClass('is-invalid');
            $('<p>').addClass('invalid-feedback').text(result[1]).insertAfter(element);
        } else {

            if ($(element).text() != result[1]) {
                $(element).next().text(result[1]);
            }
        }
        return false;
    }
}
function checkMessageErorExistence (element) {
    if ($(element).next().length == 1) {
        return true;
    } else {
        return false;
    }
}


$('#sendMailForm').submit(function(e) {
    e.preventDefault();
    const fieldIds = [
            '#name',
            '#email',
            '#subject',
            '#message'
        ];
    
    var checkedFields = [];
    fieldIds.forEach(element => {
        checkedFields.push(validation(element));

    });

    if (checkedFields[0] == true && checkedFields[1] == true && checkedFields[2] == true && checkedFields[3] == true) {

        let link_server = window.location.pathname + '../Control/send_email.php';

        $.ajax({
            type: "POST",
            url: link_server,
            dataType: 'json',
            data: {
                name: $.trim($(fieldIds[0]).val()),
                email: $(fieldIds[1]).val().replace(/\s/g, ''),
                subject: $.trim($(fieldIds[2]).val()),
                message: $.trim($(fieldIds[3]).val()),
                sendBtn: $('#submitMessage').attr('name')
            },
            beforeSend: function() {
                $('#modalLoader').modal('show');
            },
            success: function (data) {
                if (data.isTrue) {
                    console.log('deu certo!');
                }
                console.log('Dados enviados com sucesso: ', data);
            },
            error: function (xhr, status, error) {
                console.error('Erro ao enviar dados: ', error);
            },
            complete: function() {
                $('#modalLoader').modal('hide');
            }
        });
    }
});
function checkField (idField) {
    switch(idField) {
        case '#name':
            if ($.trim($(idField).val()).length > 5 && $.trim($(idField).val()).length < 51) {

                if ($.trim($(idField).val()).split(' ').length > 1) {
                    return [true, ''];
                } else {
                    return [false, 'Informe seu sobrenome.'];
                }
            } else {
                return [false, 'O nome é obrigatorio e precisa ter entre 5 a 50 digitos.'];
            }
            break;
        case '#email':
            var rulesMail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{3,4}))$/;
            
            if (($(idField).val().replace(/\s/g, '').length > 14 && $(idField).val().replace(/\s/g, '').length < 51)) {

                if (rulesMail.test($(idField).val().replace(/\s/g, ''))) {
                    return [true, ''];
                } else {
                    return [false, 'Formato do email é invalido.'];
                }
            } else {
                return [false, 'O email é obrigatorio e precisa ter entre 14 a 50 digitos.'];
            }

            break;
        case '#subject':
            if ($.trim($(idField).val()).length > 4 && $.trim($(idField).val()).length < 51) {
                
                if ($.trim($(idField).val()).split(' ').length > 0) {
                    return [true, ''];
                }
            } else {
                return [false, 'O assunto é obrigatorio e precisa ter entre 5 a 50 digitos.'];
            }
            break;
        case '#message':
            if(($.trim($(idField).val()).length > 29 && $.trim($(idField).val()).length < 401)) {

                if ($.trim($(idField).val()).split(' ').length > 1) {
                    return [true, ''];
                } else {
                    return [false, 'É necessario ter mais de uma palavra.'];
                }
            } else {
                return [false, 'A mensagem precisa ter entre 30 a 400 digitos.'];
            }
            break;
    }
}