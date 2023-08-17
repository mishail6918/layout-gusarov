//main menu
$('.burger-menu').on('click', function(){
    $('.menu-window').addClass('active-menu');
    setTimeout(() => {
        $('.left-side').addClass('active-left-side');
        $('html').css('overflow', 'hidden');
    }, 300);
    setTimeout(() => {
        $('.right-side').addClass('active-right-side');
    }, 500);
});

$('.close-btn').on('click', function(){
    $('.menu-window').removeClass('active-menu');
    $('.left-side').removeClass('active-left-side');
    $('.right-side').removeClass('active-right-side');
    $('html').css('overflow', 'auto');
});

$('.mobile-burger').on('click', function(){
    $('.mobile-menu').addClass('active-mobile-menu');
    $('.mobile-close').css('display', 'block');
    $('.mobile-burger').css('display', 'none');
});

$('.mobile-close').on('click', function(){
    $('.mobile-menu').removeClass('active-mobile-menu');
    $('.mobile-close').css('display', 'none');
    $('.mobile-burger').css('display', 'block');
});

//services tabs
$('.tabs-list').find('.tab__item').on('click', function(){
    if ($(this).hasClass('tab__active')) {
        $(this).removeClass('tab__active');
        $(this).find('.tab__btn').attr('src', '../src/assets/plus.svg');
    }
    else {
        $(this).addClass('tab__active');
        $(this).find('.tab__btn').attr('src', '../src/assets/tab-close.svg');
    }
});

//slider scripts begin

$('.slider-wrapper').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    dots: true,
    adaptiveHeight: true,
    dotsClass: 'customPagging',
    customPaging: function (slider, i) {
        return  '<span>' + (i + 1) + '</span>' + '/' + slider.slideCount;
    }
});

$('.tab__slider').slick({
    slidesToShow: 1, 
    slidesToScroll: 1,
    dots: false,
    dotsClass: 'customPagging',
    customPaging: function (slider, i) {
        return  '<span>' + (i + 1) + '</span>' + '/' + slider.slideCount;
    },
    responsive: [
        {
            breakpoint: 769,
            settings: {
                dots: true,
            }
        }
    ]
});

$('.client__slider').slick({
    slidesToShow: 1, 
    slidesToScroll: 1,
    dots: false,
    dotsClass: 'customPagging',
    customPaging: function (slider, i) {
        return  '<span>' + (i + 1) + '</span>' + '/' + slider.slideCount;
    },
    responsive: [
        {
            breakpoint: 769,
            settings: {
                dots: true,
            }
        }
    ]
});

$('.audio__slider').slick({
    slidesToShow: 1, 
    slidesToScroll: 1,
    adaptiveHeight: true,
    dots: false,
    dotsClass: 'customPagging',
    customPaging: function (slider, i) {
        return  '<span>' + (i + 1) + '</span>' + '/' + slider.slideCount;
    },
    responsive: [
        {
            breakpoint: 769,
            settings: {
                dots: true,
            }
        }
    ]
});

$('.photo-slider').slick({
    slidesToShow: 3, 
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    dotsClass: 'customPagging',
    customPaging: function (slider, i) {
        return  '<span>' + (i + 1) + '</span>' + '/' + slider.slideCount;
    },
    responsive: [
        {
            breakpoint: 769,
            settings: {
                dots: true,
                slidesToShow: 1
            }
        }
    ]
});

$('.activities-slider').slick({
    slidesToShow: 1, 
    slidesToScroll: 1,
    dots: false,
    dotsClass: 'customPagging',
    customPaging: function (slider, i) {
        return  '<span>' + (i + 1) + '</span>' + '/' + slider.slideCount;
    },
    responsive: [
        {
            breakpoint: 769,
            settings: {
                dots: true,
                slidesToShow: 1
            }
        }
    ]
});

$('.working__tools__mobile').slick({
    slidesToShow: 1, 
    slidesToScroll: 1,
    infinite: true,
    dots: true,
    dotsClass: 'customPagging',
    customPaging: function (slider, i) {
        return  '<span>' + (i + 1) + '</span>' + '/' + slider.slideCount;
    }
});

$('.features__slider').slick({
    slidesToShow: 1, 
    slidesToScroll: 1,
    infinite: true,
    dots: true,
    dotsClass: 'customPagging',
    customPaging: function (slider, i) {
        return  '<span>' + (i + 1) + '</span>' + '/' + slider.slideCount;
    }
});

$('.switcher-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    dots: true,
    dotsClass: 'customPagging',
    customPaging: function (slider, i) {
        return  '<span>' + (i + 1) + '</span>' + '/' + slider.slideCount;
    }
});

$('.rating__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    adaptiveHeight: true,
    dots: true,
    dotsClass: 'customPagging',
    customPaging: function (slider, i) {
        return  '<span>' + (i + 1) + '</span>' + '/' + slider.slideCount;
    }
});

$('.title__slider').slick({
    slidesToShow: 3,
    vertical: true,
    infinite: false,
    asNavFor: '.forms__slider',
    focusOnSelect: true,
    arrows: false,
    responsive: [
        {
            breakpoint: 541,
            settings: {
                slidesToShow: 1,
                vertical: false
            }
        }
    ]
});

$('.forms__slider').slick({
    slidesToShow: 1,
    infinite: false,
    asNavFor: '.title__slider',
    dots: true
});
//slider scripts end

//switcher script

$('.slider').on('click', function(){
    $('.tab__price').toggleClass('inactive');
});

//feedback tabs script

$('.tabs__btn').find('button').on('click', function(){
    var array = ['.video', '.information', '.clients', '.members', '.audio', '.who-work', '.chill', '.work-tool', '.text-tab', '.video-tab'];
    var array2 = ['who-work', 'chill', 'work-tool'];
    let btnClass = $(this).attr('class');
    btnClass = '.' + btnClass;
    if (array.includes(btnClass)) {
        $(this).addClass('active-btn');
        $(this).siblings().removeClass('active-btn');
        $(btnClass).addClass('active-tab');
        $(btnClass).siblings().removeClass('active-tab');
        console.log($(btnClass));
    }
});

import intlTelInput from 'intl-tel-input';

const input = document.querySelector("#phone");
const inputSeo = document.querySelector("#phone-seo");
const inputForm = document.querySelector("#phone-form");
const inputPopup = document.querySelector('#phone-thank');
const inputRand = document.querySelector('#phone-random');

intlTelInput(input, {
    // any initialisation options go here
    autoFormat: true,
    nationalMode: false,
    utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/11.0.4/js/utils.js",
    // preferredCountries: ["ru", "by", "ua"],
    numberType: "MOBILE",
    autoPlaceholder: "aggressive",
    onlyCountries: ["ru", "by", "ua"],
    defaultCountry: 'auto'
});

intlTelInput(inputSeo, {
    // any initialisation options go here
    autoFormat: true,
    nationalMode: false,
    utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/11.0.4/js/utils.js",
    // preferredCountries: ["ru", "by", "ua"],
    numberType: "MOBILE",
    autoPlaceholder: "aggressive",
    onlyCountries: ["ru", "by", "ua"],
    defaultCountry: 'auto'
});

intlTelInput(inputForm, {
    // any initialisation options go here
    autoFormat: true,
    nationalMode: false,
    utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/11.0.4/js/utils.js",
    // preferredCountries: ["ru", "by", "ua"],
    numberType: "MOBILE",
    autoPlaceholder: "aggressive",
    onlyCountries: ["ru", "by", "ua"],
    defaultCountry: 'auto'
});

intlTelInput(inputPopup, {
    // any initialisation options go here
    autoFormat: true,
    nationalMode: false,
    utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/11.0.4/js/utils.js",
    // preferredCountries: ["ru", "by", "ua"],
    numberType: "MOBILE",
    autoPlaceholder: "aggressive",
    onlyCountries: ["ru", "by", "ua"],
    defaultCountry: 'auto'
});
intlTelInput(inputRand, {
    // any initialisation options go here
    autoFormat: true,
    nationalMode: false,
    utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/11.0.4/js/utils.js",
    // preferredCountries: ["ru", "by", "ua"],
    numberType: "MOBILE",
    autoPlaceholder: "aggressive",
    onlyCountries: ["ru", "by", "ua"],
    defaultCountry: 'auto'
});