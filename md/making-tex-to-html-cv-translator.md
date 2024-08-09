---
title: "Making tex to html CV translator"
date: 2023-07-27
---

# Motivation

For about a year, I had CV made with [LaTeX](https://www.latex-project.org/) in Overleaf (online
LaTeX editor). But I found it cumbersome to import new versions to Google Drive when CV was
updated. Therefore, I decided to translate tex cv to html.

# Solutions

There are two ways to transform LaTeX to html: either transform resulting pdf file, or the `.tex`
sources. I tried the first approach, and was unsatisfied with the results: all formatting was
removed, the result was plain text with some bold titles. Because of it I chose the second option
with translating LaTeX to html. [Latex.js](https://latex.js.org/) is a library made specifically
for this purpose.

Unfortunately, the capabilities of Latex.js are limiting, so I had to recreate my CV with the
minimal LaTeX supported by Latex.js[^1]. I hope, it looks similar.
[This is my old CV](https://www.overleaf.com/read/xdgqgnyvrwkt),
and [this is the new one](https://www.overleaf.com/read/ksdqgmdvdfcx).

Here is a script for translation:

```shell
#!/usr/bin/env bash

# declare constants
cv_path=../content/cv/main.tex
cv_html_path=../layouts/_default/cv.html
cv=$(<$cv_path)
temp=../scripts/output.txt

# comment tex instructions that are not working in Latex.js library
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
  -e 's/   //g' \ # remove generatedw whitepace characters
  -e 's/­//g' \ # here invisible char is removed
  -e 's/<\/h2>/<\/h2><hr>/g' \ # add horizontal line separators
  -e 's/<html style="--size: [0-9\.]*px;/<html style="--size: 16px;/g' \ # change font size to 16px
  -e 's/<title>untitled<\/title>/<title>Aleksey Kononov CV<\/title>/g' \ # add title
  -e 's/<span style="margin-right:170.079px">//' \ # remove whitespace under name
  -e 's/--marginparwidth: [0-9\.]*%;/--marginparwidth: 60%;/' \ # change date margin width
  -e 's/\(--[A-Za-z]*: [0-9]*\)\.[0-9]*/\1/g' \ # remove all floating point values for zoom to work
  > $cv_html_path
```

I used a lot of string replacements by utilizing
[sed](https://www.gnu.org/software/sed/manual/sed.html) command. The most frequent use of
it consists of command with three elements:`'s/<STRING>/<REPLACEMENT>/<FLAG>/'`, where `<FLAG>`
is `g` to change all the occurrences or empty to change only the first one. To make multiple
replacements, chain them with argument `-e`.

# Results

After that, I wanted to check if I really improved my time. Here are the steps needed to get link
to cv with tex-html translator or by Google Drive sharing:

<table>
  <thead>
    <tr>
      <th>Update CV on site</th>
      <th>Update CV on Drive</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="2" style="text-align: center">Open Overleaf</td>
    </tr>
    <tr>
      <td colspan="2" style="text-align: center">Edit file in Overleaf</td>
    </tr>
    <tr>
      <td>Open IDE</td>
      <td>Delete last CV file from Downloads</td>
    </tr>
    <tr>
      <td>Copy <code>main.tex</code> from Overleaf to site</td>
      <td>Load file from Overleaf</td>
    </tr>
    <tr>
      <td>Run script for CV transpiling</td>
      <td>Open Google Drive</td>
    </tr>
    <tr>
      <td>Push changes to site</td>
      <td>Upload file to Drive</td>
    </tr>
  </tbody>
</table>

Well, it doesn't seem that new solution is any better that the old one. But often I forgot to
delete previous CV from Downloads, therefore needed to do some additional steps.
Additionally, now I have a short and readable ~~[CV link](https://llesha.github.io/cv)~~!

[^1]: On this step I could completely dump the idea and recreate my CV purely using html. I'm sure
that there are great tools for exporting html to pdf. But I thought that having a CV in a .tex
format is more respectable or something.