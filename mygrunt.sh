#! /usr/bin/env bash

function setup_project() {
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
fi
