$(function() {
	$(".top-dy-b").children().eq(0).on("click", function() {
		$(this).addClass("span88").siblings().removeClass("span88");
		$(".top-dy-bottom-r-rebo-r").fadeOut();
	})
	$(".top-dy-b").children().eq(1).on("click", function() {
		$(this).addClass("span88").siblings().removeClass("span88");
		$(".top-dy-bottom-r-rebo-r").fadeIn().siblings("span").fadeOut();
	})

})
$(function() {
	$(".top-dsj-b").children().eq(0).on("click", function() {
		$(this).addClass("span88").siblings().removeClass("span88");
		$(".top-dsj-bottom-r-rebo-r").fadeOut();
	})
	$(".top-dsj-b").children().eq(1).on("click", function() {
		$(this).addClass("span88").siblings().removeClass("span88");
		$(".top-dsj-bottom-r-rebo-r").fadeIn().siblings("span").fadeOut();
	})

})
$(function() {
	$(".top-zy-b").children().eq(0).on("click", function() {
		$(this).addClass("span88").siblings().removeClass("span88");
		$(".top-zy-bottom-r-rebo-r").fadeOut();
	})
	$(".top-zy-b").children().eq(1).on("click", function() {
		$(this).addClass("span88").siblings().removeClass("span88");
		$(".top-zy-bottom-r-rebo-r").fadeIn().siblings("span").fadeOut();
	})

})
$(function() {
	$(".top-dm-b").children().eq(0).on("click", function() {
		$(this).addClass("span88").siblings().removeClass("span88");
		$(".top-dm-bottom-r-rebo-r").fadeOut();
	})
	$(".top-dm-b").children().eq(1).on("click", function() {
		$(this).addClass("span88").siblings().removeClass("span88");
		$(".top-dm-bottom-r-rebo-r").fadeIn().siblings("span").fadeOut();
	})

})



$(function() {
	$(".top-nav-ul").children().eq(0).on("click", function() {
		$(".top-right-shouye").fadeIn().siblings().fadeOut();
	})
	$(".top-nav-ul").children().eq(1).on("click", function() {
		$(".top-ddy").fadeIn().siblings().fadeOut();
	})
	$(".top-nav-ul").children().eq(2).on("click", function() {
		$(".top-ddsj").fadeIn().siblings().fadeOut();
	})
	$(".top-nav-ul").children().eq(3).on("click", function() {
		$(".top-dzy").fadeIn().siblings().fadeOut();
	})
	$(".top-nav-ul").children().eq(4).on("click", function() {
		$(".top-ddm").fadeIn().siblings().fadeOut();
	})
})
//大电影板块循环开始
var bigvideo = document.querySelector(".top-dy-bottom-r-rebo-l");
var bigvideorebo = document.querySelector(".top-dy-bottom-r-rebo-r");
var bigvideo_templete = "";
for(var i = 0; i < 50; i++) {
	bigvideo_templete += t(i);
}
function t(index) {
	return `
	<li>
		<span class="top-dy-b-span1">1</span>
		<span class="top-dy-b-span2">冰雪女王3:火与冰</span>
		<span class="top-dy-b-span3">内地;欧洲</span>
		<span class="top-dy-b-span4">动画/奇幻</span>
		<span class="top-dy-b-span5">迪·布拉雷·贝克尔</span>
		<span class="top-dy-b-span6">8.8</span>
	</li>
	`
}
bigvideo.innerHTML += bigvideo_templete;
bigvideorebo.innerHTML += bigvideo_templete;
//大电影板块循环结束

//大电视剧板块循环开始
var bigdsj = document.querySelector(".top-dsj-bottom-r-rebo-l");
var bigdsjnew = document.querySelector(".top-dsj-bottom-r-rebo-r");
var bigdsj_templete = "";
for(var i = 0; i < 50; i++) {
	bigdsj_templete += s(i);
}
function s(index) {
	return `
	<li>
		<span class="top-dsj-b-span1">1</span>
		<span class="top-dsj-b-span2">冰雪女王3:火与冰</span>
		<span class="top-dsj-b-span3">内地;欧洲</span>
		<span class="top-dsj-b-span4">动画/奇幻</span>
		<span class="top-dsj-b-span5">迪·布拉雷·贝克尔</span>
		<span class="top-dsj-b-span6">8.8</span>
	</li>
	`
}
bigdsj.innerHTML += bigdsj_templete;
bigdsjnew.innerHTML += bigdsj_templete;
//大电视剧板块循环结束

//大综艺板块循环开始
var bigzy = document.querySelector(".top-zy-bottom-r-rebo-l");
var bigzynew = document.querySelector(".top-zy-bottom-r-rebo-r");
var bigzy_templete = "";
for(var i = 0; i < 50; i++) {
	bigzy_templete += z(i);
}
function z(index) {
	return `
	<li>
		<span class="top-zy-b-span1">1</span>
		<span class="top-zy-b-span2">冰雪女王3:火与冰</span>
		<span class="top-zy-b-span3">内地;欧洲</span>
		<span class="top-zy-b-span4">动画/奇幻</span>
		<span class="top-zy-b-span5">迪·布拉雷·贝克尔</span>
		<span class="top-zy-b-span6">8.8</span>
	</li>
	`
}
bigzy.innerHTML += bigzy_templete;
bigzynew.innerHTML += bigzy_templete;
//大综艺板块循环结束

//大动漫板块循环开始
var bigdm = document.querySelector(".top-dm-bottom-r-rebo-l");
var bigdmnew = document.querySelector(".top-dm-bottom-r-rebo-r");
var bigdm_templete = "";
for(var i = 0; i < 50; i++) {
	bigdm_templete += m(i);
}
function m(index) {
	return `
	<li>
		<span class="top-dm-b-span1">1</span>
		<span class="top-dm-b-span2">冰雪女王3:火与冰</span>
		<span class="top-dm-b-span3">内地;欧洲</span>
		<span class="top-dm-b-span4">动画/奇幻</span>
		<span class="top-dm-b-span5">迪·布拉雷·贝克尔</span>
		<span class="top-dm-b-span6">8.8</span>
	</li>
	`
}
bigdm.innerHTML += bigdm_templete;
bigdmnew.innerHTML += bigdm_templete;
//大动漫板块循环结束

var bingtem = "";
var topph1 = document.querySelector(".top-ph-bottom-l ul").children[0];
for(var i = 0; i < 9; i++) {
	bingtem += bingxue(i);
}

function bingxue(index) {
	return `
		<li class="top-ph-bottom-l-li">
			<em>1</em>
			<a href="javaScript:void(0)">冰雪女王3:火与冰</a>
			<span>8.8</span>
		</li>
	`
}
topph1.innerHTML += bingtem;