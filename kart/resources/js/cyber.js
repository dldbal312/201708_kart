var target1 = $('.meter01').position().top;
var target2 = $('.meter02').position().top;
var target3 = $('.meter03').position().top;
var defaultClass = $('.gallery_object > .frame').attr('class');
var objWidth = $('.gallery_object').outerWidth();

$(window).on('load', function(){
	$('.gallery_object').css({'top':target1});		
});
$(window).on('load resize', function(){
	$('.open_gallery').click(function(){
		$('body').css({'height':'100%','overflow-y':'hidden'});
		$('#cyberGallery').scrollTop(0);
		if ($(window).width() > 1100){
				$('#cyberGallery').addClass('on');
		}
		return false;
	});
	if ($(window).width() < 1100) {
		if ($('#cyberGallery').hasClass('on')){
			$('#cyberGallery').removeClass('on');
		};
	};

	$('.close_gallery').click(function(){
		$('body').css({'height':'auto','overflow-y':'auto'});
		$('#cyberGallery').removeClass('on');
		return false;
	});
});

$('#cyberGallery .user_select').each(function(index){
	var $userSelect = $(this).closest('.user_select');
	if(index == 0){
		var objName = '.gallery_screen'
	}else if(index == 1){
		var objName = '.gallery_object'
	}else{
		var objName = '.gallery_object > .frame'
	}
	$(this).find('.alink').click(function(){
		$userSelect.siblings().find('.qna_cont').hide();
	});
	$(this).find('.qna_cont').find('a').click(function(){
		var tgOnIdx = $(this).index();
		var titleTxt = $(this).text();
		$(this).addClass('on').siblings().removeClass('on');
		$(this).parent().hide();
		$userSelect.find('.cscon').removeClass('active');
		$userSelect.find('.sectit4').text(titleTxt);
		$('.btn_apply').click(function(){
			cyberBtnApply(objName, tgOnIdx+1);
			$(this).parent().hide();
			$('#cyberGallery').animate({
				scrollTop: 0
			}, 300);
			$('#cyberGallery .btn_next_view').find('.cscon').removeClass('active');
		});
	})
});

$('#cyberGallery .btn_next_view').click(function(){
	var winH = $(window).height()/2;
	$(this).find('.cscon').toggleClass('active');
	$('#cyberGallery').stop(true, true).animate({
		scrollTop: winH
	}, 300);
});

function cyberBtnApply(modifyObj, applyIndex){
	if(modifyObj == '.gallery_screen'){
			$(modifyObj).find('img').eq(applyIndex-1).addClass("on").siblings().removeClass("on");	
	}else if(modifyObj == '.gallery_object'){
		$(modifyObj).css({'top': $('.meter0'+ (applyIndex)).position().top});
	}else{
		$(modifyObj).removeClass().addClass(defaultClass + ' ' + defaultClass + '0' +applyIndex);;
	}
}


/*// 배경이미지 선택
$('.user_select1 .qna_cont a').each(function(index){
	var obj = 'bg_gallery0';
	$(this).addClass(obj + (index +1));
	$(this).click(function(){
		var idx = $(this).index() +1;
		var onClass = obj + idx;
		var titleTxt = $(this).text();
		$(this).parent().hide();
		$(this).addClass('on').siblings().removeClass('on');
		$(this).closest('li').removeClass('active');
		$(this).closest('li').find('.cscon').removeClass('active');
		$(this).closest('li').find('> .alink').children('.info').text(titleTxt);
		cyberBtnApply('.gallery_screen', idx-1)
	});
});

// 작품 위치 선택
$('.user_select2 .qna_cont a').each(function(index){
	var obj = 'pos0';
	$(this).addClass(obj + (index +1));
	$(this).click(function(){
		var idx = $(this).index() +1;
		var posClass = obj + idx;
		var titleTxt = $(this).text();
		$(this).parent().hide();
		$(this).closest('li').removeClass('active');
		$(this).closest('li').find('.cscon').removeClass('active');
		$(this).closest('li').find('> .alink').children('.info').text(titleTxt);
		cyberBtnApply('.gallery_object', idx)
	});
});

// 액자여부 선택
$('.user_select3 .qna_cont a').each(function(index){
	var obj = 'frame0';
	$(this).addClass(obj + (index +1));
	$(this).click(function(){
		var idx = $(this).index() +1;
		var frameClass = obj + idx;
		var titleTxt = $(this).text();
		$(this).parent().hide();
		$(this).closest('li').find('> .alink').children('.info').text(titleTxt);
		cyberBtnApply('.gallery_object > .frame', idx);			
	});
	
});*/