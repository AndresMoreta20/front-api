<template>
    <nav class="navigation">
      <router-link to="/lecturespaces">Lecturespaces</router-link> |
      <router-link to="/flashcards">Flashcards</router-link> |
      <router-link to="/tags">Tags</router-link> |
      <router-link to="/study-session">Start Study Session</router-link>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'Navigation'
  }
  </script>
  
  <style scoped>
  .navigation {
    padding: 1rem;
    background-color: #f0f0f0;
    margin-bottom: 1rem;
  }
  .navigation a {
    text-decoration: none;
    margin-right: 1rem;
    color: #333;
  }
  .navigation a.router-link-exact-active {
    font-weight: bold;
    color: #000;
  }
  </style>
  