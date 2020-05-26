<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <el-button @click="test">123123</el-button>
  </div>
</template>

<script>
import { login } from '@/api/user'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods:{
   async test(){
      let res = await login({username:'admin',password:'admin'})
      console.log(res)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
