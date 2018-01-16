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
	
	
	
	


})