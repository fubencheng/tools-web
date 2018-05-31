<template>
  <div style="margin: 0 auto; width:70%; margin-top: 60px;">
    <ul>
      <li>
        <div id="main" style="width:80%; height: 400px;"></div>
      </li>
    </ul>
  </div>
</template>

<script>
  import echarts from 'echarts/lib/echarts'
  import bar from 'echarts/lib/chart/bar'
  import tooltip from 'echarts/lib/component/tooltip'
  import title from 'echarts/lib/component/title'

export default {
  name: 'CPU',
  data () {
    return {
      msg: 'Welcome to Monitor Dashboard'
    }
  },
  mounted() {
    this.drawLine();
  },
  methods: {
    drawLine() {
      // 初始化echarts实例
      let myChart = echarts.init(document.getElementById('main'))
      // 绘制图表
      myChart.setOption({
        title: { text: '销量统计' },
        tooltip: {},
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }]
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
