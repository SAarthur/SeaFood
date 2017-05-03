$(function(){

    //====首页金额处理=====

    var isnothide=true;
    var _mon1 = $("#showMon_1");
    var _mon1_text = _mon1.text();
    var _mon2 = $("#showMon_2");
    var _mon2_text = _mon2.text();
    var _mon3 = $("#showMon_3");
    var _mon3_text = _mon3.text();

    //字体缩小
    if( _mon1_text.length > 9 || _mon2_text.length > 9 || _mon3_text.length > 9){
      _mon1.css("font-size",".16rem");
      _mon2.css("font-size",".16rem");
      _mon3.css("font-size",".16rem");
    }

    //金额显示可见
    if( getCookie("mon_hide") === "hide" ){
      _mon1.html("* * *");
      _mon2.html("* * *");
      _mon3.html("* * *");
      $("#showMon").removeClass("user-eye").addClass("user-eye-hide");
      isnothide=false;
    }
    $("#showMon").click(function(){
      if(isnothide){
        _mon1.html("* * *");
        _mon2.html("* * *");
        _mon3.html("* * *");
        $(this).removeClass("user-eye").addClass("user-eye-hide");
        isnothide=false;
        setCookie("mon_hide", "hide", "d30");
      }else{
        _mon1.html(_mon1_text);
        _mon2.html(_mon2_text);
        _mon3.html(_mon3_text);
        $(this).removeClass("user-eye-hide").addClass("user-eye");
        isnothide=true;
        setCookie("mon_hide", "show", "d30");
      }
    });

    //====每日签到=====

    $("a[name=my_qd]").click(function() {
     //触摸点击签到的时候，向服务器发送 金豆+1
     $.ajax({
         type: "post",
         url: "",
         dataType: "json",
         success: function(data) {
             if (date.msgid == 1) {
                 //金豆数字+1
                 var beansmNum = parseInt($("#my_beans").text());
                 beansmNum++;
                 $("#my_beans").text(beansmNum);
                 //弹出提示
                 layer.open({
                     content: '金豆+1',
                     skin: 'msg',
                     time: 4
                 });
             } else if (date.msgid == 2) {
                 layer.open({
                     content: '失败，请重试！',
                     skin: 'msg',
                     time: 4
                 });
             } else {}
         },
         error: function() {
             layer.open({
                 content: '网络异常，请重试！',
                 skin: 'msg',
                 time: 4
             });
         }
     });
   });

   //====积分说明=====

   $("#myMsg , #myMsg_1").click(function(){
     $("#msgMain").fadeIn();
   });
   $("#msgMain .jf-bg").click(function(){
     $("#msgMain").fadeOut();
   });

});
