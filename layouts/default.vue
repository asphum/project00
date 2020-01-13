<template>
  <div>
    <div class="bgmenu"><div class="container-large"><Menu /></div></div>
    <div class="container p-3"><nuxt /></div>
    <div class="bgmenu"><div class="container-large"><Foot /></div></div>
  </div>
</template>
<script>
import Menu from '~/components/Menu.vue'
import Foot from '~/components/Foot.vue'

export default {
  components: {
    Menu,
    Foot
  }
}
</script>

