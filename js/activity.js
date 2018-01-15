$(function(){
	FastClick.attach(document.body);
	//好友力量榜
	var $li_friend=$('#activity_friend ul li');
	var $more_btn=$('#activity_friend .more');
	if($li_friend.length<6){
		$more_btn.hide();
	}else{
		$more_btn.show();
	}
	$li_friend.each(function(){
		var num=$(this).index();
		if(num>4){
			$(this).hide();
		}
	})
	$more_btn.click(function(){
		$li_friend.show();
		$(this).hide();
	})
	//活动规则
	$('#activity_rule a').click(function(){
		if($(this).text()=='查看活动规则'){
			$(this).html('收起活动规则');
			$('#activity_rule_con').show();
			setTimeout("$('#activity_rule_con0').slideDown(2000)",400);
		}else{
			$(this).html('查看活动规则');
			$('#activity_rule_con').hide();
			$('#activity_rule_con0').hide();
		}
		
	})
	//错误提示
	function errorForm(obj){
		$('#error').show().text(obj);
		setTimeout("$('#error').hide()",2000);
	}
	//立即登陆
	$('#loginForm').submit(function(){
		var telVal=$('input[name=telphone]').val();
		var codeVal=$('input[name=code]').val();
		var telReg = /^1\d{10}$/;
		if(telVal==''){
			errorForm('请输入手机号');
			return false;
		}else if(codeVal==''){
			errorForm('请输入验证码');
			return false;
		}else if(!telReg.test(telVal)){
			errorForm('请输入正确手机号');
			return false;
		}else{
			$('#mask').hide();
			$('#login').hide();
			$('#login_close').hide();
			return true;
		}
	})
	//关闭弹框
	$('#close_btn').click(function(){
		$(this).hide();
		$('#mask').hide();
		$('#login').hide();
		$('#activity_packet').hide();
		$('#help_suc_line').hide();
		$('#help_suc').hide();
	})
	//支付1元抢红包
	$('#activity_one').click(function(){
		$('#mask').show();
		$('#login').show();
		$('#close_btn').show();
	})
	//邀请好友助力
	$('#activity_invite_btn').click(function(){
		$('#mask').show();
		$('#activity_point').show();
	})
	//抢到红包
	$('#activity_card,#get_card').click(function(){
		$('#mask').show();
		$('#activity_packet').show();
		$('#close_btn').show();
	})
	//进度条
	function speedAnimate(){
		var money_shi=Number($('#money_shi').text());
		var money_ge=Number($('#money_ge').text());
		var money_jiao=Number($('#money_jiao').text());
		var money_fen=Number($('#money_fen').text());
		var speed_scale=(money_shi*1000+money_ge*100+money_jiao*10+money_fen)/5000;
		var speed_width=speed_scale*209;
		var pos=speed_width-10;

		$('.activity_speed_con').animate({'width':speed_width},1000);
		$('.get_icon').animate({'left':pos},1000,function(){
			if(speed_scale==1){
				$(this).addClass('get_icon0');
			}
		});

	}
	speedAnimate();
	//我也要红包
	$('#activity_want').click(function(){
		$('#mask').show();
		$('#login').show();
		$('#close_btn').show();
	})
	//助力成功
	function helpSuc(obj){
		var num=Number(obj)*100;
		var num_shi=parseInt(num/1000);
		var num_ge=parseInt(num/100-num_shi*10);
		var num_jiao=parseInt(num/10-num_shi*100-num_ge*10);
		var num_fen=parseInt(num-num_shi*1000-num_ge*100-num_jiao*10);
		var con=$('#help_suc_con');
		con.find('.help_shi').delay(450).animate({'background-position-y': -29*num_shi},1000);
		con.find('.help_ge').delay(450).animate({'background-position-y': -29*num_ge},1000);
		con.find('.help_jiao').delay(450).animate({'background-position-y': -29*num_jiao},1000);
		con.find('.help_fen').delay(450).animate({'background-position-y': -29*num_fen},1000);
	}
	helpSuc(2.34);


})