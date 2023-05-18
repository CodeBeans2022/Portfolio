<template>
    <div>
        <div class="container">
            <div class="row" v-for="item in this.work" :key="item.WorkID">
                <div class="col">
                    <div class="card">
                        <div class="card-body">
                            <h2 class="card-title"></h2>
                            <h3 class="card-subtitle"></h3>
                            <div class="card-text"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </template>
    
    <script>
    
    export default {
        computed: {
            work() {
                return this.$store.state.work
            }
        },
        created() {
            this.$store.dispatch('fetchWork');
        }
    }
    </script>
    
    <style scoped>

    </style>
    