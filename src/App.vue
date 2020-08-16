<template>
  <div id="app">
    <transition name='slide' mode="out-in">
      <router-view/>
    </transition>

  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap');
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}
.slide-enter-active{
animation: slide-in 200ms ease-out forwards;
}
.slide-enter-leave{
animation: slide-out 200ms ease-out forwards;
}
@keyframes slide-in {
    from{
        transform: translateY(-30px);
        opacity:0;
    }
    to{
        transform: translateY(0);
        opacity: 1;
    }
}
@keyframes slide-out {
    from{
        transform:translateY(0);
        opacity: 1;
    }
    to{
        transform:translateY(-30px);
        opacity:0;
    }
}
</style>
