var weather;
// //获取吕梁天气情况
$.ajax({
	// 获取数据连接
	url:"https://www.toutiao.com/stream/widget/local_weather/data/?city=太原",
	// 减少跨地域的阻碍
	dataType:"jsonp",
	// 获取方式
	type:"get",
	// obj随机定义的一个接受数据的参数
	success:function(obj){
		// console.log(obj);
		weather=obj.data.weather;
		console.log(weather);
		// console.log(weather.city_name);
	}
})
var city;
$.ajax({
	// 获取数据连接
	url:"https://www.toutiao.com/stream/widget/local_weather/city/",
	// 减少跨地域的阻碍
	dataType:"jsonp",
	// 获取方式
	type:"get",
	// obj随机定义的一个接受数据的参数
	success:function(obj){
		city=obj.data;
		// console.log(city);
	}
})
// 渲染数据函数
//       函数名
function updata(){
	// 城市名称
	var city_name=document.querySelector(".city");
	// console.log(city_name);
	city_name.innerHTML=weather.city_name;

	// 当前温度
	var temperature=document.querySelector(".temperature");
	temperature.innerHTML=weather.current_temperature+"°";
	// console.log(temperature);

	// 当前天气
	var condition=document.querySelector(".condition");
	condition.innerHTML=weather.current_condition;
	// console.log(condition);

	// 当前最高温
	var dat_high_temperature=document.querySelector("#dat_high_temperature");
	dat_high_temperature.innerHTML=weather.dat_high_temperature+"°";
	// console.log(dat_high_temperature);

	// 当前最低温
	var dat_low_temperature=document.querySelector("#dat_low_temperature");
	dat_low_temperature.innerHTML=weather.dat_low_temperature+"°";
	// console.log(dat_low_temperature);

	// 当前天气情况
	var condition=document.querySelector("#current_condition");
	condition.innerHTML=weather.current_condition;

	// 今天天气icon
	var dat_weather_icon_id=document.querySelector("#dat_weather_icon_id");
	dat_weather_icon_id.style=`background-image:url(img/${weather.dat_weather_icon_id}.png)`;
	
	// 明天最高温
	var tomorrow_high_temperature=document.querySelector("#tomorrow_high_temperature");
	tomorrow_high_temperature.innerHTML=weather.tomorrow_high_temperature+"°";

	// 明天最低温
	var tomorrow_low_temperature=document.querySelector("#tomorrow_low_temperature");
	tomorrow_low_temperature.innerHTML=weather.tomorrow_low_temperature+"°";

	// 明天天气情况
	var tomorrow_condition=document.querySelector("#tomorrow_condition");
	tomorrow_condition.innerHTML=weather.tomorrow_condition;

	// 明天天气icon
	var tomorrow_weather_icon_id=document.querySelector("#tomorrow_weather_icon_id");
	tomorrow_weather_icon_id.style=`background-image:url(img/${weather.tomorrow_weather_icon_id}.png)`;

	var str="";
	weather.hourly_forecast.forEach((item,index)=>{
		// console.log(item,index);
		str=str+`
		  <div class="now">
				<h2 class="new_time">${item.hour}:00</h2>
				<div class="icon_img" style="background-image:url(img/${item.weather_icon_id}.png)"></div>
				<h2 class="new_temp">${item.temperature}°</h2>
			</div>
		`
	})
	$(".wrap").html(str);
	// 数组类型的对象  for循环  in在内部
	// i代表数组下标
	// weather.hourly forecast[i] 代表数组中的每一个元素
	// 24小时天气
	// for (var i in weather.hourly_forecast) {
	// 	// console.log(weather.hourly forecast[i].hour)
	// 	// 创建now
	// 	// 1.创建元素
	// 	var now=document.createElement("div");
	// 	// 2.添加类名
	// 	now.className="now";
	// 	// 3.插入页面（父元素）中
	// 	  // 获取父元素
	// 	var wrap=document.querySelector(".wrap");
	// 	wrap.appendChild(now);
	// 	// 24小时时间
	// 	var h2=document.createElement("h2");
	// 	h2.className="new_time";
	// 	h2.innerHTML=weather.hourly_forecast[i].hour+":00";
	// 	now.appendChild(h2);
	// 	// 24小时天气图片
	// 	var icon_img=document.createElement("div");
	// 	icon_img.className="icon_img";
	// 	icon_img.style=`background-image:url(img/${weather.hourly_forecast[i].weather_icon_id}.png)`;
	// 	now.appendChild(icon_img);
	// 	// 24小时温度
	// 	var h2=document.createElement("h2");
	// 	h2.className="new_temp";
	// 	h2.innerHTML=weather.hourly_forecast[i].hour+"°";
	// 	now.appendChild(h2);
	// }
	// 未来十六天天气情况
	var str2="";
	weather.forecast_list.forEach((item,index)=>{
		// console.log(item,index);
		str2=str2+`
		    <div class="con">
				<div class="con_date">
					<span>${item.date.slice(5,7)}/${item.date.slice(8)}</span>
				</div>
				<div class="con_weaH">${item.condition}</div>
				<div class="con_picH" style="background-image:url(img/${item.weather_icon_id}.png")></div>
				<div class="con_weaL">${item.low_temperature}</div> 
				<div class="con_low">${item.wind_direction}</div>
				<div class="con_level">${item.wind_level}</div>
			</div>
		`
	})
	$(".wrap1").html(str2);
	// for(var j in weather.forecast_list){
	// 	// 创建大盒子con  定义子元素con_date
	// 	var con=document.createElement("div");
	// 	con.className="con";
	// 	var wrap1=document.querySelector(".wrap1");
	// 	wrap1.appendChild(con);
	// 	// 日期
	// 	var con_date=document.createElement("div");
	// 	con_date.className="con_date";
	// 	//         slice截取字符串（）  括号里为截取的字符串的位置
	// 	con_date.innerHTML=weather.forecast_list[j].date.slice(5,7)+"/"+weather.forecast_list[j].date.slice(8,10);
	// 	// alert(con_date.slice(5));
	// 	//从第5个字符开始,截取到最后个字符;返回"第五个字符后面的值"
	// 	con.appendChild(con_date);

	// 	var con_weaH=document.createElement("div");
	// 	con_weaH.className="con_weaH";
	// 	con.appendChild(con_weaH);
	// 	con_weaH.innerHTML=weather.forecast_list[j].high_temperature+"°";

	// 	var con_picH=document.createElement("div");
	// 	con_picH.className="con_picH";
	// 	con_picH.style=`background-image:url(img/${weather.forecast_list[j].weather_icon_id}.png)`;
	// 	con.appendChild(con_picH);

	// 	var con_weaL=document.createElement("div");
	// 	con_weaL.className="con_weaL";
	// 	con_weaL.innerHTML=weather.forecast_list[j].low_temperature+"°";
	// 	con.appendChild(con_weaL);

	// 	var con_low=document.createElement("div");
	// 	con_low.className="con_low";
	// 	con_low.innerHTML=weather.forecast_list[j].wind_direction;
	// 	con.appendChild(con_low);

	// 	var wind_level=document.createElement("div");
	// 	wind_level.className="con_level";
	// 	wind_level.innerHTML=weather.forecast_list[j].wind_level+"级";
	// 	con.appendChild(wind_level);
	// }


	// 渲染城市
	for (var m in city) {
		// console.log(city[m]);
		var h1=document.createElement("h1");
		h1.className="mid_city";
		var hot_city=document.querySelector(".hot_city");
		h1.innerHTML=m;
		hot_city.appendChild(h1);

        var con1=document.createElement("div");
        con1.className="con1";
        hot_city.appendChild(con1);

	    for (var n in city[m]) {
			// console.log(n);
			var city1=document.createElement("div");
			city1.className="city1";

			city1.innerHTML=n;
			con1.appendChild(city1);
		}
	}
}
// 请求各城市天气情况
function ajax(str){
	var url1 = `https://www.toutiao.com/stream/widget/local_weather/data/?city=${str}`;
	$.ajax({
		url:url1,
		dataType:"jsonp",
		type:"get",
		success:function(obj){
			// 获取数据
			weather=obj.data.weather;
			// 渲染数据
			updata();
			// 让城市盒子消失
			$(".location").css({"display":"none"});
		}
	})
	// var url2=document.createElement("div");
	// url2.className="search_box";
	// $.ajax({
	// 	// url:url2,
	// 	dataType:"jsonp",
	// 	type:"get",
	// 	success:function(obj){
	// 		// 获取数据
	// 		weather=obj.data.weather;
	// 		// 渲染数据
	// 		updata();
	// 		// 让城市盒子消失
	// 		$(".city");
	// 	}
	// })
}

// 页面加载完成后执行
window.onload=function(){
	updata();

	$(".city1").on("click",function(){
		var cityh=this.innerHTML;
		ajax(cityh);
	})

	$(".city").on("click",function(){
		$(".location").css({"display":"block"});
	})

	// 搜索框
	$("input").on("focus",function(){
		$(".search_right").html("搜索");
	})


	var button=document.querySelector(".search_right");
	// console.log(button);
	// 点击 取消 location消失     点击搜索 str1==城市名称
	button.onclick=function(){
		// 获取search_right中的内容
		var text=button.innerText;
		console.log(text);  
		// 取消  确认
		if(text=="取消"){
			$(".location").css({"display":"none"});
		}
		else{
			// 获取输入框中的内容
			var str1=document.querySelector("input").value;
			// 选择一级城市（省）
			for(var i in city){
				// 选择二级城市（市）
				for(var j in city[i]){
					if(str1==j){
						ajax(str1);
						return;
					}
				}
			}
			alert("没有该城市");
		}
	}
}