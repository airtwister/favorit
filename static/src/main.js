import './scss/app.scss';
import ClientForm from './components/modules/ClientForm.vue';
import QuestionFormModal from './components/modules/QuestionFormModal.vue';
import 'owl.carousel';

$('#top-slider').owlCarousel({
  loop:       true,
  autoplay:   true,
  nav:        false,
  slideBy:    'page',
  items:      1,
});

$('.success-cases .owl-carousel').owlCarousel({
  loop:       false,
  nav:        false,
  slideBy:    'page',
  items:      4,
  dotsClass:  'owl-dots owl-dots--white',
  responsive: {
    0: {
      items: 1,
      margin: 32,
    },
    600: {
      items:  2,
      margin: 32,
    },
    800: {
      items:  3,
      margin: 25,
    },
    1400: {
      items:  4,
      margin: 25,
    },
  }
});

$('.owl-carousel').owlCarousel({
  loop:       false,
  nav:        false,
  slideBy:    'page',
  items:      4,
  responsive: {
    0: {
      items: 1,
      margin: 32,
    },
    500: {
      items: 2,
      margin: 32,
    },
    700: {
      items:  3,
      margin: 25,
    },
    1000: {
      items:  4,
      margin: 25,
    },
  }
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

  $(window).on('resize', () => {
    myMap.container.fitToViewport();
  });

  myMap.behaviors.disable('scrollZoom');
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


