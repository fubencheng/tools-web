<template>
  <div>
    <Row>
      <Col span="2">
      <Menu style="height:100vh;" width="200px" @on-select="toTarget">
        <MenuItem name="cpu">
          <Icon type="stats-bars"></Icon>
          CPU 监控
        </MenuItem>
      </Menu>
      </Col>

      <Col span="22">
      <div>
        <router-view/>
      </div>
      </Col>
    </Row>
  </div>
</template>
<script>
export default {
  name:'Home',
  data () {
     return {

     }
  },
  methods: {
    toTarget(name){
      if("cpu" === name){
        this.$router.push({ path: "/home/cpu" });
      }
    }
  }
}
</script>
<style lang="scss" scoped>

</style>

