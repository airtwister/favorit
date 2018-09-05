<template>
  <div class="client-form" :class="styleClass">
    <client-form-intro v-if="isIntro" @show-next="isIntro = false"></client-form-intro>
    <client-form-inputs v-if="!isIntro"></client-form-inputs>
  </div>
</template>

<script>
import ClientFormIntro from './client-form/ClientFormIntro.vue';
import ClientFormInputs from './client-form/ClientFormInputs.vue';

export default {
  components: {
    ClientFormIntro,
    ClientFormInputs
  },
  computed: {
    styleClass() {
      return this.isIntro ? 'client-form--blue' : 'client-form--grey';
    }
  },
  data() {
    return {
      isIntro: true,
    };
  },
}
</script>
