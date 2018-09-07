import VModal from './Modal.vue';

// Vue-плагин модалки
const ModalPlugin = {
    install(Vue) {
        this.event = new Vue();

        Vue.component(VModal.name, VModal);

        // в компонентах пользоваться так: this.$vmodal.hide()
        Vue.prototype.$vmodal = {
            /**
             * Скрыть модалку
             */
            hide: () => {
                this.event.$emit('hide');
            },

            /**
             * Модалка снизу экрана
             */
            toBottom: () => {
                this.event.$emit('bottom');
            },

            /**
             * Модалка во весь экран
             */
            enlarge: () => {
                this.event.$emit('enlarge');
            },

            /**
             * Установка заголовка в хедере модалки
             *
             * @param {String} title
             */
            setTitle: (title) => {
                this.event.$emit('set-title', title);
            },
        };
    },
};

export default ModalPlugin;
