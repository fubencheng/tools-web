<template>
  <div class="layout">
    <Layout>
      <Header style="background-color: #323639;">
        <ul class="za-monitor-maintenance">
          <li><router-link to="/home">监控平台</router-link></li>
          <li><router-link to="/tools">工具</router-link></li>
        </ul>
      </Header>
    </Layout>
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style lang="scss" scoped>

  .za-monitor-maintenance{
      width: 90vw;
      height: 6vh;
      margin: 0;
      padding: 0;
      list-style: none;
      font-size: 1.14rem;
    li{
        float: left;
        display: flex;
        justify-content: space-around;
      a{
        width: 12vw;
        height: 6vh;
        line-height: 6vh;
        color: rgb(194, 187, 187);
        text-align: center;
      }
    }
    li:nth-child(1){
      font-size: 1.6rem;
      margin-right: 2vw;
    }
    a:active{
      color: #169bd5;
    }

  }
</style>
