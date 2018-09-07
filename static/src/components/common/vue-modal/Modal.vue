<template>
  <div v-if="!closed" class="vue-modal" :class="isOnBottom ? 'vue-modal--bottom' : ''">
    <div class="vue-modal__overlay" @click="close">
      <div class="vue-modal__content" @click.stop>
        <button @click="close" class="vue-modal__close-btn">
          <i class="fa fa-close"></i>
        </button>

        <div class="vue-modal__header" v-if="title">
          <div class="vue-modal__title">{{ title }}</div>
        </div>


        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
  import Plugin from './plugin';

  export default {
    name: 'VModal',
    data() {
      return {
        title:      '',
        closed:     false,
        isOnBottom: false,
      };
    },
    beforeMount() {
      this.freezeBody();
      this.initListeners();
    },
    methods: {
      /**
       * Вешаем класс, обездвиживающий html
       */
      freezeBody() {
        document.documentElement.classList.add('vue-modal-opened');
      },

      /**
       * Убираем класс, обездвиживающий html
       */
      unfreezeBody() {
        document.documentElement.classList.remove('vue-modal-opened');
      },

      /**
       * Закрываем модалку
       */
      close() {
        this.closed = true;
        this.unfreezeBody();
      },

      /**
       * Ининциализируем слушателей событий плагина
       */
      initListeners() {
        Plugin.event.$on('hide', () => {
          this.close();
        });

        Plugin.event.$on('bottom', () => {
          this.isOnBottom = true;
        });

        Plugin.event.$on('enlarge', () => {
          this.isOnBottom = false;
        });

        Plugin.event.$on('set-title', (title) => {
          this.title = title;
        });
      },
    },
  };
</script>
