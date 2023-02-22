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

        const divAttributes = {
            id: 'modalLoader',
            'class': 'modal fade',
            'data-bs-backdrop': 'static',
            'data-bs-keyboard': 'false',
            'tabindex': '-1',
            'aria-hidden': 'true'
        }
        createLoadingAnimation(divAttributes, '#content-contact');

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
                    $('.modal-body').append($('<div/>', {class: 'completedloading success'}));
                    $('.completedloading').append($('<div/>', {class: 'ring'}));
                    $('.ring').append($('<i/>', {class: 'fa-solid fa-check fa-3x'}));
                    $('#menssageStatus').text('Enviado com sucesso!');
                    var modalFooter = $('<div/>', {class: 'modal-footer'});
                    var closeButton = $('<button/>', {type: 'button', class: 'btn btn-primary', text: 'Concluir', 'data-bs-dismiss': 'modal'});
                    modalFooter.append(closeButton);
                    $('.modal-content').append(modalFooter);
                }
            },
            error: function (xhr, status, error) {
                if (error !== '') {
                    const modalBody = $('.modal-body');
                modalBody.append($('<div/>', {class: 'completedloading error'}));
                modalBody.find('.completedloading').append($('<div/>', {class: 'ring'}));
                modalBody.find('.ring').append($('<i/>', {class: 'fa-solid fa-exclamation fa-3x'}));
                $('<div/>', {class: 'modal-footer d-flex justify-content-around'}).insertAfter(modalBody);
                modalBody.next('.modal-footer').append($('<a/>', {href: '#titleContact', class: 'btn btn-primary', text: 'Tente novamente'}));
                modalBody.next('.modal-footer').append($('<button/>', {type: 'button', class: 'btn btn-danger', 'data-bs-dismiss': 'modal', 'aria-label': 'Close', text: 'Cancelar'}));
                $('#messageStatus').text('Erro ao enviar e-mail!');
                }
                
                //console.error('Erro ao enviar dados: ', error);
            },
            complete: function() {
                $('.spinner-border').remove();
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

function createLoadingAnimation(attributes, targetElement) {
    $('<div/>', attributes).insertAfter(targetElement);
    $('#' + attributes.id).append($('<div/>', {class: 'modal-dialog modal-dialog-centered'}));
    $('.modal-dialog').append($('<div/>', {class: 'modal-content'}));
    $('.modal-content').append($('<div/>', {class: 'modal-body d-flex justify-content-center'}));
    $('.modal-body').append($('<div/>', {class: 'spinner-border', id: 'loader', role: 'status'}));
    $('#loader').append($('<span/>', {class: 'visually-hidden', text: 'Loading...'}));
    $('<h4/>', {id: 'menssageStatus', text: 'Carregando...'}).insertAfter('.modal-body');
}