$(".toggle_button").hover(
	// $(".toggle_button").css("background-color","#fff");
	function(){
		$(".toggle_button").animate(
			{	
				opacity:0.8}
				,1000);
	},	
	function(){
	 	$(".toggle_button").animate(
	 		{	
	 		opacity:1}
	 		,1000);
	}
	);

$(".read_more_a").hover(
	function() {
		$(this).animate(
			{
				borderColor:"#ddd"
			},1000		
		);	
	},
	function() {
		$(this).animate(
			{
				borderColor:"transparent"
			},1000		
		);	
	}
	);

// var temp = $(".templates_content")[0];
// console.log(temp);

// temp.animate(,
// 	{margin-left:0}
// 	,1000
// 	);

$(".left").animate(
	{marginLeft:0}
	,1000
	);

$(".left").animate(  //// разобраться
	{marginRight:0,
		marginLeft:0}
	,30000
	);

$(".top").animate(  //// разобраться
	{paddingTop:0,
		opacity:1}
	,1000
	);

// function inWindow(s){
//   var scrollTop = $(window).scrollTop();
//   var windowHeight = $(window).height();
//   var currentEls = $(s);
//   var result = [];
//   currentEls.each(function(){
//     var el = $(this);
//     var offset = el.offset();
//     if(scrollTop <= offset.top && (el.height() + offset.top) < (scrollTop + windowHeight))
//       result.push(this);
//   });
//   return $(result);
// }

// var boxesInWindow = inWindow("div");
// boxesInWindow.css("background-color", "red");

