// 每3秒存一次   
                                             setInterval(function() {
				var videoTitle = document.querySelector(".player-video-txt .title").innerHTML;
				var LocatLink = location.href;
				var videoLink = location.href.slice(location.href.lastIndexOf("/") + 1, location.href.lastIndexOf("."));
				var numactive = document.querySelector(".numactive").getAttribute("data-tag");
				for(var i = 0; i < document.cookie.split(";").length; i++) {
					var arr = document.cookie.split(";")[i].split("=");
					var videoNameid = "time_" + videoLink + "_" + numactive;

					// console.log("地址栏id"+ videoNameid)
					//  console.log("cookie :id"+arr[0].slice(1))
					// console.log(videoNameid == arr[0].slice(1))
					if(videoNameid == arr[0].slice(1)) {
						var cookieTime = arr[1];
						var hour = Math.floor(cookieTime / 60 / 60);
						var minute = Math.floor(cookieTime / 60 % 60);
						var seconds = Math.floor(cookieTime % 60);
						if(hour < 10) {
							hour = "0" + hour;
						}
						if(minute < 10) {
							minute = "0" + minute;
						}
						if(seconds < 10) {
							seconds = "0" + seconds;
						}
						var time_storp = hour + ":" + minute + ":" + seconds;
					}
				}
				var obj = {};
				obj.title = videoTitle;
				obj.link = LocatLink;
				obj.timeStamp = new Date().getTime();
				obj.cookieTime = time_storp;

				var his = localStorage.getItem("history");
				if(!his) {
					//					初始化本地存储;
					var historyArr = [];
					historyArr.push(obj);
					his = localStorage.setItem("history", JSON.stringify(historyArr))
				} else {
					//					将字符串转化为数组
					his = JSON.parse(his);
					if(his.length > 10) {
						his.length = 10;
					}
					his.push(obj);
					//排序
					var compare = function(prop) {
						return function(obj1, obj2) {
							var val1 = obj1[prop];
							var val2 = obj2[prop];
							if(val1 > val2) {
								return -1;
							} else if(val1 < val2) {
								return 1;
							} else {
								return 0;
							}
						}
					}
					his.sort(compare("timeStamp"));
					//去重把重复的value去掉
					function  obj2key(obj,  keys) {      
						var  n  =  keys.length,
							key  =   [];      
						while(n--) {
							key.push(obj[keys[n]]);      
						}      
						return  key.join('|');  
					}  
					//去重操作  
					function  uniqeByKeys(his, keys) {      
						var  arr  =   [];      
						var  hash  =   {};      
						for (var  i  =  0,  j  =  his.length;  i  <  j;  i++)  {          
							var  k  =  obj2key(his[i],  keys);          
							if (!(k  in  hash))  {              
								hash[k]  =  true;              
								arr .push(his[i]);          
							}      
						}      
						return  arr ;  
					}
					var  arr  =  uniqeByKeys(his, ['title']); 
					his = localStorage.setItem("history", JSON.stringify(arr))
				}
				isAppend = true;
			}, 3000);
			//把存好的显示到页面
var historyTime = document.querySelector(".sub ul").children[0];
	var scrollnav = document.querySelector(".record-box .scrollnav");
	historyTime.addEventListener("mouseenter", function() {
		historyTime.classList.add("selected");
		refreshHistory();
	})
	historyTime.addEventListener("mouseleave", function() {
		historyTime.classList.remove("selected");
		scrollnav.innerHTML = "";
	})

	function refreshHistory() {
		var arrList = localStorage.getItem("history");
		var historyText = document.querySelector('.record-box .record-list');
		arrList = JSON.parse(arrList);
		if(arrList == null) {
			return
		} else {
			arrList.forEach(function(el) {
				var div = document.createElement("div");
				div.setAttribute("class", "mt-15");
				div.innerHTML += `<a><span class="Mtitle">${el.title}</span><span class="Mtime">${el.cookieTime==undefined?(el.cookieTime="00:00:00"):(el.cookieTime)}</span></ a>`;
				div.children[0].setAttribute("href", el.link);
				div.children[0].setAttribute("target", "_blank");
				historyText.appendChild(div);
			})
		}
	}