<template>
  <div class="m-3 flex flex-col items-center gap-3">
    <v-card-title class="text-h5">Список пользователей</v-card-title>
    <v-progress-circular
      v-if="isLoading"
      indeterminate
      :size="100"
      :width="10"
      color="primary"
      class="my-24 mx-56"
    ></v-progress-circular>
    <v-table v-else>
      <thead>
        <tr>
          <th class="text-left">ID</th>
          <th class="text-left">Имя</th>
          <th class="text-left">Роль</th>
          <th class="text-left">Дата создания</th>
          <th class="text-left">Действия</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="item in users" :key="item.id">
          <td>{{ item.id }}</td>

          <td>{{ item.name }}</td>
          <td>{{ item.role }}</td>
          <td>{{ formatObjectDate(item.ctime) }}</td>
          <td>
            <v-card-actions>
              <v-btn
                @click="remove(item.id)"
                class="ms-2"
                variant="outlined"
                size="small"
              >
                удалить
              </v-btn>
            </v-card-actions>
          </td>
        </tr>
      </tbody>
    </v-table>
    <v-pagination
      v-model="page"
      :length="lengthPagin"
      @click="getSliceUsers"
    ></v-pagination>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useUsers } from "@/store/users";
import { formatObjectDate } from "@/use/utils";

const isLoading = ref(false);
const page = ref(1);
const ITEMS_PER_PAGE = 5;
const offsetIndex = computed(() => (page.value - 1) * ITEMS_PER_PAGE);

const usersStore = useUsers();

const totalUsers = computed(() => usersStore.totalUsers);

const lengthPagin = computed(() =>
  Math.ceil(totalUsers.value / ITEMS_PER_PAGE)
);

onMounted(() => {
  isLoading.value = true;
  setTimeout(() => {
    isLoading.value = false;
    usersStore.getSliceUsers(offsetIndex.value);
  }, 200);
});

const getSliceUsers = () => {
  isLoading.value = true;
  setTimeout(() => {
    isLoading.value = false;
    usersStore.getSliceUsers(offsetIndex.value);
  }, 200);
};

const users = computed(() => usersStore.sliceUsers);

const remove = (id) => {
  usersStore.removeUser(id);
};
</script>
