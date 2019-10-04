<template>
  <div id="app" class="container mx-auto text-center">
    <div id="nav">
      <router-link to="/">
        Home
      </router-link>
      |
      <router-link to="/about">
        About
      </router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
// import '@fortawesome/fontawesome-free/css/all.css';
</script>
<style src="@/styles/tailwind.css" />
<style src="@/styles/app.css" />
