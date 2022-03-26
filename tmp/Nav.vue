<template>
  <nav class="header">
    <b-navbar toggleable="lg" class="navbar-kazukichi fixed-top">
      <b-navbar-brand href="#">Kazukichi</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav vertical>
        <b-navbar-nav>
          <b-nav-item href="#about">About</b-nav-item>
          <b-nav-item href="#skills">Skills</b-nav-item>
          <b-nav-item href="#histories">Histories</b-nav-item>
          <b-nav-item href="#certifications">Certifications</b-nav-item>
          <b-nav-item href="#products">Products</b-nav-item>
          <b-nav-item href="#documents">Documents</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </nav>
</template>

<style lang="scss" scoped>
  .navbar {
    padding: 1.5rem;
  }

  .navbar-kazukichi {
    background: #dc143c;
  }
</style>
