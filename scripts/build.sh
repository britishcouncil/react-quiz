#!/bin/bash
echo "-- Building src files to dist directory"
rm -rf dist
babel src --out-dir dist

echo "-- Copying additional files to dist directory"
cp package.json dist
cp *.md dist
