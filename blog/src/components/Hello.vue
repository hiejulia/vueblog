
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
      msg1: 'Hello world',
      stories: [
            {
                plot: "I crashed my car today!",
                writer: "Alex",
                upvotes:1
            },
            {
                plot: "Yesterday, someone stole my bag!",
                writer: "John",
                upvotes:4
            },
            {
                plot: "Someone ate my chocolate...",
                writer: "John",
                upvotes:2
            },
            {
                plot: "I ate someone's chocolate!",
                writer: "Alex",
                upvotes:10
            },
        ]
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

