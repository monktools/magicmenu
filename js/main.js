//Animazioni
//Animation
//quando carico la pagina
//when page is loaded
$(document).ready(function (e) {

    $('#tooltip').hide().delay(500);

    //nascondo il pulsante menu
    //hide menu button
    $('#cn-button').css({
        position: 'absolute'
    }).hide();

    //nascondo anche il menu per seguire il mouse 
    //hide the navigation menu
    $('#cn-wrapper').css({
        position: 'absolute'
    }).hide();

    //mostro tooltip con effetto
    //show the tooltip first
    $('#tooltip').show('fade', 'slow');

    //doppio cliclk ovunque
    //everywhere double click 
    $('body').dblclick(function () {

        //nascondo tooltip
        //hide tootltip
        $('#tooltip').hide('blind', 'fast');

        //se è nascosto mostro, altrimenti nascondo
        //if menu button is hide then show, else hide
        $('#cn-button:hidden').stop(true, true).show('drop');

        //se è nascosto mostro, altrimenti nascondo
        //if navigation menu is hide then show, else hide.
        $('#cn-wrapper:hidden').stop(true, true).show(function () {

            $(this).addClass('opened-nav');

        });

    });

    //funzione click nascondi
    //one click to hide the menu
    $('body').click(function () {

        //quando pulsante e invisibile rimouvo la classe dal menu
        //remove navigation menu class if the menu is visible but you have clicked once
        $('#cn-button:visible').removeClass(function () {

            $('#cn-wrapper').removeClass('opened-nav');
            //seleziono pulsante e menu e nascondo
            //select and hide all
            $('#cn-button, #cn-wrapper').delay(500).hide('drop', 'slow');

        });
		
    });
    //scrollMenu
    //effect #1 -> scrolltop (about) 
    $("#menu1").click(function () {
        $('html, body').animate({
            scrollTop: $("#box1").offset().top
        }, 2000);
    });

});

//Segue mouse
//Follow the mouse.
$(document).on('mousemove mousedown', function (e) {
    //quando nascosti segue il mouse
    //if menu is hided follow the mouse
    $('#cn-button:hidden, #cn-wrapper:hidden, #tooltip').css({

        left: e.pageX,
        top: e.pageY

    });

});