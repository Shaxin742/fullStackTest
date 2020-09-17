<template>  
  <div class="container">    
    <div class="container-top" style="background-image:url('/images/404.png')" />    
    <div class="container-bottom">      
      <p>404</p>      
      <nuxt-link to="/">        
        <el-button type="primary">
          返回首页
        </el-button>     
      </nuxt-link>    
    </div>  
  </div>
</template>
<script>
export default {  
    props: ['error'],  
    layout: 'blog', // 你可以为错误页面指定自定义的布局  
    head () {    
        return {      
            title: '404'    
        }  
    }
}
</script>
