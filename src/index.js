import './styles/style.scss';
import WOW from 'wowjs';
import $ from 'jquery';
import 'slick-carousel';
import 'select2'; 
const jquery = require("jquery");
const jQuery = require("jquery");
window.jQuery = $;
const fancybox = require("@fancyapps/fancybox"); 

$(() => {
    $('.type').select2();
    $('.age').select2();
    $('.promotion').select2();
    $('.theme').select2();
});