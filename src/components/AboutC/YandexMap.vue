<template>
  <yandex-map id="yandexMap" :zoom="16" :controls="controls" :coords="coords" :behaviors="[]">
    <ymap-marker :coords="[43.248137074526056,76.93217899999993]"  :icon="markerIcon1" marker-id="123123" />
    <ymap-marker :coords="[43.246797074522576,76.93634750000002]" :icon="markerIcon2" marker-id="123123" />
    <ymap-marker :coords="[43.24429507451619,76.947774]" :icon="markerIcon3" marker-id="123123" />
    <ymap-marker :coords="[43.246377074521526,76.95309199999996]" :icon="markerIcon4" marker-id="123123" />
  </yandex-map>
</template>

<script>
import { yandexMap, ymapMarker } from "vue-yandex-maps";
import boum from '../../assets/images/Boum.png'

export default {
  data() {
    return {
      settings: {
        apiKey: "186f0adf-8b02-43df-a8ae-8c25e6a58865",
        lang: "ru_RU",
        enterprise: false,
        version: "2.1",
      },
      coords: [43.24387219312724,76.94710757567753],
      controls:[],
      markerIcon1: {
        layout: "default#imageWithContent",
        imageHref: "https://image.flaticon.com/icons/png/512/33/33447.png",
        imageSize: [0,0 ],
        imageOffset: [15, 0],
        content: boum,
        contentOffset: [0, 15],
        contentLayout:
          '<div style="border: 4px solid #DC0000; padding:15px; border-radius: 10px; display: flex; flex-direction: column; align-items: center; justify-content: center; color: #FFFFFF; font-weight: bold; width:120px"><img style="width:100px" src="$[properties.iconContent]" alt=""><div style="background: red; width:fit-content; padding: 15px; margin-top:10px; font-size:12px">Дом Баума</div></div>',
      },
      markerIcon2: {
        layout: "default#imageWithContent",
        imageHref: "https://image.flaticon.com/icons/png/512/33/33447.png",
        imageSize: [0,0 ],
        imageOffset: [15, 0],
        content: boum,
        contentOffset: [0, 15],
        contentLayout:
          '<div style="border: 4px solid #DC0000; padding:15px; border-radius: 10px; display: flex; flex-direction: column; align-items: center; justify-content: center; color: #FFFFFF; font-weight: bold; width:120px"><img style="width:100px" src="$[properties.iconContent]" alt=""><div style="background: red; width:fit-content; padding: 15px; margin-top:10px; font-size:12px">Стадион «Динамо»</div></div>',
      },
      markerIcon3: {
        layout: "default#imageWithContent",
        imageHref: "https://image.flaticon.com/icons/png/512/33/33447.png",
        imageSize: [0,0 ],
        imageOffset: [15, 0],
        content: boum,
        contentOffset: [0, 15],
        contentLayout:
          '<div style="border: 4px solid #DC0000; padding:15px; border-radius: 10px; display: flex; flex-direction: column; align-items: center; justify-content: center; color: #FFFFFF; font-weight: bold; width:120px"><img style="width:100px" src="$[properties.iconContent]" alt=""><div style="background: red; width:fit-content; padding: 15px; margin-top:10px; font-size:12px">Казахстанско-Немецкий университет</div></div>',
      },
      markerIcon4: {
        layout: "default#imageWithContent",
        imageHref: "https://image.flaticon.com/icons/png/512/33/33447.png",
        imageSize: [0,0 ],
        imageOffset: [15, 0],
        content: boum,
        contentOffset: [0, 15],
        contentLayout:
          '<div style="border: 4px solid #DC0000; padding:15px; border-radius: 10px; display: flex; flex-direction: column; align-items: center; justify-content: center; color: #FFFFFF; font-weight: bold; width:120px"><img style="width:100px" src="$[properties.iconContent]" alt=""><div style="background: red; width:fit-content; padding: 15px; margin-top:10px; font-size:12px">Академия  наук</div></div>',
      },
    };
  },
  components: { yandexMap, ymapMarker },
};
</script>

<style scoped>

#yandexMap {
  width: 100%;
  height: 725px;
}
</style>
