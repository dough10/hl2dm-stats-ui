#!/bin/sh
node build.js
rollup --config rollup.js
uglifyjs html/js/main.js -o html/js/main.js
uglifyjs html/js/tv.js -o html/js/tv.js
html-minifier src/index.html --collapse-whitespace --remove-comments --remove-optional-tags --remove-redundant-attributes --remove-script-type-attributes --remove-tag-whitespace --use-short-doctype --minify-css true --output html/index.html
html-minifier src/hoedowntv.html --collapse-whitespace --remove-comments --remove-optional-tags --remove-redundant-attributes --remove-script-type-attributes --remove-tag-whitespace --use-short-doctype --minify-css true --output html/hoedowntv.html
uglifycss src/css/base.css --output html/css/base.css