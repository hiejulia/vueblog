<template>
  <div class="toast">
    <div class="info">
      <p>{{toast.info}}</p>
      <div class="panel">
        <button @click="toast.toastResolve"
                class="confirm">确定
        </button>
        <button @click="toast.toastReject"
                class="cancel"
                v-if="toast.btnNum===2">取消
        </button>
      </div>
    </div>
  </div>
</template>



<script>
  import {mapState} from 'vuex'
  export default{
    computed: mapState(['toast'])
  }
</script>
<style lang="sass" rel="stylesheet/scss" scoped>

</style>
