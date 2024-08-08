#!/bin/bash
-set euo pipefail

cd md

for dir in $(find . -type d); do
    echo $dir
    mkdir -p ../gen/${dir:2}
done

for f in $(find . -name "*.md"); do
    fileName=${f%.*}
    fileName="../gen/${fileName:2}.html"
    echo "$f"
    echo "$fileName"
    pandoc -f markdown $f -o $fileName
done

cd ..