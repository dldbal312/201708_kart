//header_search, header_gnb
$('.header .btn_search, .header .btnh_gnb').click(function(){
	var $obj1 = $('body'),
		$obj2 = $('.header'),
		bodyScrollClass = 'scroll_hidden',
		headerBgClass = 'bg_on',
		thisOnClass = 'on',
		parentObj = $(this).next();

	$(this).next().addClass(thisOnClass);
	$obj1.toggleClass(bodyScrollClass);
	$obj2.addClass(headerBgClass);
	$(this).next().find('.btn_close').click(function(){
		$(this).parents(parentObj).removeClass(thisOnClass);
		$obj1.removeClass(bodyScrollClass);
		$obj2.removeClass(headerBgClass);
	});
});

//headerMenu
function headMenu(obj, parentObj, tgClass){
	$(obj).on('mouseover focusin', function(){
		if($(this).find('>a').next().size() > 0){
			$(this).find('>a').parent().addClass(tgClass).parents(parentObj).addClass(tgClass);	
		}
	}).on('mouseout focusout', function(){
		$(this).find('>a').parent().removeClass(tgClass).parents(parentObj).removeClass(tgClass);
	});
	if($(obj).hasClass('on')){
		$(parentObj).addClass(tgClass)
	}
}
headMenu('.head_menu .nav_menu > li', '.head_menu', 'on');


//스크롤 탑바/상단가기 버튼
function btnTopScroll(){
	if ($(this).scrollTop() > 500) {
		$('.btntop').fadeIn();
	} else {
		$('.btntop').fadeOut();
	};
};
// scroll body to 0px on click
$('.btntop > a').bind("click", function(e) {
	// Prevents the default action to be triggered.
	$('body,html').animate({
		scrollTop: 0
	}, 500);
	e.preventDefault();
});

//accordlist
function accordList(obj, clickObj, parentObj, iconObj, tgClass, contentClass){
	$(obj).find(clickObj).click(function(e){
		if(!($(this).next().hasClass('btn_view'))){
			$(this).closest(parentObj).find(contentClass).toggle().closest(parentObj).siblings().find(contentClass).hide();
			$(this).toggleClass(tgClass).closest(parentObj).siblings().find(clickObj).removeClass(tgClass);
			$(this).find(iconObj).toggleClass(tgClass).closest(parentObj).siblings().find(iconObj).removeClass(tgClass);
			e.preventDefault();
		}		
	});
};
accordList('.tg_list', 'a.alink', 'li', 'i', 'active', '.qna_cont'); //toggle_list(ex:qna) - link 1개일경우
accordList('.tg_list', 'a.btn_view','li', 'i', 'active', '.qna_cont'); //toggle_list(ex:qna) - link+btn_view 링크2개일경우

//lnb
if($('#leftMenu .lnb_menu li').length <= 1){
	$('#leftMenu .state_arr').remove();
}
$('#leftMenu .lnb_nav').bind('click',function(){
	var menuHeight = $('.lnb_menu').outerHeight();
	if($(this).find('.lnb_menu').css("display")=="none"){
		$(this).parent().addClass('open').css({'height':menuHeight});
	}else{
		$(this).parent().removeClass('open').css({'height':'auto'});
	}
});

//오른쪽 전체메뉴 스크롤 영역
if($(".nav .nav_menu_wrap").size() > 0){
	$(".nav .nav_menu_wrap").mCustomScrollbar({
		theme: "dark-thin",
		keyboard:{
			enable: true
		}
	});	
};


//탭메뉴 style1
$('[class^="tab_"] > li > a').bind('click',function(e){
	e.preventDefault();
	$(this).parent().addClass('active').siblings().removeClass('active');
});

//탭메뉴 link_tab_style2
function mobileLinkTab2(){
	var obj1 = $('.link_tab_style2');
	var obj2 = $('.link_tab_wrap');
	var activeTxt = obj1.find('li.active').text();
	var titViewTxt = obj2.find('.sectit3').html();

	obj2.find('.sectit3').html(titViewTxt + '<span class="blind">현재페이지:</span>' + activeTxt);
	obj2.find(' > .blind').html(activeTxt);

	$('.link_tab_wrap > .sectit3').click(function(e){
		$(this).addClass('active').parent().addClass('on');
		obj1.parent().append('<a class="btn_close active"><span class="blind">메뉴닫기</span></a>');
		$('.link_tab_wrap .btn_close').click(function(e){
			$(this).removeClass('active').parent().removeClass('on').find('.sectit3').removeClass('active');
			$(this).remove();
			e.preventDefault();
		});
		e.preventDefault();
	});
}
mobileLinkTab2();

// select
$("select").select2({
	minimumResultsForSearch: Infinity
});

//상세검색
$('.btn_next_view, .search_detail .btn_close').on('click', function(e){
	var thisId = $(this).attr('href');
	$(thisId).toggle();
	e.preventDefault();
});

//포토슬라이드 제어
function owlCarouselCountHtml(moveCount, itemLength){
	$('.photocount').html(moveCount + '<span class="ftclr_gray2"> of ' + itemLength + '</span>');
}
$(window).load(function(e) {
	var displayText = 1;
	var itemCount = 0; 
	$('.owl-carousel').each(function(){
		itemCount = $(this).find('.owl-item').length;
	})
	owlCarouselCountHtml(displayText, itemCount);
}) 
$('.owl-carousel').on('initialized.owl.carousel changed.owl.carousel resized.owl.carousel', function(e) {   
    var items_per_page = e.page.size;
    if (items_per_page > 1){
        var min_item_index  = e.item.index,
            max_item_index  = min_item_index + items_per_page,
            displayText    = (min_item_index+1) + '-' + max_item_index;
    } else {
        var displayText = (e.item.index+1);
    }
    var itemCount = e.item.count
    owlCarouselCountHtml(displayText, itemCount);
});


//버튼제어
$(".sub_contents .btn_wrap").each(function(){
	if($(this).find('[class*="cl"]').last().hasClass('btn-cl-s768')){
		$(this).find('.btn-cl-s768').prev().addClass('btn-cl-last');
	};
});	

//갤러리리스트 높이값
function mobileGallist(){
	if($('.gallery_list .info').hasClass('type2')){
		$('.gallery_list li:nth-child(odd)').each(function(i){
			var thisHeight = $(this).height();
			var thisPaddingR = parseInt($(this).css('padding-right'));
			if($(window).width() < 767 && thisHeight != $(this).next().height()){
				//mobile
				$(this).next().css('min-height',thisHeight + thisPaddingR + 2);
			}else{
				//ipad, pc
				$(this).next().removeAttr('style');
			}
		});
	}
};
mobileGallist();

//모바일 별도 제어(터치되는경우)
function pcmobileCheck(){
	var filter = "win16|win32|win64|mac";
	if(navigator.platform){
		if(0 > filter.indexOf(navigator.platform.toLowerCase())){
			//console.log("mobile");
			$('.next_over').next().remove(); // gallery_list
		}else{
			//console.log("PC");
		};
	};
};
pcmobileCheck();

//한페이지에서 연동되는 탭 인경우
function tabViewPage(tabViewWrap, tabInnerName, tabStyName, onClassName){
	$(tabViewWrap).each(function(){
		var $tabClick = $(this).prev(tabStyName);
		if($(this).size() > 0){
			$tabClick.find('a').on('click', function(e){
				var tabIndex = $(this).parent().index();
				$(this).parent().addClass(onClassName).siblings().removeClass(onClassName);
				$(this).closest(tabStyName).next().find(tabInnerName).eq(tabIndex).show().siblings().hide();
				e.preventDefault();
			});
		};
	})
	
};
tabViewPage('.tabview_wrap', '.tabview', '.link_tab_style1', 'active'); //한페이지에서 연동되는탭

//TabScrollFix
var tabTopDefault = function(obj){
	tabTop = $(obj).offset().top;	
};
function tabFixTop(obj){
	var headerHeight = $('.header').outerHeight() + $('.lnb_wrap').outerHeight();
	var contWidth = $('.sub_contents').innerWidth();
	if(contWidth > 768){
		contWidth = contWidth;
	}else{
		contWidth = '100%'
	}
	if($(window).scrollTop() > tabTop - headerHeight){
		$(obj).addClass('tabfix').css({
			'width': contWidth,
			'top': headerHeight
		});
	}else{
		$(obj).removeClass('tabfix').css({
			'width':'auto',
			'top':'auto'
		});
	};	
};
function tabFixScroll(obj){
	tabTopDefault(obj);
	tabFixTop(obj);
	$(window).resize(function(){
		tabFixTop(obj);
	});
	$(window).scroll(function(){
		tabFixTop(obj);

	});
};
//TabScrollFix(e)

//resize
$(window).resize(function(){
	mobileGallist();
});

//scroll
$(window).scroll(function(){
	btnTopScroll(); //스크롤 탑바/상단가기 버튼

});

