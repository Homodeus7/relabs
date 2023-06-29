import { defineStore } from "pinia";
import axios from "axios";

export const useUsers = defineStore("users", {
  state: () => ({
    sliceUsers: [],
    totalUsers: 0,
  }),
  actions: {
    async getSliceUsers(offset) {
      const data = await axios.get(
        `https://test.relabs.ru/api/users/list?offset=${offset}`
      );
      this.sliceUsers = data.data.items;
      this.totalUsers = data.data.total;
    },
    removeUser(id) {
      if (this.sliceUsers.length) {
        const newUsers = this.sliceUsers.filter((user) => user.id !== id);
        this.sliceUsers = newUsers;
      }
    },
  },
});
