<template>
  <div class="products" id="products">
    <div class="container pt-4">
      <h1 class="text-center">Our Products</h1>
      <div class="row">
        <div class="col-md-4">
          <div class="card product-item">
            <img src="/img/sb2_Pro_6.png" alt="..." class="card-img-top" />
            <div class="card-body">
              <h5 class="card-title">Surface Book 2</h5>
              <p class="card-text">
                Complete your device with Office 360 and get 1TB cloud storage
              </p>
              <a href="#" class="btn btn-primary">Add to Cart</a>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card product-item">
            <img src="/img/lap3.jpg" alt="..." class="card-img-top" />
            <div class="card-body">
              <h5 class="card-title">Surface Laptop 2</h5>
              <p class="card-text">
                Style and speed. Go beyond the traditional with new Surface Laptop
              </p>
              <a href="#" class="btn btn-primary">Add to Cart</a>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card product-item">
            <img src="/img/surface-studio-2.jpg" alt="..." class="card-img-top" />
            <div class="card-body">
              <h5 class="card-title">Surface Studio 2</h5>
              <p class="card-text">
                The ultimate creative studio. Let your ideas flow with
              </p>
              <a href="#" class="btn btn-primary">Add to Cart</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Products",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.products {
  // margin-top: 7rem;
  background: #f2f2f2;
  padding-bottom: 3rem;
}
</style>
