#! /usr/bin/env bash

function setup_project() {
    npm install --save
    echo 'Enjoy coding!'
}

if [ -a package.json ];
then
    setup_project
else
    echo '正在初始化项目结构'
    curl -o 'package.json' 'https://raw.githubusercontent.com/liyaodong/mygrunt/master/package.json'
    curl -o  'Gruntfile.js' 'https://raw.githubusercontent.com/liyaodong/mygrunt/master/Gruntfile.js'
    curl -o  '.gitignore' 'https://raw.githubusercontent.com/liyaodong/mygrunt/master/.gitignore'
    curl -o  'index.html' 'https://raw.githubusercontent.com/liyaodong/mygrunt/master/index.html'
    setup_project
    mkdir 'src/css/ src/js/ src/images'
    git init
    read -p '项目已初始化完毕是否需要删除本脚本 ？' yn
    case $yn in
        [Yy]* ) rm 'mygrunt.sh'; break;
    esac
fi
