<template>
  <div>
      <img src="https://vuejs.org/images/logo.png" alt="Vue logo">
    <h1>{{ greeting }}</h1>
    <ul>
      <li>
        To learn more about Vue, visit
        <a :href="docsURL" target="_blank">
          {{ gotolink(docsURL) }}
        </a>
      </li>
      <li>
        For live help with simple questions, check out
        <a :href="gitterURL" target="_blank">
          the Gitter chat
        </a>
      </li>
      <li>
        For more complex questions, post to
        <a :href="forumURL" target="_blank">
          the forum
        </a>
      </li>
    </ul>
   </div>
</template>

<script>

  export default {
   data() {
       return {
           greeting: 'Welcome to your Vue.js app!',
        docsURL: 'http://vuejs.org/guide/',
        gitterURL: 'https://gitter.im/vuejs/vue',
        forumURL: 'http://forum.vuejs.org/'


       }
   },
   methods: {
       gotolink(url) {
           return url.replace(/^https?:\/\//, '')
            .replace(/\/$/, '')
       }
   }

  }
  
</script>

<style scoped>
</style>