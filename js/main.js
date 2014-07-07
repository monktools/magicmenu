//Animazioni
//quando carico la pagina
$(document).ready(function (e) {

    $('#tooltip').hide().delay(500);

    //nascondo il pulsante menu
    $('#cn-button').css({
        position: 'absolute'
    }).hide();

    //nascondo anche il menu per seguire il mouse 
    $('#cn-wrapper').css({
        position: 'absolute'
    }).hide();

    //mostro tooltip con effetto
    $('#tooltip').show('fade', 'slow');

    //nascondo dopo un totti
    //$('#tooltip').delay(4000).hide('size', 'slow');

    //doppio cliclk ovunque
    $('body').dblclick(function () {

        //nascondo tooltip
        $('#tooltip').hide('blind', 'fast');

        //se è nascosto mostro, altrimenti nascondo
        $('#cn-button:hidden').stop(true, true).show('drop');

        //se è nascosto mostro, altrimenti nascondo
        $('#cn-wrapper:hidden').stop(true, true).show(function () {

            $(this).addClass('opened-nav');

        });


    });

    //funzione click nascondi
    $('body').click(function () {

        //quando pulsante e invisibile rimouvo la classe dal menu
        $('#cn-button:visible').removeClass(function () {

            $('#cn-wrapper').removeClass('opened-nav');
            //seleziono pulsante e menu e nascondo
            $('#cn-button, #cn-wrapper').delay(500).hide('drop', 'slow');

        });
    });
    //scrollMenu
    $("#menu1").click(function () {
        $('html, body').animate({
            scrollTop: $("#box1").offset().top
        }, 2000);
    });


});


//Segue mouse
$(document).on('mousemove mousedown', function (e) {
    //quando nascosti segue il mouse
    $('#cn-button:hidden, #cn-wrapper:hidden, #tooltip').css({

        left: e.pageX,
        top: e.pageY

    });

});
