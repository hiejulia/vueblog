<template>
  <div class="tag-list">
    <a v-for="(tag, index) in tags" href="#" class="label label-pill label-default">{{tag}}</a>
  </div>
</template>





<script>
export default {
  name: 'RealWorldTagList',
  props: ['tags']
};
</script>



<style scoped>

</style>