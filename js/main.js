$(document).ready(function () {

    $('.main_btna').on('click', function () {
        $('.overlay').fadeIn('fast', function () {
            $('.modal').slideDown('slow', function () {
                $(this).css('display', 'block');
            });
        });
    });
    $('.main_btn').on('click', function () {
        $('.overlay').fadeIn('fast', function () {
            $('.modal').slideDown('slow', function () {
                $(this).css('display', 'block');
            });
        });
    });
    $('.timetable').on('click', function () {
        $('.overlay').fadeIn('fast', function () {
            $('.modal').slideDown('slow', function () {
                $(this).css('display', 'block');
            });
        });
    });



    $('.close').on('click', function () {
        $('.modal').slideUp('slow', function () {
            $(this).css('display', 'none', function () {
                $('.overlay').fadeOut();
            });
        });

        $('.overlay').fadeIn().fadeOut();
    });

});