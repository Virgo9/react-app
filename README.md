### 搭建
`git clone https://github.com/virgo02014/react-app.git`
`cd react-app`

`yarn install`
`yarn start`


### 目录结构
```
my-app/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    index.css
    index.js
    logo.svg
```


### 技术点
- [x] 运用 ES6 语法
- [x] 使用 JSX 语句
- [x] 类型检测 prop-types
- [x] 普通样式 className
      ```
        .sty1{ 
            color: white; 
            font-size: 20;
        }
        import './style.css'; 
        <div className="sty1">看文字颜色</div>

        .sty2{ 
            color: white; 
            font-size: 20;
        }
        import StyleOther from  './style.css'; 
        <div className={StyleOther.sty2}>看文字颜色</div>
      ```
- [x] 行内样式 LineStyle
      ```
        let textColor = { 
            color: "white", 
            fontSize: 20
        };
        <div style={backAndTextColor}>看文字颜色</div>

        <div style={{color:'white',fontSize:20}}>看文字颜色</div>
      ```
- [x] 拆分组件 Product、Game
- [x] 运用 redux
- [x] 运用 react-native
- [ ] 轮播图
- [ ] 路由

