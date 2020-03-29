<template>
  <div class="overview">
    <div class="container h-100">
      <div class="intro h-100">
        <div class="row h-100 justify-content-center align-items-center">
          <div class="col-md-6">
            <h3>Overview Page</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, veritatis.</p>
          </div>
          <div class="col-md-6">
            <img src="/img/overview.fw.png" class="img-fluid" alt="Overview">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Overview",
  props: {
    msg: String
  }
};
</script>
<style scoped lang="scss"></style>
