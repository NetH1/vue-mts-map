<template>
<div>
    <NavbarHead />
    <FirstC />
    <SecoundC />
    <ThirdC />
    <FooterP />
</div>
</template>
<script>
import NavbarHead from "./HomeC/NavbarHead.vue";
import FirstC from "./HomeC/FirstC.vue";
import SecoundC from "./HomeC/SecoundC.vue";
import ThirdC from "./HomeC/ThirdC.vue";
import FooterP from "./HomeC/FooterP.vue";

export default {

  data() {
    return {

    }
  },
  components: { NavbarHead,FirstC,SecoundC,ThirdC,FooterP }
}
</script>