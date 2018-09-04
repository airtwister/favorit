import $ from 'jquery';
import 'bootstrap/js/dist/carousel';
import './scss/app.scss';

$('#top-slider').carousel({
  interval: 4000
});

$('.carousel').carousel({
  interval: false
});