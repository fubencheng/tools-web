<template>
  <div style="margin: 0 auto; width:70%; margin-top: 60px;">
    <Form ref="formItem" :model="formItem" :rules="ruleValidate" label-position="right" :label-width="100">
      <FormItem label="应用名：" prop="appName">
        <Input v-model="formItem.appName" placeholder="请输入CMDB中应用名..."/>
      </FormItem>
      <FormItem label="发布方式：" prop="deployType">
        <Select v-model="formItem.deployType" placeholder="请选择发布方式...">
          <Option value="micro">Boom</Option>
          <Option value="regular">Duang</Option>
        </Select>
      </FormItem>
      <FormItem label="日志类别：" prop="logType">
        <CheckboxGroup v-model="formItem.logType" size="large">
          <Checkbox label="INFO" disabled></Checkbox>
          <Checkbox label="WARN"></Checkbox>
          <Checkbox label="ERROR" disabled></Checkbox>
          <Checkbox label="BIZ"></Checkbox>
        </CheckboxGroup>
      </FormItem>
      <FormItem>
        <Button type="success" long @click="handleSubmit('formItem')">生成文件</Button>
      </FormItem>
    </Form>
    <div>
      <Button v-if="xmlContent != ''" class="btn-clipboard" v-clipboard="xmlContent" @success="handleSuccess" @error="handleError">点我剪切</Button>
      <Input v-model="xmlContent" type="textarea" rows="30"/>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  import LogbackAPI from '@/urls/LogbackAPI';
  import clipboard from 'clipboard';
  export default {
      name:'Logback',
      data() {
        return {
          xmlContent:'',
          formItem: {
            appName:'',
            deployType:'micro',
            logType:['INFO', 'ERROR']
          },
          ruleValidate: {
            appName: [
              { required: true, message: '应用名不能为空！', trigger: 'blur' }
            ],
            deployType: [
              { required: true, message: '发布方式不能为空！', trigger: 'change' }
            ],
            logType: [
              { required: true, type: 'array', min: 1, message: '至少要有一个日志类别！', trigger: 'change' }
            ],
          }
        }
      },
      methods: {
        handleSubmit(name){
          this.$refs[name].validate((valid) => {
            if (valid) {
              axios.get(LogbackAPI.downloadLogbackXml, {
                params:{
                  appName: this.formItem.appName,
                  source: this.formItem.deployType,
                  logType: this.formItem.logType.join("|")
                }
              }).then((resp) => {
                this.xmlContent = resp.data;
                this.$Message.success('文件已经生成！');
              }).catch((error) => {
                this.$Message.error('哎呀，出错啦！');
                this.xmlContent = '';
              })
            }
          })
        },
        handleSuccess(e) {
          this.xmlContent = '';
        },
        handleError(e) {
          this.$Message.error('哎呀，不支持剪切！');
        },
      }
    }
</script>

<style lang="scss" scoped>

</style>
