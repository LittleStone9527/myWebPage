/**
 * Created by kenan on 2016/3/6.
 */
$(document).ready(function(){
	//点击首页按钮响应的事件函数
	$('.nav').find('a:first').click(function(){
		$('html,body').stop().animate(
			{
				scrollTop:0
			},1000);
		return false;
	});
	//点击非首页按钮响应的事件函数
	$('.nav').find('a:not(:first)').click(function(){
		var oTarget = $(this).attr('href');
		var oTargetH = $(oTarget).offset().top;

		$('html,body').stop().animate(
			{
				scrollTop:oTargetH
			},1000);
		return false;
	});
});
