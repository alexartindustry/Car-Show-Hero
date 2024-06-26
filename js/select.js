$(document).ready(function(){

    $(document).on('click', '.select-name', function(){ 
        if(!$(this).hasClass('sel')) {
            $('.select').find('ul').slideUp();
            $('.select').find('.select-name').removeClass('sel');
            $('.select').removeClass('selcl');
        }
        $(this).parent('.select').find('ul').slideToggle();
        $(this).parent('.select').find('.select-name').toggleClass('sel');
        $(this).parent('.select').toggleClass('selcl');
    });
    /*
    $( ".select.hovcl" ).hover(
    function() {
    }, function() {
        $(this).find('ul').slideUp();
        $(this).find('.select-name').removeClass('sel');
        $(this).removeClass('selcl');
    }
    );
    */

    /*SELECT BEGIN JQUERY*/
    $(document).on('click', '.select ul li', function(){ 
        var sel = $(this).text();
        $(this).parent('ul').parent('.select').find('input').attr('value',sel);
        if(!$(this).parent('ul').parent('.select').hasClass('quantity')) {
          $(this).parent('ul').parent('.select').find('.select-name').text(sel);
        } else {
            $(this).parent('ul').parent('.select').find('#quantity-sel').text(sel);
        }

        $(this).parent('ul').slideUp();
        $(this).parent('ul').parent('.select').find('.select-name').removeClass('sel');
    });
    /*SELECT END JQUERY*/

});