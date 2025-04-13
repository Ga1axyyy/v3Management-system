# vue3management 项目介绍文档

## 项目概述
vue3management 是一个基于 Vue 3 开发的管理系统模板，采用当代前端技术栈构建，为中小型后台管理系统提供了完整的解决方案。该项目实现了用户认证、权限管理、数据展示等基本功能，并集成了丰富的UI组件，使开发人员能够快速构建高质量的管理界面。

## 技术栈

- **核心框架**：Vue 3 + JavaScript
- **构建工具**：Vite
- **UI组件库**：Element Plus
- **状态管理**：Pinia
- **路由管理**：Vue Router
- **HTTP请求**：Axios
- **数据可视化**：ECharts
- **模拟数据**：Mock.js
- **CSS预处理器**：Less
- **代码规范工具**：ESLint + Prettier + Oxlint

## 项目结构

```
vue3management/
├── src/
│   ├── api/             # API请求和Mock数据
│   ├── assets/          # 静态资源
│   ├── components/      # 通用组件
│   ├── config/          # 配置文件
│   ├── router/          # 路由配置
│   ├── stores/          # Pinia状态管理
│   ├── views/           # 页面视图组件
│   ├── App.vue          # 根组件
│   └── main.js          # 入口文件
├── public/              # 公共静态资源
└── ...                  # 配置文件
```

## 主要功能

### 1. 用户认证系统
- 登录/注销功能
- 基于Token的身份验证
- 路由守卫实现未授权访问拦截

### 2. 权限管理
- 基于角色的动态路由生成
- 不同角色（admin/user）显示不同菜单
- 权限数据持久化存储

### 3. 页面布局
- 响应式侧边栏（可折叠）
- 标签页导航
- 面包屑导航

### 4. 数据展示
- 首页数据面板
- 用户管理表格
- 数据可视化图表

### 5. Mock数据
- 模拟API响应
- 用户数据
- 权限数据
- 首页统计数据

## 路由结构
- `/login` - 登录页面
- `/` - 主页框架（含侧边栏和头部）
  - `/home` - 首页仪表盘
  - `/user` - 用户管理页面
  - `/mall` - 商品管理页面
  - 其他动态路由页面
- `/404` - 404页面

## 状态管理
使用Pinia实现了状态管理，主要管理：
- 菜单折叠状态
- 标签导航
- 当前选中菜单
- 用户Token
- 动态路由列表

## 开发指南

### 环境要求
- Node.js 16+
- npm 7+

### 安装依赖
```bash
npm install
```

### 开发模式
```bash
npm run dev
```

### 生产构建
```bash
npm run build
```

### 代码规范检查
```bash
npm run lint
```

## 使用说明
1. 默认管理员账号：admin/admin
2. 普通用户账号：user/user
3. 不同角色登录后会看到不同的菜单项
4. 首页展示数据统计和图表
5. 用户页面提供用户数据管理功能

## 项目特点
- 完整的前端管理系统解决方案
- 动态路由和权限控制
- 响应式设计，适配不同屏幕尺寸
- 丰富的UI组件和数据可视化
- 开发环境完善，集成代码规范工具

## 扩展开发
1. 在 `src/views` 中添加新页面
2. 在 `src/api/mockData` 中添加相应的模拟数据
3. 更新权限配置文件以支持新页面的访问权限
4. 根据需要扩展状态管理和API接口

该项目为开发中小型管理系统提供了坚实的基础，可以根据实际业务需求进行扩展和定制。
