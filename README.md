```bash
npm run dev
# or
yarn dev
```
### next-React 服务端渲染

1. 快速创建next项目

```
    1. 安装脚手架 npm install -g create-next-app
    2. 创建项目名 npx create-next-app 项目名
    3. 安装依赖   npm i
    4. 运行项目   npm run dev
```

2. page  
```
    1. 直接在page下创建组件即可使用。 路由 直接在地址下输入 page =>/ 文件名
```

3. 路由的跳转 
```jsx
    1. 引入路由 import Router from 'next/router'
    2. {()=>{Router.push('/TestA')}} 耦合性太高，一般放到方法里进行跳转
    3. function toTestA(){
            Router.push('/TestA')
        }
```
4. 路由传参
```jsx
    1. function getParams(){
        Router.push({
            pathname:'/TestC',
            query:{
                name:"传参"
            }
        })
    }
    2. 使用 {router.query.name}接收     参考TestC   用withRouter接收
```
5. 六个钩子事件
```jsx
    1. Router.events.on('routeChangeStart',(...args)=>{
        /*
        *   1. routeChangeStart     路由开始变化时
            2. beforeHistoryChange  浏览器history触发前
            3. routeChangeComplete  路由结束变化时
            4. routeChangeError     路由错误跳转时
            5. hashChangeStart      hash跳转开始时
            6. hashChangeComplete   hash跳转完成时
        */   
    })
```
6. 使用getInitialProps来获取服务端数据
```jsx
    1. function TestC (){
        XXX
    }
    TestC.getInitialProps=()=>{
        axios.get('xxx').then((res)=>{console.log(res)})
    }
```
7. 使用style jsx来书写样式
```jsx
    1. <style jsx>
            {`
                div{color:blue;}
            `}
        </style>
```
8. 懒加载
```jsx
    1. 懒加载模块
        使用 async awiat 配合使用default
       
    2. 懒加载组件
        1. import dynamic from 'next/dynamic'   // 引入dynamic
        2. const DemoA = dynamic(import('./DemoA'))
        3. 在render中使用即可      详情 看Time组件
```
9. 自定义Head标签，便于SEO优化
```jsx
    1. 引入 import Head from 'next/head'
    2.  <Head>
            <title>技术胖是最胖的！</title>
            <meta charSet='utf-8' />
        </Head>    // 即可
```
10. 让next.js支持css文件
```jsx
    1. 新建文件夹下新建css文件
    2. 安装 yarn add @zeit/next-css 插件
    3. 新建next.config.js 并写下该配置
    4. 引入css文件即可
```

11. 按需引入antd
```
```  
 