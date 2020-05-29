<template>
    <button 
        class="btn text-white py-2 px-4"
        :class="[
          darkTheme ? 'bg-gray-600' : 'bg-blue-400'
        ]"
        >
      Button
    </button>
</template>

<script>


  export default {
    name: 'Button',
    data() {
      return {
        darkTheme: true
      }
    }
  }
</script>

<style scoped></style>