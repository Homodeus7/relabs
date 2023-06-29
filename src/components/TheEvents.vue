<template>
  <div class="m-3 flex flex-col items-center gap-8 overflow-y-auto h-[500px]">
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
      <tbody>
        <tr v-for="item in newArr">
          <td>{{ formatObjectDate(item.data * 1000) }}</td>
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

const newArr = reactive([]);

const eventName = ref("");
const data = ref("");

onMounted(() => {
  setTimeout(() => {
    if (proxy == null) return;
    proxy.$connect();
    proxy.$socket.onmessage = (res) => {
      console.log(res);
      const response = JSON.parse(res.data);
      eventName.value = response.event;
      data.value = response.ctime;
      newArr.push({ data: response.ctime, eventName: response.event });
    };
  }, 300);
});
</script>
