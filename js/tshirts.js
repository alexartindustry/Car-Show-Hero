$(document).ready(function(){

    $(document).on('click', '.preview-cont', function(e){
        e.preventDefault(); 
        $('.preview-cont').removeClass('selected');
        $(this).addClass('selected');
        var sel_src = $(this).find('img').attr('src');
        $('#main-tshirt').attr('src',sel_src);
        $('html, body').animate({
            scrollTop: $('#main-tshirt').offset().top
        }, 'slow');
    });

});