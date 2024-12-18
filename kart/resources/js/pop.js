function popupCommon(clickObj, popupObj, scrollArea){
	$(clickObj).bind('click',function(e) {
		// Prevents the default action to be triggered.
		$(popupObj).bPopup({
			onClose: function() {
				$(clickObj).focus();
				$(popupObj).removeAttr('tabindex');
			}
		}, 
        function() {
            $(popupObj).attr('tabindex',0).focus().blur(function(){
            	$(popupObj).removeAttr('tabindex');
            });
            $(popupObj).find('.b-close').blur(function(){
				$(popupObj).attr('tabindex',0).focus();
			});
        });
		e.preventDefault();
	});
	$(popupObj).find(scrollArea).mCustomScrollbar({
		theme: "dark-thin",
		keyboard:{
			enable: true
		}
	});
}
popupCommon('.popcall--rentalApp', '#popRentalApp', '.pop_content') // 작가 > 상세

$('.layer_pop').each(function(){
	if($(this).size() > 0){
		$('body').addClass('scroll_hidden');
	}else{
		$('body').removeClass('scroll_hidden');
	}
	$(this).find('.btn_close').click(function(){
		$(this).closest('.layer_pop').hide();
		$('body').removeClass('scroll_hidden');
	})
	$(this).find('.layer_content').mCustomScrollbar({
		theme: "dark-thin",
		keyboard:{
			enable: true
		}
	});
	
})