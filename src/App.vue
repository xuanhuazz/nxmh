<template>
  <div >
    <Header/>
    <Body />
    <Footer />
  </div>
</template>


<script>
import Header from './components/Header.vue'
import Body from './components/Body.vue'
import Footer from './components/Footer.vue'
export default {
  name: 'App',
  components: {
    Header,
    Body,
    Footer
  }
}
</script>

<style>
 *{
   margin: 0;
   padding: 0 5px;
   list-style: none;
   text-decoration:none
}
body {
   background-color: rgb(240,240,240);
}
</style>
