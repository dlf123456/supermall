<template>
  <ul class="content">
    
  </ul>
</template>
 <script>
 import BScroll from 'better-scroll'
 export default {
   name: "Category",
   created() {
     new BScroll('.content',{

     })
   }
 }
 </script>

 <style scoped>
 
 </style>