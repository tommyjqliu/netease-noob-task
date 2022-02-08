# 配置前端工作环境：vscode, lint and git
### VScode
#### 常用快捷键
- `Ctrl+K Ctrl+R` 打开快捷键参考
- `Ctrl+Shift+P, F1` 打开VScode命令面板
- `Ctrl+,` 打开设置
- `Ctrl+K Ctrl+S` 打开快捷键设置
- ``Ctrl+` `` 打开命令行
- `Ctrl+K Ctrl+0` 折叠所有块
- `Ctrl+K Ctrl+J` 展开所有块
- `Shift+Alt+F` 代码格式化
- `Alt+Click` 多光标选中
- `Ctrl+Alt+Up Ctrl+Alt+Down` 向相邻行相同位置增加光标
- `Ctrl+Shift+L` 对相同匹配选中增加光标
- `Ctrl+Space` 显式代码提示
#### 常用配置
VScode的大部分设置都储存在setting.json文件中。这个文件有两个版本，用户版本与工作区版本。用户版本会储存在系统用户文件夹，并且通过网络自动同步；工作区版本则会储存在工作区的.vscode文件夹。应用时，工作区配置的优先级要高于用户配置。
```javascript
"editor.fontsize": [number],
"editor.fontFamily": "Fira Code,Consolas,微软雅黑,黑体",
"files.autoSave": "onFocusChange" || "afterDelay",
```
#### 添加自定义代码补全
`Ctrl + Shift + P` 打开命令面板，再输入snippets，选中到配置用户代码片段，再进行具体设置
```json
"Code block":{
		"scope": "markdown",
		"prefix": "code",
		"body": [
				"```${1|javascript,css,html,bash,json|}",
				"$TM_SELECTED_TEXT$0",
				"```"
		]
	},
```
ref: https://code.visualstudio.com/docs/editor/userdefinedsnippets#_create-your-own-snippets
#### eslint配置
先安装eslint npm包，并进行初始化配置
```bash
$ npm install eslint --save-dev
...
$ npx eslint --init
You can also run this command directly using 'npm init @eslint/config'.
npx: 40 安装成功，用时 4.93 秒
√ How would you like to use ESLint? · problems
√ What type of modules does your project use? · esm
√ Which framework does your project use? · react
√ Does your project use TypeScript? · No / Yes
√ Where does your code run? · browser
√ What format do you want your config file to be in? · JavaScript
...
Successfully created .eslintrc.js file in E:\WorkDir\netease_noob_task
```
然后就可以通过调用`eslint <path>`来进行代码检查,用`eslint <path> --fix`来修复格式。
```bash
eslint . --fix # 修复当前路径下所有文件
```
具体的格式规则需要配置在.eslintrc.js文件中，如例
```javascript
...
"rules": {
	"quotes": 2,
	"semi": 1,
	"no-console": 1,
	"space-before-function-paren": 0
}
```
可以在根目录下配置.eslintignore文件来忽略指定路径
#### vscode的eslint插件
安装vscode的eslint插件，vscode就会在开发时调用eslint模块进行代码检查与格式化，更加方便我们的开发。
```json
// 可在setting.json增加的相关配置
"editor.formatOnType": true,
"editor.formatOnSave": true,
"eslint.codeAction.showDocumentation": {
	"enable": true
},
"editor.codeActionsOnSave": {
	"source.fixAll.eslint": true,
},
"eslint.validate": ["javascript", "javascriptreact", "html", "vue"],
```
#### stylelint配置
类似的，通过以下命令进行stylelint的安装
```bash
npm install stylelint --save-dev
```
然后就可以通过调用以下命令进行对css的样式检查及修复
```bash
stylelint src/**/*.css --fix
```
stylelint可以通过以下三个方式进行配置
- package.json 中的stylelint 属性。
- .stylelintrc.js文件
- stylelint.config.js 文件输出的js对象

一般而言可以使用标准规范,先进行安装`npm i --save-dev stylelint-config-standard`，再如下配置
```javascript
{
		//.stylelintrc.js
    // 使用规范
    "extends": "stylelint-config-standard",
    // 自定义4个空格缩进
    "rules": {
        "indentation": 4
    }
}
```
类似的，可以通过安装vscode的Stylelint插件增强开发时体验。

#### commitlint
安装
```bash
npm install --save-dev @commitlint/cli @commitlint/config-conventional
# 配置 commitlint 使用 conventional config
echo "module.exports = { extends: ['@commitlint/config-conventional'] };" > commitlint.config.js
```
commitlint通过标准输入接受message参数
```bash
echo 'foo: bar' | commitlint
⧗   input: foo: bar
✖   type must be one of [build, chore, ci, docs, feat, fix, perf, refactor, revert, style, test] [type-enum]

✖   found 1 problems, 0 warnings
ⓘ   Get help: https://github.com/conventional-changelog/commitlint/#what-is-commitlint
```
#### husky
有了上面三个质量保证工具，我们还需要把他们嵌入到工作流中，实现自动化的规范检查。利用husky，我们可以方便的修改githook，在githook中添加命令在实现质量保证。
```bash
# 安装
npm install husky --save-dev
npx husky install
```
原理上，husky install是将git的工作区配置增加了一行`core.hookspath=.husky`,将githook储存的文件夹指向了.git文件夹外的.husky文件夹，从而解决了.git文件夹不属于git repository，无法做版本控制的问题。

通过husky add我们可以向hook文件追加命令，如
```bash
npx husky add .husky/commit-msg 'npx --no-install commitlint --edit "$1"'
```
这样我们就实现了在commit时调用commitlint进行检查。由于本质上husky只是把githook换了个地方，所以具体的编写规则还得看回git自己的文档。
### Git
#### 配置
Git的配置文件存在三个版本，系统配置(global)，用户配置(system)，工作区配置(local)。他们的优先级依次递增。

`git config --list --show-origin` 查看当前路径启用的所有配置项

`git config --[scope] [key] [value]` 设置配置项

常设配置
```bash
$ git config --global user.name "John Doe" 
$ git config --global user.email johndoe@example.com
# 个人信息
$ git config --global alias.sw switch
# 命令别名

```
#### 基本版本控制
```bash
git clone [path] [rename]# 克隆库
git init # 在当前目录初始化
git add [path] # 添加要跟踪版本的文件
git commit -m [message] # commit一个版本 
git status # 查看当前工作区情况
git diff 
git log # 查看历史提交
git reset

git remote -v # 查看远程库设置
git fetch [remote] # 拉取远端信息
git pull # 拉取并试图自动merge
git push [remote] [branch] # 推送更改
git remote show [remote] # 查看远端库状态

git switch [branch] # switch branch
git switch -c [branch] # create branch and switch to it
```

### Devtools
#### 元素
![](https://s3.bmp.ovh/imgs/2022/01/fd9c2f47657d639b.png)
这个面板主要是对页面的DOM结构和CSS相关进行观察和开发。
#### 控制台
![](https://s3.bmp.ovh/imgs/2022/01/183340ce9fabbe82.png)
这个页面用于查看代码的console输出，以及运行实时命令。
#### 网络
![](https://s3.bmp.ovh/imgs/2022/01/6432b8d60760e1d2.png)
这个页面用于查看页面的请求情况，包括对静态资源的请求以及对接口的请求。
#### 源代码
![](https://s3.bmp.ovh/imgs/2022/01/df66477e3770bab7.png)
这个页面用于对页面的源代码进行调试，可以进行添加断点以及查看环境变量等操作。
#### 性能
![](https://s3.bmp.ovh/imgs/2022/01/fa1e6c223851f8b9.png)
这个页面用于测量页面的性能情况，包括查看加载时间，页面内容变化，布局变化等性能指标。
#### 应用程序
![](https://s3.bmp.ovh/imgs/2022/01/8269cf0cebdb5254.png)
这个页面主要用于查看浏览器储存和service worker的情况
#### reference
- https://developer.chrome.com/docs/devtools/dom/
- https://docs.microsoft.com/zh-cn/microsoft-edge/devtools-guide-chromium/
### markdown
Markdown语法较为简单，详见
https://markdown.com.cn/cheat-sheet.html#%E6%80%BB%E8%A7%88