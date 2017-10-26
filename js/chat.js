/*发送消息*/
function send(headSrc,str){
	var html="<div class='send'><div class='msg'><img src="+headSrc+" />"+
	"<p><i class='msg_input'></i>"+str+"</p></div></div>";
	upView(html);
}
function send2(headSrc,str){
	var html="<div class='send'><div class='msg'><img src="+headSrc+" />"+
	"<p><i class='msg_input'></i><a href="+str+">"+str+"</a></p></div></div>";
	upView(html);
}
/*接受消息*/
function show(headSrc,str){
	var html="<div class='show'><div class='msg'><img src="+headSrc+" />"+
	"<p><i class='msg_input'></i>"+str+"</p></div></div>";
	upView(html);
}
/*更新视图*/
function upView(html){
	$('.message').append(html);
	$('body').animate({scrollTop:$('.message').outerHeight()-window.innerHeight},200)
}
function sj(){
	return parseInt(Math.random()*10)
}


/*测试数据*/
var arr=[];
var imgarr=['images/touxiang.png','images/touxiangm.png']



$(function(){
	$('.footer').on('keyup','input',function(){
		if($(this).val().length>0){
			$(this).next().css('background','#114F8E').prop('disabled',true);
		
		}else{
			$(this).next().css('background','#ddd').prop('disabled',false);
		}
	})
	$('.footer p').click(function(){

		 $.ajax({
		      type: "post",
		      dataType: "json",
		      url: "http://www.tuling123.com/openapi/api",
		      data:{
		      	key:"6119f2af71e0415bb2363a6c59509b01",
		      	info:$(this).prev().val(),
		      	userid:"123456"
		      },
		      success: function (data) {
		      	console.log(data);
		      	arr=[];
			    arr.push(data.text);
			    arr.push(data.url);
			    
				show("./images/touxiangm.png",$(".footer input").val());
				test();		
				$(".footer input").val("");//清空input
		      }
    	});
 		
	})
})



function test(){
	
	setTimeout(function(){
		send("images/touxiang.png",arr[0])
	},1000)

	if(arr[1]!=undefined){
		setTimeout(function(){
			send2("images/touxiang.png",arr[1])
		},1000)
	}
	
}
