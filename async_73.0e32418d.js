(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{351:function(s,a,C){"use strict";C.r(a);var E={created:function(){this.content=unescape("%3Ch2%3ECheckbox%3C/h2%3E%0A%3Ch3%3EInstall%3C/h3%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-javascript%22%3E%3Cspan%20class%3D%22hljs-keyword%22%3Eimport%3C/span%3E%20%7B%20Checkbox%2C%20CheckboxGroup%20%7D%20%3Cspan%20class%3D%22hljs-keyword%22%3Efrom%3C/span%3E%20%3Cspan%20class%3D%22hljs-string%22%3E%27vant%27%3C/span%3E%3B%0A%0AVue.use%28Checkbox%29.use%28CheckboxGroup%29%3B%0A%3C/code%3E%3C/pre%3E%0A%3Ch3%3EUsage%3C/h3%3E%0A%3Ch4%3EBasic%20Usage%3C/h4%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-html%22%3E%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Evan-checkbox%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Ev-model%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22checked%22%3C/span%3E%26gt%3B%3C/span%3ECheckbox%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B/%3Cspan%20class%3D%22hljs-name%22%3Evan-checkbox%3C/span%3E%26gt%3B%3C/span%3E%0A%3C/code%3E%3C/pre%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-javascript%22%3E%3Cspan%20class%3D%22hljs-keyword%22%3Eexport%3C/span%3E%20%3Cspan%20class%3D%22hljs-keyword%22%3Edefault%3C/span%3E%20%7B%0A%20%20data%28%29%20%7B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Ereturn%3C/span%3E%20%7B%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Echecked%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-literal%22%3Etrue%3C/span%3E%0A%20%20%20%20%7D%3B%0A%20%20%7D%0A%7D%3B%0A%3C/code%3E%3C/pre%3E%0A%3Ch4%3EDisabled%3C/h4%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-html%22%3E%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Evan-checkbox%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Ev-model%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22checked%22%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Edisabled%3C/span%3E%26gt%3B%3C/span%3ECheckbox%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B/%3Cspan%20class%3D%22hljs-name%22%3Evan-checkbox%3C/span%3E%26gt%3B%3C/span%3E%0A%3C/code%3E%3C/pre%3E%0A%3Ch4%3ECustom%20Color%3C/h4%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-html%22%3E%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Evan-checkbox%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Ev-model%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22checked%22%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Echecked-color%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22%2307c160%22%3C/span%3E%26gt%3B%3C/span%3ECheckbox%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B/%3Cspan%20class%3D%22hljs-name%22%3Evan-checkbox%3C/span%3E%26gt%3B%3C/span%3E%0A%3C/code%3E%3C/pre%3E%0A%3Ch4%3ECustom%20Icon%3C/h4%3E%0A%3Cp%3EUse%20icon%20slot%20to%20custom%20icon%3C/p%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-html%22%3E%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Evan-checkbox%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Ev-model%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22checked%22%3C/span%3E%26gt%3B%3C/span%3E%0A%20%20Custom%20Icon%0A%20%20%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Eimg%3C/span%3E%0A%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Eslot%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22icon%22%3C/span%3E%0A%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Eslot-scope%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22props%22%3C/span%3E%0A%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Asrc%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22props.checked%20%3F%20icon.active%20%3A%20icon.normal%22%3C/span%3E%0A%20%20%26gt%3B%3C/span%3E%0A%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B/%3Cspan%20class%3D%22hljs-name%22%3Evan-checkbox%3C/span%3E%26gt%3B%3C/span%3E%0A%3C/code%3E%3C/pre%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-js%22%3E%3Cspan%20class%3D%22hljs-keyword%22%3Eexport%3C/span%3E%20%3Cspan%20class%3D%22hljs-keyword%22%3Edefault%3C/span%3E%20%7B%0A%20%20data%28%29%20%7B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Echecked%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-literal%22%3Etrue%3C/span%3E%2C%0A%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Eicon%3C/span%3E%3A%20%7B%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Enormal%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%27//img.yzcdn.cn/icon-normal.png%27%3C/span%3E%2C%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Eactive%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%27//img.yzcdn.cn/icon-active.png%27%3C/span%3E%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A%3C/code%3E%3C/pre%3E%0A%3Ch4%3ECheckbox%20Group%3C/h4%3E%0A%3Cp%3EWhen%20Checkboxes%20are%20inside%20a%20CheckboxGroup%2C%20the%20checked%20checkboxes%27s%20name%20is%20an%20array%20and%20bound%20with%20CheckboxGroup%20by%20v-model.%3C/p%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-html%22%3E%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Evan-checkbox-group%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Ev-model%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22result%22%3C/span%3E%26gt%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Evan-checkbox%3C/span%3E%0A%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Ev-for%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22%28item%2C%20index%29%20in%20list%22%3C/span%3E%0A%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Akey%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22item%22%3C/span%3E%0A%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Aname%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22item%22%3C/span%3E%0A%20%20%26gt%3B%3C/span%3E%0A%20%20%20%20Checkbox%20%7B%7B%20item%20%7D%7D%0A%20%20%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B/%3Cspan%20class%3D%22hljs-name%22%3Evan-checkbox%3C/span%3E%26gt%3B%3C/span%3E%0A%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B/%3Cspan%20class%3D%22hljs-name%22%3Evan-checkbox-group%3C/span%3E%26gt%3B%3C/span%3E%0A%3C/code%3E%3C/pre%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-javascript%22%3E%3Cspan%20class%3D%22hljs-keyword%22%3Eexport%3C/span%3E%20%3Cspan%20class%3D%22hljs-keyword%22%3Edefault%3C/span%3E%20%7B%0A%20%20data%28%29%20%7B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Ereturn%3C/span%3E%20%7B%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Elist%3C/span%3E%3A%20%5B%3Cspan%20class%3D%22hljs-string%22%3E%27a%27%3C/span%3E%2C%20%3Cspan%20class%3D%22hljs-string%22%3E%27b%27%3C/span%3E%2C%20%3Cspan%20class%3D%22hljs-string%22%3E%27c%27%3C/span%3E%5D%2C%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Eresult%3C/span%3E%3A%20%5B%3Cspan%20class%3D%22hljs-string%22%3E%27a%27%3C/span%3E%2C%20%3Cspan%20class%3D%22hljs-string%22%3E%27b%27%3C/span%3E%5D%0A%20%20%20%20%7D%3B%0A%20%20%7D%0A%7D%3B%0A%3C/code%3E%3C/pre%3E%0A%3Ch4%3EMaximum%20amount%20of%20checked%20options%3C/h4%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-html%22%3E%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Evan-checkbox-group%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Ev-model%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22result%22%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Amax%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%222%22%3C/span%3E%26gt%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Evan-checkbox%3C/span%3E%0A%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Ev-for%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22%28item%2C%20index%29%20in%20list%22%3C/span%3E%0A%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Aname%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22item%22%3C/span%3E%0A%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Akey%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22item%22%3C/span%3E%0A%20%20%26gt%3B%3C/span%3E%0A%20%20%20%20Checkbox%20%7B%7B%20item%20%7D%7D%0A%20%20%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B/%3Cspan%20class%3D%22hljs-name%22%3Evan-checkbox%3C/span%3E%26gt%3B%3C/span%3E%0A%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B/%3Cspan%20class%3D%22hljs-name%22%3Evan-checkbox-group%3C/span%3E%26gt%3B%3C/span%3E%0A%3C/code%3E%3C/pre%3E%0A%3Ch4%3EInside%20a%20Cell%3C/h4%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-html%22%3E%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Evan-checkbox-group%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Ev-model%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22result%22%3C/span%3E%26gt%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Evan-cell-group%3C/span%3E%26gt%3B%3C/span%3E%0A%20%20%20%20%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Evan-cell%3C/span%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Ev-for%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22item%20in%20list%22%3C/span%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Eclickable%3C/span%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Akey%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22item%22%3C/span%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Atitle%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22%60Checkbox%20%24%7Bitem%7D%60%22%3C/span%3E%0A%20%20%20%20%20%20@%3Cspan%20class%3D%22hljs-attr%22%3Eclick%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22toggle%28index%29%22%3C/span%3E%0A%20%20%20%20%26gt%3B%3C/span%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Evan-checkbox%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Aname%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22item%22%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Eref%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22checkboxes%22%3C/span%3E%20/%26gt%3B%3C/span%3E%0A%20%20%20%20%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B/%3Cspan%20class%3D%22hljs-name%22%3Evan-cell%3C/span%3E%26gt%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B/%3Cspan%20class%3D%22hljs-name%22%3Evan-cell-group%3C/span%3E%26gt%3B%3C/span%3E%0A%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B/%3Cspan%20class%3D%22hljs-name%22%3Evan-checkbox-group%3C/span%3E%26gt%3B%3C/span%3E%0A%3C/code%3E%3C/pre%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-js%22%3E%3Cspan%20class%3D%22hljs-keyword%22%3Eexport%3C/span%3E%20%3Cspan%20class%3D%22hljs-keyword%22%3Edefault%3C/span%3E%20%7B%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Emethods%3C/span%3E%3A%20%7B%0A%20%20%20%20toggle%28index%29%20%7B%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Ethis%3C/span%3E.%24refs.checkboxes%5Bindex%5D.toggle%28%29%3B%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A%3C/code%3E%3C/pre%3E%0A%3Ch3%3ECheckbox%20API%3C/h3%3E%0A%3Ctable%3E%0A%3Cthead%3E%0A%3Ctr%3E%0A%3Cth%3EAttribute%3C/th%3E%0A%3Cth%3EDescription%3C/th%3E%0A%3Cth%3EType%3C/th%3E%0A%3Cth%3EDefault%3C/th%3E%0A%3C/tr%3E%0A%3C/thead%3E%0A%3Ctbody%3E%0A%3Ctr%3E%0A%3Ctd%3Ename%3C/td%3E%0A%3Ctd%3ECheckbox%20name%3C/td%3E%0A%3Ctd%3E%3Ccode%3Eany%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eshape%3C/td%3E%0A%3Ctd%3ECan%20be%20set%20to%20%3Ccode%3Eround%3C/code%3E%20%3Ccode%3Esquare%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3EString%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3Eround%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Ev-model%3C/td%3E%0A%3Ctd%3ECheck%20status%3C/td%3E%0A%3Ctd%3E%3Ccode%3EBoolean%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3Efalse%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Edisabled%3C/td%3E%0A%3Ctd%3EDiable%20checkbox%3C/td%3E%0A%3Ctd%3E%3Ccode%3EBoolean%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3Efalse%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Elabel-disabled%3C/td%3E%0A%3Ctd%3EWhether%20to%20disable%20label%20click%3C/td%3E%0A%3Ctd%3E%3Ccode%3EBoolean%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3Efalse%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Elabel-position%3C/td%3E%0A%3Ctd%3ECan%20be%20set%20to%20%3Ccode%3Eleft%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3EString%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3Eright%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Echecked-color%3C/td%3E%0A%3Ctd%3EChecked%20color%3C/td%3E%0A%3Ctd%3E%3Ccode%3EString%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3E%231989fa%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3C/tbody%3E%0A%3C/table%3E%0A%3Ch3%3ECheckboxGroup%20API%3C/h3%3E%0A%3Ctable%3E%0A%3Cthead%3E%0A%3Ctr%3E%0A%3Cth%3EAttribute%3C/th%3E%0A%3Cth%3EDescription%3C/th%3E%0A%3Cth%3EType%3C/th%3E%0A%3Cth%3EDefault%3C/th%3E%0A%3C/tr%3E%0A%3C/thead%3E%0A%3Ctbody%3E%0A%3Ctr%3E%0A%3Ctd%3Ev-model%3C/td%3E%0A%3Ctd%3ENames%20of%20all%20checked%20checkboxes%3C/td%3E%0A%3Ctd%3E%3Ccode%3EArray%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Edisabled%3C/td%3E%0A%3Ctd%3EDisable%20all%20checkboxes%3C/td%3E%0A%3Ctd%3E%3Ccode%3EBoolean%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3Efalse%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Emax%3C/td%3E%0A%3Ctd%3EMaximum%20amount%20of%20checked%20options%3C/td%3E%0A%3Ctd%3E%3Ccode%3ENumber%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3E0%3C/code%3E%28Unlimited%29%3C/td%3E%0A%3C/tr%3E%0A%3C/tbody%3E%0A%3C/table%3E%0A%3Ch3%3ECheckbox%20Event%3C/h3%3E%0A%3Ctable%3E%0A%3Cthead%3E%0A%3Ctr%3E%0A%3Cth%3EEvent%3C/th%3E%0A%3Cth%3EDescription%3C/th%3E%0A%3Cth%3EParameters%3C/th%3E%0A%3C/tr%3E%0A%3C/thead%3E%0A%3Ctbody%3E%0A%3Ctr%3E%0A%3Ctd%3Echange%3C/td%3E%0A%3Ctd%3ETriggered%20when%20value%20changed%3C/td%3E%0A%3Ctd%3Ecurrent%20value%3C/td%3E%0A%3C/tr%3E%0A%3C/tbody%3E%0A%3C/table%3E%0A%3Ch3%3ECheckboxGroup%20Event%3C/h3%3E%0A%3Ctable%3E%0A%3Cthead%3E%0A%3Ctr%3E%0A%3Cth%3EEvent%3C/th%3E%0A%3Cth%3EDescription%3C/th%3E%0A%3Cth%3EParameters%3C/th%3E%0A%3C/tr%3E%0A%3C/thead%3E%0A%3Ctbody%3E%0A%3Ctr%3E%0A%3Ctd%3Echange%3C/td%3E%0A%3Ctd%3ETriggered%20when%20value%20changed%3C/td%3E%0A%3Ctd%3Ecurrent%20value%3C/td%3E%0A%3C/tr%3E%0A%3C/tbody%3E%0A%3C/table%3E%0A%3Ch3%3ECheckbox%20Slot%3C/h3%3E%0A%3Ctable%3E%0A%3Cthead%3E%0A%3Ctr%3E%0A%3Cth%3EName%3C/th%3E%0A%3Cth%3EDescription%3C/th%3E%0A%3Cth%3Eslot-scope%3C/th%3E%0A%3C/tr%3E%0A%3C/thead%3E%0A%3Ctbody%3E%0A%3Ctr%3E%0A%3Ctd%3E-%3C/td%3E%0A%3Ctd%3ECustom%20label%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eicon%3C/td%3E%0A%3Ctd%3ECustom%20icon%3C/td%3E%0A%3Ctd%3Echecked%3A%20whether%20to%20be%20checked%3C/td%3E%0A%3C/tr%3E%0A%3C/tbody%3E%0A%3C/table%3E%0A%3Ch3%3ECheckbox%20Methods%3C/h3%3E%0A%3Cp%3EUse%20ref%20to%20get%20checkbox%20instance%20and%20call%20instance%20methods%3C/p%3E%0A%3Ctable%3E%0A%3Cthead%3E%0A%3Ctr%3E%0A%3Cth%3EName%3C/th%3E%0A%3Cth%3EAttribute%3C/th%3E%0A%3Cth%3EReturn%20value%3C/th%3E%0A%3Cth%3EDescription%3C/th%3E%0A%3C/tr%3E%0A%3C/thead%3E%0A%3Ctbody%3E%0A%3Ctr%3E%0A%3Ctd%3Etoggle%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3Ctd%3EToggle%20check%20status%3C/td%3E%0A%3C/tr%3E%0A%3C/tbody%3E%0A%3C/table%3E%0A")}},t=C(0),n=Object(t.a)(E,function(){this.$createElement;this._self._c;return this._m(0)},[function(){var s=this.$createElement;return(this._self._c||s)("section",{domProps:{innerHTML:this._s(this.content)}})}],!1,null,null,null);n.options.__file="en-US.md";a.default=n.exports}}]);