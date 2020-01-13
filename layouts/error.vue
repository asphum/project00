<template>
  <div class="container text-center">
    <h1 class="p-5" v-if="error.statusCode === 404">
      ไม่พบหน้า!
    </h1>
    <h1 class="p-5" style="color:red" v-else>
      เกิดข้อผิดพลาด!
    </h1>
    <NLink class="wlink" to="/"><h2>กลับหน้าแรก</h2></NLink>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: null
    }
  }
}
</script>
<style scoped>
.wlink {
  text-decoration: none;
  color: #222;
}
.wlink:hover {
  color: #999;
}
.wlink h2 {
    display: inline;
}
</style>