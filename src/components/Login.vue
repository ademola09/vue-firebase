<template>
  <div class="login">
    <!-- Modal -->
    <div class="modal fade" id="login" tabindex="-1" role="dialog" aria-labelledby="loginTitle" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-body">
            <ul class="row nav nav-pills mb-3" id="pills-tab" role="tablist">
              <li class="nav-item col-md-6">
                <a class="nav-link active text-center" id="pills-login-tab" data-toggle="pill" href="#pills-login" role="tab" aria-controls="pills-login" aria-selected="true">Login</a>
              </li>
              <li class="nav-item col-md-6">
                <a class="nav-link text-center" id="pills-Signup-tab" data-toggle="pill" href="#pills-Signup" role="tab" aria-controls="pills-Signup" aria-selected="false">Signup</a>
              </li>
            </ul>
            <div class="tab-content" id="pills-tabContent">
              <div class="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="pills-login-tab">
                <h4 class="text-center">Please Login</h4>
                <div class="form-group">
                  <div class="input-group mb-2 mr-sm-2">
                    <div class="input-group-prepend">
                      <div class="input-group-text">
                        <i class="fa fa-paper-plane"></i>
                      </div>
                    </div>
                    <input type="text" v-model="email" class="form-control" id="lemail" placeholder="Email Address" />
                  </div>
                </div>
                <div class="form-group">
                  <div class="input-group mb-2 mr-sm-2">
                    <div class="input-group-prepend">
                      <div class="input-group-text">
                        <i class="fa fa-lock"></i>
                      </div>
                    </div>
                    <input type="password" v-model="password" @keyup.enter="login" class="form-control" id="lpassword" placeholder="Enter Password" />
                  </div>
                </div>
                <button type="button" @click="login" class="btn btn-sm btn-primary float-right">Login</button>
              </div>
              <div class="tab-pane fade" id="pills-Signup" role="tabpanel" aria-labelledby="pills-Signup-tab">
                <h4 class="text-center">Create New Account</h4>
                <div class="form-group">
                  <div class="input-group mb-2 mr-sm-2">
                    <div class="input-group-prepend">
                      <div class="input-group-text">
                        <i class="fa fa-user"></i>
                      </div>
                    </div>
                    <input type="text" v-model="name" class="form-control" id="name" placeholder="Enter your nice name" />
                  </div>
                </div>
                <div class="form-group">
                  <div class="input-group mb-2 mr-sm-2">
                    <div class="input-group-prepend">
                      <div class="input-group-text">
                        <i class="fa fa-paper-plane"></i>
                      </div>
                    </div>
                    <input type="text" v-model="email" class="form-control" id="semail" placeholder="Email Address" />
                  </div>
                </div>
                <div class="form-group">
                  <div class="input-group mb-2 mr-sm-2">
                    <div class="input-group-prepend">
                      <div class="input-group-text">
                        <i class="fa fa-lock"></i>
                      </div>
                    </div>
                    <input type="password" v-model="password" class="form-control" id="spassword" placeholder="Enter Password" />
                  </div>
                </div>
                <button type="button" @click="register" class="btn btn-sm btn-primary float-right">Signup</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { fb } from "../firebase";

export default {
  name: "Login",
  props: {
    msg: String
  },
  data() {
    return {
      name: null,
      email: null,
      password: null
    };
  },
  methods: {
    login() {
      fb.auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          $("#login").modal("hide");
          this.$router.replace("admin");
        })
        .catch((error) => {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          if (errorCode === "auth/wrong-password") {
            alert("Wrong password.");
          } else {
            alert(errorMessage);
          }
          console.log(error);
        });
    },
    register() {
      fb.auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then((user) => {
          $("#login").modal("hide");
          this.$router.replace("admin");
          console.log("User Created Successfully");
        })
        .catch((error) => {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          if (errorCode == "auth/weak-password") {
            alert("The password is too weak.");
          } else {
            alert(errorMessage);
          }
          console.log(error);
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
