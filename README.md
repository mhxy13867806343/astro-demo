# 英雄联盟英雄资料库

这是一个使用Astro框架构建的英雄联盟英雄资料库网站，提供英雄列表和详情页面，支持响应式布局和模糊搜索功能。

## 🌐 在线访问

- **在线演示**：[https://astro-demo-chi-seven.vercel.app/heroes](https://astro-demo-chi-seven.vercel.app/heroes)
- **部署平台**：Vercel

## 🚀 功能特点

- **英雄列表展示**：以卡片形式展示所有英雄，包含头像、名称和称号
- **英雄详情页**：展示英雄的详细信息，包括技能、属性和皮肤
- **模糊搜索**：支持通过英雄名称、称号或关键词进行搜索
- **角色筛选**：可以按照英雄角色类型（战士、法师、刺客等）进行筛选
- **响应式布局**：适配各种屏幕尺寸，从手机到桌面设备
- **暗色主题**：默认使用暗色主题，符合游戏风格

## 📱 页面展示

### 英雄列表页

- 顶部导航栏：网站标题和主题切换
- 搜索和筛选区域：可以输入关键词搜索或按角色筛选
- 英雄卡片网格：响应式布局，自动适应不同屏幕尺寸

### 英雄详情页

- 英雄基本信息：头像、名称、称号和角色类型
- 技能详情：技能图标、名称和描述
- 英雄属性：攻击、防御、魔法和难度的可视化展示
- 英雄皮肤：展示该英雄的皮肤列表

## 🔧 技术栈

- **[Astro](https://astro.build/)**：核心框架，用于构建高性能网站
  - 使用 [Astro Pages](https://docs.astro.build/zh-cn/basics/astro-pages/) 构建页面路由
  - 利用 Astro 的 SSG (静态站点生成) 能力提高性能
  - 支持动态路由和数据获取
- **[TailwindCSS](https://tailwindcss.com/)**：用于样式和响应式设计的实用工具类CSS框架
- **[DaisyUI](https://daisyui.com/)**：基于 TailwindCSS 的组件库，提供美观的UI组件
- **[Axios](https://axios-http.com/)**：用于数据请求的 HTTP 客户端
- **TypeScript**：提供类型安全和更好的开发体验

## 📊 数据来源

本项目使用英雄联盟官方API获取英雄数据：

- 英雄列表：`https://game.gtimg.cn/images/lol/act/img/js/heroList/hero_list.js`
- 英雄详情：`https://game.gtimg.cn/images/lol/act/img/js/hero/{id}.js`

## 🧞 命令

所有命令都在项目根目录下运行：

| 命令                     | 操作                                |
| :------------------------ | :---------------------------------- |
| `npm install`             | 安装依赖                           |
| `npm run dev`             | 启动本地开发服务器，地址为 `localhost:4321` |
| `npm run build`           | 构建生产版本到 `./dist/` 目录      |
| `npm run preview`         | 在部署前本地预览生产构建           |

## 📝 注意事项

- 本项目仅用于学习和展示目的，非官方网站
- 所有数据和图片版权归腾讯公司所有
- 响应式设计支持从移动设备到桌面设备的各种屏幕尺寸

## 👤 贡献指南

欢迎对本项目进行贡献！以下是贡献步骤：

1. Fork 本仓库
2. 创建你的功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交你的更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启一个 Pull Request

## 🔒 开源许可证

本项目采用 MIT 许可证。详见 [LICENSE](LICENSE) 文件。

## 👏 致谢

- [Astro](https://astro.build/) - 提供了高效的网站构建框架
- [英雄联盟 API](https://developer.riotgames.com/) - 提供游戏数据
- [TailwindCSS](https://tailwindcss.com/) 和 [DaisyUI](https://daisyui.com/) - 提供美观的 UI 组件和样式
