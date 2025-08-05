
# 外贸门窗官网开发说明（README）

本项目基于 React + Tailwind CSS 开发，用于构建面向澳大利亚市场的高端外贸门窗企业官网，整体风格动画、交互、内容参考网站：https://www.yywindow.com/

---

## 🔧 技术栈

- React
- Tailwind CSS
- React Router DOM
- Formspree（表单转发至邮箱）
- 国际化：react-i18next（中英双语）默认英文
- 图片占位服务：Picsum、Unsplash Source

---

## 🧩 项目核心模块一览（来自需求文档）

1. 多语言支持系统（中英切换，默认英文）
2. 响应式导航系统（顶部导航 + 移动端抽屉菜单）
3. 产品展示系统（产品分类、详情、搜索、筛选）
4. 关于我们系统（公司介绍、团队、实力展示）
5. 证书认证系统（按类型分类、查看详情、下载）
6. 联系我们系统（联系方式 + 表单提交）
7. 首页视觉模块（主视觉、品牌价值、精选产品）

---

## 🖼️ 图片占位指引

网站正式上线前暂未准备图片素材，请开发时在涉及图片展示区域使用以下第三方图片占位服务：

### 推荐图片占位服务

| 场景             | 占位图 URL 示例 |
|------------------|-----------------|
| 产品图片         | https://source.unsplash.com/600x400/?window |
| 团队照片         | https://source.unsplash.com/600x400/?team |
| 公司环境         | https://source.unsplash.com/600x400/?office |
| 证书展示         | https://source.unsplash.com/600x400/?certificate |
| 默认随机图       | https://picsum.photos/600/400 |

> ✅ 所有图片组件请标注 `// TODO: Replace with actual image`

---

## ✍️ AI IDE Prompt 建议（适用于 Cursor / Continue / Codestral 等）

```
请根据以下说明生成网站页面代码，使用 React 和 Tailwind CSS：

- 网站图片素材尚未准备，请在涉及图片处统一使用 https://source.unsplash.com 或 https://picsum.photos 作为占位图；
- 若图片主题明确，可使用 https://source.unsplash.com/600x400/?关键词，如 ?window、?certificate；
- 所有图片组件请加注释 // TODO: Replace with actual image；
- 按照模块结构拆分页面组件，如 Homepage、ProductsPage、AboutPage、ContactPage；
- 每个主要模块生成单独 React 组件；
- 表单提交通过 Formspree 实现；
- 国际化使用 react-i18next，URL 支持 /en/ 与 /cn/；
```

---

## 🚀 部署建议

- 推荐平台：Vercel（支持绑定 Namecheap 域名、自动 HTTPS）
- 自定义域名设置：在 Vercel 中添加域名，在 Namecheap 中设置 CNAME 或 A 记录
- 表单服务推荐：Formspree（免费版支持 50 封/月）

---

## 📂 文件结构建议

```
src/
├── assets/             # 图片、图标
├── components/         # 可复用组件
├── pages/              # 页面模块（Home, Products, About, etc.）
├── i18n/               # 国际化语言文件
├── App.jsx
├── index.jsx
```

---

## ✅ 附件

本项目基于如下详细需求文档开发：

**《外贸门窗网站需求功能点.md》**

包含完整功能模块说明、交互动画、表单字段、内容结构、技术要求等细节。

---
