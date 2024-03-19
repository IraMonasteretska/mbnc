
$(document).ready(function () {

    // header
    $(window).scroll(function () {
        if ($(this).scrollTop() > 20) {
            $('.header').addClass('scrollheader');
        } else {
            $('.header').removeClass('scrollheader');
        }
    });

    if ($(this).scrollTop() > 20) {
        $('.header').addClass('scrollheader');
    } else {
        $('.header').removeClass('scrollheader');
    }


    // input label
    const inputs = document.querySelectorAll('.active-on-type');
    inputs.forEach(function (input) {
        input.addEventListener('input', function () {
            if (input.value.trim() !== '') {
                input.classList.add('active');
            } else {
                input.classList.remove('active');
            }
        });
    });


    // menu

    $('.menubtn').click(function () {
        $(this).toggleClass('active');
        $('.menuwrapper').toggleClass('show');
        $('body').toggleClass('disscroll');
    });




    $("header.header nav ul").on("click", "a:not(.normallink)", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top - 80;
        $('body,html').animate({ scrollTop: top }, 800);
    });

    $("footer .footerboxlist ul").on("click", "a:not(.normallink)", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top - 80;
        $('body,html').animate({ scrollTop: top }, 800);
    });


    // AOS init
    AOS.init({
        disable: 'phone',
        easing: 'ease-in-out',
        duration: 800
    });


});

