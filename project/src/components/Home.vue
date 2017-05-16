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
      <article class="w-100 w-75-m w-75-l ph3-m ph3-l">
        <header class="mb3">
          <h2 class="ttu mt0 mb1 f6 fw5 silver">Dashboards</h2>
          <h1 class="fw3 dark-gray mt0 mb0">Overview</h1>
        </header>
        <hr class="o-20" />
        <div class="flex-m flex-l flex-wrap items-center justify-between nl3 nr3 pt4 mb4">
          <div class="w-100 w-50-m w-33-l ph3 tc mb4 mb0-l">
            <div class="w-50 w-50-m w-75-l center">
              <doughnut :labels="newVsReturning.labels" :data="newVsReturning.data"></doughnut>
            </div>
            <h3 class="mt3 mb1 f6 fw5 silver">Traffic</h3>
            <h4 class="dark-gray f3 fw3 mv0">New vs. Returning</h4>
          </div>
          <div class="w-100 w-50-m w-33-l ph3 tc mb4 mb0-l">
            <div class="w-50 w-50-m w-75-l center">
              <doughnut :labels="newVsRecurring.labels" :data="newVsRecurring.data"></doughnut>
            </div>
            <h3 class="mt3 mb1 f6 fw5 silver">Revenue</h3>
            <h4 class="dark-gray f3 fw3 mv0">New vs. Recurring</h4>
          </div>
          <div class="w-100 w-50-m w-33-l ph3 tc mb4 mb0-l">
            <div class="w-50 w-50-m w-75-l center">
              <doughnut :labels="directVsReferrals.labels" :data="directVsReferrals.data"></doughnut>
            </div>
            <h3 class="mt3 mb1 f6 fw5 silver">Traffic</h3>
            <h4 class="dark-gray f3 fw3 mv0">Direct vs. Referral</h4>
          </div>
        </div>
        <div class="divide tc relative">
          <h5 class="fw4 ttu mv0 dib bg-white ph3">Quick Stats</h5>
        </div>
        <div class="flex flex-wrap mt3 nl3 nr3">
          <div class="w-50 w-25-l mb4 mb0-l relative flex flex-column ph3">
            <sparkline title="Page Views" class="bg-green" value="1,293"></sparkline>
          </div>
          <div class="w-50 w-25-l mb4 mb0-l relative flex flex-column ph3">
            <sparkline title="Downloads" class="bg-red" value="758"></sparkline>
          </div>
          <div class="w-50 w-25-l mb4 mb0-l relative flex flex-column ph3">
            <sparkline title="Sign-Ups" class="bg-purple" value="1,293"></sparkline>
          </div>
          <div class="w-50 w-25-l mb4 mb0-l relative flex flex-column ph3">
            <sparkline title="Downloads" class="bg-blue" value="758"></sparkline>
          </div>
        </div>
        <hr class="o-20 mt4" />
        <div class="flex flex-wrap pt3 nl3 nr3">
          <div class="w-100 w-50-l ph3 mb3 mb0-l">
            <div class="bt bl br b--black-10 br2">
              <div class="pa3 bb b--black-10">
                <h4 class="mv0">Countries</h4>
              </div>
              <metric-list-item v-for="(country, index) in countryData" :key="index" :show-bar="country.showBar" :name="country.name" :value="country.value">
              </metric-list-item>
            </div>
            <a href="#" class="no-underline fw5 mt3 br2 ph3 pv2 dib ba b--blue blue bg-white hover-bg-blue hover-white">All Countries</a>
          </div>
          <div class="w-100 w-50-l ph3 mb3 mb0-l">
            <div class="bt bl br b--black-10 br2">
              <div class="pa3 bb b--black-10">
                <h4 class="mv0">Most Visited Pages</h4>
              </div>
              <metric-list-item v-for="(page, index) in pageData" :key="index" :show-bar="page.showBar" :name="page.name" :value="page.value">
              </metric-list-item>
            </div>
            <a href="#" class="no-underline fw5 mt3 br2 ph3 pv2 dib ba b--blue blue bg-white hover-bg-blue hover-white">All Pages</a>
          </div>
        </div>
        <div class="mt4">
          <div class="w-100 mb3 mb0-l">
            <div class="bt bl br b--black-10 br2">
              <div class="pa3 bb b--black-10">
                <h4 class="mv0">Devices and Resolutions</h4>
              </div>
              <metric-list-item v-for="(device, index) in deviceData" :key="index" :show-bar="device.showBar" :name="device.name" :value="device.value">
              </metric-list-item>
            </div>
            <a href="#" class="no-underline fw5 mt3 br2 ph3 pv2 dib ba b--blue blue bg-white hover-bg-blue hover-white">All Devices</a>
          </div>
        </div>
      </article>
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

