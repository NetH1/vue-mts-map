<template>
  <div>
    <HomeMain v-if="show==false"/>
    <button class="btn-show" v-if="show==false" @click="show = true">Показать карту</button>
    <button class="btn-show" v-if="show==true" @click="show = false">Cкрыть карту</button>
    <AboutMain v-if="show== true" />
  </div>
</template>

<script>
import HomeMain from "@/components/HomeMain";
import AboutMain from "@/components/AboutMain";

export default {

  data() {
    return {
      show:false
    }
  },
  components: {HomeMain, AboutMain }
}
</script>

<style scoped>
.btn-show{
  font-size: 36px;
  display: block;
  margin: auto;
}
</style>

