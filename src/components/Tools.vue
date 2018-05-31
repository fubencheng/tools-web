<template>
 <div>
   <Row>
     <Col span="2">
       <Menu style="height:100vh;" width="200px" @on-select="toTarget">
         <MenuItem name="logback">
           <Icon type="ios-paper"></Icon>
           logback配置
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
 name:'Tools',
 data () {
     return {

     }
 },
  methods: {
    toTarget(name){
      if("logback" === name){
        this.$router.push({ path: "/tools/logback" });
      }
    }
  }
}
</script>
<style lang="scss" scoped>

</style>

