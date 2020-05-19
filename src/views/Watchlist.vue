<template>
    <div id= "WatchList">
        <appHeader></appHeader>
        <br>
        <div class="container">
          <h1 class="highlight">WatchList</h1>
    <b-table class="content" style="height:40%" :items="obj" :fields="fields" striped bordered responsive="sm">
      <template v-slot:cell(show_details)="row">
        <button  size="sm" @click="row.toggleDetails" class="mr-2 button content" style="margin-top:2px">
          {{ row.detailsShowing ? 'Hide' : 'Show'}} Details
        </button>
        <router-link :to="{ name:'userMatch', params:{code:row.item.queryCode}}"> <button  class="button content" size="sm" @click="row.toggleDetails">Match Results</button></router-link>

        <!-- As `row.showDetails` is one-way, we call the toggleDetails function on @change -->

      </template>

      <template v-slot:row-details="row">
        <b-card >
        <div class="content" v-for="i in row.item.matchItems">
          <b-row style=" height:30%;width:100%;margin-bottom:1.2rem; border: 1px solid black; border-radius:1.25rem">
            <b-col sm="2" class="sm-text-right"><b>Matched Marketplace:</b></b-col>
            <b-col sm="2" class="sm-text-left">{{i.seller.toUpperCase()}}</b-col>
            <b-col sm="2" class="sm-text-right"><b>Matched Item:</b></b-col>
            <b-col sm="2" class="sm-text-left"><a :href="i.url">{{i.title}}</a></b-col>
            <b-col sm="2" class="sm-text-right"><b>Price:</b></b-col>
            <b-col sm="2" class="sm-text-left">{{i.price[i.price.length - 1 ]}}</b-col>
          </b-row>
          </div>
           <router-link :to="{ name:'userMatch', params:{code:row.item.queryCode}}"> <button  class="button" size="sm" @click="row.toggleDetails">Match Results</button></router-link>
          <b-button class="button" size="sm" @click="row.toggleDetails">Hide Details</b-button>
        </b-card>
      </template>
    </b-table>
  </div>

    </div>
</template>
<script>
import HeaderVue from '../components/Header.vue'
export default {
  name: 'WatchList',
  components: {
    appHeader: HeaderVue
  },
  computed: {
    obj () {
      return this.$store.state.obj
    }
  },
  data () {
    return {
      fields: [
        {label: 'PRODUCT CODE', key: 'queryCode'},
        {label: 'MARKET-PLACE', key: 'queryLabel'},
        {label: 'TITLE', key: 'queryTitle'},
        {label: 'PRICE', key: 'queryPrice'},
        {key: 'show_details'}]
    }
  }

}
</script>
<style scoped>
.highlight{
  font-weight: 700!important;
  color:#404040 ;
  font-family:Optima, sans-serif;
}
.content{
  color:#032539;
  font-family:Optima, sans-serif;
  font-weight: 600;
  font-size:1rem !important;
}
.button{
    background-color:#404040 !important;
    border: none;
    color: #fbf3fb;
    padding: 10px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    border-top-left-radius: 10px;
    border-bottom-right-radius: 10px;
}
.table td, .table th {
    font-size: 0.9em!important;
}
</style>
