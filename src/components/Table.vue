<template>
    <div >
    <div class="container">
         <h1 class="highlight">Matching products in market</h1>
            <mdb-input @keyup.enter.native="search()" label="Search your results" v-model="h" />
            <mdb-btn   class="button "  @click="search()">Results</mdb-btn>
            <mdb-btn style="background-color:red !important;" class="button"  @click="onReset()">Reset</mdb-btn>
            <button class="button" v-if="show" @click="WatchList()"><mdb-icon v-if ="status" far icon="check-circle" /> {{watchStatus}} to Watchlist</button>
    <br>
    <br>
    <div>
  <mdb-container>
    <div v-if="isBusy" class="spinner-grow" style="margin: 0 auto; width: 4rem; height: 4rem;" role="status">
      <span class="text">Loading...</span>
    </div>
    <div v-if="fail">
     <h4 class="content">Sorry no results Found...!!</h4>
    </div>
    <mdb-row>
<mdb-col sm="6" md="3"  >
  <mdb-card style="border: 5px solid yellow !important ;" v-model="priceCheck" sm="6" md="3" lg="12" class=" animated flipInY img-fluid z-depth-1 mb-3 matchCard" v-if="show">
  <mdb-view hover cascade class="zoom img-thumbnail image-view">
    <a href="#!">
      <mdb-card-image  style=" width: 250px; height:300px" :src="queryProduct[0].image" alt="Card image cap" ></mdb-card-image>
      <mdb-mask flex-center waves overlay="white-slight"></mdb-mask>
    </a>
  </mdb-view>
  <mdb-card-body  class=" content matchCard-body text-center pb-0" cascade>
    <mdb-card-title  class ="headfoot" ><strong>CLIENT: {{queryProduct[0].seller.toUpperCase()}}</strong></mdb-card-title>
    <h6  style=" width: 100%; height:30%; "><strong><span >TITLE: </span><a class="content" :href="queryProduct[0].url">{{queryProduct[0].title}}</a></strong></h6>
    <h6 class="animated tada infinite"><strong><span  >PRICE: </span></strong> ₹ {{queryProduct[0].price[queryProduct[0].price.length - 1].toLocaleString()}}  <span style="color: red">({{priceStatus}})</span></h6>
    <h6 class="animated flash infinite"><a class="suggestions"  href="#price">Click Me for Suggestions</a></h6>
    <mdb-card-footer class="headfoot" >Updated on {{date}}</mdb-card-footer>
  </mdb-card-body>
</mdb-card>

</mdb-col>
      <mdb-col v-for="i in items.slice(0,3)" sm="6" md="3" >

    <mdb-card md="3" sm="6" lg="12" class=" animated flipInY img-fluid z-depth-1 mb-3 matchCard"   v-if="show" dark>
  <mdb-view hover cascade class="zoom img-thumbnail image-view">
    <a href="#!">
      <mdb-card-image  style=" width: 250px; height:300px" :src="i.image" alt="Card image cap" ></mdb-card-image>
      <mdb-mask flex-center waves overlay="white-slight"></mdb-mask>
    </a>
  </mdb-view>
  <mdb-card-body  class="matchCard-body text-center pb-0" cascade>
    <mdb-card-title class="headfoot"><strong>{{i.seller.toUpperCase()}}</strong></mdb-card-title>
    <h6 style=" width: 100%; height:30%; "><strong><span class="content">TITLE: </span><a class="content" :href="i.url">{{i.title}}</a></strong></h6>
    <h6 style=" width: 100%; height:30%;"><strong><span class="content">PRICE: </span></strong><h4>₹ {{i.price[i.price.length - 1].toLocaleString()}}</h4> </h6>
    <mdb-card-footer class="headfoot" >Updated on {{date}}</mdb-card-footer>
  </mdb-card-body>
</mdb-card>

    <br>
    </mdb-col>

</mdb-row>
</mdb-container>
</div>
<hr v-if="show">
<div v-if="show" class="container">
  <mdb-row >
    <mdb-col sm='6' md='3'>
        <b-card   md='3'
        border-variant="warning"
        header="Reviews"
        header-bg-variant="transparent"
        align="center"
      >
        <b-card-text><h5>Limeroad</h5><mdb-rating v-model="basicRating"/></b-card-text>
      </b-card>
    </mdb-col>
    <mdb-col sm='6' md='3'>
        <b-card   md='3'
        border-variant="warning"
        header="Reviews"
        header-bg-variant="transparent"
        align="center"
      >
        <b-card-text><h5>Amazon</h5><mdb-rating v-model="basicRating1"/></b-card-text>
      </b-card>
    </mdb-col>
    <mdb-col  sm='6' md='3'>
        <b-card   md='3'
        border-variant="warning"
        header="Reviews"
        header-bg-variant="transparent"
        align="center"
      >
        <b-card-text><h5>Flipkart</h5><mdb-rating v-model="basicRating2"/></b-card-text>
      </b-card>
    </mdb-col>
    <mdb-col sm='6' md='3'>
        <b-card  md='3'
        border-variant="warning"
        header="Reviews"
        header-bg-variant="transparent"
        align="center"
      >
        <b-card-text><h5>Ajio</h5><mdb-rating v-model="basicRating3"/></b-card-text>
      </b-card>
    </mdb-col>
  </mdb-row>
</div>
<hr v-if="show">
<br>
</div>
<div class="container" >
  <mdb-row>
  <mdb-col sm= '12' md = "8" >
      <mdb-card  id="price"  v-if="show"  style=" display: flex; border-radius:0.9rem;" class=" text-center">
        <mdb-card-header class="AnalysisCard-header"><mdb-icon icon="chart-area" /> Dynamic Pricing </mdb-card-header>
        <mdb-card-body class= "content AnalysisCard-body">
             <div id="chart">
        <apexchart type="line" height="300" :options="chartOptions" :series="series"></apexchart>
      </div>
              <mdb-card-title ><h2 class="highlight">₹ {{Math.ceil(bestPrice).toLocaleString()}}</h2> </mdb-card-title>
             <mdb-card-text class="content"><span >Suggested price: </span> </mdb-card-text>
        </mdb-card-body >
        <mdb-card-footer class="AnalysisCard-footer">Last Update {{date}}</mdb-card-footer>
      </mdb-card>
    </mdb-col>
    <br>
    <br>
    <mdb-col sm ="12" md="4">
      <mdb-card v-model="calculateDiscount" v-if="show" style="display: flex; border-radius:0.9rem;" class=" text-center">
        <mdb-card-header class="AnalysisCard-header" >Discounts</mdb-card-header>
        <mdb-card-body class="content AnalysisCard-body">
          <div id="chart">
             <apexchart   type="pie" width="350" height='355' :options="piechartOptions" :series="pieseries"></apexchart>
          </div>
          <mdb-card-title><h2 class="highlight">{{Math.ceil(bestDiscount).toLocaleString()}} %</h2></mdb-card-title>
          <mdb-card-text ><span >Optimal discount rate </span> </mdb-card-text>
        </mdb-card-body >
        <mdb-card-footer class="AnalysisCard-footer" >Last Update {{date}}</mdb-card-footer>
      </mdb-card>
    </mdb-col>
</mdb-row>
<br>
  <mdb-row>
  <mdb-col sm ="12" md = "12" >
      <mdb-card id="price"  v-if="show"  style=" display: flex;  border-radius:0.9rem;" class=" text-center">
        <mdb-card-header class="AnalysisCard-header"><mdb-icon icon="chart-area" /> Listing Price and Category Count </mdb-card-header>
        <mdb-card-body class= " AnalysisCard-body">
         <mdb-row>
           <mdb-col sm="7" md="7">
              <div id="chart">
                <apexchart type="bar" height="430" :options="doughchartOptions" :series="doughseries"></apexchart>
              </div>
           </mdb-col>
           <mdb-col sm="5" md="5">
             <div>
              <b-table  style="font-size:15px; border:3px solid #404040; margin-top:20%; margin-right:10%;" bordered  hover :items="list" :fields="lfields"></b-table>
            </div>
           </mdb-col>
         </mdb-row>
        </mdb-card-body >
        <mdb-card-footer class="AnalysisCard-footer">Last Update {{date}}</mdb-card-footer>
      </mdb-card>
    </mdb-col>
    <br>
    <!-- <mdb-col sm ="12" md="4">
      <mdb-card v-if="show" style="display: flex;height:39rem; width: 30rem; border-radius:0.9rem;" class=" text-center">
        <mdb-card-header class="AnalysisCard-header" >Ratings</mdb-card-header>
        <mdb-card-body class="content AnalysisCard-body">
          <mdb-card-title>Reviews</mdb-card-title>
          <mdb-card-text >
            <br>
            <h5>Amazon</h5>
            <mdb-rating v-model="basicRating"/>
                        <br>
            <h5>Flipkart</h5>
            <mdb-rating v-model="basicRating1"/>
                        <br>
            <h5>Ajio</h5>
            <mdb-rating v-model="basicRating2"/>
                        <br>
            <h5>Limeroad</h5>
            <mdb-rating v-model="basicRating3"/>
            </mdb-card-text>

        </mdb-card-body >
        <mdb-card-footer class="AnalysisCard-footer" >Last Update {{date}}</mdb-card-footer>
      </mdb-card>
    </mdb-col> -->
</mdb-row>
</div>

    <br>
    <br>
    <div class="container">
       <mdb-datatable md='6' sm='6' v-if="show"
          :data="data"
          striped
          bordered
          scrollY
          maxHeight="400px"
          responsive
          class="content"
        />
        <br>
    </div>

  </div>
</template>

<script>
import {mdbDatatable, mdbInput, mdbBtn, mdbCard, mdbView, mdbMask, mdbIcon, mdbRating, mdbCardImage, mdbCardHeader, mdbCardTitle, mdbCardText, mdbCardFooter, mdbCardBody, mdbLineChart, mdbContainer, mdbRow, mdbCol, mdbRadarChart, animateOnScroll, mdbToastNotification, mdbPieChart, mdbDoughnutChart} from 'mdbvue'

export default {
  name: 'Table',
  watch: {
    $route (to, from) {
      this.h = to.params.code
    }
  },
  components: {
    mdbDatatable,
    mdbInput,
    mdbBtn,
    mdbCard,
    mdbView,
    mdbMask,
    mdbCardImage,
    mdbCardTitle,
    mdbCardHeader,
    mdbCardText,
    mdbCardFooter,
    mdbCardBody,
    mdbLineChart,
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbIcon,
    mdbRadarChart,
    mdbToastNotification,
    mdbPieChart,
    mdbDoughnutChart,
    mdbRating

  },
  directives: {
    animateOnScroll
  },
  data () {
    return {
      // FINAL LINE Graph////////////////////////////////////
      series: [],
      chartOptions: {
        chart: {
          height: 350,
          type: 'line',
          zoom: {
            enabled: false
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'straight'
        },
        title: {
          text: 'Product Pricing trend ',
          align: 'left'
        },
        grid: {
          row: {
            colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.5
          }
        },
        xaxis: {
          categories: []
        },
        markers: {
          shape: 'circle',
          fillOpacity: 1,
          size: 5
        }
      },

      /// ////////////
      // Reviews //
      basicRating: 5,
      basicRating1: 4,
      basicRating2: 4,
      basicRating3: 3,
      // //
      // WatchList variables////
      status: false,
      watchStatus: 'Add',
      // ////////////
      /// //////////////// PIE Graph  /////////////////
      pieseries: [],
      piechartOptions: {
        chart: {
          width: 380,
          type: 'pie'
        },
        legend: {
          position: 'bottom',
          horizontalAlign: 'center'
        },
        labels: [],
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            }
          }
        }]
      },

      /// ///////////// Line Graph///////////////////////

      lineChartData: {
        labels: [
          'Day1',
          'Day2',
          'Day3',
          'Day4',
          'Day5'
        ],
        datasets: [
        ]
      },
      lineChartOptions: {
        responsive: true,
        maintainAspectRatio: true,
        scales: {
          xAxes: [
            {
              gridLines: {
                display: true,
                color: 'rgba(0, 0, 0, 0.1)'
              }
            }
          ],
          yAxes: [
            {
              gridLines: {
                display: true,
                color: 'rgba(0, 0, 0, 0.1)'
              }
            }
          ]
        }
      },

      /// ///////////////BAR Graph /////////////////////
      doughnutChartData: {
        labels: [],
        datasets: [
          {
            data: [],
            backgroundColor: [
              'rgb(255,0,0,0.6)',
              'rgb(255,240,0.6)',
              'rgb(0,0,255,0.6)',
              'rgb(0,255,0,0.6)'
            ],
            hoverBackgroundColor: [
              'rgb(255,0,0)',
              'rgb(255,240,0)',
              'rgb(0,0,255)',
              'rgb(0,255,0)'
            ]
          }
        ]
      },
      doughnutChartOptions: {
        responsive: true,
        maintainAspectRatio: true
      },
      doughseries: [{
        data1: [44, 55, 41, 64, 22, 43, 21]
      }, {
        data2: [53, 32, 33, 52, 13, 44, 32]
      }],
      doughchartOptions: {
        chart: {
          type: 'bar',
          height: 430
        },
        plotOptions: {
          bar: {
            horizontal: true,
            dataLabels: {
              position: 'top'
            }
          }
        },
        dataLabels: {
          enabled: true,
          offsetX: -6,
          style: {
            fontSize: '12px',
            colors: ['#343a40']
          }
        },
        stroke: {
          show: true,
          width: 1,
          colors: ['#fff']
        },
        xaxis: {
          categories: []
        },
        yaxis: {
          labels: {
            style: {
              fontSize: '12px',
              fontWeight: '800',
              colors: ['#007bff', '#20c997', '#ffc107', '#e83e8c']
            }
          }
        },
        colors: ['#6F42C7', '#fd7e14'],
        legend: {
          formatter: function (seriesName, opts) {
            if (opts.seriesIndex) {
              seriesName = 'Listing Price'
              return seriesName
            } else {
              seriesName = 'Category Count'
              return seriesName
            }
          }
        }

      },

      /// ///////////////////////////////////////////////////////////////

      mainProps: { width: 120, height: 80 },
      matchItems: [],
      data: {
        columns: [
          {field: 'image', label: 'Product Image', sort: 'asc', format: value => "<img class='img-thumbnail zoom' style=' width:40%!important; height:50% !important; justify-content:center;display: flex;' src='" + value + "' alt = 'Not found'>"},
          {field: 'title', label: 'Matched Product', sort: 'asc'},
          {field: 'mrp', label: 'MRP', sort: 'asc', format: value => '₹' + String(value).toLocaleString()},
          {field: 'price', label: 'Listed Price', sort: 'asc', format: value => '₹' + value[value.length - 1].toLocaleString()},
          {field: 'brand', label: 'Brand', sort: 'asc'},
          {field: 'seller', label: 'MarketPlace', sort: 'asc'},
          {field: 'discount', label: 'Discount', sort: 'asc'},
          {field: 'url', label: 'Go to Link', sort: 'asc', format: value => "<a class='change' href='" + value + "'>Click to Visit Seller</a>"}
        ],
        rows: []
      },
      items: [],
      h: this.$route.params.code,
      show: false,
      isBusy: false,
      fail: false,
      queryProduct: [],
      columns: [],
      date: '',
      bestPrice: '',
      bestDiscount: '',
      count: 0,
      priceStatus: '',
      watchList: [],
      categories: [],
      list: [],
      lfields: [{key: 'label', label: 'Market Place'},
        {key: 'catCount', label: 'Number of products in the category'},
        {key: 'catPrice', label: 'Avg Listing Price'}]
    }
  },
  computed: {
    priceCheck () {
      // eslint-disable-next-line standard/computed-property-even-spacing
      if (Number(this.queryProduct[0].price[this.queryProduct[0].price.length - 1 ]) > this.calculatePrice()) {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.priceStatus = 'Overpriced'
      } else if (Number(this.queryProduct[0].price[this.queryProduct[0].price.length - 1]) < this.calculatePrice()) {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.priceStatus = 'Underpriced'
      } else {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.priceStatus = 'At Best Price'
      }
      return this.priceStatus
    },
    calculateDiscount () {
      var discount = 0
      var divisor = 0
      // eslint-disable-next-line no-unused-vars
      var queryProductPrice = this.queryProduct[0].discount
      for (var i in this.items.slice(0, 3)) {
        if (this.items[i].seller == 'amazon') {
          this.items[i].discount = Math.abs(Number(this.items[i].discount) - 100)
          discount = discount + Number(this.items[i].discount)
          divisor = divisor + 1
        } else {
          discount = discount + Number(this.items[i].discount)
          divisor = divisor + 1
        }
      }
      var sp = discount / divisor
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      this.bestDiscount = sp
      return this.bestDiscount
    }

  },
  methods: {

    WatchList () {
      var check = false
      for (var i in this.$store.state.obj) {
        // eslint-disable-next-line eqeqeq
        if (this.$store.state.obj[i].queryCode == this.h) {
          // eslint-disable-next-line no-redeclare

          if (confirm('Already Watchlisted.Do you want to replace')) {
            check = true
            this.$store.state.obj[i].queryPrice = this.queryProduct[0].price[this.queryProduct[0].price.length - 1]
            this.$store.state.obj[i].queryLabel = this.queryProduct[0].seller
            this.$store.state.obj[i].queryTitle = this.queryProduct[0].title
            this.$store.state.obj[i].matchItems = this.items
            alert('Changes Made Successfully')
          } else {
            check = true
          }
        }
      }

      // eslint-disable-next-line eqeqeq
      if (this.status == false && check == false) {
        var obj = {
          queryCode: this.h,
          queryPrice: this.queryProduct[0].price[this.queryProduct[0].price.length - 1],
          queryLabel: this.queryProduct[0].seller,
          queryTitle: this.queryProduct[0].title,
          matchItems: this.items
        }

        console.log(obj)
        this.watchStatus = 'Added'
        this.status = true
        this.$store.state.obj.push(obj)
      }
    },

    calculatePrice () {
      var price = 0
      var divisor = 0

      console.log('function called')
      // eslint-disable-next-line no-unused-vars
      // eslint-disable-next-line standard/computed-property-even-spacing
      var queryProductPrice = this.queryProduct[0].price[this.queryProduct[0].price.length - 1 ]
      for (var i in this.items.slice(0, 3)) {
        // eslint-disable-next-line standard/computed-property-even-spacing
        price = price + Number(this.items[i].price[this.queryProduct[0].price.length - 1 ])
        divisor = divisor + 1
      }
      var sp = price / divisor
      this.bestPrice = sp
      return this.bestPrice
    },

    toggleBusy () {
      this.isBusy = !this.isBusy
    },
    onReset () {
      // evt.preventDefault()
      // this.h = '';
      this.series = []
      this.items = []
      this.data = {
        columns: [
          {field: 'image', label: 'Product Image', sort: 'asc', format: value => "<img class='img-thumbnail zoom' style=' width:40%!important; height:50% !important; justify-content:center;display: flex;' src='" + value + "' alt = 'Not found'>"},
          {field: 'title', label: 'Matched Product', sort: 'asc'},
          {field: 'mrp', label: 'MRP', sort: 'asc', format: value => '₹' + String(value).toLocaleString()},
          {field: 'price', label: 'Listed Price', sort: 'asc', format: value => '₹' + value[value.length - 1].toLocaleString()},
          {field: 'brand', label: 'Brand', sort: 'asc'},
          {field: 'seller', label: 'MarketPlace', sort: 'asc'},
          {field: 'discount', label: 'Discount', sort: 'asc'},
          {field: 'url', label: 'Go to Link', sort: 'asc', format: value => "<a class='change' href='" + value + "'>Click to Visit Seller</a>"}
        ],
        rows: []
      }
      this.matchItems = []
      this.queryProduct = []
      this.show = false
      this.lineChartData['datasets'] = []
      this.fail = false
      this.bestPrice = ''
      this.list = []
      this.doughseries[0].data1 = []
      this.doughseries[0].data2 = []
      this.doughchartOptions.xaxis.categories = []
      this.pieseries = []
      this.piechartOptions.labels = []
      this.lfields = [{key: 'label', label: 'Market Place'},
        {key: 'catCount', label: 'Number of products in the category'},
        {key: 'catPrice', label: 'Avg Listing Price'}]
    },
    search () {
      this.isBusy = true
      this.onReset()
      this.$http.get('https://ecommerce-project-76925.firebaseio.com/1.json')

        .then(response => {
          return response.json()
        })
        .then(function (data) {
          var value = ''
          // eslint-disable-next-line no-unused-vars
          var matches = []
          var match = ''
          var matchCodes = ''
          var productCode = ''
          var dates = data.date
          // eslint-disable-next-line standard/computed-property-even-spacing
          this.date = dates[dates.length - 1 ]
          var colorTable = ['info', 'success', 'warning', 'danger']
          console.log(this.date)
          // this.categories = data.categories;
          // console.log(this.categories);
          this.queryProduct.push(data.products[this.h])

          for (value in data.results) {
            // console.log(value);
            // eslint-disable-next-line eqeqeq
            if (value == this.h) {
              this.matchItems.push(data.results[value])
              console.log(this.matchItems[0])
            } else {
              // console.log("failed");

            }
          }
          matchCodes = this.matchItems[0]
          if (!matchCodes) {
            this.fail = true
            this.toggleBusy()
          }

          for (match in matchCodes) {
            productCode = matchCodes[match]
            console.log(productCode)
            if (productCode != null) {
              var product = data.products[productCode]
              console.log(product)
              this.items.push(product)

              this.data['rows'].push(product)
            }
          }
          /// ///////For loop for Doughnut Graph ///////////
          /// ///////////////////////////Listing Price CODE/////////////////////////////////////
          var obj = {}
          var category = this.queryProduct[0].category
          var queryName = this.queryProduct[0].seller
          var p = 0
          var c = 0
          var data1 = []
          var data2 = []
          var ob = []
          // console.log(obj);
          // console.log(this.categories[queryName][category]);
          for (var comp in this.items.slice(0, 3)) {
            var label = this.items[comp].seller
            var price = 0
            var count = 0

            for (var j in data.products) {
              // eslint-disable-next-line eqeqeq
              if (label.toLowerCase() == data.products[j].seller && category.toLowerCase() == data.products[j].category.toLowerCase()) {
                // eslint-disable-next-line no-redeclare
                var price = price + Number(data.products[j].price[data.products[j].price.length - 1])
                // console.log(price)
                count = count + 1
              }
            }

            var lprice = Math.ceil(price / count)
            // eslint-disable-next-line standard/object-curly-even-spacing
            obj[label] = {label: label.toUpperCase(), catCount: count, catPrice: lprice, _cellVariants: { label: colorTable[comp]}}
            console.log(obj[label])
          }

          for (var k in data.products) {
            // eslint-disable-next-line eqeqeq
            if (queryName == data.products[k].seller && category == data.products[k].category) {
              p = p + Number(data.products[k].price[data.products[k].price.length - 1])
              c = c + 1
            }
          }
          var qlprice = Math.ceil(p / c)
          obj[queryName] = {label: queryName.toUpperCase(), catCount: c, catPrice: qlprice, _cellVariants: {label: colorTable[3]}}
          for (var m in obj) {
            data1.push(obj[m].catCount)
            data2.push(obj[m].catPrice)
          }
          ob = [
            {data: data1},
            {data: data2}
          ]
          for (var i in obj) {
            this.list.push(obj[i])
            this.doughseries = ob
            this.doughchartOptions.xaxis.categories.push(obj[i].label)
          }
          this.listPrice = obj
          // console.log(this.doughnutChartData.datasets[0].data)
          // console.log(this.doughnutChartData.labels)

          /// ////////////////////////////////////////////////////////////////////////

          /// ///////////////////For Loop for line Graph////////////////////////
          // eslint-disable-next-line no-redeclare
          for (var i in this.items.slice(0, 3)) {
            var tempSeries = {
              name: this.items[i].seller.toUpperCase(),
              data: this.items[i].price
            }
            this.series.push(tempSeries)
          }
          this.chartOptions.xaxis.categories = dates
          /// ////////////////////End of logic for Line Graph/////////////////////

          /// /////////////////////For Loop for pie Graph //////////////////////
          // eslint-disable-next-line no-redeclare
          for (var j in this.items.slice(0, 3)) {
            // eslint-disable-next-line eqeqeq
            if (this.items[j].seller == 'amazon') {
              var discounts = Math.abs(Number(this.items[j].discount) - 100)
            } else {
              discounts = Number(this.items[j].discount)
            }
            // console.log(discounts);
            this.piechartOptions.labels.push(this.items[j].seller.toUpperCase())
            this.pieseries.push(discounts)
          }
          this.piechartOptions.labels.push(this.queryProduct[0].seller.toUpperCase())
          var d = Number(this.queryProduct[0].discount)
          this.pieseries.push(d)
          /// /////////////////////End of pie Graph logic /////////////////////
          /// //////////////////////Line chart Query Input //////////////////////
          var queryProductGraphDataset = {
            name: this.queryProduct[0].seller.toUpperCase(),
            data: this.queryProduct[0].price
          }
          this.series.push(queryProductGraphDataset)
          /// ////////////////////// End of Line Chart query Input /////////////////////////
          this.show = true
          this.toggleBusy()
        })
    }
  }

}

</script>

<style scoped>
.table td, .table th {
    font-size: 0.9em!important;
}
.highlight{
  font-weight: 700!important;
  color:#404040 ;
  font-family:Optima, sans-serif;
}
.matchCard{
  border-radius:1.5rem !important ;
  border: 5px solid #404040 !important ;
  width: 500px !important;
  height:500px!important;
}
.image-view{
  justify-content: center;
  display: flex;
  border-top-left-radius:1.2rem !important;
  border-top-right-radius:1.2rem !important;
}
.matchCard-body{
   border-bottom-left-radius:1rem !important;
  border-bottom-right-radius:1rem !important;
  color: black;
  background-color:rgb(230, 241, 248) ;
  font-family: Optima, sans-serif;
}
.AnalysisCard-header{
  border-top-left-radius:0.9rem !important;
  border-top-right-radius:0.9rem !important;
  color:white;
  background-color:#404040;
}
.AnalysisCard-footer{
  border-bottom-left-radius:0.9rem !important;
  border-bottom-right-radius:0.9rem !important;
  color:white;
  background-color:#404040;
}
.AnalysisCard-body{
  background-color: rgb(230, 241, 248);
}
.headfoot{
  border-radius:1.2rem !important;
  background-color:#404040;
  color: #FBF3F2;
  padding:3px 3px 3px;
  max-width: 100%;
  max-height:30%;
  margin-bottom:15px;
  font-family: Optima, sans-serif;
}

.cascading-admin-card {
  margin: 20px 0;
}
.cascading-admin-card .admin-up {
  margin-left: 4%;
  margin-right: 4%;
  margin-top: -20px;
}
.cascading-admin-card .admin-up .fas,
.cascading-admin-card .admin-up .far {
  box-shadow: 0 2px 9px 0 rgba(0, 0, 0, 0.2), 0 2px 13px 0 rgba(0, 0, 0, 0.19);
  padding: 1.7rem;
  font-size: 2rem;
  color: #fff;
  text-align: left;
  margin-right: 1rem;
  border-radius: 3px;
}
.cascading-admin-card .admin-up .data {
  float: right;
  margin-top: 2rem;
  text-align: right;
}
.admin-up .data p {
  color: #999999;
  font-size: 12px;
}
.classic-admin-card .card-body {
  color: #fff;
  margin-bottom: 0;
  padding: 0.9rem;
}
.classic-admin-card .card-body p {
  font-size: 13px;
  opacity: 0.7;
  margin-bottom: 0;
}
.classic-admin-card .card-body h4 {
  margin-top: 10px;
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
    border-top-left-radius: 10px;
}
.containerToast {
    position: relative;
    min-height: 340px;
  }
  .placement {
    position: absolute;
    right: 0;
  }
  .suggestions{
    color: red;
  }
  .suggestions:hover{
    color: #404040 !important;
  }
.content{
  color:#404040 ;
  font-family:Optima, sans-serif;
  font-weight: 600;
  font-size:1rem !important;
}

</style>
