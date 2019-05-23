'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  // 初始状态
  initializing() {
    this.props = {}
    this.log(
      yosay(`${chalk.red('generator-cool-vue')} 脚手架!`)
    )
    this.log(
      chalk.magenta(
        `尊敬的开发者，欢迎您` +
        '\n' +
        '这是supermao开发的项目脚手架，Powered by https://mbmin/github.io' +
        '\n'
      )
    )
  }
  prompting() {
    // 用户交互式选项
    const prompts = [
      {
        type: 'input',
        name: 'name',
        message: '请输入项目名称',
        default: 'my-project'
      },
      {
        type: 'input',
        name: 'description',
        message: '请输入项目描述信息',
        default: '项目基本描述'
      },
      {
        type: 'input',
        name: 'version',
        message: '请输入项目版本号（1.0.0）',
        default: '1.0.0'
      },
      {
        type: 'input',
        name: 'email',
        message: '请输入您的邮箱地址',
        default: '1737764939@qq.com'
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    // 写入磁盘操作
    const { name } = this.props
    this.destinationRoot(this.destinationPath(name))

    this.fs.copyTpl(
      `${this.templatePath()}/**/!(_)*`,
      this.destinationPath(),
      this.props,
      {},
      { globOptions: { dot: true } } //copy all dots files
    );
  }

  install() {
    this.log(
      chalk.magenta('安装依赖，本过程将持续1-2分钟')
    )
    this.installDependencies();
  }
  end() {
    const { name } = this.props
    console.log();
    console.log(chalk.cyan('  cd'), name);
    console.log(chalk.cyan('npm run start'));
    console.log(chalk.cyan('编码愉快'));
  }
};
