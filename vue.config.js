// 引入 @vue/cli-service 中的 defineConfig 函数，用于定义 Vue CLI 项目的配置
const { defineConfig } = require("@vue/cli-service");

// 使用 defineConfig 函数导出项目配置对象
module.exports = defineConfig({
  // 设置是否对依赖进行转译，设为 true 表示会对所有依赖进行转译
  transpileDependencies: true,
  // chainWebpack 用于链式调用的方式修改 webpack 配置
  chainWebpack: (config) => {
    // 通过 plugin 方法获取名为 "define" 的插件，并使用 tap 方法修改其配置
    config.plugin("define").tap((definitions) => {
      // 使用 Object.assign 方法将新的全局常量合并到原有的定义中
      Object.assign(definitions[0], {
        // 启用 Vue 的选项式 API
        __VUE_OPTIONS_API__: "true",
        // 生产环境下禁用开发者工具
        __VUE_PROD_DEVTOOLS__: "false",
        // 生产环境下禁用 hydration 不匹配的详细信息
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: "false",
      });
      // 返回修改后的定义
      return definitions;
    });
    // 通过 module.rule 方法匹配处理 .vue 文件的规则
    config.module
      .rule("vue")
      // 使用 use 方法获取 vue-loader
      .use("vue-loader")
      // 使用 tap 方法修改 vue-loader 的配置选项
      .tap((options) => {
        // 合并已有的 compilerOptions 配置，如果没有则创建一个空对象
        options.compilerOptions = {
          ...(options.compilerOptions || {}),
          // 定义一个函数来识别自定义元素，这里识别 <micro-app> 标签
          isCustomElement: (tag) => /^micro-app$/.test(tag), // 识别 <micro-app> 标签
        };
        // 返回修改后的配置选项
        return options;
      });
  },
});
