webpackJsonp([9384344114300],{"./src/components/DownloadButton.js":function(e,t,l){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var n=l("./node_modules/react/react.js"),o=a(n),r=l("./src/components/img/download.svg"),u=a(r),s=function(e){var t=e.children,l=e.className,a=e.float,n=e.url;return o.default.createElement("a",{href:n,rel:"noopener noreferrer",target:"_blank"},o.default.createElement("button",{className:"download-button "+l+" float-"+a},o.default.createElement("img",{className:"download-button__icon",src:u.default,alt:"download"}),t))};t.default=s,e.exports=t.default},"./src/components/img/download.svg":function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTFweCIgaGVpZ2h0PSIxMXB4IiB2aWV3Qm94PSIwIDAgMTEgMTEiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ2LjIgKDQ0NDk2KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5Hcm91cCAyIENvcHk8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iMjAxNy4wOS4xNC5QbGF5Z3JvdW5kLkNTU0dyaWQtLS0xQDJ4IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTIxMi4wMDAwMDAsIC00Mi4wMDAwMDApIiBmaWxsPSIjRkZGRkZGIj4KICAgICAgICAgICAgPGcgaWQ9IjEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yOTMuMDAwMDAwLCAtNTgzLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9IkxpbmtzIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMTgzLjAwMDAwMCwgNjEwLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgIDxnIGlkPSJHcm91cC00IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzMTEuMDAwMDAwLCAwLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iR3JvdXAtMi1Db3B5IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNi4zMjA0NDIsIDIwLjI0NDg1Mikgc2NhbGUoLTEsIC0xKSByb3RhdGUoOTAuMDAwMDAwKSB0cmFuc2xhdGUoLTE2LjMyMDQ0MiwgLTIwLjI0NDg1MikgdHJhbnNsYXRlKDEwLjgyMDQ0MiwgMTUuMjQ0ODUyKSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTAuNDYyNTM3MSw1LjYwMTg0ODQxIEMxMC43OTQ4NzY0LDUuMjU5NDA1OTYgMTAuNzkxMjg4OSw0LjcwNDA1Nzk5IDEwLjQ1ODYyMzQsNC4zNjE2MTU1NCBMNi41MDgwNTc0NCwwLjMwOTc2NzQ2OSBDNS41ODU3MjYwMywtMC42Mjk1NDExOTEgNC4yMDE5MDI3NiwwLjc3OTQyMTggNS4xMjQ1NjAzMiwxLjcxODczMDQ2IEw2Ljg0ODIyNDIzLDMuNDc0MTIxNjUgQzcuMTM0OTAzNjIsMy43NjYwNzc5MSA3LjAzOTM0MzgyLDQuMDAzNTYyMjQgNi42MzY1NTc2NSw0LjAwMzU2MjI0IEwwLjk3ODQyNzk1Miw0LjAwMzU2MjI0IEMwLjQzODAwOTU4LDQuMDAzNTYyMjQgMy41NTI3MTM2OGUtMTQsNC40NDk5NjYzNiAzLjU1MjcxMzY4ZS0xNCw1IEMzLjU1MjcxMzY4ZS0xNCw1LjU1MDAzMzY0IDAuNDM4MDA5NTgsNS45OTY0Mzc3NiAwLjk3ODQyNzk1Miw1Ljk5NjQzNzc2IEw2LjYzNjU1NzY1LDUuOTk2NDM3NzYgQzcuMDQwNjQ4MzksNS45OTY0Mzc3NiA3LjEzNzE4NjYyLDYuMjMyNTkzNTEgNi44NDgyMjQyMyw2LjUyNzIwNjk0IEw1LjEyNDU2MDMyLDguMjgxMjY5NTQgQzQuMjAxOTAyNzYsOS4yMjA1NzgyIDUuNTg1NzI2MDMsMTAuNjI5NTQxMiA2LjUwODA1NzQ0LDkuNjkwMjMyNTMgTDEwLjQ2MjUzNzEsNS42MDE4NDg0MSBaIiBpZD0iUGFnZS0xIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1LjM1NDk4MiwgNS4wMDAwMDApIHNjYWxlKC0xLCAxKSB0cmFuc2xhdGUoLTUuMzU0OTgyLCAtNS4wMDAwMDApICI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4="},'./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/danbrown/Documents/projects/008_mozilla/playground/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/danbrown/Documents/projects/008_mozilla/playground/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/danbrown/Documents/projects/008_mozilla/playground/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":[["/Users/danbrown/Documents/projects/008_mozilla/playground/node_modules/babel-preset-env/lib/index.js",{"loose":true,"uglify":true,"modules":"commonjs","targets":{"browsers":["> 1%","last 2 versions","IE >= 9"]},"exclude":["transform-regenerator","transform-es2015-typeof-symbol"]}],"/Users/danbrown/Documents/projects/008_mozilla/playground/node_modules/babel-preset-stage-0/lib/index.js","/Users/danbrown/Documents/projects/008_mozilla/playground/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/pages/10-learn-more.js':function(e,t,l){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var n=l("./node_modules/react/react.js"),o=a(n),r=l("./src/components/layout/Main.js"),u=a(r),s=l("./src/components/layout/DevHomework.js"),d=a(s),i=l("./src/components/DownloadButton.js"),c=a(i),g=function(){return o.default.createElement("div",null,o.default.createElement("h2",null,"Learn More"),o.default.createElement("p",null,"Hopefully, this short tutorial series has provided you with the knowledge you need to start experimenting and building with CSS Grid Layout. CSS Grid Layout is powerful, and we only scratched the surface of what is possible."),o.default.createElement("p",null,"If you are ready to dive deeper and learn more, here are a ton of great resources to explore."),o.default.createElement("h4",null,"Jen Simmons"),o.default.createElement("p",null,"Jen Simmons is a Designer Advocate at Mozilla. She is also a developer, writer, and speaker and is a member of the CSS Working Group."),o.default.createElement("ul",{className:"list"},o.default.createElement("li",null,o.default.createElement("a",{href:"http://jensimmons.com"},"jensimmons.com")),o.default.createElement("li",null,o.default.createElement("a",{href:"https://twitter.com/jensimmons"},"twitter"))),o.default.createElement("h4",null,"Rachel Andrew"),o.default.createElement("p",null,"Rachel Andrew is a developer, speaker, and author. She is a member of the CSS Working Group and develops resources for learning about CSS Grid Layout."),o.default.createElement("ul",{className:"list"},o.default.createElement("li",null,o.default.createElement("a",{href:"https://gridbyexample.com/"},"gridbyexample.com")),o.default.createElement("li",null,o.default.createElement("a",{href:"https://twitter.com/rachelandrew"},"twitter"))),o.default.createElement("h4",null,"MDN"),o.default.createElement("p",null,"MDN has comprehensive tutorials and documentation for every feature of CSS Grid Layout"),o.default.createElement("ul",{className:"list"},o.default.createElement("li",null,o.default.createElement("a",{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout"},"MDN"))))},m=function(){return o.default.createElement(d.default,null,o.default.createElement("p",null,"Ready to be on the cutting edge? Firefox is constantly adding new features and tools that help developers build for the open web."),o.default.createElement("strong",null,"Firefox Developer Edition"),o.default.createElement("p",null,"Build, test, scale and more with the only browser built just for developers."),o.default.createElement("div",null,o.default.createElement(c.default,{url:"https://www.mozilla.org/firefox/developer/",className:"mb4"},"Get Firefox Developer Edition")),o.default.createElement("h4",null,"Firefox Nightly"),o.default.createElement("p",null,"Get a sneak peek at the future. Firefox nightly has daily updates and provides access to new features and tools before they are released."),o.default.createElement(c.default,{url:"https://www.mozilla.org/firefox/channel/desktop/#nightly",className:"mb4"},"Get Firefox Developer Edition"))};t.default=function(){return o.default.createElement(u.default,{currentPageNum:10,tutorial:o.default.createElement(g,null),homework:o.default.createElement(m,null)})},e.exports=t.default}});
//# sourceMappingURL=component---src-pages-10-learn-more-js-17052b0e9bb67acf4e89.js.map