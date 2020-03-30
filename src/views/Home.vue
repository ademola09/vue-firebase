<template>
  <div class="home">
    <Navbar></Navbar>
    <Hero />
    <Products />
    <div class="container h-100">
      <div class="row p-5 h-100 justify-content-center align-items-center">
        <div class="col-md-6">
          <img src="/img/cart.png" alt="Cart" width="400" />
        </div>
        <div class="col-md-6">
          <h3>Learn More About us</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, praesentium!</p>
          <button class="btn custom-btn btn-outline-primary mr-4">Browse Products</button>
        </div>
      </div>
    </div>
    <Login></Login>
  </div>
</template>

<script>
// @ is an alias to /src
import Hero from "@/components/Hero.vue";
import Products from "@/sections/Products.vue";
import Login from "@/components/Login.vue";

export default {
  name: "Home",
  components: {
    Hero,
    Products,
    Login
  }
};
</script>
<style scoped lang="scss"></style>
