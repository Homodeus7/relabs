import { defineStore } from "pinia";

export const useGoods = defineStore("goods", {
  state: () => ({
    goods: [
      {
        price: "90000",
        oldPrice: "100000",
        cardPrice: "70000",
        adress: "Apple / Apple iPhone 14 Pro 128Gb",
        type: "6.1 / 2000x1170 / OLED / 128",
        rating: "3",
        img: "https://st-troy.mncdn.com/mnresize/1500/1500/Content/media/ProductImg/original/mq2n3tua-apple-iphone-14-pro-1tb-gumus-mq2n3tua-637987539696377742.jpg",
      },
      {
        price: "90000",
        oldPrice: "100000",
        cardPrice: "70000",
        adress: "Apple / Apple iPhone 12 64Gb",
        type: "6.1 / 2000x1170 / OLED / 128",
        rating: "5",
        img: "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/apple/thumb/135151-1-3_large.jpg",
      },
      {
        price: "90000",
        oldPrice: "100000",
        cardPrice: "70000",
        adress: "Apple / Apple iPhone 12 256Gb",
        type: "6.1 / 2000x1170 / OLED / 128",
        rating: "4",
        img: "https://st-troy.mncdn.com/mnresize/1500/1500/Content/media/ProductImg/original/mll73tua-apple-iphone-13-pro-max-128gb-gumus-637678425271716702.jpg",
      },
    ],
  }),
});
