function getCookie(name) {
    var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if (arr = document.cookie.match(reg))
        return (arr[2]);
    else
        return null;
}
function setCookie(name, value, time) {
    var strsec = getsec(time);
    var exp = new Date();
    exp.setTime(exp.getTime() + strsec * 1);
    document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
}

function getsec(str) {
    var str1 = str.substring(1, str.length) * 1;
    var str2 = str.substring(0, 1);
    if (str2 == "s")
    { return str1 * 1000; }
    else if (str2 == "h")
    { return str1 * 60 * 60 * 1000; }
    else if (str2 == "d")
    { return str1 * 24 * 60 * 60 * 1000; }
}
//是否是微信
function isWeiXin() {
    var ua = window.navigator.userAgent.toLowerCase();
    if (ua.match(/MicroMessenger/i) == 'micromessenger') {
        return true;
    } else {
        return false;
    }
}
//是否是移动端
function mobilecheck() {
    var a = !1;
    return function (b) {
        (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(b) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(b.substr(0, 4))) && (a = !0)
    }(navigator.userAgent || navigator.vendor || window.opera),
    document.body && document.body.clientWidth && document.body.clientHeight && document.body.clientWidth < 350 && document.body.clientHeight < 500 && (a = !0),
    a
}
function iphoneCheck() {
    var a = !1;
    return /iPhone/i.test(navigator.userAgent) && (a = !0),
    !0
}
function isAndroid() {
    var a = navigator.userAgent,
    b = (navigator.appVersion, a.indexOf("Android") > -1 || a.indexOf("Linux") > -1);
    return b
}
//设置页可滚动与否
var htmlstyle = "";
function htmlnoscrollFun(htmlobj) {
    htmlstyle = htmlobj.attr("style");
    htmlobj.css("overflow", "hidden");
}
function htmlcanscrollFun(htmlobj) {
    if ($.trim(htmlstyle) != "") {
        htmlobj.attr("style", htmlstyle);
    } else {
        htmlobj.removeAttr("style");
    }
}

//loading动画
var loadhtml = '<div id="wkw_loader" class="loader"><div class="loader-inner"><div class="loader-line-wrap"><div class="loader-line"></div></div><div class="loader-line-wrap"><div class="loader-line"></div></div><div class="loader-line-wrap"><div class="loader-line"></div></div><div class="loader-line-wrap"><div class="loader-line"></div></div><div class="loader-line-wrap"><div class="loader-line"></div></div></div></div>';
function loadFun() {    
    document.write(loadhtml);
}
loadFun();

$(function () {

    //========返回顶部==========
	function modulegototopFun(obj,callback){
		var showbtnheight = 100; //$(window).height+100
        var noanimate = true;       
        $(window).scroll(function () {
            if (noanimate) {
                if ($(window).scrollTop() > showbtnheight) {
                    obj.removeClass("visiblehide go-top-animate");
                } else {
                    obj.addClass("visiblehide");
                }
            }
        });
        obj.on("click", function () {
            if (typeof callback == "function") {
                callback();
            }
            noanimate = false;
            obj.addClass("go-top-animate");
            $('body,html').animate({ scrollTop: 0 }, 1000, function () {
                noanimate = true;
                obj.addClass("visiblehide");                
            });
            return false;
        });
        
	}
    //此模块位置可触摸移动
	function objtouchandmoveFun(obj){
		var objheight = obj.outerHeight()+10;
		var ismobilebrowser = mobilecheck();
        if (ismobilebrowser) {
            var GoTop_startY = 0, GoTop_positoin = 0;
            obj.on("touchstart", function (e) {
                e.stopPropagation();                
                GoTop_startY = e.originalEvent.changedTouches[0].clientY;
                GoTop_positoin = parseInt($(this).css("bottom"));                
                htmlnoscrollFun($("html"));
            });
            obj.on("touchmove", function (e) {
                e.preventDefault();
                e.stopPropagation();                
                var moveY = e.originalEvent.changedTouches[0].clientY - GoTop_startY;
                obj.css("bottom", (GoTop_positoin - moveY) + "px");
            });
            obj.on("touchend touchcancel", function (e) {
                e.stopPropagation();
                htmlcanscrollFun($("html"));
                var bottom = parseInt($(this).css("bottom"));
                if (bottom < objheight) {
                    obj.css("bottom", (objheight) + "px");
                } else if (bottom > $(window).height() - objheight) {
                    obj.css("bottom", ($(window).height() - objheight) + "px");
                } else {
                    return;
                }
                
            });
        }
	}
    var moduleGoTop = $(".module-go-top");	
    if (moduleGoTop.length > 0) {        
        modulegototopFun(moduleGoTop, function () {
            $(".detialtab .swiper-slide").scrollTop(0);
        });
		objtouchandmoveFun(moduleGoTop)		
    }
   
    var loadtimer=setTimeout(function () {
        $("#wkw_loader").remove();
    }, 200);
 });
    

