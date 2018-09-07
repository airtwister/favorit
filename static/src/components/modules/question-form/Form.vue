<template>
    <div class="ask-form__content">
      <p class="ask-form__title">У вас есть вопросы ?</p>
      <p class="ask-form__text">Оставьте заявку и наш специалист в течении 24 часов свяжется с Вами, чтобы дать вам ответы на ваши вопросы.</p>

      <div class="ask-form__inputs">
        <div class="ask-form__input element-input">
          <input placeholder="ФИО">
        </div>
        <div class="ask-form__input element-input">
          <input placeholder="Телефон для связи">
        </div>
        <div class="ask-form__input element-textarea" data-error="Пустое поле!">
          <textarea placeholder="Напишите ваш вопрос здесь"></textarea>
        </div>
      </div>

      <div class="ask-form__footer">
        <button @click="$emit('submit')">Задать вопрос</button>
      </div>
    </div>
</template>
