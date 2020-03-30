<template>
  <div class="admin">
    <div class="page-wrapper default-theme sidebar-bg bg1 toggled">
      <a href="#" @click="toggleMenu" class="btn btn-sm btn-dark" id="show-sidebar">
        <i class="fas fa-bars"></i>
      </a>
      <nav id="sidebar" class="sidebar-wrapper">
        <div class="sidebar-content">
          <!-- sidebar-brand  -->
          <div class="sidebar-item sidebar-brand">
            <a href="#">Vue Shop</a>
            <div @click="toggleMenu" id="close-sidebar">
              <i class="fas fa-times"></i>
            </div>
          </div>
          <!-- sidebar-header  -->
          <div class="sidebar-item sidebar-header d-flex flex-nowrap">
            <div class="user-pic">
              <img src="/img/user2.webp" class="img-responsive img-rounded" alt="User picture" />
            </div>
            <div class="user-info">
              <span class="user-name">
                Ade
                <strong>Mola</strong>
              </span>
              <span class="user-role">Administrator</span>
              <span class="user-status">
                <i class="fa fa-circle"></i>
                <span>Online</span>
              </span>
            </div>
          </div>
          <!-- sidebar-search  -->
          <div class="sidebar-item sidebar-search">
            <div>
              <div class="input-group">
                <input type="text" class="form-control search-menu" placeholder="Search..." />
                <div class="input-group-append">
                  <span class="input-group-text">
                    <i class="fa fa-search" aria-hidden="true"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <!-- sidebar-menu  -->
          <div class="sidebar-item sidebar-menu">
            <ul>
              <li class="header-menu">
                <span>General</span>
              </li>
              <li class>
                <router-link to="/admin/overview">
                  <i class="fa fa-chart-line"></i>
                  <span class="menu-text">Overview</span>
                </router-link>
              </li>
              <li class>
                <router-link to="/admin/products">
                  <i class="fa fa-product-hunt"></i>
                  <span class="menu-text">Products</span>
                  <span class="badge badge-pill badge-warning">New</span>
                </router-link>
              </li>
              <li class>
                <router-link to="/admin/orders">
                  <i class="fa fa-shopping-cart"></i>
                  <span class="menu-text">Orders</span>
                  <span class="badge badge-pill badge-danger">3</span>
                </router-link>
              </li>
              <li class>
                <a href="#" @click="logout()">
                  <i class="fa fa-power-off"></i>
                  <span class="menu-text">Logout</span>
                </a>
              </li>
            </ul>
          </div>
          <!-- sidebar-menu  -->
        </div>
      </nav>
      <!-- page-content  -->
      <main class="page-content pt-2">
        <div id="overlay" class="overlay"></div>
        <router-view />
      </main>
      <!-- page-content" -->
    </div>
    <!-- page-wrapper -->
  </div>
</template>

<script>
// @ is an alias to /src
import { fb } from "../firebase";
export default {
  name: "Admin",
  methods: {
    toggleMenu() {
      $(".page-wrapper").toggleClass("toggled");
    },
    logout() {
      fb.auth()
        .signOut()
        .then(() => {
          this.$router.replace("/");
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
<style scoped lang="scss"></style>
