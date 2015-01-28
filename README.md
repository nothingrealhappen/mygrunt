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