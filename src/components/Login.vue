<template>
  <v-container>
    <v-form ref="form">
      <v-text-field
        v-model="identifier"
        label="Username or Email"
        required
      ></v-text-field>
      <v-text-field
        v-model="password"
        label="Password"
        type="password"
        required
      ></v-text-field>
      <v-btn @click="login">Login</v-btn>
      <v-alert v-if="errorMessage" type="error">{{ errorMessage }}</v-alert>
    </v-form>
  </v-container>
</template>

<script>
import axiosInstance from "@/utils/axiosConfig";

export default {
  data() {
    return {
      identifier: "", // Input field for username/email
      password: "", // Input field for password
      errorMessage: "", // To display errors
    };
  },
  methods: {
    async login() {
      try {
        const response = await axiosInstance.post("/login", {
          identifier: this.identifier, // Pass identifier to the backend
          password: this.password, // Pass password to the backend
        });
        localStorage.setItem("token", response.data.access_token); // Store token in localStorage
        this.$router.push("/dashboard"); // Navigate to a secure page after login
      } catch (error) {
        this.errorMessage = "Invalid login credentials"; // Handle errors
      }
    },
  },
};
</script>
