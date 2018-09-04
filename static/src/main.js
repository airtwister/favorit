import $ from 'jquery';
import 'bootstrap/js/dist/carousel';
import './scss/app.scss';

$('#top-slider').carousel({
  interval: 4000
});

$('.carousel').carousel({
  interval: false
});

ymaps.ready(() => {
  // Создание карты.
  new ymaps.Map("map", {
    center: [55.76, 37.64],
    zoom: 17
  });
});