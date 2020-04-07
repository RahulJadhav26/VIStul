<template>
  <div class="about">
      <app-Header></app-Header>
            <section class="preview content container">
               <h1 >SEARCH FOR TRENDS</h1>
              <mdb-input v-model="s1" basic aria-label="First name" placeholder="Enter first Title">
                <span  class="input-group-text" slot="prepend">Compare <mdb-icon  style="padding-left:10px background-color:rgb(230, 241, 248) !important" icon="exchange-alt" /> </span>
                <mdb-input v-model="s2" noWrapper aria-label="Last name" placeholder="Enter Second Title"/>
              </mdb-input>
              <div class="select" >
                 <mdb-row>
                <mdb-col col="sm">
                  <select v-model="dur" class="browser-default custom-select">
                    <option value="1-H">1 Hour</option>
                    <option value="4-H">4 Hour</option>
                    <option value="1-d">Past Day</option>
                    <option value="7-d">7 Day</option>
                    <option value="1-m">30 Day</option>
                    <option value="3-m">90 Day</option>
                  </select>
                </mdb-col>
                <mdb-col col="sm">
                  <select v-model="cat" class="browser-default custom-select">
                    <option value = "0">All categories</option>
                    <option value = "18">Shopping</option>
                  </select>
                </mdb-col>
              </mdb-row>
            </div>
            <div>
              <mdb-btn class="button" color="default" @click="frame()">Compare</mdb-btn>
              <mdb-btn class="button" color="default" @click="related()">Related queries</mdb-btn>
            </div>

        </section>

            <!-- <input v-model="s1" type="text" name="" placeholder="1. Search Item">
            <br>
            <input v-model="s2" type="text" name="" placeholder="2. Search Item">
            <br>
            <select v-model="dur" >Duration
                <option selected >Select Duration</option>
                <option value="1-H">1 Hour</option>
                <option value="4-H">4 Hour</option>
                <option value="1-d">Past Day</option>
                <option value="7-d">7 Day</option>
                <option value="1-m">30 Day</option>
                <option value="3-m">90 Day</option>
            </select>
            <select v-model="cat">
              <option value = "0">All categories</option>
              <option value = "18">Shopping</option>
            </select> -->
        </div>
        <!-- <button type="button" name="button" @click="frame()">Show</button>
        <button type="button" name="button" @click="related()">Related queries</button> -->

</template>
<script>
import HeaderVue from '../components/Header.vue'
// eslint-disable-next-line standard/object-curly-even-spacing
import {mdbRow, mdbCol, mdbInput, mdbIcon, mdbBtn } from 'mdbvue'

export default {
  name: 'Trends',
  components: {
    appHeader: HeaderVue,
    mdbInput,
    mdbIcon,
    mdbRow,
    mdbCol,
    mdbBtn
  },
  data () {
    return {
      s1: '',
      s2: '',
      dur: '',
      cat: ''
    }
  },
  methods: {
    related () {
      // eslint-disable-next-line eqeqeq
      if (this.dur == '1-m' || this.dur == '3-m') {
        console.log('loop1')
        // eslint-disable-next-line no-undef
        trends.embed.renderExploreWidget('RELATED_QUERIES', {'comparisonItem': [
          {'keyword': this.s1, 'geo': 'IN', 'time': 'today ' + this.dur}],
        'category': Number(this.cat),
        'property': ''
        },
        {'exploreQuery': '"cat=' + this.cat + '&date=today%20' + this.dur + '&geo=IN&q=' + this.s1 + '"', 'guestPath': 'https://trends.google.com:443/trends/embed/'})
      } else {
        console.log('loop2')
        // eslint-disable-next-line no-undef
        trends.embed.renderExploreWidget('RELATED_QUERIES', {'comparisonItem': [
          {'keyword': this.s1, 'geo': 'IN', 'time': 'now ' + this.dur}],
        'category': Number(this.cat),
        'property': ''
        },
        {'exploreQuery': '"cat=' + this.cat + '&date=now%20' + this.dur + '&geo=IN&q=' + this.s1 + '"', 'guestPath': 'https://trends.google.com:443/trends/embed/'})
      }
    },
    frame () {
      console.log('called')
      // eslint-disable-next-line eqeqeq
      if (this.dur == '1-m' || this.dur == '3-m') {
        console.log('loop1')
        // eslint-disable-next-line no-undef
        trends.embed.renderExploreWidget('TIMESERIES', {'comparisonItem': [
          {'keyword': this.s1, 'geo': 'IN', 'time': 'today ' + this.dur},
          {'keyword': this.s2, 'geo': 'IN', 'time': 'today ' + this.dur}],
        'category': 0,
        'property': ''
        },
        {'exploreQuery': '"date=today%20' + this.dur + '&geo=IN&q=' + this.s1 + ',' + this.s2 + '"', 'guestPath': 'https://trends.google.com:443/trends/embed/'})
      } else {
        console.log('loop2')
        // eslint-disable-next-line no-undef
        trends.embed.renderExploreWidget('TIMESERIES', {'comparisonItem': [
          {'keyword': this.s1, 'geo': 'IN', 'time': 'now ' + this.dur},
          {'keyword': this.s2, 'geo': 'IN', 'time': 'now ' + this.dur}],
        'category': 0,
        'property': ''
        },
        {'exploreQuery': '"date=now%20' + this.dur + '&geo=IN&q=' + this.s1 + ',' + this.s2 + '"', 'guestPath': 'https://trends.google.com:443/trends/embed/'})
      }
    }
  }

}

</script>
<style scoped>
section.preview {

      padding: 50px;

  }
  .select{
    padding-top:50px;
    margin: 0 auto;
    width: 40%;
  }
  .button{
    margin-top:50px;
  }
</style>
