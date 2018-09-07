<template>
  <v-modal>
    <div class="ask-form">
      <q-form v-if="!success" @submit="success = true"></q-form>
      <success v-else></success>
    </div>
  </v-modal>
</template>

<script>
import QForm from './question-form/Form.vue';
import Success from './question-form/Success.vue';

export default {
  components: { QForm, Success },
  data() {
    return {
      success: false,
    }
  },
};
</script>
