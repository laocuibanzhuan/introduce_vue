<template>
  <header class="header scroll-header">
    <Nav></Nav>
  </header>
  <main class="main">
    <Home></Home>
    <About></About>
    <Qualification></Qualification>
    <Skills></Skills>
    <Portfolio></Portfolio>
    <Contact></Contact>
  </main>
  <Footer></Footer>
</template>

<script>
import Nav from '@/components/Nav.vue'
import Home from './components/Home.vue';
import About from '@/components/About.vue';
import Qualification from './components/Qualification.vue';
import Skills from './components/Skills.vue';
import Portfolio from './components/Portfolio.vue';
import Contact from './components/Contact.vue';
import Footer from './components/Footer.vue'
export default {
  name: 'App',
  components: {
    Nav,
    Home,
    About,
    Qualification,
    Skills,
    Portfolio,
    Contact,
    Footer
  }
}
</script>


<style lang="scss">
//导入全局样式
//不需要添加文件后缀，sass会自动补全
@import '@/style/app';
</style>
