<template>
  <div>
    <div class="client-form__content">
      <p class="client-form__title">Заполните информацию о себе:</p>

      <div>
        <div class="client-form__input element-input">
          <input placeholder="ФИО">
        </div>
        <div class="client-form__input element-input">
          <input placeholder="Город">
        </div>
        <div class="client-form__input element-input">
          <input placeholder="Телефон для связи">
        </div>
        <div class="client-form__input element-input">
          <input placeholder="Название компании (для юр. лиц)">
        </div>
        <div class="client-form__input element-input" data-error="Неправильный E-mail адресс">
          <input placeholder="E-mail адресс">
        </div>
      </div>

      <div class="client-form__agreement">
        <a href="">Согласен на обработку персональных данных</a>
      </div>
    </div>

    <button>НАЧАТЬ СОТРУДНИЧЕСТВО</button>
  </div>
</template>

<script>
  export default {
    props: {
      msg: String
    }
  }
</script>
