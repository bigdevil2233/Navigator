

function myBrowser(){
  var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
  var isOpera = userAgent.indexOf("Opera") > -1;
  if (isOpera) {
    return "Opera"
  }; //判断是否Opera浏览器
  if (userAgent.indexOf("Firefox") > -1) {
    return "FF";
  } //判断是否Firefox浏览器
  if (userAgent.indexOf("Chrome") > -1){
    return "Chrome";
  }
  if (userAgent.indexOf("Safari") > -1) {
    return "Safari";
  } //判断是否Safari浏览器
  if (userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera) {
    if (userAgent.indexOf("MSIE 6.0") > -1) { return "IE6"; }
    if (userAgent.indexOf("MSIE 7.0") > -1) { return "IE7"; }
    if (userAgent.indexOf("MSIE 8.0") > -1) { return "IE8"; }
    if (userAgent.indexOf("MSIE 9.0") > -1) { return "IE9"; }
    if (userAgent.indexOf("MSIE 10.0") > -1) { return "IE10"; }
    return "IE";
  } //判断是否IE6-9浏览器
  if (userAgent.toLowerCase().indexOf("trident") > -1 && userAgent.indexOf("rv") > -1 && !isOpera) {
    if (userAgent.indexOf("rv:10.0") > -1) { return "IE10"; }
    if (userAgent.indexOf("rv:11.0") > -1) { return "IE11"; }
    return "IE11";
  } //判断是否IE10-11浏览器
  else
  {
    return userAgent;
  }
}


//以下是调用上面的函数
var mb = myBrowser();

document.write(navigator.userAgent);
if (mb.indexOf("IE")>-1) {
  if (mb.replace("IE","")<=8)
  {
    //alert("您的IE版本太低，请升级浏览器IE9以上或使用搜狗、360浏览器切换至极速模式");
  }
  else
  {
    alert(mb);
  }
  alert(mb.replace("IE",""));
}



if (mb.indexOf("IE")>-1) {
  if (mb.replace("IE","")<=8) {
    alert("您的IE版本太低，请升级IE9");
  }
}
if ("FF" == mb) {
  alert("我是 Firefox");
}

if ("Chrome" == mb) {
  alert("我是 Chrome");
}

if ("Opera" == mb) {
  alert("我是 Opera");
}

if ("Safari" == mb) {
  alert("我是 Safari");
}




