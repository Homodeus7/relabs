<template>
  <nav
    class="flex items-center justify-between px-10 bg-blue-600 py-2 text-white uppercase"
  >
    <h1 class="text-3xl font-black uppercase">Relabs</h1>
    <v-row justify="end" no-gutters class="gap-4">
      <router-link v-for="link in links" :key="link" :to="link.link">
        <v-btn color="white" variant="text" class="mx-2" rounded="xl">{{
          link.name
        }}</v-btn>
      </router-link>
    </v-row>
  </nav>
</template>

<script setup>
import { reactive } from "vue";

const links = reactive([
  { link: "/", name: "Главная страница" },
  { link: "/login", name: "Авторизация" },
  { link: "/shop", name: "Магазин" },
]);
</script>
