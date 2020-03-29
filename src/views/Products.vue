<template>
  <div class="products">
    <div class="container h-100">
      <div class="intro h-100">
        <div class="row h-100 justify-content-center align-items-center">
          <div class="col-md-6">
            <h3>Products Page</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Obcaecati, veritatis.
            </p>
          </div>
          <div class="col-md-6">
            <img src="/img/products.fw.png" class="img-fluid" alt="products" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Products",
  props: {
    msg: String
  }
};
</script>
<style scoped lang="scss"></style>
