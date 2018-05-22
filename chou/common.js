function log(val) {	console.log(val); }
/**
 * 公共函数库，桌面端和手机端公用
 * 不能公用的函数请勿收录
 */
function explode(e,t,n){
	var r={0:""};if(arguments.length<2||typeof arguments[0]=="undefined"||typeof arguments[1]=="undefined")return null;if(e===""||e===!1||e===null)return!1;if(typeof e=="function"||typeof e=="object"||typeof t=="function"||typeof t=="object")return r;e===!0&&(e="1");if(!n)return t.toString().split(e.toString());var i=t.toString().split(e.toString()),s=i.splice(0,n-1),o=i.join(e.toString());return s.push(o),s;
}

function implode(e,t){
	var n="",r="",i="";arguments.length===1&&(t=e,e="");if(typeof t=="object"){if(Object.prototype.toString.call(t)==="[object Array]")return t.join(e);for(n in t)r+=i+t[n],i=e;return r}return t;
}

function date(e,g) {
	var h=this,jsdate,f,txt_words=["Sun","Mon","Tues","Wednes","Thurs","Fri","Satur","January","February","March","April","May","June","July","August","September","October","November","December"],formatChr=/\\?(.?)/gi,formatChrCb=function(t,s){return f[t]?f[t]():s},_pad=function(n,c){n=String(n);while(n.length<c){n='0'+n}
	return n};f={d:function(){return _pad(f.j(),2)},D:function(){return f.l().slice(0,3)},j:function(){return jsdate.getDate()},l:function(){return txt_words[f.w()]+'day'},N:function(){return f.w()||7},S:function(){var j=f.j(),i=j%10;if(i<=3&&parseInt((j%100)/10,10)==1){i=0}
	return['st','nd','rd'][i-1]||'th'},w:function(){return jsdate.getDay()},z:function(){var a=new Date(f.Y(),f.n()-1,f.j()),b=new Date(f.Y(),0,1);return Math.round((a-b)/864e5)},W:function(){var a=new Date(f.Y(),f.n()-1,f.j()-f.N()+3),b=new Date(a.getFullYear(),0,4);return _pad(1+Math.round((a-b)/864e5/7),2)},F:function(){return txt_words[6+f.n()]},m:function(){return _pad(f.n(),2)},M:function(){return f.F().slice(0,3)},n:function(){return jsdate.getMonth()+1},t:function(){return(new Date(f.Y(),f.n(),0)).getDate()},L:function(){var j=f.Y();return j%4===0&j%100!==0|j%400===0},o:function(){var n=f.n(),W=f.W(),Y=f.Y();return Y+(n===12&&W<9?1:n===1&&W>9?-1:0)},Y:function(){return jsdate.getFullYear()},y:function(){return f.Y().toString().slice(-2)},a:function(){return jsdate.getHours()>11?"pm":"am"},A:function(){return f.a().toUpperCase()},B:function(){var H=jsdate.getUTCHours()*36e2,i=jsdate.getUTCMinutes()*60,s=jsdate.getUTCSeconds();return _pad(Math.floor((H+i+s+36e2)/86.4)%1e3,3)},g:function(){return f.G()%12||12},G:function(){return jsdate.getHours()},h:function(){return _pad(f.g(),2)},H:function(){return _pad(f.G(),2)},i:function(){return _pad(jsdate.getMinutes(),2)},s:function(){return _pad(jsdate.getSeconds(),2)},u:function(){return _pad(jsdate.getMilliseconds()*1000,6)},e:function(){throw'Not supported (see source code of date() for timezone on how to add support)';},I:function(){var a=new Date(f.Y(),0),c=Date.UTC(f.Y(),0),b=new Date(f.Y(),6),d=Date.UTC(f.Y(),6);return((a-c)!==(b-d))?1:0},O:function(){var b=jsdate.getTimezoneOffset(),a=Math.abs(b);return(b>0?"-":"+")+_pad(Math.floor(a/60)*100+a%60,4)},P:function(){var O=f.O();return(O.substr(0,3)+":"+O.substr(3,2))},T:function(){return'UTC'},Z:function(){return-jsdate.getTimezoneOffset()*60},c:function(){return'Y-m-d\\TH:i:sP'.replace(formatChr,formatChrCb)},r:function(){return'D, d M Y H:i:s O'.replace(formatChr,formatChrCb)},U:function(){return jsdate/1000|0}};this.date=function(a,b){h=this;jsdate=(b===undefined?new Date():(b instanceof Date)?new Date(b):new Date(b*1000));return a.replace(formatChr,formatChrCb)};return this.date(e,g);
}

//md5函数
(function(e){
	"use strict";function t(e,t){var n=(e&65535)+(t&65535),r=(e>>16)+(t>>16)+(n>>16);return r<<16|n&65535}function n(e,t){return e<<t|e>>>32-t}function r(e,r,i,s,o,u){return t(n(t(t(r,e),t(s,u)),o),i)}function i(e,t,n,i,s,o,u){return r(t&n|~t&i,e,t,s,o,u)}function s(e,t,n,i,s,o,u){return r(t&i|n&~i,e,t,s,o,u)}function o(e,t,n,i,s,o,u){return r(t^n^i,e,t,s,o,u)}function u(e,t,n,i,s,o,u){return r(n^(t|~i),e,t,s,o,u)}function a(e,n){e[n>>5]|=128<<n%32,e[(n+64>>>9<<4)+14]=n;var r,a,f,l,c,h=1732584193,p=-271733879,d=-1732584194,v=271733878;for(r=0;r<e.length;r+=16)a=h,f=p,l=d,c=v,h=i(h,p,d,v,e[r],7,-680876936),v=i(v,h,p,d,e[r+1],12,-389564586),d=i(d,v,h,p,e[r+2],17,606105819),p=i(p,d,v,h,e[r+3],22,-1044525330),h=i(h,p,d,v,e[r+4],7,-176418897),v=i(v,h,p,d,e[r+5],12,1200080426),d=i(d,v,h,p,e[r+6],17,-1473231341),p=i(p,d,v,h,e[r+7],22,-45705983),h=i(h,p,d,v,e[r+8],7,1770035416),v=i(v,h,p,d,e[r+9],12,-1958414417),d=i(d,v,h,p,e[r+10],17,-42063),p=i(p,d,v,h,e[r+11],22,-1990404162),h=i(h,p,d,v,e[r+12],7,1804603682),v=i(v,h,p,d,e[r+13],12,-40341101),d=i(d,v,h,p,e[r+14],17,-1502002290),p=i(p,d,v,h,e[r+15],22,1236535329),h=s(h,p,d,v,e[r+1],5,-165796510),v=s(v,h,p,d,e[r+6],9,-1069501632),d=s(d,v,h,p,e[r+11],14,643717713),p=s(p,d,v,h,e[r],20,-373897302),h=s(h,p,d,v,e[r+5],5,-701558691),v=s(v,h,p,d,e[r+10],9,38016083),d=s(d,v,h,p,e[r+15],14,-660478335),p=s(p,d,v,h,e[r+4],20,-405537848),h=s(h,p,d,v,e[r+9],5,568446438),v=s(v,h,p,d,e[r+14],9,-1019803690),d=s(d,v,h,p,e[r+3],14,-187363961),p=s(p,d,v,h,e[r+8],20,1163531501),h=s(h,p,d,v,e[r+13],5,-1444681467),v=s(v,h,p,d,e[r+2],9,-51403784),d=s(d,v,h,p,e[r+7],14,1735328473),p=s(p,d,v,h,e[r+12],20,-1926607734),h=o(h,p,d,v,e[r+5],4,-378558),v=o(v,h,p,d,e[r+8],11,-2022574463),d=o(d,v,h,p,e[r+11],16,1839030562),p=o(p,d,v,h,e[r+14],23,-35309556),h=o(h,p,d,v,e[r+1],4,-1530992060),v=o(v,h,p,d,e[r+4],11,1272893353),d=o(d,v,h,p,e[r+7],16,-155497632),p=o(p,d,v,h,e[r+10],23,-1094730640),h=o(h,p,d,v,e[r+13],4,681279174),v=o(v,h,p,d,e[r],11,-358537222),d=o(d,v,h,p,e[r+3],16,-722521979),p=o(p,d,v,h,e[r+6],23,76029189),h=o(h,p,d,v,e[r+9],4,-640364487),v=o(v,h,p,d,e[r+12],11,-421815835),d=o(d,v,h,p,e[r+15],16,530742520),p=o(p,d,v,h,e[r+2],23,-995338651),h=u(h,p,d,v,e[r],6,-198630844),v=u(v,h,p,d,e[r+7],10,1126891415),d=u(d,v,h,p,e[r+14],15,-1416354905),p=u(p,d,v,h,e[r+5],21,-57434055),h=u(h,p,d,v,e[r+12],6,1700485571),v=u(v,h,p,d,e[r+3],10,-1894986606),d=u(d,v,h,p,e[r+10],15,-1051523),p=u(p,d,v,h,e[r+1],21,-2054922799),h=u(h,p,d,v,e[r+8],6,1873313359),v=u(v,h,p,d,e[r+15],10,-30611744),d=u(d,v,h,p,e[r+6],15,-1560198380),p=u(p,d,v,h,e[r+13],21,1309151649),h=u(h,p,d,v,e[r+4],6,-145523070),v=u(v,h,p,d,e[r+11],10,-1120210379),d=u(d,v,h,p,e[r+2],15,718787259),p=u(p,d,v,h,e[r+9],21,-343485551),h=t(h,a),p=t(p,f),d=t(d,l),v=t(v,c);return[h,p,d,v]}function f(e){var t,n="";for(t=0;t<e.length*32;t+=8)n+=String.fromCharCode(e[t>>5]>>>t%32&255);return n}function l(e){var t,n=[];n[(e.length>>2)-1]=undefined;for(t=0;t<n.length;t+=1)n[t]=0;for(t=0;t<e.length*8;t+=8)n[t>>5]|=(e.charCodeAt(t/8)&255)<<t%32;return n}function c(e){return f(a(l(e),e.length*8))}function h(e,t){var n,r=l(e),i=[],s=[],o;i[15]=s[15]=undefined,r.length>16&&(r=a(r,e.length*8));for(n=0;n<16;n+=1)i[n]=r[n]^909522486,s[n]=r[n]^1549556828;return o=a(i.concat(l(t)),512+t.length*8),f(a(s.concat(o),640))}function p(e){var t="0123456789abcdef",n="",r,i;for(i=0;i<e.length;i+=1)r=e.charCodeAt(i),n+=t.charAt(r>>>4&15)+t.charAt(r&15);return n}function d(e){return unescape(encodeURIComponent(e))}function v(e){return c(d(e))}function m(e){return p(v(e))}function g(e,t){return h(d(e),d(t))}function y(e,t){return p(g(e,t))}function b(e,t,n){return t?n?g(t,e):y(t,e):n?v(e):m(e)}typeof define=="function"&&define.amd?define(function(){return b}):e.md5=b;
})(this);

function is_array(e){
	var t,n=function(e){var t=/\W*function\s+([\w\$]+)\s*\(/.exec(e);return t?t[1]:"(Anonymous)"},r=function(e){if(!e||typeof e!="object"||typeof e.length!="number")return!1;var t=e.length;return e[e.length]="bogus",t!==e.length?(e.length-=1,!0):(delete e[e.length],!1)};return!e||typeof e!="object"?!1:(this.php_js=this.php_js||{},this.php_js.ini=this.php_js.ini||{},t=this.php_js.ini["phpjs.objectsAsArrays"],r(e)||(!t||parseInt(t.local_value,10)!==0&&(!t.local_value.toLowerCase||t.local_value.toLowerCase()!=="off"))&&Object.prototype.toString.call(e)==="[object Object]"&&n(e.constructor)==="Object");
}

function utf8_decode(str_data) {
	var tmp_arr = [], i = 0, ac = 0, c1 = 0, c2 = 0, c3 = 0, c4 = 0;
	str_data += '';
	while (i < str_data.length) {
		c1 = str_data.charCodeAt(i);
		if (c1 <= 191) {
			tmp_arr[ac++] = String.fromCharCode(c1);
			i++;
		} else if (c1 <= 223) {
			c2 = str_data.charCodeAt(i + 1);
			tmp_arr[ac++] = String.fromCharCode(((c1 & 31) << 6) | (c2 & 63));
			i += 2;
		} else if (c1 <= 239) {
			c2 = str_data.charCodeAt(i + 1);
			c3 = str_data.charCodeAt(i + 2);
			tmp_arr[ac++] = String.fromCharCode(((c1 & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
			i += 3;
		} else {
			c2 = str_data.charCodeAt(i + 1);
			c3 = str_data.charCodeAt(i + 2);
			c4 = str_data.charCodeAt(i + 3);
			c1 = ((c1 & 7) << 18) | ((c2 & 63) << 12) | ((c3 & 63) << 6) | (c4 & 63);
			c1 -= 0x10000;
			tmp_arr[ac++] = String.fromCharCode(0xD800 | ((c1 >> 10) & 0x3FF));
			tmp_arr[ac++] = String.fromCharCode(0xDC00 | (c1 & 0x3FF));
			i += 4;
		}
	}
	return tmp_arr.join('');
}

function strip_tags(input, allowed) {
	allowed = (((allowed || '') + '').toLowerCase().match(/<[a-z][a-z0-9]*>/g) || []).join('');
	var tags = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi, commentsAndPhpTags = /<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi;
	return input.replace(commentsAndPhpTags, '').replace(tags, function($0, $1) {
		return allowed.indexOf('<' + $1.toLowerCase() + '>') > -1 ? $0 : '';
	});
}

function nl2br(str, is_xhtml) {
	var breakTag = (is_xhtml || typeof is_xhtml === 'undefined') ? '<br ' + '/>' : '<br>';
	return (str + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1' + breakTag + '$2');
}

/*用法
var url = parse_url('http://abc.com:8080/dir/index.html?id=255&m=hello#top');
	url.source; // 源地址（原样输出）
	url.port; // 端口 '8080' 
	url.host; // 主机 'abc.com' 
	url.query; // 请求字符串 '?id=255&m=hello' 
	url.protocol; // 协议 'http' 
	url.file; // 文件名 'index.html' 
	url.relative; // 相对路径 '/dir/index.html' 
	url.segments; // 路径分段 Array = ['dir', 'index.html'] 
	url.path; // 根路径 '/dir/index.html' 
	url.hash; // 哈希 'top' 
	url.params; //参数列表 Object = { id: 255, m: hello } 
*/
function parse_url(e){
	var t=document.createElement("a");return t.href=e,{source:e,port:t.port,host:t.hostname,query:t.search,protocol:t.protocol.replace(":",""),file:(t.pathname.match(/\/([^\/?#]+)$/i)||[,""])[1],relative:(t.href.match(/tps?:\/\/[^\/]+(.+)/)||[,""])[1],segments:t.pathname.replace(/^\//,"").split("/"),path:t.pathname.replace(/^([^\/])/,"/$1"),hash:t.hash.replace("#",""),params:function(){var e={},n=t.search.replace(/^\?/,"").split("&"),r=n.length,i=0,s;for(;i<r;i++){if(!n[i])continue;s=n[i].split("="),e[s[0]]=s[1]}return e}()}
}

function basename (path, suffix) {
	var b = path.replace(/^.*[\/\\]/g, '');
	if (typeof suffix === 'string' && b.substr(b.length - suffix.length) == suffix) {
		b = b.substr(0, b.length - suffix.length);
	}
	return b;
}

function urlencode(url) {
    var flag = url;
    flag = encodeURIComponent((url+'').toString()).replace(/!/g, '%21')
	.replace(/'/g, '%27').replace(/\(/g, '%28')
	.replace(/\)/g, '%29').replace(/\*/g, '%2A')
	.replace(/%20/g, '+');
	return flag;
}

function urldecode(url) {
	return decodeURIComponent((url+'').replace(/\+/g, '%20'));
}

function base64_decode(e){
	var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",n,r,i,s,o,u,a,f,l=0,c=0,h="",p=[];if(!e)return e;e+="";do s=t.indexOf(e.charAt(l++)),o=t.indexOf(e.charAt(l++)),u=t.indexOf(e.charAt(l++)),a=t.indexOf(e.charAt(l++)),f=s<<18|o<<12|u<<6|a,n=f>>16&255,r=f>>8&255,i=f&255,u==64?p[c++]=String.fromCharCode(n):a==64?p[c++]=String.fromCharCode(n,r):p[c++]=String.fromCharCode(n,r,i);while(l<e.length);return h=p.join(""),h;
}

//统计js对象、数组、字符串的个数
function count(obj) {
    var flag = 0;
    if (obj.length) flag = obj.length; else for (var i in obj) flag++;
    return flag;
}

function array_slice(e,t,n,r){
	var i="";if(Object.prototype.toString.call(e)!=="[object Array]"||r&&t!==0){var s=0,o={};for(i in e)s+=1,o[i]=e[i];e=o,t=t<0?s+t:t,n=n===undefined?s:n<0?s+n-t:n;var u={},a=!1,f=-1,l=0,c=0;for(i in e){++f;if(l>=n)break;f==t&&(a=!0);if(!a)continue;++l,this.is_int(i)&&!r?u[c++]=e[i]:u[i]=e[i]}return u}return n===undefined?e.slice(t):n>=0?e.slice(t,t+n):e.slice(t,n);
}

function array_flip(trans) {
    var key, tmp_ar = {};
    if (trans && typeof trans == "object" && trans.change_key_case) return trans.flip();
    for (key in trans) {
        if (!trans.hasOwnProperty(key)) continue;
        tmp_ar[trans[key]] = key;
    }
    return tmp_ar;
}

function array_filter(arr, func) {
	var retObj = {},k;
	func = func || function (v) { return v; };
	if (Object.prototype.toString.call(arr) === '[object Array]') {
		retObj = [];
	}
	for (k in arr) {
		if (func(arr[k])) {
			retObj[k] = arr[k];
		}
	}
	return retObj;
}

function array_values(input) {
    var tmp_arr = [], key = "";
    if (input && typeof input == "object" && input.change_key_case) return input.values();
    for (key in input) tmp_arr[tmp_arr.length] = input[key];
    return tmp_arr;
}

function array_keys(input, search_value, argStrict) {
    var search = typeof search_value != "undefined", tmp_arr = [], strict = !!argStrict, include = !0, key = "";
    if (input && typeof input == "object" && input.change_key_case) return input.keys(search_value, argStrict);
    for (key in input) input.hasOwnProperty(key) && (include = !0, search && (strict && input[key] !== search_value ? include = !1 : input[key] != search_value && (include = !1)), include && (tmp_arr[tmp_arr.length] = key));
    return tmp_arr;
}

function array_combine(keys, values) {
    var new_array = {}, keycount = keys && keys.length, i = 0;
    if (typeof keys != "object" || typeof values != "object" || typeof keycount != "number" || typeof values.length != "number" || !keycount) return !1;
    if (keycount != values.length) return !1;
    for (i = 0; i < keycount; i++) new_array[keys[i]] = values[i];
    return new_array;
}

function array_unique(e){
	var t="",n={},r="",i=function(e,t){var n="";for(n in t)if(t.hasOwnProperty(n)&&t[n]+""==e+"")return n;return!1};
	for(t in e)e.hasOwnProperty(t)&&(r=e[t],!1===i(r,n)&&(n[t]=r));return n;
}

function array_search(e,t,n){
	var r=!!n,i="";if(t&&typeof t=="object"&&t.change_key_case)return t.search(e,n);if(typeof e=="object"&&e.exec){if(!r){var s="i"+(e.global?"g":"")+(e.multiline?"m":"")+(e.sticky?"y":"");e=new RegExp(e.source,s)}for(i in t)if(e.test(t[i]))return i;return!1}for(i in t)if(r&&t[i]===e||!r&&t[i]==e)return i;return!1;
}

function http_build_query(e,t,n){
	var r,i,s=[],o=this,u=function(e,t,n){var r,i=[];t===!0?t="1":t===!1&&(t="0");if(t!=null){if(typeof t=="object"){for(r in t)t[r]!=null&&i.push(u(e+"["+r+"]",t[r],n));return i.join(n)}if(typeof t!="function")return o.urlencode(e)+"="+o.urlencode(t);throw new Error("There was an error processing for http_build_query().")}return""};n||(n="&");for(i in e){r=e[i],t&&!isNaN(i)&&(i=String(t)+i);var a=u(i,r,n);a!==""&&s.push(a)}return s.join(n);
}

function intval(mixed_var, base) {
	var tmp;
	var type = typeof mixed_var;
	if (type === 'boolean') {
		return +mixed_var;
	} else if (type === 'string') {
		tmp = parseInt(mixed_var, base || 10);
		return (isNaN(tmp) || !isFinite(tmp)) ? 0 : tmp;
	} else if (type === 'number' && isFinite(mixed_var)) {
		return mixed_var | 0;
	} else {
		return 0;
	}
}

function is_numeric(mixed_var) {
	return (typeof mixed_var === 'number' || typeof mixed_var === 'string') && mixed_var !== '' && !isNaN(mixed_var);
}

/**
 * 优先保证该脚本除公共类库外被第一时间载入执行
 * 初始化变量设置
 */

document.domain = 'sdaxue.com'; //解决跨域问题

//定义一个1像素空白的透明gif
var blank_gif = 'data:image/gif;base64,R0lGODlhAQABAJH/AP///wAAAMDAwAAAACH5BAEAAAIALAAAAAABAAEAAAICVAEAOw==';
var res_server = 'http://res.' + document.domain;
var api_server = 'http://api.' + document.domain;
var res_jquery = '/res/js/jquery.min.js';

//自动解析网址中的 by_user 参数
if ( window.location.href ) {
	var parse = parse_url(window.location.href);
	if ( parse.params.by_user && $.cookie ) {
		$.cookie('by_user', parse.params.by_user, {path: '/', domain: document.domain});
	}
}

//同 PHP 版的 res() 函数
function res(path) {
	//TODO: 检测当前是否在线状态
	return (true) ? res_server + path : '/res' + path;
}

//返回头像图片地址
function face($path) {
	var $flag = false;
	var base = 'http://face.'+document.domain+'/';
	$path = explode('/', trim($path, '/'));
	if ( $path && $path[1] ) {
		var url = false;
		if ( parseInt($path[1]) ) {
			url = $path[0]+'/'+md5($path[1]);
		} else {
			url = $path[0]+'/'+$path[1];
		}
		if ( url ) {
			$flag = base + url;
		}
	}
	return $flag;
}

//检查有无加载jquery,无则自动加载
window.jQuery || document.write(unescape('%3Cscript src="'+res_jquery+'"%3E%3C/script%3E'));

//更新用户头像为指定url
function update_face(src) {
	if ( src ) {
		$('#site_head li.face>a>img').attr('src', src);
		$('#site_body .user_info .user_face a.face img').attr('src', src);
	}
}

//将html内容转换为适合textarea文本框的内容
function html2textarea(str) {
	var flag = ''; var arr = [];
	var str = strip_tags(str, '<p>');
	var $tmp = $('<div>').html(str);
	$tmp.find('p').each(function(){
		arr.push($(this).html());
	});
	if ( count(arr) ) {
		$.each(arr, function(i,v){
			flag += v + "\r\n\r\n";
		});
	} else {
		flag = str;
	}
	return flag;
}

//将textarea文本框中的内容转换为html
function textarea2html(str) {
	var flag = nl2br(str);
	//TODO: 换行转换为P
}

/*
* 配置 artDialog 相关选项
*/
if ( $.dialog ) {
	(function (d) {
		d['okValue'] = '确定';
		d['cancelValue'] = '取消';
		d['title'] = '消息';
		// [more..]
	})($.dialog.defaults);
}

/**
 * 公用 js 函数库 和 初始化脚本
 * 请确保　jQuery 优先载入
 */
$(function(){
	//自动调整body宽度 FOR 本机浏览器模拟测试用
	if ( $('body').attr('isMobile') && $('body').width() > 1000 ) {
		var x = ($(window).width()-360)/2;
		$('#mobile_layer').width(360).css({left:x});
		$('body').width(360);
	}
	/*{{**友情链接和推广链接切换**}}*/
	$('.flink h5 span').click(function(){
		var index = $(this).index();
		$(this).add('.flink div:eq('+index+')').addClass('on').siblings().removeClass('on');
	});
	
	//便民侧边条：返回顶部，反馈建议，二维码
	var $go_back = $('<span title="点击滚动到页面顶部">回到顶部</span>');
	$go_back.click(function(){
		$('html,body').animate({scrollTop:'0'}, 500);
	});
	if ( $('body').attr('isMobile') ) {
		$go_back.attr('id', 'scroll_top_btn');
		$('body').append($go_back);
	} else {
		if ( $('body').width() > 1024 ) {
			var $aside = $('<div id="aside">\
				<span class="suggest" title="您的建议与反馈">反馈建议</span>\
			</div>');
			$aside.find('.suggest').click(function(){
				var $box = $('#submit_suggest');
				if ( !$box.get(0) ) {
					$box = $('<div id="submit_suggest">\
						<textarea default-value="请提出您的宝贵意见与建议！~"></textarea>\
						<button class="btn btn-success">提交反馈</button>\
					</div>');
				}
				$box.find('textarea').width(550);
				var dg_cfg = {
					padding: 20, content: $box.get(0),
					lock: true
				};
				$.dialog(dg_cfg);
				$.getScript(res('/js/submit_suggest.js'));
			});
			$go_back.addClass('scroll_top');
			$aside.append($go_back);
			$('body').append($aside);
		}
	}

	/*{{**登录链接点击**}}*/
	var $qqlogin = $('a#qqlogin');
	if ($qqlogin.get(0)) {
		var href = $qqlogin.attr('href');
		href += encodeURIComponent('*'+window.location.href);
		$qqlogin.attr('href', href);
		/*{{**弹出式QQ登录框**}}*/
		if ( !$('body').attr('isMobile') ) {
			$qqlogin.click(function(){
				var W = $(window).width(), H = $(window).height();
				var width = 738, height = 508;
				var left = parseInt((W-width)/2);
				var top = parseInt((H-height)/2) + 40;
				var tit = $(this).attr('title');
				var url = $(this).attr('href');
				var args = [
					'width='+width, 'height='+height, 'top='+top, 'left='+left,
					'resizable=1', 'status=1', 'location=1', 'menubar=0',
					'scrollbars=1', 'titlebar=0', 'toolbar=0'
				];
				window.open(url, tit, args.join(','));
				return false;
			});
		} else {
			$qqlogin.click(function(){
				window.location.href = href;
			});
		}
	}
	/*{{**追加指定回跳地址**}}*/
	var $out = $('#site_head .logout a');
	$out.click(function(){
		var href = $(this).attr('href');
		href += '?'+ window.location.href;
		$(this).attr('href', href);
	});

	//图片不存在时，显示一个默认的图片(延时0.5秒请求)
	setTimeout(function(){
		$('img[default-src]').each(function(){
			var $img = $(this);
			var src =  $img.attr('src');
			/*方案一：检测图片宽度法*/
			var img = new Image();
			img.onload = function(){
				//404图片的宽高分别为1px
				if ( 1 == img.width ) {
					$img.attr('src', $img.attr('default-src'));
				}
			};
			img.src = src;
			/*方案二：ajax远程请求法
			$.ajax({
				url: src, async: true,
				error: function (XMLHttpRequest, textStatus, errorThrown) {
					$img.attr('src', $img.attr('default-src'));
				},
				complete: function (XHR, TS) { XHR = null }
			});*/
		});
	}, 500);
	
	//获取定制数据并滚动显示
	if ( !$('body').attr('isMobile') ) {
		api('/main/realtime.html', function(data){
			var $marquee = $('<ul></ul>');
			var $kxbdMarquee = $('<div id="kxbdMarquee" style="width:500px;height:18px;line-height:18px;overflow:hidden;margin-top:8px;"></div>');
			$(data).each(function(i,v) {
				var $li = $('<li style="float:left;height:18px;line-height:18px;"><a href="/report.html" target="_blank">'+v+'</a></li>');
				$marquee.append($li);
			});
			$kxbdMarquee.append($marquee); $('.today_tips').html($kxbdMarquee);
			$kxbdMarquee.kxbdMarquee({scrollDelay:30});
		});
	}
});

//正在登录中提示按钮
function show_working(tip) {
	var img = 'http://res.sdaxue.com/img/loading2.gif';
	var html = '<img src="'+img+'" />' + tip;
	$.dialog({
		padding: 20, content: tip,
		lock: true
	});
}

//打分按钮
var $i_ll_score = $('.i_ll_score[data-url]');
if ( $i_ll_score.get(0) && !$('body').attr('isMobile') ) {
	$i_ll_score.click(function(){
		var dg_cfg = false;
		var query = $(this).attr('data-url');
		var status = $(this).attr('login-status');
		if ( status ) {
			var max_width = 550; var max_height = 450;
			$iframe = $('<iframe src="'+api_server+query+'"></iframe>');
			$iframe.css({width: max_width, height: max_height});
			dg_cfg = {
				padding: 0, 
				width: max_width, height: max_height,
				content: $iframe.get(0),
				cancel: true, lock: true
			};
		} else {
			dg_cfg = {
				title: '消息提示',
				content: '您尚未登录，请先登录后再进行打分！',
				okValue: '立即登录',
				ok: function () {
					$('a#qqlogin').click();
					return true;
				},
				cancel: true,
				lock: true
			};
		}
		dg_cfg ? $.dialog(dg_cfg) : false;
	});
}

/*评说的子评论功能实现*/
var $discuss = $('.discuss[action]');
if ( $discuss.size() ) {
	$discuss.click(function(){
		var $curr = $(this);
		var query = $curr.attr('action');
		var dom_id = md5(query); //DOM的ID
		if ( $('#'+dom_id).get(0) ) {
			$('#'+dom_id).remove();
		} else {
			var $dom = $('<div class="comment_discuss" id="'+dom_id+'"></div>');
			$dom.append($('<textarea class="input-xlarge"></textarea>'));
			$dom.append($('<button class="btn btn-success">提交</button>'));
			$dom.insertBefore($curr.parent('.ext_info'));
		}
		//alert( $dom.html() );
		//$dom.toggle();
	});
}

/*顶和踩功能实现*/
var $digg_tread = $('.digg,.tread');
if ( $digg_tread.size() && !$('body').attr('isMobile') ) {
	$digg_tread.click(function(){
		var $curr = $(this);
		var query = $curr.attr('action');
		if ( !query ) { return false; }
		if ( $curr.attr('disabled') ) {
			alert('您已经表过态啦，不要再点人家啦！……');
			return false;
		}
		$curr.attr('disabled', 'disabled');
		api(query, function(data){
			if ( 'success' == data.result ) {
				//更新顶或踩的数值
				var $i = $curr.find('i');
				$i.text(parseInt($i.text())+1);
				//设置另一个不可用
				var $other = false;
				if ( $curr.hasClass('digg') ) {
					$other = $curr.siblings('.tread');
				} else {
					$other = $curr.siblings('.digg');
				}
				if ( false !== $other ) {
					$other.attr('disabled', 'disabled');
				}
			} else {
				alert(data.msg);
				if ( 'nologin' === data.code ) {
					auto_login();
				}
			}
		});
	});
}

/*提醒咨询师回答问题*/
var $remind_btn = $('button.remind_btn[action]');
if ( $remind_btn.size() ) {
	$remind_btn.click(function(){
		var $curr = $(this);
		$curr.attr('disabled', 'disabled');
		$curr.text('提醒已发送');
		var query = $curr.attr('action');
		query ? api(query) : false;
	});
}

/*{{**Ajax微名片**}}*/
var $name_card = $('[name_card]');
if ( $name_card.size() && !$('body').attr('isMobile') ) {
	var timer = false; var load = false;
	var $wapper = $('#user_name_card');
	if ( !$wapper.get(0) ) {
		$wapper = $('<div id="user_name_card"></div>');
		$wapper.appendTo('body');
	}

	//绑定事件
	$name_card.hover(face_hover, hide_card);
	$wapper.hover(function(){
		if(timer){clearTimeout(timer);}
	}, hide_card);
	
	//鼠标移动到头像上 500 毫秒以上
	function face_hover() {
		var $tigger = $(this);
		var uid = $tigger.attr('name_card');
		var json = $tigger.data('card_json');
		load = setTimeout(function(){
			if ( !json ) {
				api('/member/card/user/'+uid, function(data){
					if ( !$.isEmptyObject(data) ) {
						$tigger.data('card_json', data);
						show_card($tigger);
					}
				});
			} else {
				show_card($tigger);
			}
		}, 500);
	}
	
	//显示微名片
	function show_card($target) {
		var flag_id = 'flag' + time();
			$target.attr('id', flag_id);
			$wapper.attr('flag_id', flag_id);
		var offset = $target.offset();
			offset.left += $target.outerWidth() + 10;
		var json = $target.data('card_json');
		if ( json ) {
			var html = create_card_html(json);
			$wapper.html(html).css(offset);
			$wapper.fadeIn('fast');
		}
	} 
	
	//隐藏微名片
	function hide_card() {
		if ( load ) { clearTimeout(load); }
		timer = setTimeout(function(){
			$wapper.hide();
		}, 100);
	}
	
	//生成微名片html
	function create_card_html(json) {
		//过滤一下值为null的情况
		for ( var key in json ) {
			if ( null == json[key] ) {
				json[key] = '';
			}
		}
		var $tmp = $('<div>');
		var str = '<h5><strong><a href="/u/'+json.id+'.html" target="_blank">'+json.nick_name+'</a></strong>\
		<span>来自：<i>'+json.province+'</i><i>'+json.city+'</i></span></h5>\
		<div class="reg_login_time">注册于：'+date('Y-m-d', json.reg_time)+' ( 最近登录：'+date('m-d H:i', json.login_time)+' )</div>\
		<div class="user_score">\
			<ul class="clear">\
				<li><em>'+json.score+'</em>积分</li>\
				<li><em>'+json.comment+'</em>评说</li>\
				<li><em>'+json.ask+'</em>提问</li>\
				<li><em>'+json.answer+'</em>回答</li>\
			</ul>\
			<div class="opts">\
				<span><a class="btn btn-mini btn-primary" href="/u/'+json.id+'.html" target="_blank"><i class="icon-home icon-white"></i>主页</a></span>\
				<span><a class="btn btn-mini btn-success" href="javascript:send_msg('+json.id+');"><i class="icon-envelope icon-white"></i>私信</a></span>\
				<span><a class="btn btn-mini btn-info" onclick="follow_user('+json.id+', this);"><i class="icon-eye-open icon-white"></i>关注</a></span>\
			</div>\
			<div class="sign">\
				<strong style="display:none;">座右铭：</strong>\
				<div>'+json.sign+'</div>\
			</div>\
		</div>\
		<div class="tip_arrow_left"></div>';
		$tmp.html(str);
		//检查当前登录者是否有关注过此人
		if ( json.attention ) {
			var $btn = $tmp.find('div.opts a[onclick^="follow_user"]');
			var html = $btn.html(); var text = $btn.text();
			switch ( json.attention ) {
				case 'yes' : 
					$btn.removeClass('btn-info').addClass('disabled');
					html = html.replace(text, '已关注');
				break;
				case 'not' :
					$btn.addClass('btn-info').removeClass('disabled');
					html = html.replace(text, '关注');
				break;
			}
			$btn.html(html);
		}
		return $tmp.html();
	}

	/**
	 * 关注指定会员uid, 函数库函数 for 微名片
	 */
	function follow_user(uid, target) {
		var $target = $(target);
		if ( uid > 0 && $target.get(0) ) {
			api('/attention/user/'+uid, function(data){
				if ( 'success' == data.result ) {
					var html = $target.html();
					var text = $target.text();
					var flag_id = $('#user_name_card').attr('flag_id');
					var card_json = $('#'+flag_id).data('card_json');
					switch ( data.msg ) {
						case '已关注' : 
							card_json.attention = 'yes'; html = html.replace(text, data.msg);
							$target.removeClass('btn-info').addClass('disabled');
						break;
						case '已取消' :
							card_json.attention = 'not'; html = html.replace(text, '关注');
							$target.addClass('btn-info').removeClass('disabled');
						break;
					}
					//更新数据
					$('#'+flag_id).data('card_json', card_json);
					$target.html(html);
				} else if ( 'not_login' === data.code ) {
					$('#user_name_card').hide();
					$.dialog({
						title: '消息提示',
						content: data.msg,
						okValue: '立即登录',
						ok: function () {
							$('a#qqlogin').click();
							return true;
						},
						cancel: true,
						lock: true
					});
				} else {
					alert(data.msg);
				}
			});
		}
	}
}

/*{{**关注按钮**}}*/
var $attention = $('.attention_school[data-value],.attention_major[data-value]');
if ( $attention.size() ) {
	$attention.click(function(){
		var $current = $(this);
		if ( 'ajaxing' === $current.data('ajax_status') ) {
			alert('请求正在执行中...');
			return false;
		}
		var url = $current.attr('data-value');
		if ( url ) {
			var dg_cfg = {
				title: '消息提示',
				id: 'attention_dialog',
				follow: $current.get(0),
				cancel: true
			};
			$current.data('ajax_status', 'ajaxing');
			api(url, function(data){
				$current.removeData('ajax_status');
				if ( data.msg ) {
					dg_cfg.content = data.msg;
					if ( 'not_login' === data.code ) {
						delete dg_cfg.follow;
						dg_cfg.okValue = '立即登录';
						dg_cfg.ok = function () {
							$('a#qqlogin').click();
							return true;
						};
						dg_cfg.lock = true;
					}
					if ( 'success' === data.result ) {
						$current.text(data.msg)
						.removeAttr('data-value')
						.removeClass('btn-info')
						.addClass('disabled');
					} else {
						$.dialog(dg_cfg);
					}
				}
			});
		}
		return false;
	});
}

/*{{**获取消息**}}*/
var $face = $('#site_head .link li.face');
if ( $face.get(0) ) {
	var $msg = $('#dynamic_message');
	/*{{**绑定各种事件**}}*/
	if ( $('body').attr('isMobile') ) {
		$face.click(function(){
			$msg.show();
			return false;
		});
		$msg.find('button.close_msg').click(function(){
			$face.find('a').removeClass('hover');
			hide_target($msg);
			return false;
		});
	}
	$face.hover(function(){
		if ( !$('body').attr('isMobile') ) {
			$msg.css({left: $face.offset().left});
		}
		$msg.fadeIn('fast');
	}, function(){
		hide_target($msg);
	});
	
	//全部设为已读消息
	$msg.find('.set_as_read').click(function(){
		var ids = $msg.data('id_list');
		if ( ids ) {
			ids = ids.join(',');
			api('/msg/set_as_read?id='+ids, function(data){
				if ( 'success' == data.result ) {
					$msg.find('.msg_tip h5 span')
					.removeClass('label-important')
					.html('0');
					$msg.find('.msg_tip ul').slideUp().html('');
					$(this).text(data.result);
				}
			});
		}
		return false;
	});

	/*{{**ajax拉取数据**}}*/
	api('/msg', message);

	/*{{**处理用户最新的数据**}}*/
	function message(data) {
		if ( data && data.msg && data.msg.count > 0 ) {
			var ids = [];
			var $ul = $msg.find('.msg_tip ul');
			var $count = $msg.find('.msg_tip h5 span');
			$count.addClass('label-important').text(data.msg.count);
			if ( !$msg.data('first') ) {
				var $tmp = $msg.find('.msg_tip ul li').first();
				$msg.data('first', $tmp.html());
				$tmp.remove();
			}
			$.each( data.msg.content, function(k, obj){
				ids.push(obj.id);
				var $li = $('<li>'+ $msg.data('first') +'</li>');
				$li.find('a').attr('href', '/u/msg/'+obj.to_uid+'_'+obj.id+'.html');
				$li.find('a img.face').attr('src', face('/avatar/'+obj.user_id) +'!32x32');
				$li.find('a .cnt strong').text(obj.nick_name);
				$li.find('a .cnt span').text(time_ago(obj.add_time));
				$li.find('a .cnt p').html(obj.content);
				$li.click(function(){
					$count.html(parseInt($count.text())-1);
					$li.slideUp('fast', function(){
						api('/msg/set_as_read?id='+obj.id);
					});
				}).find('a').last().click(function(){
					$(this).parent('li').click();
					var go_url = $(this).attr('href');
					setTimeout(function(){
						window.location.href = go_url;
					}, 500);
					return false;
				});
				$ul.append($li);
			});
			$msg.data('id_list', ids);
			flash_face();
		}
	}

	/*{{**闪动头像，当需要提醒用户查看消息时**}}*/
	function flash_face() {
		var $face = $('#site_head .wapper .link li.face a img');
		var $hander = $face.parent('a');
		if ( $face.get(0) && $hander.get(0) ) {
			var timer = setInterval(function(){
				$hander.addClass('hover');
				$face.toggleClass('hidden');
			}, 500);
			$hander.hover(function(){
				window.clearInterval(timer);
				$hander.removeClass('hover');
				$face.removeClass('hidden');
			});
		}
	}

	/*{{**以渐隐的方式隐藏消息弹出层**}}*/
	function hide_target($obj) {
		var $a = $face.find('a');
		var timer = setTimeout(function(){
			$obj.fadeOut('fast');
		}, 100);
		$obj.hover(function(){
			$a.addClass('hover');
			clearTimeout(timer);
		}, function(){
			$a.removeClass('hover');
			$obj.fadeOut('fast');
		});
	}
}

//触发登录连接访问
function tirrg_qqlogin() {
	var $qqlogin = $('a#qqlogin');
	var href = $qqlogin.attr('href');
	if ( $('body').attr('isMobile') ) {
		window.location.href = href;
	} else {
		$qqlogin.click();
	}
}

/**
 * 自动加载当前网址二维码
 */
function load_qrcode() {
	var $img = $('img[load_qrcode]');
	if ( $img.size() ) {
		$img.each(function(){
			var url = window.location.href;
			var api = $(this).attr('load_qrcode');
			if ( api && '' !== api ) {
				$(this).attr('src', api+url);
			}
		});
	}
}

//通用uploadify上传脚本
function check_uploadify(callback) {
	var $up_inputs = $('input[uploadify]');
	if ( $up_inputs.size() ) {
		$.getScript(res('/uploadify/jquery.uploadify.js'), function(){
			$('<link>').attr({
				type:'text/css', rel:'stylesheet', media: 'screen',
				href: res('/uploadify/uploadify.css')
			}).appendTo('head');
			$up_inputs.each(function(){
				var $curr = $(this);
				var json = base64_decode($curr.attr('uploadify'));
				var cfg = $.parseJSON(json);
				if ( !$.isEmptyObject(cfg) ) {
					if ( callback ) {
						cfg.onUploadSuccess = callback;
					}
					$curr.uploadify(cfg);
				}
			});
		});
	}
}

//自动完成(院校名称,专业名称)
function auto_complete(callback) {
	$('input[autocomplete]').each(function(){
		var $input = $(this);
		var query = $input.attr('autocomplete');
		$input.autocomplete({
			minLength: 2,
			messages: { noResults: '', results: null },
			source: function( request, response ) {
				$input.addClass('ajaxing');
				$.ajax({
					url: api_server + query, /*请求url地址*/
					dataType: "jsonp", /*跨域数据请求格式*/
					data: { limit: '10', parameter: request.term }, /*附加请求的参数*/
					success: function( data ) {
						$input.removeClass('ajaxing');
						response($.map(data, function(item) {
							var obj = { label: item.name, value: item.name, id: item.id };
							if ( item.major_code ) {
								obj.label += ','+ item.major_code;
								obj.major_code = item.major_code;
							}
							return obj;
						}));
					},
					complete: function (XHR, TS) { XHR = null }
				});
			},
			/*选择事件*/
			select: callback
		});
	});
}

//检查指定DOM上的data-effect属性开启或关闭
function check_effect($obj) {
	var effect = false;
	var val = $obj.attr('data-effect');
	if ( val ) {
		switch ( val.toLowerCase() ) {
			case 'on' : effect = true;  break;
			case 'off': effect = false; break;
		}
	}
	return effect;
}

//代替用户点击登录连接
function auto_login() {
	var $login = $('a#qqlogin');
	if ( $login.get(0) ) {
		if ( !$('body').attr('isMobile') ) {
			$login.click(); //PC页面则弹出登录窗口
		} else if ( $login.attr('href') ) {
			window.location.href = $login.attr('href');
		}
	}
}

//加减积分动画提示效果 score_tips('已认证会员评说大学，+30积分！');
function score_tips(tip, func) {
	var $body = $('body');
	var $tips = $('<div class="score_tips"></div>').text(tip);
	$body.append($tips);
	var style = {
		left : parseInt(($body.width() - $tips.width())/2),
		top : parseInt($body.scrollTop()+($(window).height() - $tips.height())/2),
		display : 'block'
	};
	$tips.css(style).fadeIn('slow', function(){
		$tips.animate({top: style.top-180}, 1500, function() {
			$tips.delay(1000).remove();
			func(); //执行回调函数
		});
	});
}

/**
 * ajax 使用 jsonp 跨域
 * 可能存在的隐患:如果 api 开放输出的话，因为 callback 是可以自定义的
 * 有可能会被第三方网站利用此类接口
 */
function api(url, callback, type, arg) {
	var query = api_server + url;
	var ajax_cfg = {
		url: query, async: false,
		dataType: 'jsonp', jsonp: 'callback',
		success: function(json) {
			if ( json && json.score_tips ) {
				score_tips(json.score_tips, function(){
					callback(json);
				});
			} else {
				callback(json);
			}
		},
		complete: function(XHR, TS) {
			XHR = null;
		}
	};
	//JSONP不同源无法跨域POST
	if ( arg && type ) { 
		ajax_cfg.url = '/api/post';
		arg.target_url = query;
		ajax_cfg.type = 'POST'; 
	}
	//想要发送的数据
	arg ? ajax_cfg.data = arg : false;
	$.ajax(ajax_cfg);
}

/**
 * 根据传入的数组自动给其加上编号索引并生成新的数组返回
 */
function args_combine(arr) {
	var flag = arr;
	if ( arr && is_array(arr) && count(arr) <= 61 ) {
		var index = 'abcdefghijklmnopqrstuvwxyz123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
		index = array_flip(array_slice(index.split(''), 0, count(arr)));
		flag = array_combine(array_keys(index), array_values(arr));
	}
	return flag;
}

/**
 * 删除左右两端的空格
 */
function trim (str, charlist) {
	// http://kevin.vanzonneveld.net
	// +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
	// +   improved by: mdsjack (http://www.mdsjack.bo.it)
	// +   improved by: Alexander Ermolaev (http://snippets.dzone.com/user/AlexanderErmolaev)
	// +      input by: Erkekjetter
	// +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
	// +      input by: DxGx
	// +   improved by: Steven Levithan (http://blog.stevenlevithan.com)
	// +    tweaked by: Jack
	// +   bugfixed by: Onno Marsman
	// *     example 1: trim('    Kevin van Zonneveld    ');
	// *     returns 1: 'Kevin van Zonneveld'
	// *     example 2: trim('Hello World', 'Hdle');
	// *     returns 2: 'o Wor'
	// *     example 3: trim(16, 1);
	// *     returns 3: 6
	var whitespace, l = 0, i = 0;
	str += '';

	if (!charlist) {
		// default list
		whitespace = " \n\r\t\f\x0b\xa0\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u200b\u2028\u2029\u3000";
	} else {
		// preg_quote custom list
		charlist += '';
		whitespace = charlist.replace(/([\[\]\(\)\.\?\/\*\{\}\+\$\^\:])/g, '$1');
	}

	l = str.length;
	for (i = 0; i < l; i++) {
		if (whitespace.indexOf(str.charAt(i)) === -1) {
			str = str.substring(i);
			break;
		}
	}

	l = str.length;
	for (i = l - 1; i >= 0; i--) {
		if (whitespace.indexOf(str.charAt(i)) === -1) {
			str = str.substring(0, i + 1);
			break;
		}
	}
	return whitespace.indexOf(str.charAt(0)) === -1 ? str : '';
}

/**
 * 删除左边的空格
 */
function ltrim(str) {
	return str.replace(/(^\s*)/g, '');
}

/**
 * 删除右边的空格
 */
function rtrim(str) {
	return str.replace(/(\s*$)/g, '');
}

/**
 * 获取范围内的随机数
 */
function random(min, max) {
    return Math.floor(min+Math.random()*(max-min));
}

/**
 * 获得unix时间戳域
 */
function time () {
  return Math.floor(new Date().getTime() / 1000);
}

/**
 * 将时间戳转换为人性化的时间提示
 * time_ago('1381471088') => 10 分钟前 
 */
function time_ago(time){
	var flag = time; //计算时间戳差值
	var now = (new Date).getTime();
    var num = parseInt((now-Number(time)*1000)/1000);
    if ( num >= 0 && num < 60 ) {
        flag = num + '秒前';
    } else if ( num >= 60 && num < 3600 ) {
        var min = parseInt(num/60);
        flag = min + '分钟前';
    } else if ( num >= 3600 && num < 3600*24 ) {
        var hour = parseInt(num/3600);
        flag = hour + '小时前';
    } else {
        var day = parseInt(num/86400);
        flag = day + '天前';
    }
	return flag;
}
