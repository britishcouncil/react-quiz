#!/bin/bash
echo "-- Copy files to dist directory"
cp package.json dist
cp *.md dist

echo "-- Switch to dist branch"
git checkout dist || git checkout -b dist
git fetch
git reset --hard origin/dist

echo "-- Commit the new version"
cp -a ./dist/ .
git add .
git commit -m $(node -p -e "require('./package.json').version")
