---
layout: null
---
{% include /js/typed.min.js %}
$(document).ready(function(){
	var w = window.innerWidth;
	function helloWorld(){
		// Set CSS for .page-heading
		$(".page-heading").css({"margin":"0", "padding-top":"15px", "padding-bottom":"15px"})
		$(".page-heading").html("<div class='text-editor-wrap'><div class='title-bar'><span class='title'>docbohanh@Xmachine</span></div><div class='text-body'>$ <span id='typed'></span></div></div>");
		$("#typed").typed({
			strings: ["Hi!", "I'm a <b>alumnus HUST.</b>", "I'm a <b>blogger.</b>", "I'm a <b>developer.</b>", "I'm <b>Lã.</b><br>$ Nice to meet you!"],
			cursorChar: " ⎸",
			typeSpeed: 45,
			callback: function(){
		    	setTimeout(function(){
			        helloWorld();
			    }, 4500);
		    }
		});
	}
	if (w > 370) {
		helloWorld();
	}
});

