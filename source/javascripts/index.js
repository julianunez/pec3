import '../stylesheets/index.scss';
//import '~materialize-css/dist/js/materialize.min.js';
import $ from 'jquery';


$('.sidenav').sidenav();
$('.materialboxed').materialbox();
$('.modal').modal();
$('.parallax').parallax();
$('.carousel.carousel-slider').carousel({
   fullWidth: true,
   indicators: true
 });
$('select').formSelect();
