let myPlugins = {};

// vue: 自带vue实例对象，options: 调用传入的参数
myPlugins.install = function(vue, options){
  // 回调函数参数：element：标签对象target，
  // vue：包含数据的对象，其value对应<h1 v-upper="msg">/h1<>中的msg变量值
  vue.directives(options.name, (element, vue) => {
    element.innerHTML = vue.value.toUpperCase;
  });
}

export default myPlugins;