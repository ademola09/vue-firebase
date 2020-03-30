<template>
  <div class="products">
    <div class="container h-100">
      <div class="intro h-100">
        <div class="row h-100 justify-content-center align-items-center">
          <div class="col-md-6">
            <h3>Products Page</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, veritatis.
            </p>
          </div>
          <div class="col-md-6">
            <img src="/img/products.fw.png" class="img-fluid" alt="products" />
          </div>
        </div>
      </div>

      <hr />

      <div class="product-test">
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <input type="text" v-model="product.name" class="form-control" placeholder="Product Name" />
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <input type="text" v-model="product.price" class="form-control" placeholder="Product Price" />
            </div>
          </div>
          <button @click="saveData" class="btn btn-sm btn-primary ml-3">Save Data</button>
        </div>
      </div>

      <div class="table-responsive">
        <table class="table table-sm table-borderless table-striped">
          <thead>
            <tr>
              <th>SN</th>
              <th>Name</th>
              <th>Price</th>
              <th>Modify</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(product, index) in products" :key="product.id">
              <td>{{ ++index }}</td>
              <td>{{ product.data().name }}</td>
              <td>{{ product.data().price }}</td>
              <td class="btn-group">
                <button @click="editProduct(product)" class="btn btn-sm btn-warning"><i class="fa fa-edit"></i></button>
                <button @click="deleteProduct(product.id)" class="btn btn-sm btn-danger"><i class="fa fa-trash-o"></i></button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Edit Modal -->
    <div class="modal fade" id="editProduct" tabindex="-1" role="dialog" aria-labelledby="editProductLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="editProductLabel"><i class="fa fa-edit text-warning"></i> Edit Product</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <input type="text" v-model="product.name" class="form-control" placeholder="Product Name" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <input type="text" v-model="product.price" class="form-control" placeholder="Product Price" />
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button @click="updateProduct()" class="btn btn-sm btn-primary ml-3">Update Product</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { fb, db } from "../firebase";

export default {
  name: "Products",
  props: {
    msg: String
  },
  data() {
    return {
      activeItem: null,
      products: [],
      product: {
        name: null,
        price: null
      }
    };
  },
  methods: {
    watcher() {
      db.collection("products").onSnapshot((querySnapshot) => {
        this.products = [];
        querySnapshot.forEach((doc) => {
          this.products.unshift(doc);
        });
      });
    },
    readData() {
      db.collection("products")
        .get()
        .then((array) => {
          array.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            this.products.unshift(doc);
          });
        });
    },
    saveData() {
      db.collection("products")
        .add(this.product)
        .then((docRef) => {
          console.log("Document written with ID: ", docRef.id);
          this.readData();
        })
        .catch((error) => {
          console.log("Error adding document: ", error);
        });
    },
    deleteProduct(doc) {
      if (confirm("Are you sure ? ")) {
        db.collection("products")
          .doc(doc)
          .delete()
          .then(() => {
            console.log("Document successfully deleted!");
          })
          .catch((error) => {
            console.log("Error removing document: ", error);
          });
      }
    },
    editProduct(product) {
      $("#editProduct").modal("show");
      this.product = product.data();
      this.activeItem = product.id;
    },
    updateProduct() {
      db.collection("products")
        .doc(this.activeItem)
        .update(this.product)
        .then(() => {
          $("#editProduct").modal("hide");
          this.watcher();
          console.log("Document successfully updated!");
        })
        .catch((error) => {
          console.log("Error updating document: ", error);
        });
    }
  },
  created() {
    this.readData();
  }
};
</script>
<style scoped lang="scss"></style>
