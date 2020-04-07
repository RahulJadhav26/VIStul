<template>
        <div id="main" style="background-color:dusty-grass-gradient;">
        <app-header></app-header>
            <br>
        <app-Table></app-Table>

        </div>

</template>

<script>
import HeaderVue from '../components/Header'
import TableVue from '../components/Table'

export default {
  name: 'Dashboard',
  components: {
    appHeader: HeaderVue,
    appTable: TableVue

  }
}
</script>
<style scoped>
table.table a{
    color:#404040 !important;
  }
table.table a:hover{
    color:yellow !important;
}
</style>
