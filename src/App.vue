<template>
  <nav class="navbar">
    <router-link to="/" class="navbar-brand">
      <img src="./assets/ACC-logo.svg" alt="ACC Dash Logo" class="logo">
    </router-link>    <ul class="nav-links">
      <li><router-link to="/">DASHBOARD</router-link></li>
      <li><router-link to="/garage">GARAGE</router-link></li>
      <li><router-link to="/tracks">TRACKS</router-link></li>
    </ul>
  </nav>
  <main>
    <router-view />
  </main>
</template>

<style>
@import './assets/base.css';
</style>