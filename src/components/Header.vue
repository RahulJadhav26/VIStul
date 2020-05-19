<template>
<div class="container" style="margin-top:20px">

<mdb-navbar expand="large" style="border-radius:1.4rem; background-color:rgb(230, 241, 248);" dark >
   <mdb-navbar-brand href="#">

    </mdb-navbar-brand>
    <mdb-navbar-toggler>
      <mdb-navbar-nav >
   <!-- <router-link to="#" class="navbar-item"><mdb-nav-item  @click="openNav()"><mdb-icon icon="caret-down" /></mdb-nav-item></router-link> -->
       <router-link to="/"><mdb-nav-item  class="navbar-item"><mdb-icon icon="home" /> VIStul</mdb-nav-item>  </router-link>
      <router-link to="/Watchlist"><mdb-nav-item  class="navbar-item"><mdb-icon icon="eye" /> Watchlist</mdb-nav-item></router-link>

       <mdb-dropdown hover tag="li" class="navbar-item">
          <mdb-dropdown-toggle tag="ul" navLink  slot="toggle" waves-fixed><mdb-icon fab icon="buffer" /> Services</mdb-dropdown-toggle>
          <mdb-dropdown-menu>
           <router-link to="/Dashboard" class="navbar-item"> <mdb-dropdown-item tag='li'>Pricing Intelligence</mdb-dropdown-item></router-link>
           <router-link to="/SearchProducts" class="navbar-item"> <mdb-dropdown-item tag='li'>Product Research</mdb-dropdown-item></router-link>
           <router-link to="/Trends" class="navbar-item"> <mdb-dropdown-item tag='li'>Title Optimization</mdb-dropdown-item></router-link>
          </mdb-dropdown-menu>
        </mdb-dropdown>
      </mdb-navbar-nav>
      <mdb-navbar-nav right>
      <router-link to="#" ><mdb-nav-item  class="navbar-item"><mdb-icon icon="user-plus" /> Sign Up</mdb-nav-item>  </router-link>
      <router-link to="#" ><mdb-nav-item  class="navbar-item"> <mdb-icon icon="user" />Login</mdb-nav-item></router-link>
      </mdb-navbar-nav>
    </mdb-navbar-toggler>
  </mdb-navbar>

  <!-- <div id="mySidenav" :style = " {width :computedWidth,opacity :computedOpacity }" class="sidenav">
  <a style="background-color:none !important;" href="javascript:void(0)" class="closebtn" @click="closeNav()">&times;</a>

  <h6 style="color:yellow; font-size:1.5em;"> FEATURES</h6>
  <router-link tag="a" to="/Dashboard"> <mdb-icon icon="chart-line" /> Pricing Intelligence</router-link>
  <router-link tag="a" to="/SearchProducts"><mdb-icon icon="search" /> Product Research</router-link>
  <router-link tag="a" to="/Trends"><mdb-icon icon="sort-amount-up" /> Title Optimization</router-link>

</div> -->

</div>

</template>
<script>
import {

  mdbNavbar,
  mdbNavbarBrand,
  mdbNavbarToggler,
  mdbNavbarNav,
  mdbNavItem,
  mdbDropdown,
  mdbDropdownMenu,
  mdbDropdownToggle,
  mdbInput,
  mdbDropdownItem,
  mdbIcon
}
  from 'mdbvue'

export default {
  name: 'NavbarPage',
  components: {
    mdbNavbar,
    mdbNavbarBrand,
    mdbNavbarToggler,
    mdbNavbarNav,
    mdbNavItem,
    mdbDropdown,
    mdbDropdownMenu,
    mdbDropdownToggle,
    mdbDropdownItem,
    mdbInput,
    mdbIcon

  },
  data () {
    return {
      width: '0%',
      opacity: '0'
    }
  },
  methods: {
    onOver () {
      this.$refs.dropdown.visible = true
    },
    onLeave () {
      this.$refs.dropdown.visible = false
    }
  },
  computed: {
    computedWidth () {
      return this.width
    },
    computedOpacity () {
      return this.opacity
    }
  },
  methods: {
    openNav () {
      this.width = '20%'
      this.opacity = '0.95'
    },
    closeNav () {
      this.width = '0%'
      this.opacity = '0.2'
    }
  },
  props: ['obj']
}
</script>
<style >

.icon{
  padding-right:5px;
}
.navbar .dropdown-menu a:not(.active):hover {
    color: yellow !important;
    background: #404040!important;
    border-radius:1.4rem;
}
a:hover{  
  color:blue!important;
  transition: 300ms;
}
.dropdown-menu{
  border-radius:1.4rem!important;
}
.dropdown-item{
font-weight: 500!important;
}
.dropdown-item:hover{
  color:yellow!important;
  background-color: #404040  !important;
}
.navbar-item{
  text-decoration: none;
  font-size: 17px;
  display: block;

}
.nav-link{
  color: #404040  !important;
  font-family: Optima, sans-serif;
}
.nav-link:hover{
  border-bottom: 1px solid yellow;
   transition: font-size 19px!important;
   color:#404040 !important;
   margin: 5px 5px !important;
   padding-bottom: 0%!important;
   padding-top: 0%!important;

}
.navbar-dark .navbar-toggler-icon{
background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3e%3cpath stroke='rgba(64, 64, 64, 0.5)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='4' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e") !important;
}
</style>
