<template>
    <div class="container-fluid vh-100 bg-light">

        <div class="row h-100">

            <div class="col-lg-4"></div>
            <div class="col-lg-4 position-relative">
                <div v-if="isLoading" class="position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
                    style="background: rgba(255, 255, 255, 0.5); z-index: 10;">
                    <div class="text-center">
                        <div class="spinner-border text-primary" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                        <p class="mb-0 mt-2">Logging in, please wait...</p>
                    </div>
                </div>

                <div class="d-flex justify-content-center align-items-center h-100">

                    <div class="login" style="width: 100%; max-width: 450px;">

                        <h2 class="fw-bold mb-2">
                            Welcome Back
                        </h2>

                        <p class="text-muted mb-4">
                            Sign in to continue
                        </p>

                        <div class="mb-3">
                            <label>Email</label>
                            <input v-model="email"
                                class="form-control form-control-lg">
                        </div>

                        <div class="mb-4">
                            <label>Password</label>
                            <input
                                type="password"
                                v-model="password"
                                class="form-control form-control-lg">
                        </div>

                        <button @click="login"
                            class="btn btn-primary btn-lg w-100"
                            :disabled="isLoading">
                            Sign In
                        </button>

                    </div>

                </div>

            </div>
        </div>

    </div>
</template>

<script setup>
import { ref } from "vue";
import { useAuthStore } from "../stores/auth";
import { useRouter } from "vue-router";

const email = ref("");
const password = ref("");

const auth = useAuthStore();
const router = useRouter();

const isLoading = ref(false);

const login = async () => {

    isLoading.value = true  // 1. Start loading
  try {
    await auth.login({
      email: email.value,
      password: password.value
    });

    router.push("/dashboard");
  } catch (e) {
    alert("Login failed");
  } finally {
    isLoading.value = false // 2. Stop loading (runs on success AND failure)
  }
};
</script>