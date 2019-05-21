# generator-cool-vue [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]
> A cool vue cli

## Installation

First, install [Yeoman](http://yeoman.io) and generator-cool-vue using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-cool-vue
```

Then generate your new project:

```bash
yo cool-vue
```

## 本项目用于构建自定义脚手架模板——cool-vue
  * 用于快捷搭建自定义项目模板，流程如下：
    1. 本地全局安装yeoman，以及generator-cool-vue;
    2. 运行 yo cool-vue即可创建项目模板。
  * yeoman-generator的生命周期
  ```js
    module.exports = class extends Generator {
      initianlizing() {
        // 获取当前项目状态，获取基本参数等
      }
      prompting() {
        // 向用户展示交互式问题用于收集关键自定义参数
      }
      configuring() {
        // 保存配置相关信息并生成配置文件（名称多为'.'开头的配置文件，例如.editorconfig）
      }
      default() {
        // 未匹配任何生命周期方法的非私有方法都是在这里自动执行
      }
      writing() {
        // 依据模板的配置进行新项目结构的文件书写操作
      }
      conflicts() {
        // 处理冲突（内部调用，一般不做处理）
      }
      install() {
        // 使用指定的包管理工具进行依赖安装（支持yarn，npm，bower）
      }
      end() {
        // 结束动作，如清屏，输出结束信息，say-goodbye等
      }
    }
  ```
## 参考博客地址
[大前端的自动化工厂-Yeoman](https://blog.51cto.com/13869008/2156020)

## License

MIT © [supermao](https://github.com/MbMin)


[npm-image]: https://badge.fury.io/js/generator-cool-vue.svg
[npm-url]: https://npmjs.org/package/generator-cool-vue
[travis-image]: https://travis-ci.org/MbMin/generator-cool-vue.svg?branch=master
[travis-url]: https://travis-ci.org/MbMin/generator-cool-vue
[daviddm-image]: https://david-dm.org/MbMin/generator-cool-vue.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/MbMin/generator-cool-vue
[coveralls-image]: https://coveralls.io/repos/MbMin/generator-cool-vue/badge.svg
[coveralls-url]: https://coveralls.io/r/MbMin/generator-cool-vue
