module.exports = {
    title: "",
    description: "系统运维部",
    head: [
        ['meta', { name: 'keywords', content: 'Vue 驱动的静态网站生成器' }],
        ['meta', { name: 'theme-color', content: '#3eaf7c' }]
  ],
  themeConfig: {
    lastUpdated: "更新时间", // 文件最后更新时间
    search: true,
    searchMaxSuggestions: 10,
    logo: "/assets/img/hero.png",
    nav: [
      { text: "Home", link: "/" },
      { text: "运维服务指引", link: "/about/" },
      { text: "组件规范", link: "/module/" },
      { text: "知识库", link: "/knowledge/test01" },
      { text: "OCP 使用帮助", link: "/language/ocp01" },
      {
        text: "Vue 学习笔记",
        items: [
          { text: "笔记", link: "/guide/vue/test03" }, // 可不写后缀 .md
          { text: "百度", link: "https://www.baidu.com/" }, // 外部链接
        ],
      },
    ],
    // displayAllHeaders: true,// 显示所有页面的标题链接：
    sidebar: {
      "/guide/vue/": ["test01", "test02", "test03"],
      "/about/": [
        "",
        "one" /* /foo/one.html */,
        "two" /* /foo/two.html */,
        "three" /* /foo/ */,
      ],
      "/module/": [
        "" /* /bar/ */,
        "one" /* /bar/three.html */,
        "two" /* /bar/four.html */,
        "three",
      ],
      "/knowledge/": [
        {
          title: "知识库",
          collapsable: false,
          children: ["test01", "test02", "test03"],
        },
        ],
      "/language/": [
        {
          title: "OCP使用帮助",
          collapsable: false,
          children: ["ocp01", "ocp02", "ocp03"],
        },
      ],
    },
    sidebarDepth: 2,
    activeHeaderLinks: false, //用户通过滚动查看页面的不同部分时，嵌套的标题链接和 URL 中的 Hash 值会实时更新
    smoothScroll: true, // 页面滚动效果
  },
};
