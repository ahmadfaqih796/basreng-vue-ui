<template>
   <div>
     <h1>Welcome to the Dashboard!</h1>
     <!-- Konten dashboard lainnya -->
   </div>
 </template>

<script>
export default {
  created() {
    // Periksa status login saat komponen dibuat
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (!isLoggedIn) {
      // Jika tidak ada status login, arahkan pengguna ke halaman login
      this.$router.push('/login');
    }
  }
}
</script>