<template>
    <div id="app">
        {{ info }}
    </div>
</template>

<script>
    export default {
        name: "axiosexample",
        data () {
            return {
                info: null
            }
        },
        mounted () {
            axios
                .get('https://api.coindesk.com/v1/bpi/currentprice.json')
                .then(response => (this.info = response))
        }
    }
</script>

<style scoped>

</style>