<template>
  <div class="m-3 flex flex-col items-center gap-3">
    <v-card-title class="text-h5">Список событий</v-card-title>
    <v-progress-circular
      v-if="isLoading"
      indeterminate
      :size="100"
      :width="10"
      color="primary"
      class="my-24"
    ></v-progress-circular>
    <v-table v-else>
      <thead>
        <tr>
          <th class="text-left">Дата</th>
          <th class="text-left">Событие</th>
        </tr>
      </thead>
    </v-table>
  </div>
</template>
<script setup>
import { ref, computed, onMounted } from "vue";

const isLoading = ref(false);
</script>
