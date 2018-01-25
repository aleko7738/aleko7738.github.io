
/* родительский класс*/
function Scroll(sSelector){
	var s = this;

	s.init(sSelector);
	s.topBtn = s.findObject(".topLink");
		s.showHideTopBtn = function(){
			if ($(window).scrollTop() > document.documentElement.clientHeight){
				s.topBtn.fadeIn(1000);
			}
			else{
				s.topBtn.fadeOut(1000);
			}
		}

		s.slowScroll = function(){
			event.preventDefault();
			$("html, body")
			.stop()
			.animate({scrollTop:0}, "slow");
					
		}
	$(window).scroll(s.showHideTopBtn);
	s.topBtn.click(s.slowScroll);
		
	
}
	Scroll.prototype = new Component();