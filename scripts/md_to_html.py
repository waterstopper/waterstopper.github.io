import fnmatch
import re
import shutil
from typing import Dict, List
import os
from pathlib import Path
from string import Template

def wrap_body(title: str, date: str, body: str, head: str) -> str:
    top_part = """<!DOCTYPE html>
<html date="$date" data-theme="light">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>WATERSTOPPER | $title_tab</title>
    <link rel="stylesheet" href="/css/styles.css">
    <link rel="stylesheet" href="/css/colors.css">
    <link rel="stylesheet" href="/css/writing.css">

    <link rel="icon" type="image/svg+xml" href="/resources/avatar.svg">
    <script type="text/javascript">
        function preLoadFunc() {
let theme = localStorage.getItem("theme") ?? "light";
            document.documentElement.setAttribute("data-theme", theme);
        }
        window.onload = preLoadFunc;
    </script>
    $head
</head>

<body>
    <h1 style="text-align: center;">$title_page</h1>
"""

    bottom_part = """
    <p style="text-align: center; font-size: large;"><a href="/">Main</a> | <a href="/writings">Writings</a> | <a href="/drawings">Drawings</a></p>
    <div style="text-align: center;">꧁༻ ༺꧂</div>
</body>
</html>"""
    return Template(top_part).substitute(date=date, title_tab=title, title_page=title, head=head) + body + bottom_part

def create_dirs_from_md(dir_from, dir_to):
    for root, _, filenames in os.walk(dir_from):
        for filename in fnmatch.filter(filenames, '*.md'):
            filepath = filepath_in_dir_to(dir_from, dir_to, root, filename)
            if filename != "index.md":
                Path(filepath).mkdir(parents=True, exist_ok=True)
                pandoc_md_to_html(os.path.join(root, filename), filepath + "/index.html")
            else:
                pandoc_md_to_html(os.path.join(root, filename), filepath + ".html")

def filepath_in_dir_to(dir_from, dir_to, root, filename):
    return dir_to +  "/" + os.path.join(root, filename)[len(dir_from) + 1:-3]

def extract_date(md_file):
    date = re.findall("---(.|\n)*date:\s*([^ ]*)\s*\n(.|\n)*---", md_file)
    return date[0][1] if len(date) >= 1 else ""

def extract_date_html(html_file):
    date = re.findall("<html date=\"([\d\-]*)\"", html_file)
    return date[0] if len(date) >= 1 else ""

def pandoc_md_to_html(md_from, html_to):
    os.system("pandoc -f markdown {0} > {1}".format(md_from, html_to))
    date = ""
    with open(md_from, "r", encoding="utf-8") as f:
        date = extract_date(f.read())
    rewrite_html_with_wrap(html_to, date)

def add_to_dict(dict: Dict, path: List[str]) -> Dict:
    current = dict
    for value in path:
        if value not in current:
            current[value] = {}
        current = current[value]
    return current

def get_all_html_files(dir) -> Dict:
    dict = {}
    for root, a, filenames in os.walk(dir):
        current = add_to_dict(dict, root.split("/"))
        for i in a:
            current[i] = {}
        for filename in fnmatch.filter(filenames, '*.html'):
            filepath = os.path.join(root, filename)
            (date, div) = filepath_to_date_and_div(filepath)
            current["#div"] = div
            current["#date"] = date
    return dict

def filepath_to_title(filepath: str) -> str:
    if filepath[0] == "_":
        return ""
    return filepath \
            .split("/")[-2] \
            .replace("-", " ") \
            .capitalize()

def filepath_to_date_and_div(filepath: str) -> str:
    date = ""
    with open(filepath, "r", encoding="utf-8") as f:
        date = extract_date_html(f.read())
    return (date, "<div><a href={0}>{1}</a><span style=\"float: right;\">{2}</span></div>".format(filepath.split("..")[-1], filepath_to_title(filepath), date))

def create_writings_list(dir):
    html_files = get_all_html_files(dir)
    root = html_files[".."]["writings"]
    root.pop("#div")
    root.pop("#date")
    items = list(root.items())
    items.sort(key=lambda e: e[1]["#date"] if "#date" in e[1] else "")
    items.reverse()
    li = ""
    for (key, value) in items:
        li += create_html_list(key, value, True)

    return wrap_body("Writings", "", li, """<link rel="stylesheet" href="/css/writings.css">""")

def create_html_list(name, dict: Dict, top_level: bool):
    res = ""
    if not top_level:
        res += "<li>"

    res += dict.pop("#div") if "#div" in dict else name
    dict.pop("#date", None)
    if len(dict.keys()) != 0:
        res += "\n<ul>"
        items = list(dict.items())
        items.sort(key=lambda e: e[1]["#date"] if "#date" in e[1] else "")
        items.reverse()
        for (key, _) in items:
            res += create_html_list(key, dict[key], False)
        res += "</ul>\n"

    if not top_level:
        return res + "</li>"
    return res


def rewrite_html_with_wrap(file, date):
    html_body = ""
    with open(file, "r", encoding="utf-8") as f:
        html_body = f.read()
    with open(file, "w", encoding="utf-8") as f:
        f.write(wrap_body(filepath_to_title(file), date, embed_svg_or_html(html_body), ""))

def get_embed(match):
    embed_path = ".." + match.group(2)
    with open(embed_path) as f:
        return f.read()

# html doesn't work
def embed_svg_or_html(html_body):
    img_regex = re.compile(r'<(img|embed) src="([^"]*\.(svg|html))"[^>]*>')
    return re.sub(img_regex, get_embed, html_body)

def main(args: List[str]):
    shutil.rmtree("../writings")

    create_dirs_from_md("../md", "../writings")

    with open("../writings/index.html", "w", encoding="utf-8") as f:
        f.write(create_writings_list("../writings"))

main([])

# todo: if file starts with '_', then its name shouldn't be added as header.
# if file starts with '__', then it shouldn't be added to writings list