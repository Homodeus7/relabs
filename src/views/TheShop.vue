<template>
  <div>
    <v-container>
      <v-card-title class="text-h5">Товары</v-card-title>
      <v-container class="flex flex-wrap">
        <v-card
          v-for="good in goods"
          :key="good.name"
          class="m-3"
          max-width="300"
        >
          <template v-slot:loader="{ isActive }">
            <v-progress-linear
              :active="isActive"
              color="deep-purple"
              height="4"
              indeterminate
            ></v-progress-linear>
          </template>

          <div class="relative show">
            <v-img height="300" :src="good.img"></v-img>
            <v-btn
              rounded="xl"
              size="small"
              elevated
              color="grey"
              class="show-child absolute"
              @click="overlay = !overlay"
              >посмотреть</v-btn
            >
          </div>
          <v-overlay v-model="overlay" class="flex items-center justify-center">
            <v-window v-model="onboarding" show-arrows="hover">
              <v-window-item v-for="n in length" :key="`card-${n}`">
                <v-card
                  elevation="2"
                  height="400"
                  width="600"
                  class="d-flex align-center justify-center"
                >
                  <h1 class="text-h2">Slide {{ n }}</h1>
                </v-card>
              </v-window-item>
            </v-window>
          </v-overlay>
          <v-card-item>
            <div class="flex gap-3">
              <div class="font-black text-2xl">{{ good.price }}&#8381;</div>
              <div class="line-through font-black text-lg text-grey">
                {{ good.oldPrice }}&#8381;
              </div>
            </div>
            <div class="flex gap-3">
              <div class="font-black text-xl text-purple">
                {{ good.cardPrice }}&#8381;
              </div>
              <div class="text-sm text-green-700">при оплате картой</div>
            </div>
          </v-card-item>

          <v-card-text>
            <div class="text-subtitle-3 text-grey">{{ good.adress }}</div>
            <div class="mb-4 text-subtitle-3 text-grey">
              {{ good.type }}
            </div>
            <v-row align="center" class="mx-0">
              <v-rating
                :model-value="good.rating"
                color="purple"
                density="compact"
                half-increments
                readonly
              ></v-rating>

              <div class="text-grey ms-4">413</div>
            </v-row>
          </v-card-text>

          <v-card-item>
            <div
              class="w-40 px-4 uppercase text-sm bg-gradient-to-r from-yellow-400 to-lime-500 rounded-xl"
            >
              рассрочка 0-6-0
            </div>
          </v-card-item>

          <v-card-actions>
            <v-btn
              class="m-2"
              color="purple"
              variant="elevated"
              @click="toCard"
            >
              В корзину
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-container>
    </v-container>
  </div>
</template>
<script setup>
import { computed, ref } from "vue";
import { useGoods } from "@/store/goods";

const goodsStore = useGoods();
const goods = computed(() => goodsStore.goods);
const overlay = ref(false);
const length = ref(3);
const onboarding = ref(0);

const toCard = () => {};
</script>

<style lang="scss">
.show:hover .show-child {
  opacity: 1;
  transition: opacity 0.3s;
}

.show-child {
  opacity: 0;
  left: calc(60% - 100px);
  bottom: 150px;
  transition: opacity 0.3s;
}
</style>
