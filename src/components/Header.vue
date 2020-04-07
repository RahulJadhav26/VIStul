<template>
<div class="container" style="margin-top:20px">
<mdb-navbar expand="large" style="border-radius:1.4rem; background-color:rgb(230, 241, 248);" dark >
   <mdb-navbar-brand href="#">

    </mdb-navbar-brand>
    <mdb-navbar-toggler style="color: #173847 !important;">
      <mdb-navbar-nav >
   <!-- <router-link to="#" class="navbar-item"><mdb-nav-item  @click="openNav()"><mdb-icon icon="caret-down" /></mdb-nav-item></router-link> -->
       <router-link to="/" class="navbar-item"><mdb-nav-item class='mr'><mdb-icon icon="home" /> VIStul</mdb-nav-item>  </router-link>
      <router-link to="/Watchlist" class="navbar-item"><mdb-nav-item><mdb-icon icon="eye" /> Watchlist</mdb-nav-item></router-link>
       <mdb-dropdown tag="li" class="navbar-item">
          <mdb-dropdown-toggle tag="a" navLink  slot="toggle" waves-fixed>Services</mdb-dropdown-toggle>
          <mdb-dropdown-menu>
           <router-link to="/Dashboard" class="navbar-item"> <mdb-dropdown-item >Pricing Intelligence</mdb-dropdown-item></router-link>
           <router-link to="/SearchProducts" class="navbar-item"> <mdb-dropdown-item >Product Research</mdb-dropdown-item></router-link>
           <router-link to="/Trends" class="navbar-item"> <mdb-dropdown-item >Title Optimization</mdb-dropdown-item></router-link>
          </mdb-dropdown-menu>
        </mdb-dropdown>
      </mdb-navbar-nav>
      <mdb-navbar-nav right>
      <router-link to="#" class="navbar-item"><mdb-nav-item><mdb-icon icon="user-plus" /> Sign Up</mdb-nav-item>  </router-link>
      <router-link to="#" class="navbar-item"><mdb-nav-item> <mdb-icon icon="user" />Login</mdb-nav-item></router-link>
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
.sidenav {
  height: 100%; /* 100% Full-height */
  width: 0%; /* 0 width - change this with JavaScript */
  position: fixed; /* Stay in place */
  z-index: 1; /* Stay on top */
  top: 0; /* Stay at the top */
  left: 0;
  background-color: #404040; /* Black*/
  overflow-x: hidden; /* Disable horizontal scroll */
  padding-top: 60px; /* Place content 60px from the top */
  transition: 0.5s; /* 0.5 second transition effect to slide in the sidenav */
  border-top-right-radius: 1.2rem ;
  border-bottom-right-radius:1.5rem ;
}

/* The navigation menu links */
.sidenav a {
  padding: 8px 8px;
  text-decoration: none;
  font-size: 20px;
  color: rgb(230, 241, 248);
  display: block;
  transition: 0.3s;
  font-family: Optima, sans-serif;
  font-weight: 600;
}
/* When you mouse over the navigation links, change their color */
.sidenav a:hover {
  color:#404040;
  background-color:rgb(230, 241, 248);
}

/* Position and style the close button (top right corner) */
.sidenav .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
}
.navbar .dropdown-menu a:not(.active):hover {
    color: yellow !important;
    background: #404040;
    border-radius:1.4rem;

}
.dropdown-menu{
  border-radius:1.4rem!important;
}
.dropdown-item{
font-weight: 500!important;
}
.navbar-item{
  text-decoration: none;
  font-size: 19px;
  display: block;

}
.nav-link{
  color: #404040  !important;
  font-family: Optima, sans-serif;
}
.nav-link:hover{

   border-bottom: 2px solid yellow;
}
.navbar-toggler-icon{
  background-color: #032539 !important;
}
</style>
