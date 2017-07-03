/**
 * Created by Administrator on 2016/8/18.
 */
$(function(){
    $(".pic3").click(function(){
        $(".mask").show();
    });
    $(".mask").click(function(e){
        e.stopPropagation();//阻止事件冒泡到父元素
        $(".mask").hide();
    });
    $(".mask img").click(function(e){
        //e.stopPropagation();
    });
    $(".btn").click(function(){
        $(".mask2").show();
    });
    $(".mask2").click(function(){
        $(".mask2").hide();
    });
    $(".reg2_box").click(function(e){
       e.stopPropagation();
    });
    //touch.js 修改的点击放大、手指收缩效果，说实话，有点LOW
    var target = document.getElementById("target");
    target.style.webkitTransition = 'all ease 0.1s';

    touch.on('#target', 'touchstart', function(ev){
        ev.preventDefault();//阻止事件发生默认行为，如打开a标签链接，submit提交事件
    });

    var initialScale = 1;
    var currentScale;

    touch.on('#target', 'pinchend', function(ev){
        currentScale = ev.scale - 1;
        currentScale = initialScale + currentScale;
        currentScale = currentScale > 5 ? 5 : currentScale;
        currentScale = currentScale < 1 ? 1 : currentScale;
        this.style.webkitTransform = 'scale(' + currentScale + ')';
        //log("当前缩放比例为:" + currentScale + ".");
    });

    touch.on('#target', 'pinchend', function(ev){
        initialScale = currentScale;
    });
    console.log(initialScale);

    //抓取并移动目
    var dx, dy;

    touch.on('#target', 'drag', function(ev){
        dx = dx || 0;
        dy = dy || 0;
        //console.log("当前x值为:" + dx + ", 当前y值为:" + dy +".");
        var offx = dx + ev.x + "px";
        var offy = dy + ev.y + "px";
        $("#target").css({
            "-webkit-transform":"translate3d(" + offx + "," + offy + ",0) scale("+initialScale+")",
            "transform":"translate3d(" + offx + "," + offy + ",0) scale("+initialScale+")"
        });

    });

    touch.on('#target', 'dragend', function(ev){
        dx += ev.x;
        dy += ev.y;
    });

    $(".submit1").click(function(){
            var username=$("input[name=name1]").val();
            var sex=$("input[name=sex1]:checked").val();
            var mobile=$("input[name=tel1]").val();
            var company=$("input[name=company1]").val();
            var email=$("input[name=email1]").val();
            if(username.replace(/[ ]/g, "") == "")
            {
                layer.open({
                    content: '请输入姓名',
                    style: 'background-color:#ffffff; color:#000000; border:none;',
                    time: 1
                });
                return false;
            }
            else if(!(/^1[3|4|5|7|8]\d{9}$/.test(mobile)))
            {
                layer.open({
                    content: '请输入正确手机号码电话',
                    style: 'background-color:#ffffff; color:#000000; border:none;',
                    time: 1
                });
                return false;
            }
            else if(company.replace(/[ ]/g, "") == "")
            {
                layer.open({
                    content: '请输入公司',
                    style: 'background-color:#ffffff; color:#000000; border:none;',
                    time: 1
                });
                return false;
            }
            else if(email.replace(/[ ]/g, "") == "")
            {
                layer.open({
                    content: '请输入邮箱',
                    style: 'background-color:#ffffff; color:#000000; border:none;',
                    time: 1
                });
                return false;
            }
            else {
                var sceneid='147151734478047000';
                var name=username;
                var phone=mobile;
                var email=mobile;//电话号码或微信ID区别是否有重复数据
                var ctext="姓名:"+name+";性别:"+sex+";电话:"+mobile+";公司:"+company+";邮箱:"+email;
                SubmitUserData(sceneid,name,phone,email,ctext);//ajax提交用户信息
            }
        });
       $(".submit2").click(function(){
           var username=$("input[name=name2]").val();
           var sex=$("input[name=sex2]:checked").val();
           var mobile=$("input[name=tel2]").val();
           var company=$("input[name=company2]").val();
           var email=$("input[name=email2]").val();
           if(username.replace(/[ ]/g, "") == "")
           {
               layer.open({
                   content: '请输入姓名',
                   style: 'background-color:#ffffff; color:#000000; border:none;',
                   time: 1
               });
               return false;
           }
           else if(!(/^1[3|4|5|7|8]\d{9}$/.test(mobile)))
           {
               layer.open({
                   content: '请输入正确手机号码电话',
                   style: 'background-color:#ffffff; color:#000000; border:none;',
                   time: 1
               });
               return false;
           }
           else if(company.replace(/[ ]/g, "") == "")
           {
               layer.open({
                   content: '请输入公司',
                   style: 'background-color:#ffffff; color:#000000; border:none;',
                   time: 1
               });
               return false;
           }
           else if(email.replace(/[ ]/g, "") == "")
           {
               layer.open({
                   content: '请输入邮箱',
                   style: 'background-color:#ffffff; color:#000000; border:none;',
                   time: 1
               });
               return false;
           }
           else {
               var sceneid='147151734478047000';
               var name=username;
               var phone=mobile;
               var email=mobile;//电话号码或微信ID区别是否有重复数据
               var ctext="姓名:"+name+";性别:"+sex+";电话:"+mobile+";公司:"+company+";邮箱:"+email;
               SubmitUserData(sceneid,name,phone,email,ctext);//ajax提交用户信息
           }
       });
})
