$(function(){

  //====会员升级=====

  var upMain =  $("#upMain")
  ,   upChoose =$("#upMain .choose")
  ,   upWay =$("#upMain .way")
  ,   upSubmit = $("#upMain .btn-normal");
  //点击弹出选项
  $("#upgrade").click(function(){
     upMain.addClass("slidedownsmall");
     adjustPopup();
   });
  //关闭选项框
  $("#upMain .jf-bg, #upClose").click(function(){
     upMain.fadeOut(function(){
       upMain.removeClass("slidedownsmall");
     });
   });
   /*
   * 选择方式和资金/等级
   */
   $("#upMain .choose, #upMain .way").find("a").click(function(){
     $(this).parent().find("a.select").removeClass("select");
     $(this).addClass("select");
     if( $(this).hasClass("money") ){
        $("#chooseMoney").show();
        $("#chooseLevel").hide();
        adjustPopup();
     }else if( $(this).hasClass("level") ){
        $("#chooseLevel").show();
        $("#chooseMoney").hide();
        adjustPopup();
     }
   });
   //提交前检查
   upSubmit.click(function(){
     if( !upWay.find("a.select").length ){
       layer.open({
         content: '您还未选择参与方式'
         ,btn: '我知道了'
        });
     }else if( !upChoose.find("a.select").length ){
       layer.open({
         content: '您还未选择参与资金'
         ,btn: '我知道了'
        });
     }else if( upChoose.find("a.select") && upWay.find("a.select")){
       window.location.href="payment.html";
     }
   })
   /*
   * 校准当前弹出框位置 保持垂直居中
   * 仅用于调整页内弹出框
   */
   function adjustPopup(){
      var thisPopup = upMain.find(".alone");
      thisPopup.css("top",($(window).height() - thisPopup.height())*0.5+"px");
   }
});
