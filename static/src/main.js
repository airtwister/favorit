import $ from 'jquery';
import 'bootstrap/js/dist/carousel';
import 'bootstrap/js/dist/modal';
import './scss/app.scss';
import ClientForm from './components/modules/ClientForm.vue';
import QuestionFormModal from './components/modules/QuestionFormModal.vue';
import Vue from 'vue';
import vmodal from './components/common/vue-modal/plugin';

Vue.use(vmodal);

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

$('.top-nav__search input')
  .on('focus', () => {
    $('.top-nav__search').find('.search-results').fadeIn(200);
  })
  .on('blur', () => {
    $('.top-nav__search').find('.search-results').fadeOut(200);
  });

$('#show-questions-form').on('click', () => {
  $('#question-form-modal').html('<modal></modal>');

  new Vue({
    el:         '#question-form-modal',
    components: {
      Modal: QuestionFormModal,
    },
  });
});
