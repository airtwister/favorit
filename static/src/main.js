import $ from 'jquery';
import 'bootstrap/js/dist/carousel';
import 'bootstrap/js/dist/modal';
import './scss/app.scss';
import ClientForm from './components/ClientForm.vue';
import Vue from 'vue';

$('#top-slider').carousel({
  interval: 4000
});

$('.carousel').carousel({
  interval: false
});

ymaps.ready(() => {
  const myMap = new ymaps.Map("map", {
    center: [55.76, 37.64],
    zoom: 18
  });

  const balloonContent = $('.map-address__balloon-wrapper').detach().show().html();

  const myPlacemark = new ymaps.Placemark([55.76, 37.64], {
    hintContent: 'Шоссе Космонавтов, 399',
    balloonContent,
  });

  myMap.geoObjects.add(myPlacemark);
});

new Vue({
  el: '.client-form-wrapper',
  components: {
    ClientForm
  }
});

