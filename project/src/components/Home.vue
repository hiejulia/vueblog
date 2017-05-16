<template>
    <div class="home-page">
       <main>
  <div class="mw8 center pv4 ph3" id="dashboard">
    <section class="flex-m flex-l nl3-m nr3-m nl3-l nr3-l">
      <nav class="w-100 w-25-m w-25-l mb4 mb0-l ph3-m ph3-l">
        <header class="mb2">
          <i class="material-icons f2 black-70">Dashboard</i>
        </header>
        <form class="mb4 w-100 w-70-m w-80-l">
          <input type="text" placeholder="Search" class="input-reset ba b--black-20 pa1 br2 f5 w-100" />
        </form>
        <h2 class="ttu mt0 mb2 f6 fw5 silver">Dashboards</h2>
        <ul class="list pl0 mt0 mb4">
          <li class="mb2">
            <a href="#" class="block link dim blue">Overview</a>
          </li>
          <li class="mb2">
            <a href="#" class="block link dim blue">Order History</a>
          </li>
          <li class="mb2">
            <a href="#" class="block link dim blue">Fluid Layout</a>
          </li>
          <li>
            <a href="#" class="block link dim blue">Icon Nav</a>
          </li>
        </ul>
        <h2 class="ttu mt0 mb2 f6 fw5 silver">More</h2>
        <ul class="list pl0 mt0 mb2">
          <li class="mb2">
            <a href="#" class="block link dim blue">Toolkit Docs</a>
          </li>
          <li class="mb2">
            <a href="#" class="block link dim blue">Bootstrap Docs</a>
          </li>
          <li class="mb2">
            <a href="#" class="block link dim blue">Dark UI</a>
          </li>
          <li>
            <a href="#" class="block link dim blue">Example Modal</a>
          </li>
        </ul>
      </nav>
      
    </section>
  </div>
</main>
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


<style scoped lang="scss">
body {
  font-family: 'Roboto';
  -webkit-font-smoothing: antialiased;
}

.bg-green {
  background: #1BC98E;
}

.bg-red {
  background: #E64759;
}

.bg-purple {
  background: #9F86FF;
}


.divide:before {
  background: rgba(0, 0, 0, .1);
  content: '';
  height: 1px;
  left: 0;
  position: absolute;
  right: 0;
  top: 8px;
  width: 100%;
  z-index: -1;
}
    
</style>

