#!/usr/bin/env bash

# declare constants
cv_path=../content/cv/main.tex
cv_html_path=../layouts/_default/cv.html
cv=$(<$cv_path)
temp=../scripts/output.txt

# comment tex instructions that are not working in latex.js library
echo $cv | \
  sed -e 's/\\usepackage{titlesec}/%\\usepackage{titlesec}/' \
  -e 's/\\pagenumbering{gobble}/%\\pagenumbering{gobble}/' \
  -e 's/\\titlespacing/%\\titlespacing/' \
  -e 's/\\titleformat/%\\titleformat/' \
  -e 's/\\setlength{\\voffset}{-20pt}/%\\setlength{\\voffset}{-20pt}/' \
  -e 's/\\makebox\[[a-zA-Z0-9]*\][{}a-z\\A-Z0-9\.]*/%hr%/g' \
   > $temp

# create html from tex for cv
npx latex.js $temp -p > $cv_html_path
rm $temp

echo $(<$cv_html_path) | sed \
  -e 's/   //g' \ # remove generated characters
  -e 's/­//g' \
  -e 's/<\/h2>/<\/h2><hr>/g' \ # add horizontal line separators
  -e 's/<html style="--size: [0-9\.]*px;/<html style="--size: 16px;/g' \ # change font size to 16px
  -e 's/<title>untitled<\/title>/<title>Aleksey Kononov CV<\/title>/g' \ # add title
  -e 's/<span style="margin-right:170.079px">//' \ # remove whitespace under name
  -e 's/--marginparwidth: [0-9\.]*%;/--marginparwidth: 60%;/' \ # change date margin width
  -e 's/\(--[A-Za-z]*: [0-9]*\)\.[0-9]*/\1/g' \ # remove all floating point values for zoom to work
  > $cv_html_path