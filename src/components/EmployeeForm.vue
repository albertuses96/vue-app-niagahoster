<template>
    <div class="employee-form">
        <form @submit.prevent="handleSubmit">
            <label for="name" 
                    class=""
                    :class="[
                    error ? 'text-red-400' : 'text-black'
                    ]"
                >
                Employee Name
            </label>
            
            <input type="text" v-model="employee.name" name="name" id="name" @focus="clearStatus"
    @keypress="clearStatus">

            <label for="email">Email</label>

            <input type="text" v-model="employee.email" name="email" id="email" @focus="clearStatus"
    @keypress="clearStatus">
        
            <Button />
        </form>
    </div>
</template>

<script>

import Button from '@/components/Button.vue'

export default {
    name: 'EmployeeForm',
    components: {
        Button
    },
    data() {
        return{
            employee: {
                name: '',
                email: ''
            },
             submitting: false,
    error: false,
    success: false,
        }
    },
      computed: {
  invalidName() {
    return this.employee.name === ''
  },

  invalidEmail() {
    return this.employee.email === ''
  },
},
    methods: {
        handleSubmit() {
            this.submitting = true
    this.clearStatus()


    if (this.invalidName || this.invalidEmail) {
      this.error = true
      return
    }

           this.$emit('add:employee', this.employee)
    this.employee = {
      name: '',
      email: '',
    }
    this.error = false
    this.success = true
    this.submitting = false
   
        },
          clearStatus() {
    this.success = false
    this.error = false
  }
        
    }
}
</script>