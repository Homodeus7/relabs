<template>
  <div class="m-3 flex flex-col items-center gap-8 min-w-[380px]">
    <v-card-title class="text-h5">Список событий</v-card-title>
    <v-progress-circular
      v-if="isLoading"
      indeterminate
      :size="100"
      :width="10"
      color="primary"
      class="my-24"
    ></v-progress-circular>
    <v-table v-else class="overflow-y-auto h-[403px]">
      <thead>
        <tr>
          <th class="text-left">Дата</th>
          <th class="text-left">Событие</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in events">
          <td>{{ formatObjectDate(item.date * 1000) }}</td>
          <td>{{ item.eventName }}</td>
        </tr>
      </tbody>
    </v-table>
  </div>
</template>
<script setup>
import { ref, reactive, onMounted, getCurrentInstance } from "vue";
import { formatObjectDate } from "@/use/utils";

const { proxy } = getCurrentInstance();

const isLoading = ref(false);

const events = reactive([]);

onMounted(() => {
  if (proxy == null) return;
  proxy.$connect();
  proxy.$socket.onmessage = (res) => {
    console.log(res);
    const response = JSON.parse(res.data);
    events.push({ date: response.ctime, eventName: response.event });
  };
});
</script>
