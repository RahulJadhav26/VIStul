<template>
<div >
  <!-- Header -->
  <app-header></app-header>

  <div class="container content">

  <!-- Search engine -->

      <h2 class="content" style="margin-top:1%;">Search your products</h2>
      <div class="input-group md-form form-sm form-2 pl-0">
      <input v-model="query" @keydown.enter="getFilteredData()" class="form-control my-0 py-1 lime-border" type="text" placeholder="Search" aria-label="Search">
      <div class="input-group-append">
        <span class="input-group-text lime lighten-2" id="basic-text1">
          <mdbIcon icon="search"/>
        </span>
      </div>
    </div>

  <!-- Checkboxes -->
  <mdb-row>
      <mdb-col col="md">
        <div id="checkboxes">
        <h5>Market place</h5> <span v-for="(stack,index) in stacks" :key="index" class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox"  v-model="stack.checked" v-on:change="getFilteredData()">
            <label class="form-check-label">
            {{ stack.value }}
            </label>
          </span>
        </div>
      </mdb-col>
      <mdb-col col="md">
        <div id="checkboxes">
        <h5>Category</h5><span v-for="(stack,index) in stacks1" :key="index" class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox"  v-model="stack.checked" v-on:change="getFilteredData()">
            <label class="form-check-label">
            {{ stack.value }}
            </label>
          </span>
        </div>
      </mdb-col>

    </mdb-row>

    <!-- Spinner -->

    <div v-if="isBusy" class="spinner-grow text-info" style="width: 4rem; height: 4rem;" role="status">
      <span class="text">Loading...</span>
    </div>
    <div style="margin : 10%" v-if="isfail">
      <h6> Sorry no results Found...!!</h6>
    </div>

    <!-- iterate data -->

      <mdb-row>
    <mdb-col v-if="show" class="scrollbar scrollbar-primary">
      <div class="force-overflow">
        <b-table class= "table1"  v-if="show" :items="this.filteredData" :fields="fields" striped responsive="sm">
      <template v-slot:cell(show_details)="row">
        <button  size="sm" @click="row.toggleDetails"  class="mr-2 button">
          {{ row.detailsShowing ? 'Hide' : 'Show'}} Details
        </button>

        <!-- As `row.showDetails` is one-way, we call the toggleDetails function on @change -->
        <!-- <b-form-checkbox v-model="row.detailsShowing" @change="row.toggleDetails">
          Details via check
        </b-form-checkbox> -->
      </template>

      <template v-slot:row-details="row">
        <b-card class="animated fadeInDown">
          <b-row>
            <b-col md ="4"><img class="img-thumbnail zoom imageCard" style="" :src="row.item.image" alt="Not found"></b-col>
          <b-col>
            <b-row  class="text-sm-right"><b>Product Code:</b>
               <b-col class="text-sm-left">{{ row.item.code }}</b-col>
            </b-row>
            <b-row  class="text-sm-right"><b>Brand Name:</b>
              <b-col class="text-sm-left">{{ row.item.brand.toUpperCase() }}</b-col>
            </b-row>
            <b-row class="text-sm-right"><b>Price:</b>
             <b-col class="text-sm-left">₹ {{ row.item.price[row.item.price.length - 1] }}</b-col>
            </b-row>
          </b-col>
          </b-row>
          <!-- <b-row class="mb-2">
            <b-col sm="3" class="text-sm-right"><b>Availabilty:</b></b-col>
            <b-col  class="text-sm-left">{{row.item.availability}}</b-col>
          </b-row> -->

          <button class="button" size="sm" @click="row.toggleDetails">Hide Details</button>
          <router-link :to="{ name:'userMatch', params:{code:row.item.code}}"> <button  class="button" size="sm" @click="row.toggleDetails">Match Results</button></router-link>
        </b-card>
      </template>
    </b-table>
      </div>
    </mdb-col>
  </mdb-row>

  </div>
  </div>
</template>

<script>

import { mdbIcon, mdbBtn, mdbInput, mdbScrollbar, mdbRow, mdbCol, mdbCard, mdbCardBody, mdbCardTitle, mdbCardText, mdbCardGroup, mdbCardFooter } from 'mdbvue'

import HeaderVue from '../components/Header.vue'

export default {
  components: {
    mdbIcon,
    mdbBtn,
    appHeader: HeaderVue,
    mdbCard,
    mdbCardBody,
    mdbCardGroup,
    mdbCardTitle,
    mdbCardText,
    mdbCardFooter,
    mdbInput,
    mdbScrollbar,
    mdbRow,
    mdbCol

  },
  data () {
    return {
      filteredData: [],
      query: '',
      fields: [
        {label: 'TITLE', key: 'title'},
        {label: 'MARKET-PLACE', key: 'seller'},
        {key: 'show_details'}],
      stacks: [
        {
          checked: false,
          value: 'Amazon'
        },
        {
          checked: false,
          value: 'Flipkart'
        },
        {
          checked: false,
          value: 'Limeroad'
        },
        {
          checked: false,
          value: 'Ajio'
        }
      ],
      stacks1: [
        {
          checked: false,
          value: 'Footwear'
        },
        {
          checked: false,
          value: 'Topwear'
        },
        {
          checked: false,
          value: 'Bottomwear'
        },
        {
          checked: false,
          value: 'Accessories'
        }
      ],
      products: [],
      show: false,
      isBusy: false,
      isfail: false,
      flag: false

    }
  },
  filters: {
    // this filter will can be used to capitalize a word
    capitalize: item => {
      return item.toUpperCase()
    }
  },
  computed: {
    selectedFiltersBySeller () {
      let filters = []
      let checkedFilters = this.stacks.filter(obj => obj.checked)
      checkedFilters.forEach(element => {
        filters.push(element.value)
      })
      return (filters)
    },
    selectedFiltersByCategory () {
      let filters1 = []
      let checkedFilters = this.stacks1.filter(obj => obj.checked)
      checkedFilters.forEach(element => {
        filters1.push(element.value)
      })
      console.log(filters1)
      return (filters1)
    },
    checkQuery () {
      return this.query
    },
    filterQuery: function () {
      console.log('called')
      return this.filteredData.filter((product) => {
        return product.title.toLowerCase().match(this.query.toLowerCase())
      })
    }

  },
  methods: {

    getFilteredData () {
      // console.log(this.products[0]);
      // this.checkQuery;
      this.isfail = false
      this.isBusy = true
      this.$http.get('https://ecommerce-project-76925.firebaseio.com/1.json')
        .then(response => {
          return response.json()
        })
        .then(function (data) {
          var allProducts = data.products
          // console.log(allProducts);
          var temporaryFilteredData = []
          for (var element in allProducts) {
            data.products[element].code = element
            temporaryFilteredData.push(data.products[element])
          }
          this.products = temporaryFilteredData
          this.filteredData = temporaryFilteredData
          console.log('data Recieved')
          console.log(this.filteredData)

          let filteredDataByfiltersSellers = []
          let filteredDataByfiltersCategory = []

          let f = this.selectedFiltersBySeller
          console.log('filters')
          console.log(f)
          let f1 = this.selectedFiltersByCategory

          // Products Sorted by Filters

          if (this.selectedFiltersBySeller.length > 0) {
            console.log('Selected seller')
            var tempFilterDataByFilters = []
            for (var i in this.filteredData) {
              for (var index in f) {
                // eslint-disable-next-line eqeqeq
                if (this.filteredData[i].seller.toUpperCase() == f[index].toUpperCase()) {
                  // console.log(this.filteredData[i].category);

                  tempFilterDataByFilters.push(this.filteredData[i])
                  // console.log(tempFilterDataByFilters);
                }
              }
            }
            filteredDataByfiltersSellers = tempFilterDataByFilters
            this.filteredData = filteredDataByfiltersSellers
            this.show = true
            console.log(this.filteredData)
          }
          if (this.selectedFiltersByCategory.length > 0) {
            console.log('selected Cat')
            // eslint-disable-next-line no-redeclare
            var tempFilterDataByFilters = []
            // eslint-disable-next-line no-redeclare
            for (var i in this.filteredData) {
              // eslint-disable-next-line no-redeclare
              for (var index in f1) {
                // eslint-disable-next-line eqeqeq
                if (this.filteredData[i].category.toUpperCase() == f1[index].toUpperCase()) {
                  tempFilterDataByFilters.push(this.filteredData[i])
                }
              }
            }
            filteredDataByfiltersCategory = tempFilterDataByFilters
            this.filteredData = filteredDataByfiltersCategory
            this.show = true
          }

          //  Products sorted by query
          if (this.query.length > 0) {
            console.log('queried')
            this.filteredData = this.filterQuery
            this.show = true
          }

          // if(this.query.length > 0 ){
          //   console.log("selected Query")
          //   this.filteredData.filter((obj) => {

          //      return obj.title.toLowerCase().match(this.query.toLowerCase());
          //      });
          //   this.show = true;
          // }

          // eslint-disable-next-line eqeqeq
          if (filteredDataByfiltersSellers.length == 0 && filteredDataByfiltersCategory.length == 0 && this.query.length == 0) {
            console.log('no results')
            this.show = false
            this.isfail = false
            this.isBusy = false
          }
          this.isBusy = false
        })
    }
  }

}

</script>

<style>
.content{
  color:#404040 ;
  font-family:Optima, sans-serif;
  font-weight: 600;
}

  .input-group.md-form.form-sm.form-2 input.lime-border  {
      border: 1px solid #404040;
  }

  .search-btn{
    background-color:#004d40 !important ;

  }
  .table1{
    margin-top:20px;
    border-radius:1.25rem !important;
    border:5px solid #404040;
    font-family:  Optima, sans-serif;
    background-color: rgb(230, 241, 248);
  }
  .table th{
    font-size: 1.2em;
     font-weight: 500 !important;
  }
  .table td{

    font-size: 1.2em;
  }
  .button{
    background-color:#404040 !important;
    border: none;
    color: white !important;
    padding: 10px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    /* border-radius:px; */
    border-top-left-radius: 10px!important;

}
.imageCard{
  width: 250px;
  height:200px;
  justify-content: center;
  display: flex;
  border-radius:1.5rem;
}
.force-overflow {
    min-height: 450px;
  }

  .scrollbar {
    float: left;
    height: 470px;
    width: 1200px;
    background: #fff;
    overflow-y: scroll;
    margin-bottom: 25px;
  }

  .scrollbar-primary::-webkit-scrollbar {
    width: 12px;
    background-color: rgb(230, 241, 248);
  }

  .scrollbar-primary::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
    background-color: #404040;
  }
</style>
