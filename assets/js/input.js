import $ from "jquery";
import 'slick-carousel'
import 'flowbite';
import './datepicker-init'

$(document).ready(function(){

    /////// MOBILE MENU
    $(document).on('click', '#mobile-menu-bar', function(e){
        $('body').addClass('mobile-menu-active')
    })
    $(document).on('click', '#mobile-menu .content .close, #mobile-menu .shape ', function(e){
        $('body').removeClass('mobile-menu-active')
    })
    /////// MOBILE MENU END


    //////// HOME PAGE
    // INTRO SECTION
    $('.intro .slider').slick({
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 1,
        centerMode: true,
        swipe: false,
        dots: false,
        prevArrow: $('.prev-arrow'),
        nextArrow: $('.next-arrow'),
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 1,
                    centerMode: false,
                }
            },
        ]
    });
    $('.intro .slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        $('.intro .slick-slide .item .item-content.active').removeClass('active');
    });
    $(document).on('click', '.intro .slick-slide .item .item-content .info button', function(e){
        if ($(window).width() > 768) {
            $(this).parents('.item-content').toggleClass('active');
        }else{
            $('body').addClass('overflow-hidden').append('<div id="slide-product-info"><button></button></div>');
            $('#slide-product-info').append($(this).next('.info-content').clone());
            setTimeout(function(){$('#slide-product-info').addClass('active');},10);
        }
    })
    $(document).on('click', '#slide-product-info > button', function(e){
        $(this).parent('#slide-product-info').removeClass('active');
        $('body').removeClass('overflow-hidden');
        setTimeout(function(){$('#slide-product-info').remove();},250);
    })

    // BANNER CARDS SECTION
    $(document).on('click', '.slick-cards .card-activation, .slick-cards .dots button', function(e){
        var index = e.target.tagName === 'BUTTON' ? $(this).index() : $(this).parents('.card').index()

        $('.slick-cards .card').removeClass('active');
        $('.slick-cards .dots button').removeClass('active');

        $('.slick-cards .card').eq(index).addClass('active');
        $('.slick-cards .dots button').eq(index).addClass('active');
    })
    if($(window).width() < 1024){
        $('.slick-cards .cards').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            swipe: true,
            dots: true,
            arrows: false,
            fade: true,
        });
        $('.slick-cards .dots').attr('style', 'display: none !important;');
    }
    //////// HOME PAGE END


    //////// SIDEBAR SLICK SLIDER
    $('.sidebar-banner-slide').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipe: true,
        dots: true,
        arrows: false,
        fade: true,
    });
    //////// SIDEBAR SLICK SLIDER END


    //////// FILTER BUTTON MOBILE PRODUCT LIST
    $(document).on('click', '.product-list-filter > button', function () {
        $('.product-list-filter').toggleClass('opened')
    })
    //////// FILTER BUTTON MOBILE PRODUCT LIST END


    //////// ALL MODALS ANIMATIONS
    $(document).on('click', '[data-modal-target]', function (e) {
        var id = '#'+$(this).attr('data-modal-target')
        setTimeout(function () {
            $(id).addClass('modal-showed');
        },10)
    })
    $(document).on('click', '[data-modal-hide], .modal-block', function (e) {
        var id = '#' + ($(this).attr('id') ? $(this).attr('id') : $(this).attr('data-modal-hide'));
        setTimeout(function () {
            if($(id).hasClass('hidden'))
                $(id).removeClass('modal-showed');
        },100)
    })
    //////// ALL MODALS ANIMATIONS END


    //////// PRODUCT ITEM MOBILE
    $(document).on('click', '.product-list .product-list--item', function (e) {
        if($(window).width() < 1280){
            $('body')
                .addClass('overflow-hidden')
                .append('<div class="product-item-modal">' +
                    '<div class="product-list--item"></div>' +
                    '<div class="shape"></div>' +
                    '</div>');
            $('.product-item-modal .product-list--item').append($(this).html());
            setTimeout(function () {
                $('.product-item-modal').addClass('animate');
            },10)
        }
    })
    $(document).on('click', '.product-item-modal .shape', function (e) {
        $('.product-item-modal').removeClass('animate');
        setTimeout(function () {
            $('.product-item-modal').remove();
            $('body').removeClass('overflow-hidden');
        },300)
    })
    //////// PRODUCT ITEM MOBILE END

})
