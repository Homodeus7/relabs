<template>
  <div class="m-3 flex flex-col items-center gap-8">
    <v-card-title class="text-h5">Список пользователей</v-card-title>
    <v-progress-circular
      v-if="isLoading"
      indeterminate
      :size="100"
      :width="10"
      color="primary"
      class="my-24 mx-52"
    />
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
          <td>{{ formatObjectDate(item.ctime * 1000) }}</td>
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
    <div class="paginate">
      <vue-awesome-paginate
        :total-items="totalUsers"
        v-model="page"
        :items-per-page="perPage"
        :max-pages-shown="1"
        @click="getSliceUsers"
      >
        <template #prev-button>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              width="12"
              height="12"
              viewBox="0 0 24 24"
            >
              <path d="M8.122 24l-4.122-4 8-8-8-8 4.122-4 11.878 12z" />
            </svg>
          </span>
        </template>

        <template #next-button>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              width="12"
              height="12"
              viewBox="0 0 24 24"
            >
              <path d="M8.122 24l-4.122-4 8-8-8-8 4.122-4 11.878 12z" />
            </svg>
          </span>
        </template>
      </vue-awesome-paginate>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useUsers } from "@/store/users";
import { formatObjectDate } from "@/use/utils";

const isLoading = ref(false);
const page = ref(1);
const perPage = computed(() => (usersStore.perPage ? usersStore.perPage : 5));
const offsetIndex = computed(() => (page.value - 1) * perPage.value);

const usersStore = useUsers();

const totalUsers = computed(() => usersStore.totalUsers);

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

<style>
.paginate .pagination-container {
  display: flex;
  column-gap: 10px;
  align-items: center;
}
.paginate .paginate-buttons {
  height: 35px;
  width: 35px;
  cursor: pointer;
  border-radius: 4px;
  background-color: transparent;
  border: none;
  color: black;
}

.paginate .back-button,
.paginate .next-button {
  background-color: #2563eb;
  color: white;
  border-radius: 8px;
  height: 45px;
  width: 45px;
}
.paginate .active-page {
  background-color: #e5e5e5;
}
.paginate .paginate-buttons:hover {
  background-color: #f5f5f5;
}
.paginate .active-page:hover {
  background-color: #e5e5e5;
}

.paginate .back-button svg {
  transform: rotate(180deg) translateX(-130%);
}
.paginate .next-button svg {
  transform: translateX(140%);
}

.paginate .back-button:hover,
.paginate .next-button:hover {
  background-color: #3b73ec;
}

.paginate .back-button:active,
.paginate .next-button:active {
  background-color: #14409f;
}
</style>
