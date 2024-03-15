
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
    inputs.forEach(function(input) {
        input.addEventListener('input', function () {
            if (input.value.trim() !== '') {
                input.classList.add('active');
            } else {
                input.classList.remove('active');
            }
        });
    });




    // $("header.header nav ul").on("click", "a:not(.normallink)", function (event) {
    //     event.preventDefault();
    //     var id = $(this).attr('href'),
    //         top = $(id).offset().top - 100;
    //     $('body,html').animate({ scrollTop: top }, 800);
    // });

    // $("footer ul").on("click", "a:not(.normallink)", function (event) {
    //     event.preventDefault();
    //     var id = $(this).attr('href'),
    //         top = $(id).offset().top - 100;
    //     $('body,html').animate({ scrollTop: top }, 800);
    // });








    // var menuBtn = document.querySelector('.menubtn');
    // var mobMenu = document.querySelector('.header');
    // var overlay = null;

    // menuBtn.addEventListener('click', function () {
    //     if (!overlay) {
    //         overlay = document.createElement('div');
    //         overlay.className = 'overlay';
    //         mobMenu.appendChild(overlay);
    //         setTimeout(function () {
    //             overlay.classList.add('active');
    //         }, 10);
    //     }
    // });

    // var closeMenuBtn = document.querySelector('.closemenu');
    // var popupCloseBtn = document.querySelector('.popup__close');

    // closeMenuBtn.addEventListener('click', closeMenu);
    // popupCloseBtn.addEventListener('click', closeMenu);

    // function closeMenu() {
    //     if (overlay) {
    //         overlay.classList.remove('active');
    //         setTimeout(function () {
    //             mobMenu.removeChild(overlay);
    //             overlay = null;
    //         }, 300);
    //     }
    // }

    // // Додаємо обробник подій для кожного пункту меню
    // var menuItems = document.querySelectorAll('.header ul li a');
    // menuItems.forEach(function (item) {
    //     item.addEventListener('click', function () {
    //         closeMenu();
    //     });
    // });



});

