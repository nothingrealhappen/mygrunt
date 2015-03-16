我的Grunt配置
======
###说明
用于快速构建项目目录，实现前端工程自动化。当然这是定制的，如果你需要跑起来差不多还是要fork过去改改的。

###grunt功能
1. 图片压缩
2. CSS JS 合并压缩
3. SCSS编译
4. 实时监听文件变动并自动刷新浏览器
5. 打开一个本地Server，以供测试
6. 使用脚本自动安装运行

###使用步骤
1. 确保你已经安装`NodeJS`&`Grunt`(安装Grunt: npm install grunt-cli)
2. 使用最底部的一键运行脚本或者使用`技巧`里所说的sublime fetch插件将项目中的
3. 运行完脚本之后你的项目会有`index.slim``package.json``Gruntfile.js``src/`等文件，你需要自定义你的`Gruntfile.js`，其中标有TODO的是你需要注意的。
4. 接下来就是你所熟悉的流程了，运行`grunt deploy`可以将所必须的项目文件打包到`deploy/`目录，包含压缩（编译）后的`html/css/js/images`

###技巧
配合Sublime的[Fetch](http://net.tutsplus.com/articles/news/introducing-nettuts-fetch/)插件可以很方便的自动从Github上抓去最新脚本文件然后在本地安装，等待片刻就可以直接运行grunt了。

###我的Fetch插件配置
```javascript

{
	"files":
	{
		"fullpage": "https://raw.githubusercontent.com/alvarotrigo/fullPage.js/master/jquery.fullPage.min.js",
		"jquery": "http://code.jquery.com/jquery.min.js",
		"jweixin": "http://res.wx.qq.com/open/js/jweixin-1.0.0.js",
		"mygrunt": "https://raw.githubusercontent.com/liyaodong/mygrunt/master/mygrunt.sh",
		"normalize": "https://raw.githubusercontent.com/necolas/normalize.css/master/normalize.css"
	},
	"packages":
	{
		"html5_boilerplate": "https://github.com/h5bp/html5-boilerplate/zipball/master"
	}
}

```
###一键运行脚本
`curl -o mygrunt.sh https://raw.githubusercontent.com/liyaodong/mygrunt/master/mygrunt.sh && sh mygrunt.sh`

当然这也是一个很方便且很快的方法 ：）