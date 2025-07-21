// 导出 ESLint 配置对象，该配置用于指定项目的代码检查规则
module.exports = {
  // 设置为 true 表示该配置文件为根配置文件，ESLint 将不再向上查找其他配置文件
  root: true,
  // 指定代码运行的环境，不同的环境会预定义不同的全局变量
  env: {
    // 启用 Node.js 环境，意味着可以使用 Node.js 的全局变量和 API
    node: true,
  },
  // 指定要继承的 ESLint 配置，这些配置会被合并到当前配置中
  extends: [
    // 继承 Vue 3 的基本规则插件，用于检查 Vue 3 代码
    "plugin:vue/vue3-essential",
    // 继承 ESLint 官方推荐的规则
    "eslint:recommended",
    // 继承 Prettier 插件的推荐规则，确保 ESLint 与 Prettier 格式化工具兼容
    "plugin:prettier/recommended",
  ],
  // 解析器的选项配置，用于指定代码解析的相关设置
  parserOptions: {
    // 指定使用 @babel/eslint-parser 作为代码解析器，支持 Babel 语法
    parser: "@babel/eslint-parser",
  },
  // 自定义 ESLint 规则，可覆盖继承的规则
  rules: {
    // 控制 console 的使用，在生产环境下发出警告，非生产环境下不做限制
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    // 控制 debugger 的使用，在生产环境下发出警告，非生产环境下不做限制
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    // 关闭 Vue 多单词组件名规则，允许使用单单词命名组件
    "vue/multi-word-component-names": "off",
    "no-unused-vars": "off", // 完全关闭未使用变量的检查
  },
};
