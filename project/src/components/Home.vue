<template>
    <div class="home-page">
        <div class="banner">
            <div class="container">
                <h1 class="logo-font">BlogKIT</h1>
                <p>{{bannerMessage}}</p>
            </div>
        </div>
        <div class="container page">
            <div class="row">
                <div class="col-md-9">
                    <div class="feed-toggle">
                        <ul class="nav nav-pills outline-active">
                            <li class="nav-item">
                                <a class="nav-link disabled" href="">Your Feed</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href="">Global Feed</a>
                            </li>
                        </ul>
                    </div>
                  
                </div>
                <div class="col-md-3">
                    <div class="sidebar">
                        <p>Popular Tags</p>
                       
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    /* eslint no-unused-vars: "off" */
    // import { mapMutations } from 'vuex';
    
    
    export default {
        name: 'home',
        beforeMount() {
    
        },
        data() {
            return {
    
            };
        },
        computed: {
    
        },
        components: {
          
        },
    };
</script>


<style scoped>
    
</style>

