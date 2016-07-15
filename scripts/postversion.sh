#!/bin/bash
cp package.json dist
cp *.md dist
git checkout dist
cp -a ./dist/ .
git add .
git commit -m $(node -p -e "require('./package.json').version")
