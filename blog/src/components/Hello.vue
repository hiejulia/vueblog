<template>
  <div class="hello">
    <h1>{{msg1}}</h1>
   
    <div>
      <p v-for="story in stories ">
      {{index}}- {{story.plot}} - {{story.writer}} - {{story.upvotes}}</p><br>
    </div>
  
  </div>
</template>

<script>
/*eslint-disable */
export default {
  name: 'hello',
  data () {
    return {
      msg1: 'Hello world'
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>

