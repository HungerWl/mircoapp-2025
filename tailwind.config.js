/** @type {import('tailwindcss').Config} */
// 导出 Tailwind CSS 的配置对象
module.exports = {
  // 指定 Tailwind CSS 需要扫描的文件路径，用于生成对应的 CSS 类
  content: ["./src/**/*.{vue,js,ts,jsx,tsx}", "./public/index.html"],
  // 主题配置，用于自定义 Tailwind CSS 的设计系统
  theme: {
    // 用于扩展默认主题的配置
    extend: {},
  },
  // @tailwindcss/forms 插件用于快速生成美观、一致的表单样式
  // @tailwindcss/typography 插件用于为富文本内容添加优雅的排版样式
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
