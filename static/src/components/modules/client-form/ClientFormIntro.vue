<template>
  <div>
    <div class="client-form__content">
      <p class="client-form__title">Хотите стать нашим клиентом?</p>

      <p class="client-form__description">
        Оставьте заявку и наш специалист в течение 24 часов свяжется с Вами, чтобы обсудить дальнейшие детали сотрудничества
      </p>

      <p class="client-form__direction">Выберите интересующее вас направление:</p>

      <div class="radio-element">
        <input type="radio" name="type" id="radio-pvl">
        <label for="radio-pvl">Легковой транспорт</label>
      </div><br>

      <div class="radio-element">
        <input type="radio" name="type" id="radio-cvl">
        <label for="radio-cvl">Грузовой транспорт</label>
      </div><br>

      <div class="radio-element">
        <input type="radio" name="type" id="radio-ind">
        <label for="radio-ind">Предприятия</label>
      </div><br>
    </div>

    <button @click="$emit('show-next')">ДАЛЕЕ</button>
  </div>
</template>

<script>
  export default {
    props: {
      msg: String
    }
  }
</script>
