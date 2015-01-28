#! /usr/bin/env bash

function setup_project() {
    mkdir "src"
    mkdir "src/js"
    mkdir "src/image"
    mkdir "src/css"
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
    setup_project
    read -p '项目已初始化完毕是否需要删除本脚本 ？' yn
    case $yn in
        [Yy]* ) rm 'mygrunt.sh'; break;
    esac
fi
