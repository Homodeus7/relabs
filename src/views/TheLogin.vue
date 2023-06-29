<template>
  <div class="h-[100vh] relative">
    <v-sheet
      min-width="300"
      class="absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%]"
    >
      <v-progress-circular
        v-if="isLoading"
        indeterminate
        :size="100"
        :width="10"
        color="primary"
        class="ml-[100px]"
      ></v-progress-circular>
      <v-card v-else color="eeeeee" class="pa-10">
        <v-form
          validate-on="submit lazy"
          @submit.prevent="log"
          class="w-[300px]"
        >
          <v-text-field
            v-model="valid.email.value"
            :error-messages="valid.eError.value"
            label="Login"
          ></v-text-field>
          <v-text-field
            v-model="valid.password.value"
            :error-messages="valid.pError.value"
            label="Password"
          ></v-text-field>
          <v-btn
            :disabled="!isValid"
            type="submit"
            elevated
            block
            class="text-none mt-4"
            color="primary"
            text="Login"
          ></v-btn>
        </v-form>
      </v-card>
    </v-sheet>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { useLoginForm } from "@/use/login-form";
import { ref, computed } from "vue";

const router = useRouter();
const isLoading = ref(false);
const valid = { ...useLoginForm() };

const isValid = computed(
  () =>
    !!valid.email.value &&
    !!valid.password.value &&
    !valid.eError.value &&
    !valid.pError.value
);

const log = () => {
  if (isValid.value) {
    isLoading.value = true;
    setTimeout(() => {
      isLoading.value = false;
      router.push("/");
    }, 2000);
  }
};
</script>
