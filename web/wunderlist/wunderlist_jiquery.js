$(document).ready(function(){ 
    //Đóng mở cửa sổ create -list
    $('.create-list').click(function(){
        $('#addacout').css("display","block");
        $('#create-new-list').attr("style","display:block");
    });
    $('.Cancel').click(function(){
        $('#addacout').css("display","none");
        $('#create-new-list').attr("style","display:none");
    });
    //thêm create list mới vào danh sách create list
    var a1=$('#icon1');
    $('.Save').click(function(){
        if($('#textlist').val()!='')
        {
           
            var clr=$(a1).clone();
            clr.children('.namefoder').html($('#textlist').val());
            $('#listicon').append(clr);
            $('#textlist').val('');
            $('#addacout').css("display","none");
            $('#create-new-list').attr("style","display:none");
        }
    });
    $('#textlist').keypress(function(event){

        var keycode = (event.keyCode ? event.keyCode : event.which);
        if(keycode == '13'){
                if($('#textlist').val()!='')
            {
            
                var clr=$(a1).clone();
                clr.children('.namefoder').html($('#textlist').val());
                $('#listicon').append(clr);
                $('#textlist').val('');
                $('#addacout').css("display","none");
                $('#create-new-list').attr("style","display:none");
            }
        }
    });
    //bấm vào ibox hoặc stared thì tiêu đề ở giữa thay đổi theo,click list-icon nào thì màu nền của nó chuyển sang màu xanh dương
    $('.inbox').click(function(){
        $('#inbox1').html($('.inbox').children('text').html());
        $('.starred').removeClass("cssrow");
        $('.list-icon').removeClass("cssrow");
        $(this).addClass("cssrow");
    });
    $('.starred').click(function(){
        $('#inbox1').html($('.starred').children('text').html());
        $('.inbox').removeClass("cssrow");
        $('.list-icon').removeClass("cssrow");
        $(this).addClass("cssrow");
    });
    $('#listicon').on('click','.list-icon',function(){
        $('#inbox1').html($(this).children('div').html());
        $('.list-icon').removeClass("cssrow");
        $(this).addClass("cssrow");
        $('.starred').removeClass("cssrow");
        $('.inbox').removeClass("cssrow");
    });
    //bấm list-toggle để thu nhỏ phần bên trái
    var i=1;
    $('.list-toggle').click(function(){
        if(i==1)
        {$('.left').css("width","40px");
        i=2;}
        else{
            $('.left').css("width","280px");
            i=1;
        }
    });
    // bấm vào user để hiện thị hoặc ẩn cửa sổ acout setting
    $('.user').click(function(event){
        event.stopPropagation();
        $('.list-avarta').toggle();
        $('#bell1').css("display","none");
        $('#masage').css("display",'none');
    })
    var c2=document.getElementsByClassName('.list-avatar');
    $('body').click(function(e){
        if(e.target!=c2){
           $('.list-avarta').css("display",'none');
       }
    })
    //
    var c3=document.getElementsByClassName('bell')[0];
    $('body').click(function(e){
       if(e.target!=c3){
           $('#bell1').css("display",'none');
       }
    })
    //
    var c4=document.getElementsByClassName('conversationsrtl-flip')[0];
    $('body').click(function(e){
       if(e.target!=c4){
           $('#masage').css("display",'none');
       }
    })
    //bấm vào acount seting để hiện cửa sổ acount
    $('.list-avarta').children('ul').children('li:eq(2)').click(function(){
        $('.Account-Setting').css("display","flex");
        $('#create-new-list').css("display","flex");
        $('.list-avarta').css("display","none");
        $('.inner-account').css("display","block");
    });
    //bấm vào acount để hiện acount trên cửa sổ
    $('#acountss').click(function(){
        $('.inner-account').css("display","block");
        $('.inner-general').css("display","none")
    })
    //bấm vào general để hiện inner-general
    $('#Generals').click(function(){
        $('.inner-account').css("display","none");
        $('.inner-general').css("display","flex")
    })
    //bấm vào done để tắt màn hình acount
    $('#done').click(function(){
        $('.Account-Setting').css("display","none");
        $('#create-new-list').css("display","none");
    })
    //bấm vào show để ẩn phần xóa
    $('.show').click(function(){
        $('#showcompleted').toggle();
    })
    //bấm enter để tạo 1 list-body mới
    var a=$('.list-body11');
    $('#inputadd').keypress(function(event){

        var keycode = (event.keyCode ? event.keyCode : event.which);
        if(keycode == '13'){
                if($('#inputadd').val()!='')
            {
            
                var clr=$(a).clone();
                clr.removeClass("list-body11");
                clr.addClass("list-body")
                clr.children('span').html($('#inputadd').val());
                $('#listbody').prepend(clr);
                $('#inputadd').val('');
            }
        }
    });
    //bấm vào task-check để chuyển list-body từ trên xuống dứoi
    var b=$('.showcompleted:eq(0)')
    $('#listbody').on('click','.task-check',function(event){
        var hi = new Audio("notification.mp3");
        hi.play();
        event.stopPropagation();
        var clr=$(b).clone();
        $('#showcompleted').prepend(clr);
        $(this).parent().remove();
        clr.children('span').html($(this).parent().children('span').html());
    })
    //bấm vào task-checked để đẩy phần tử từ dưới lên
    var c=$('.list-body:eq(0)')
    $('#showcompleted').on('click','.task-checked',function(event){
        var hi = new Audio("notification.mp3");
        hi.play();
        event.stopPropagation();
        var clr=$(c).clone();
        $('#listbody').append(clr);
        $(this).parent().remove();
        clr.children('span').html($(this).parent().children('span').html());
    })
   //click vào list-body để thì nền chuyển màu xanh
   $('#listbody').on('click','.list-body',function(){
       $('.showcompleted').css("background-color","#FFF");
       $('.list-body').css("background-color","#FFF");
       $(this).css("background-color","#E0EEFA");
       $('.title:eq(0)').children('div').html($(this).children('span').html());
       $('.title:eq(0)').children('span:eq(0)') .html($('#iddetail').html());
   });
   $('#showcompleted').on('click','.showcompleted',function(){
        $('.list-body').css("background-color","#FFF");
        $('.showcompleted').css("background-color","#FFF");
        $(this).css("background-color","#E4E9E4");
        $('.title:eq(0)').children('div').html($(this).children('span').html());
        $('.title:eq(0)').children('span:eq(0)') .html($('#notich').html());
   });
//Bấm phải chuột vào list-body để hiện click-right3;
$("#listbody").contextmenu(function(event){
    event.preventDefault();
    $('.Mouse-right1').css("display","none");
    $('.Mouse-right2').css("display","none");
    $('.Mouse-right4').css("display","none");
    $('.list-avarta').css('display','none');
    $('.Mouse-right3').css("display","block");
    var x=event.pageX;
    var y=event.pageY;
    $('.Mouse-right3').css("top",y+"px");
    $('.Mouse-right3').css("left",x+"px");
})
//bấm body để ẩn các chuột phải
$('body').click(function(){
    // $('.list-avarta').css('display','none');
    $('.Mouse-right3').css("display","none");
    $('.Mouse-right1').css("display","none");
    $('.Mouse-right2').css("display","none");
    $('.Mouse-right4').css("display","none");
});
//click phải hiển thị mouse right 2
$("#listicon").contextmenu(function(event){
    $('.list-avarta').css('display','none');
    $('.Mouse-right4').css("display","none");
    $('.Mouse-right3').css("display","none");
    $('.Mouse-right1').css("display","none");
    event.preventDefault();
    $('.Mouse-right2').css("display","block");
    var x=event.pageX;
    var y=event.pageY;
    $('.Mouse-right2').css("top",y+"px");
    $('.Mouse-right2').css("left",x+"px");
})
//click phải hiển thị mouse right 1
$("#ibox_starred").contextmenu(function(event){
    $('.list-avarta').css('display','none');
    $('.Mouse-right4').css("display","none");
    $('.Mouse-right3').css("display","none");
    $('.Mouse-right2').css("display","none");
    $('.Mouse-right1').css("display","block");
    var x=event.pageX;
    var y=event.pageY;
    $('.Mouse-right1').css("top",y+"px");
    $('.Mouse-right1').css("left",x+"px");
    event.preventDefault();
})
//click phải hiển thị mouse right 4
$("#showcompleted").contextmenu(function(event){
    event.preventDefault();
    $('.list-avarta').css('display','none');
    $('.Mouse-right3').css("display","none");
    $('.Mouse-right2').css("display","none");
    $('.Mouse-right1').css("display","none");
    $('.Mouse-right4').css("display","block");
    var x=event.pageX;
    var y=event.pageY;
    $('.Mouse-right4').css("top",y+"px");
    $('.Mouse-right4').css("left",x+"px");
})
//click để xóa 1 create list
$('#listicon').on('contextmenu','.list-icon',function(){
    dele2=$(this);
    $('#delete3').click(function(){
        dele2.remove();
    });
})  
//click để xóa 1 list-body
$('#listbody').on("contextmenu",".list-body",function(){
    dele3=$(this);
    $('#delete1').click(function(){
        dele3.remove();
    });
})
//click để xóa 1 showcompleted
$("#showcompleted").on("contextmenu",".showcompleted",function(){
    dele4=$(this);
    $('#delete2').click(function(){
        dele4.remove();
    });
})
//bấm close-right để ẩn cửa sổ phải
$('.close-right').click(function(){
    $('.right').css("display","none");
});
//click đúp vào list-body để hiển thị cột bên phải
$('#listbody').on("dblclick",".list-body",function(){
    $('.right').css("display","flex");
});
//click đúp vào  showcompleted để hiển thị cột bên phải
$("#showcompleted").on("dblclick",".showcompleted",function(){
    $('.right').css("display","flex");
});
//bấm inputright tạo avatacoment
$('.inputright').keypress(function(event){

    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13'){
            if($('.inputright').val()!='')
        {
            var copycoment=$('.addcoment:eq(0)').clone();
            $('.spaceright').append(copycoment);
            $(copycoment).children('div').children('div').html($('.inputright').val());
            $('.inputright').val('');
        }
    }
});
//hover lên addcoment để hiện dấu x để xóa
// $('.spaceright').on('click','.addcoment',function(){
//     $('.deletespace').css("display","block");
//})
$('.spaceright').on('click','.addcoment .deletespace',function(){
    $(this).parent().remove();
})
//bấm chuông
$('.bell').click(function(){
    $('#bell1').toggle();
    var hi = new Audio("notification.mp3");
    hi.play();
   
})
//bấm vào masage
$('.conversationsrtl-flip').click(function(){
    $('#masage').toggle();
})
//bấm vào sort
$('#iconsorrt').click(function(){
    $('#sort1').slideToggle();
    $('#more1').css("display","none");
})
//bấm vào more
$('#moreicon').click(function(e){
    $('#more1').slideToggle();
    $('#sort1').css("display","none");
})
// bấm vào sao đổi nền
$('#listbody').on('click','.list-body .svg2',function(){
    //$('#listbody').prepend($(this).parent());
    $(this).wrap("<div></div>");
    $(this).parent().html($('#star-red').html());
    $(this).unwrap();
})
$('#listbody').on('click','.list-body div .redsao',function(){
    $(this).parent().html($('.svgone').html());
    $(this).unwrap();
})
//
});//đóng load
