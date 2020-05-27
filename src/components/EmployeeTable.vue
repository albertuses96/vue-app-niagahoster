<template>
    <div class="employee-table" >
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="employee in employees" :key="index">
                    <td>{{employee.name}}</td>
                    <td>{{employee.email}}</td>
                </tr>
            </tbody>
        </table>
    </div>

</template>

<script>
export default {
    name: 'EmployeeTable',
    props: {
        employees: Array
    }
}
</script>

<style lang="ts">
    
</style>