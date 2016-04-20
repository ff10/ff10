var whenReady = (function () { var funcs = []; var ready = false; function handler(e) { if (ready) { return } if (e.type === "onreadystatechange" && document.readyState !== "complete") { return } for (var i = 0; i < funcs.length; i++) { funcs[i].call(document) } ready = true; funcs = null } if (document.addEventListener) { document.addEventListener("DOMContentLoaded", handler, false); document.addEventListener("readystatechange", handler, false); window.addEventListener("load", handler, false) } else { if (document.attachEvent) { document.attachEvent("onreadystatechange", handler); window.attachEvent("onload", handler) } } return function whenReady(fn) { if (ready) { fn.call(document) } else { funcs.push(fn) } } })(); var Url = { encode: function (string) { return escape(this._utf8_encode(string)) }, decode: function (string) { return this._utf8_decode(unescape(string)) }, _utf8_encode: function (string) { string = string.replace(/\r\n/g, "\n"); var utftext = ""; for (var n = 0; n < string.length; n++) { var c = string.charCodeAt(n); if (c < 128) { utftext += String.fromCharCode(c) } else { if ((c > 127) && (c < 2048)) { utftext += String.fromCharCode((c >> 6) | 192); utftext += String.fromCharCode((c & 63) | 128) } else { utftext += String.fromCharCode((c >> 12) | 224); utftext += String.fromCharCode(((c >> 6) & 63) | 128); utftext += String.fromCharCode((c & 63) | 128) } } } return utftext }, _utf8_decode: function (utftext) { var string = ""; var i = 0; var c = c1 = c2 = 0; while (i < utftext.length) { c = utftext.charCodeAt(i); if (c < 128) { string += String.fromCharCode(c); i++ } else { if ((c > 191) && (c < 224)) { c2 = utftext.charCodeAt(i + 1); string += String.fromCharCode(((c & 31) << 6) | (c2 & 63)); i += 2 } else { c2 = utftext.charCodeAt(i + 1); c3 = utftext.charCodeAt(i + 2); string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63)); i += 3 } } } return string } }; function flightHandler(data) { ; } function go(url) { var script = document.createElement("script"); url += "&callback=flightHandler"; script.setAttribute("src", url); document.getElementsByTagName("head")[0].appendChild(script) } function getCookie(ckey) { if (document.cookie.length > 0) { var cookieStr = document.cookie; var cstart = cookieStr.indexOf(ckey + "="), cend = -1; if (cstart != -1) { cstart = cstart + ckey.length + 1; cend = cookieStr.indexOf(";", cstart); if (cend == -1) { cend = cookieStr.length } return unescape(cookieStr.substring(cstart, cend)) } } return "xx|0" } function AddStaticInfo() { var temp = getCookie(".udt").split("|"); var a = 1, c = temp[1], d = Url.encode(document.referrer), e = Url.encode(window.location.href), f = navigator.userAgent, g = false, h = false, i = 0, j = temp[0]; var url = "http://hits.yundabao.com/do.ashx?A=" + a + "&C=" + c + "&D=" + d + "&E=" + e + "&F=" + f + "&G=" + g + "&H=" + h + "&I=" + i + "&J=" + j; go(url) } function Loginfo(state) { var temp = getCookie(".udt").split("|"); var a = 1, c = temp[1], d = Url.encode(document.referrer), e = Url.encode(window.location.href), f = navigator.userAgent, g = false, h = false, i = 0, j = temp[0]; switch (state) { case 1: i = 1; break; case 2: g = true; i = 1; break; case 3: h = true; break; case 10: g = true; break; case 11: g = true; h = true; break } var url = "http://hits.yundabao.com/do.ashx?A=" + a + "&C=" + c + "&D=" + d + "&E=" + e + "&F=" + f + "&G=" + g + "&H=" + h + "&I=" + i + "&J=" + j; go(url) } whenReady(AddStaticInfo);