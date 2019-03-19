var toggle2 = document.querySelector(".navbar-toggle2");
var navbar = document.querySelector(".nav2-tonglang");
var cli = false;
toggle2.addEventListener("click", function() {
	clearTimeout(c);
	if(cli == false) {
		var c = setTimeout(function() {
			navbar.classList.add("nav2-tonglang8");
			cli = true;
			console.log("true");
		}, 300)
	} else {
		var c = setTimeout(function() {
			navbar.classList.remove("nav2-tonglang8");
			cli = false;
			console.log("false");
		}, 300)
	}
})
//$(function(){
//	$("navbar-toggle2").on("click",function(){
//		$("nav2-tonglang").toggleClass("nav2-tonglang8")
//	})
//})