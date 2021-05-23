$('.dropdown-toggle').on('click', function (e) {
    e.preventDefault();
    $(this).siblings('.dropdown-menu').fadeToggle();
});

//плавный скролл
$(document).ready(function () {
    $('.go_to').click(function (e) {
        e.preventDefault();
        var scroll_el = $(this).attr('href');
        if ($(scroll_el).length !== 0) {
            $('html, body').animate({
                scrollTop: $(scroll_el).offset().top
            }, 500);
        }
        $('.mobile-menu').fadeOut();

        return false;
    });
});
//плавный скролл end

$('.main-slider').slick({
    slidesToShow: 1,
    arrows: false,
    dots: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000,
});

$('.btn-burger').on('click', function () {
   $('.mobile-menu').fadeIn();
});

$('.btn-close').on('click', function () {
    $('.mobile-menu').fadeOut();
});

// slick active
$(window).on('load resize', function() {
    if ($(window).width() > 768) {
        $('.products-slider').slick({
            slidesToShow: 2,
            arrows: false,
            dots: true,
            infinite: false,
        });
    } else {
        $(".products-slider.slick-initialized").slick("unslick");
    }
});
// slick active

// отправка заявки с формы обратной связи на почту
$(document).ready(function () {

    $(".form").submit(function () {
        $.ajax({
            type: "POST",
            url: "mail.php",
            data: $(this).serialize()
        }).done(function () {
            $(this).find("input").val("");

            $('.thanks-box').fadeIn();

            setTimeout(function () {
                $(".thanks-box").fadeOut()
            }, 1000);

            $(".form").trigger("reset");
        });
        return false;
    });

});
// end
