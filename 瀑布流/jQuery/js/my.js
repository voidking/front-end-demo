
$(window).bind("load", function() {
	init();
	var dataInt={'data':[{'src':'1.jpg'},{'src':'2.jpg'},{'src':'3.jpg'},{'src':'4.jpg'}]};
    $(window).bind("scroll",function(){
        if(checkscrollside()){
            $.each( dataInt.data, function( index, value ){
                var $oPin = $('<div>').addClass('pin').appendTo( "#main" );
                var $oBox = $('<div>').addClass('box').appendTo( $oPin );
                $('<img>').attr('src','./images/' + $( value).attr( 'src') ).appendTo($oBox);
            });
            init();
        };
    });

});

$(window).bind("resize", function() {
	location.reload();
});

function init(){
 	var windowWidth = $(window).width();
	var windowHeight = $(window).height();
	var pinWidth = $(".pin:first").outerWidth();
	var line = Math.floor(windowWidth/pinWidth);

	var $pins = $(".pin");
	var lineHeights = [];
	$pins.each(function(index) {
		if(index < line){
			lineHeights[index]=$pins.eq(index).outerHeight();
		}else{
			var minHeight = Math.min.apply(null,lineHeights);
			var minIndex = $.inArray(minHeight, lineHeights);
			$(this).css({
				'position': 'absolute',
                'top': minHeight,
                'left': $pins.eq( minIndex ).position().left
			});

			lineHeights[ minIndex ] += $(this).outerHeight();
		}		
	});
}

function checkscrollside(){
	var $pins = $(".pin");
	var offsetTop = $pins.last().offset().top;
	var scrollTop = $(document).scrollTop();
	var windowH = $(window).height()-100;
	//console.log(offsetTop+","+scrollTop+","+windowH);
	if (offsetTop - scrollTop < windowH) {
		return true;
	} else{
		return false;
	};
}
