<template>
   <div class="min-h-screen flex items-center justify-center bg-gray-100">
     <div class="w-full max-w-md">
       <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
         <div class="mb-4">
           <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
             Email
           </label>
           <input
             class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
             id="email"
             type="email"
             placeholder="Email"
             v-model="email"
           >
         </div>
         <div class="mb-6">
           <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
             Password
           </label>
           <input
             class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
             id="password"
             type="password"
             placeholder="Password"
             v-model="password"
           >
         </div>
         <div class="flex items-center justify-between">
           <button
             class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
             type="button"
             @click="login"
           >
             Sign In
           </button>
           <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
             Forgot Password?
           </a>
         </div>
       </form>
       <p class="text-center text-gray-500 text-xs">
         &copy;2023 Acme Corp. All rights reserved.
       </p>
     </div>
   </div>
 </template>
 
 <script>
 import axios from 'axios';
 export default {
   data() {
     return {
       email: '',
       password: ''
     }
   },
   methods: {
    login() {
      // Lakukan permintaan login ke server menggunakan Axios
      axios.post('/api/login', {
        email: this.email,
        password: this.password
      })
        .then(response => {
          // Login berhasil
          // Simpan token atau status login di local storage atau state Vuex
          localStorage.setItem('isLoggedIn', true);

          // Redirect ke halaman dashboard atau halaman setelah login
          this.$router.push('/dashboard');
        })
        .catch(error => {
          // Login gagal
          console.error(error);
        });
      }
    }
 }
 </script>