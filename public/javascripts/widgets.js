$('.js-accordion-trigger').bind('click', function(e){
    jQuery(this).parent().find('.submenu').slideToggle('fast');  // apply the toggle to the ul
    jQuery(this).parent().toggleClass('is-expanded');
    e.preventDefault();
});

$('.sliding-menu-button').bind('click', function(e){
    $('aside').slideToggle('fast');  // apply the toggle to the ul
    $('.actual-content').toggleClass('actual-content-full');
    e.preventDefault();
});

$('.submenu li a').bind('click',function(e) {
    $('.submenu li a').removeClass('menu-selected');
    $('li a.js-accordion-trigger').removeClass('menu-selected');
    $(this).addClass('menu-selected');
    $(this).parent().parent().parent().find('.js-accordion-trigger').addClass('menu-selected');
});


$(document).ready(function () {
    $('.accordion-tabs-minimal').each(function(index) {
        $(this).children('li').first().children('a').addClass('is-active').next().addClass('is-open').show();
    });

    $('.accordion-tabs-minimal').on('click', 'li > a', function(event) {
        if (!$(this).hasClass('is-active')) {
            event.preventDefault();
            var accordionTabs = $(this).closest('.accordion-tabs-minimal')
            accordionTabs.find('.is-open').removeClass('is-open').hide();

            $(this).next().toggleClass('is-open').toggle();
            accordionTabs.find('.is-active').removeClass('is-active');
            $(this).addClass('is-active');
        } else {
            event.preventDefault();
        }
    });
});
