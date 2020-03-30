<template>
  <div class="about container">
    <Navbar></Navbar>
    <h3>This is an about page</h3>
    <Login></Login>
  </div>
</template>

<script>
// @ is an alias to /src
import Login from "@/components/Login.vue";

export default {
  name: "About",
  components: {
    Login
  }
};
</script>

<style scoped lang="scss">
.about {
  padding: 4rem 0;
}
</style>
