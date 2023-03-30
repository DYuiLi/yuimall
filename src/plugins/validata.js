import Vue from "vue";
import VeeValidate from "vee-validate";
import zh_CN from 'vee-validate/dist/locale/zh_CN';    // 引入提示语为中文


Vue.use(VeeValidate);

// 表单验证规则
VeeValidate.Validator.localize('zh_CN', {
  messages: {
    ...zh_CN.messages,
    is: (field) => `${field}确认密码与密码不一致`,
    arrtibutes: {
      phone: '手机号',
      code: '验证码',
      password: '密码',
      password2: '确认密码',
      protocol: '协议'
    }
  }
});