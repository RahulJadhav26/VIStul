<template>
<div class="home">
    <app-header></app-header>
  <mdb-jumbotron class="content mb-0 text-center" >
    <h1 class="content card-title h1">Welcome To VIStul</h1>
    <h3 class=" content my-4 font-weight-bold">LET'S GET YOUR E-COMMERCE TOWARDS SUCCESS</h3>
    <mdb-row class="d-flex justify-content-center">
      <mdb-col>
      <h4 class="content my-4 font-weight-bold">Products Under Our Intelligence</h4>
      </mdb-col>
    </mdb-row>
    <mdb-row class="d-flex justify-content-center">
      <mdb-col>
        <h1 class="Highlight">{{count}}</h1>
      </mdb-col>
    </mdb-row>
    <hr>
     <mdb-row class="d-flex justify-content-center">
       <mdb-container>
        <b-card no-body>
          <b-tabs pills card>
            <b-tab title="About VIStul" active>

                <div>
                    <b-card-group deck >
                      <b-card class="border content" header="VIStul">
                        <b-card-text >
                        <h5 style="color:#032539;">
                         A tool specially designed for e-commerce companies for staying ahead in the market of competition.Easy viewable historical as well as real time dynamic data without any human intervention.
                           <br>
                         <b>  <div style="color:red"> Analyse and helps you to restructure your price strategy based on the competition</div></b>
                          <br>
                         <iframe class="border" width='560' height='320' src='https://www.youtube.com/embed/X8iu97QEHhI' allowfullscreen></iframe>
                        </h5>
                        </b-card-text>
                      </b-card>
                  </b-card-group>
                  </div>
                  <br>

              </b-tab>
            <b-tab title="Pricing Intelligence">
              <b-card-text>
                      <b-card-group    deck>
                    <b-card  class='content border' header='Pricing Intelligence'>
                      <h5> Pricing Intelligence is a feature which will help the client understand the pricing trend of it's competitors by comparing the change in price periodically and will suggest an optimal price to sustain within the competitive market.</h5>
                        <p>Following are some of the Analysis and Analytics provided :- </p>
                      <b-list-group>
                      <b-list-group-item href='#'> <b-button v-b-toggle.collapse-1 class='m-1 button'>Optimal Discount Rate</b-button></b-list-group-item>
                        <b-collapse  id='collapse-1'>
                          <b-card class='color'><p class='content'>This accounts the Live Discount Rates provided by it's competition. This will help the client to understand the <span style='color:red'>FESTIVE TRENDS</span> periodically and also accordingly calculates an Optimal Discount rate by considering the Discount rates of it's Top 3 competitors</p></b-card>
                        </b-collapse>
                      <b-list-group-item href='#'> <b-button v-b-toggle.collapse-2 class='m-2 button'>Dynamic Pricing</b-button></b-list-group-item>
                        <b-collapse  id='collapse-2'>
                          <b-card class='color'><p class='content' >This provides the client a graphical representation to understand the Dynamic Pricing <span style='color:red'>STRATEGY</span> of its primary competitor. It represents a graph which plots the Listing price of searched product with respective to gradual dates </p></b-card>
                        </b-collapse>
                      <b-list-group-item href='#'> <b-button v-b-toggle.collapse-3 class='m-3 button'>Listing price</b-button></b-list-group-item>
                        <b-collapse  id='collapse-3'>
                          <b-card class='color'><p class='content'>This calculates the <span style='color:red'>AVERAGE </span> Listing price of the respective <span style='color:red'>CATEGORY </span> searched by the client. It also provides a pictorial view to the client to understand the intensity of the number of products of respective category listed  by it's competitors and the client himself</p></b-card>
                        </b-collapse>
                      </b-list-group>
                      </b-card>
                  </b-card-group>
               <br>
               <h5 class="content"> How to use ? </h5>
    <iframe style="border:1px solid black; border-radius:1.2em;" width='560' height='315' src='https://www.youtube.com/embed/7xC3Egey6fk' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>
              </b-card-text>
            </b-tab>
            <b-tab title="Title Optimization">
              <b-card-text>
                  <b-card-group    deck>
                    <b-card  class='content border' header='Title Optimization'>
                      <h5> Title Optimization is a feature that will help the client to optimize it's title of it's own listed product according to the customer behaviour and live trends .This feature will help the client to rank in the search engine and will increase chances customers to visit client's E-commerce store  </h5>
                        <p>Following are some of the Analysis and Analytics provided :- </p>
                      <b-list-group>
                      <b-list-group-item href='#'> <b-button v-b-toggle.collapse-1 class='m-1 button'>Title Matching</b-button></b-list-group-item>
                        <b-collapse  id='collapse-1'>
                          <b-card class='color'><p class='content'>This Feature Helps the client to compare titles for a specific product and look for more optimized Title according to the <span style='color:red'>SEARCH TRENDS</span> followed by the customers.This feature uses Google search engine trends for title optimization  </p></b-card>
                        </b-collapse>
                      <b-list-group-item href='#'> <b-button v-b-toggle.collapse-2 class='m-2 button'>Related Queries</b-button></b-list-group-item>
                        <b-collapse  id='collapse-2'>
                          <b-card class='color'><p class='content'>This Feature provides trending results for a <span style="color:red"> Specific query (CATEGORY/BRAND) </span> searched by client. For example If the client searches for "BAGS" VIStul will provide trending results that are related to "BAGS" according to the <span style="color:red"> CUSTOMER SEARCH TRENDS </span> on the Google Search Engine</p></b-card>
                        </b-collapse>
                      </b-list-group>
                      </b-card>
                  </b-card-group>
                  <br>
                  <h5>How to Use ?</h5>
               <iframe class="border" width='560' height='315' src='https://www.youtube.com/embed/VkV51Ga9fWw' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>
            </b-card-text>
            </b-tab>
          </b-tabs>
        </b-card>
           <!-- <mdb-tabs class="content "
            :active="0"
            pills
            color="green"
            :links="[
              { text: 'About VIStul' },
              { text: 'Pricing Intelligence' },
              { text: 'Title Optimization' },
              ]"
            :content="[
              `<p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.
                  <iframe width='560' height='320' src='https://www.youtube.com/embed/X8iu97QEHhI' allowfullscreen>
                    </iframe>

              </p>`,
              `
                <mdb-row md='6'>
   <mdb-col md='6'>
     <b-card-group   deck>
  <b-card class='content' header='Pricing Intelligence'>
    <h5> Pricing Intelligence is a feature which will help the client understand the pricing trend of it's competitors by comparing the change in price periodically and will suggest an optimal price to sustain within the competitive market.</h5>
      <p>Following are some of the Analysis and Analytics provided :- </p>
    <b-list-group>
    <b-list-group-item href='#'> <b-button v-b-toggle.collapse-1 class='m-1 button'>Optimal Discount Rate</b-button></b-list-group-item>
       <b-collapse  id='collapse-1'>
        <b-card class='color'><p class='content'>This accounts the Live Discount Rates provided by it's competition. This will help the client to understand the <span style='color:red'>FESTIVE TRENDS</span> periodically and also accordingly calculates an Optimal Discount rate by considering the Discount rates of it's Top 3 competitors</p></b-card>
      </b-collapse>
    <b-list-group-item href='#'> <b-button v-b-toggle.collapse-2 class='m-2 button'>Dynamic Pricing</b-button></b-list-group-item>
       <b-collapse  id='collapse-2>
        <b-card class='color'><p class='content' >This provides client a graphical representation to understand the Dynamic Pricing <span style='color:red>STRATEGY</span> of it's primary competitor. It represents a graph which plots the Listing price of searched product gradually with respective to it's date </p></b-card>
      </b-collapse>
    <b-list-group-item href='#'> <b-button v-b-toggle.collapse-3 class='m-3 button'>Listing price</b-button></b-list-group-item>
       <b-collapse  id='collapse-3'>
        <b-card class='color'><p class='content'>This calculates the <span style='color:red'>AVERAGE </span> Listing price of the respective <span style='color:red'>CATEGORY </span> searched by the client. It also provides a pictorial view to the client to understand the intensity of the number of products of respective category listed  by it's competitors and the client himself</p></b-card>
      </b-collapse>
    </b-list-group>
    </b-card>
</b-card-group>
   </mdb-col>
   </mdb-row>

    <iframe width='560' height='315' src='https://www.youtube.com/embed/7xC3Egey6fk' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>`,
              `<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil odit magnam minima, soluta doloribus reiciendis molestiae placeat unde eos molestias. Quisquam aperiam, pariatur. Tempora, placeat ratione porro voluptate odit minima.</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil odit magnam minima, soluta doloribus reiciendis molestiae placeat unde eos molestias. Quisquam aperiam, pariatur. Tempora, placeat ratione porro voluptate odit minima.
                <iframe width='560' height='315' src='https://www.youtube.com/embed/VkV51Ga9fWw' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>
                </p>`]"
              /> -->
       </mdb-container>

      </mdb-row>
    <hr class="my-4">

    <router-link to="/SearchProducts"><button  style="color:white;" class="button">Get started</button></router-link>
  </mdb-jumbotron>

</div>
</template>
<script>

import HeaderVue from '../components/Header.vue'
import { mdbJumbotron, mdbRow, mdbCol, mdbBtn, mdbTabs, mdbDoughnutChart, mdbContainer } from 'mdbvue'

export default {
  name: 'home',
  components: {
    appHeader: HeaderVue,
    mdbJumbotron,
    mdbCol,
    mdbRow,
    mdbBtn,
    mdbDoughnutChart,
    mdbContainer,
    mdbTabs
  },
  data () {
    return {
      images: {
        sample: require('../public/assets/logo.png')
      },
      count: '',
      show: false
      // label:[],
      //  doughnutChartData: {
      //   labels: [],
      //   datasets: [
      //     {
      //       data: [],
      //       backgroundColor: [
      //         "#F7464A",
      //         "#FDB45C",
      //         "#46BFBD",
      //         "#949FB1",
      //         "#4D5360"
      //       ],
      //       hoverBackgroundColor: [
      //         "#FF5A5E",
      //         "#FFC870",
      //         "#5AD3D1",
      //         "#A8B3C5",
      //         "#616774"
      //       ]
      //     }
      //   ]
      // },
      // doughnutChartOptions: {
      //   responsive: true,
      //   maintainAspectRatio: true
      // }

    }
  },
  beforeCreate () {
    this.$http.get('https://ecommerce-project-76925.firebaseio.com/1.json')
      .then(response => {
        return response.json()
      })
      .then(function (data) {
        var elements = []
        for (var i in data.products) {
          elements.push(i)
        }
        this.count = elements.length
      })
  }

}
</script>
<style scoped>
.button{
    background-color:#032539 !important;
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
.icon-container {
margin: 20px auto;
width: 200px;
height: 200px;
border-radius: 20%;
display: flex;
justify-content: center;
align-items: flex-end;
background-color: #ececec;
position: relative;
}
.content{
  color:#032539;
  font-family:Optima, sans-serif;
  font-weight: 600;
}
.color{
  background-color:rgb(230, 241, 248)
}
.Highlight{
  font-size:5em
}
.border{
  border:1px solid #404040;
   border-radius:1.2em;
}

</style>
