
/* родительский класс*/
function Component(){
	this.elem = null;

	this.init = function(sSelector){
		this.elem = $(sSelector);
		console.log("sSelector", sSelector);

	}
	this.findObject = function(sSelector){
		//s.arrowPrev = s.slider.find(".preview__arrow_prev");
		return this.elem.find(sSelector);

	}
}
	