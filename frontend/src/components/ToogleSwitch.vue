<template>
    <div class="w-32 flex flex-col">
        <span class="text-sm">Dark Theme</span>
        <span v-if="theme === 'light'" id="toogle" @click="changeTheme('dark')" class="border mr-2 w-16 rounded-full border-grey flex items-center cursor-pointer w-12 justify-start">
                <span class="rounded-full border w-6 h-6 border-grey shadow-inner bg-white shadow"></span>
        </span>
    
        <span v-else id="toogle" @click="changeTheme('light')" class="border mr-2 rounded-full w-16 border-grey flex items-center cursor-pointer w-12 bg-green-primary justify-end">
                <span class="rounded-full border w-6 h-6 border-grey shadow-inner bg-white shadow"></span>
        </span>

    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
    name: 'ToogleSwitch',
    computed: mapState({
        theme: state => state.theme
    }),
    methods: {
        ...mapActions([
            'changeTheme'

        ]
        )
    },
}
</script>