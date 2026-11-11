# 个人主页

`index.html` 是独立静态个人主页，内容依据本仓库 README。原创复古电脑插画、纸张配色和编辑式排版，灵感来自 Felix Rieseberg 的个人网站；没有复制其代码或图像。

## 本地预览

直接用浏览器打开 `index.html` 即可，无构建步骤、无依赖、无外部字体或追踪脚本。也可以在仓库根目录运行 `python3 -m http.server 8000`，然后访问 `http://localhost:8000`。

## 文件

- `index.html`：简介、项目、生活记录与社交链接。
- `assets/homepage/style.css`：桌面与手机布局、日夜配色、减少动态效果支持。
- `assets/homepage/main.js`：日夜切换。JavaScript 关闭时所有正文和链接仍然可用。
- `README.md`：GitHub 个人简介。原有历史记录与自动更新标记保留。

## 发布状态

GitHub Pages 已发布：[访问个人主页](https://keienwang.github.io/keienWang/)。发布使用 main 分支中的主页文件。GitHub README 不运行 JavaScript 或网页 CSS，点击仓库内 HTML 文件显示源码；请使用上述网址查看完整网页。

已在独立云浏览器检查桌面布局、日夜切换、刷新后主题保持、联系锚点和浏览器返回。移动端 CSS 已实现，但当前验证浏览器未提供可用的手机模拟功能，手机视觉尚未实测。

## 内容维护

项目与个人资料目前在 README 和 HTML 中分别维护。修改时请同步两处。阅读记录明确标记为 2023–2024 年旧记录，不代表当前动态；更多节点历史截图保留在 README，不作为当前运行状态展示。
