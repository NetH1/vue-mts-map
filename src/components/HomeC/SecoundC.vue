<template>
  <div class="container">
    <h1 style="text-transform:uppercase; text-align:center; margin-top:42px;">Увлекательный маршрут по городу</h1>
    <svg :width="width" :height="height">
      <path :d="path" fill="none" stroke="#AB9995" stroke-width="3" stroke-linecap="round" stroke-dasharray="9 9" />
      <g v-for="(item, index) in items" :key="index">
        <circle :cx="items[index].x" :cy="items[index].y" :r="radius" fill="white" stroke="black" />
        <image :x="items[index].x - imageWidth / 2" :y="items[index].y - imageHeight / 2" :width="imageWidth" :height="imageHeight" :href="item.imageUrl" />
        <text :x="items[index].x" :y="items[index].y + imageHeight / 2 + 10" text-anchor="middle" dominant-baseline="hanging">{{ item.text }}</text>
      </g>
    </svg>
  </div>
</template>

<script>
import m from '../../assets/images/museum.png'
export default {
  data() {
    return {
      items: [
        { imageUrl: m, text: "Роща Баума", x: 350, y: 180 },
        { imageUrl: m, text: "Дом Баума", x: 900, y: 275 },
        { imageUrl: m, text: "Академия наук",x: 380, y: 550 },
        { imageUrl: m, text: "Памятник Г.К. Бельгеру", x: 980, y: 600 },
        { imageUrl: m, text: "Стадион «Динамо»", x: 300, y: 890 },
        { imageUrl: m, text: "Музеи", x: 720, y: 1050 }
      ],
      itemCoordinates: [

      ],
      width: 1200,
      height: 1400,
      radius: 10,
      curveAmount: 50,
      imageWidth: 250,
      imageHeight: 250
    }
  },
  computed: {
    path() {
      let path = "M " + this.items[0].x + " " + this.items[0].y + " "
      for (let i = 1; i < this.items.length; i++) {
        const cx1 = (this.items[i-1].x + this.items[i].x) / 2
        const cy1 = this.items[i-1].y
        const cx2 = (this.items[i-1].x + this.items[i].x) / 2
        const cy2 = this.items[i].y
        const x = this.items[i].x
        const y = this.items[i].y
        path += `C ${cx1} ${cy1-this.curveAmount} ${cx2} ${cy2+this.curveAmount} ${x} ${y} `
      }
      return path
    }
  }
}
</script>
