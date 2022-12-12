<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <!-- <a class="navbar-brand ps-5" href="/">Faux School</a> -->
  <router-link class="navbar-brand ps-5" to="/">Faux School</router-link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <!-- <a class="nav-link" href="/">Home</a> -->
        <router-link class="nav-link" to="/">Home</router-link>
      </li>
      <li class="nav-item">
        <!-- <a class="nav-link" href="/courses">Courses</a> -->
        <router-link class="nav-link" to="/courses">Courses</router-link>
      </li>
      <li class="nav-item">
        <!-- <a class="nav-link" href="/courses/add">Add Course</a> -->
        <router-link class="nav-link" to="/courses/add">Add Courses</router-link>
      </li>
    </ul>
  </div>
</nav> 
</template>