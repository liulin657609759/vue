function getStyle(obj,attr){
	return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj)[attr]; 
}
function $w(str){
	if(typeof(str)==="string"){
		return document.getElementById(str);
	}else if(typeof(str)==="function"){
		window.onload=str;
	}else{
		return str;
	}
}
//是一位数前面加零
function timeFormat(n){
	return n<10?"0"+n:""+n;
}
function doMove(obj,attr,end,step,endFn){
		clearInterval(obj.timer);
		step=end>parseFloat(getStyle(obj,attr))?step:-step;
		obj.timer=setInterval(function(){
			var newAttr=parseFloatparseFloat(getStyle(obj,attr))+step;
			newAttr=step>0?Math.min(newAttr,end):Math.max(newAttr,end);
			obj.style[attr]=newAttr+"px";
			if(parseFloat(getStyle(obj,attr))==end){
				clearInterval(obj.timer);
				endFn&&endFn();
			}
		},30);
	}
	//输出此刻时间
	function getNowTime(str){
	var myTime=new Date(); 
	var iYe=myTime.getFullYear(); //获取年
    var iMo=myTime.getMonth(); //获取月(从0开始要+1)
    var iDa=myTime.getDate(); //获取日
    var iDay=myTime.getDay(); //获取星期
    var iHo=myTime.getHours(); //获取时
    var iMi=myTime.getMinutes(); //获取分
    var iSe=myTime.getSeconds(); //获取秒
    switch(iDay){
    	case 0: iDay="星期日";break;
    	case 1: iDay="星期一";break;
    	case 2: iDay="星期二";break;
    	case 3: iDay="星期三";break;
    	case 4: iDay="星期四";break;
    	case 5: iDay="星期五";break;
    	case 6: iDay="星期六";break;
    }
    switch(str){
    	case "date" : return iYe+"/"+timeFormat(iMo)+"/"+timeFormat(iDa);
    	break;
    	case "time" : return timeFormat(iHo)+":"+timeFormat(iMi)+":"+timeFormat(iSe);
    	break;
    	default :return iYe+"/"+timeFormat(iMo)+"/"+timeFormat(iDa)+" "+iDay+" "+timeFormat(iHo)+":"+timeFormat(iMi)+":"+timeFormat(iSe);
    }
    
}
    console.log(getNowTime());
    //计算元素到全局的位置
    function offset(obj,s){
    	var allAttr=0;
    	while(obj!=null){
    		allAttr+=obj[s];
    		obj=obj.offsetParent;
    	}
    	return allAttr;
    }
    //在父元素中添加元素
    function append(oU,oL){
        oU.children[0] ? oU.insertBefore(oL,oU.children[0]) : oU.appendChild(oL)
    }
    //实现返回值为所传参数class类名的元素集合
    function getElsByClass(className,eleP){
            eleP = eleP || document;
            if(document.getElementsByClassName){
                return eleP.getElementsByClassName(className)
            }else{
                var aEle = eleP.getElementsByTagName("*");
                var arr = [];
                for(var i=0;i<aEle.length;i++){
                    var arr = aEle[i].className.split(" ");
                    for(var j=0;j<arrClass.length;j++){
                        if(arrClass[j]==className){
                            arr.push(aEle[i]);
                            break;
                        }
                    }
                }
                return arr;
            }
        }

    //增加元素的class
    function addClass(obj,className){
        var arr=obj.className.split(" ");
        if(arr.indexOf(className)==-1){
            obj.className+=" "+className;
        }
    }
    //删除元素的class
    function removeClass(obj,className){
        var arr=obj.className.split(" ");
        if(arr.indexOf(className)!=-1){
            arr.splice(arr.indexOf(className),1);
            obj.className=arr.join(" ");
        }
    }
    //
    function toggleClass(obj,className){
    var arr = obj.className.split(" ");
    if(arr.indexOf(className)==-1){
        obj.className += " "+className;
    }else{
        arr.splice(arr.indexOf(className),1);
        obj.className = arr.join(" ");
    }
}
    //
    function sTop(end){
        var scrollTop =  document.body.scrollTop || document.documentElement.scrollTop;
    (scrollTop!=0&&document.documentElement.scrollTop==0) ? document.body.scrollTop = end : document.documentElement.scrollTop = end;
    }
    //
    function bind(obj,evname,fn){
        if(obj.addEventListener){
            obj.addEventListener(evname,fn,false)
        }else{
            obj.attachEvent('on'+evname,function(){
                fn.call(obj);
            })
        }
    }

    function wheel(json){
    json.obj = json && json.obj || document;
    json.fnUp = json && json.fnUp || function (){};
    json.fnDown = json && json.fnDown || function (){};
    if(window.navigator.userAgent.indexOf("Firefox")>=0){
        json.obj.addEventListener("DOMMouseScroll",function (ev){
            wheelDirection(ev) ? json.fnUp() : json.fnDown();
            ev.preventDefault();
        },false);
    }else{
        json.obj.onmousewheel = function (){
            wheelDirection(event) ? json.fnUp() : json.fnDown();
            return false;
        }
    }
}
//在不同浏览器中判断滚轮的方向
function wheelDirection(ev){
    if(ev.wheelDelta){
        return ev.wheelDelta>0 ? true : false;
    }else{
        return ev.detail<0 ? true : false;
    }
}
function ajax(json){
    var method = json && json.method || "get";
    var url = json && json.url || "";
    var data = json && json.data || "";
    var fnSucc = json && json.fnSucc || function(){};
    var fnFaild = json && json.fnFaild || function(){};
    var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObjext("Microsoft.XMLHTTP");
    if(method=="get"){
        xhr.open(method,url+"?"+data,true);
        xhr.send();
    }else{
        xhr.open(method,url,true);
        xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");
        xhr.send(data);
    }
    xhr.onreadystatechange = function(){
        (xhr.readyState == 4 && xhr.status == 200) ? fnSucc(xhr.responseText) : fnFaild();
    }
}function ajax(json){
    var method = json && json.method || "get";
    var url = json && json.url || "";
    var data = json && json.data || "";
    var fnSucc = json && json.fnSucc || function(){};
    var fnFaild = json && json.fnFaild || function(){};
    var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObjext("Microsoft.XMLHTTP");
    if(method=="get"){
        xhr.open(method,url+"?"+data,true);
        xhr.send();
    }else{
        xhr.open(method,url,true);
        xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");
        xhr.send(data);
    }
    xhr.onreadystatechange = function(){
        (xhr.readyState == 4 && xhr.status == 200) ? fnSucc(xhr.responseText) : fnFaild();
    }
}function ajax(json){
    var method = json && json.method || "get";
    var url = json && json.url || "";
    var data = json && json.data || "";
    var fnSucc = json && json.fnSucc || function(){};
    var fnFaild = json && json.fnFaild || function(){};
    var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObjext("Microsoft.XMLHTTP");
    if(method=="get"){
        xhr.open(method,url+"?"+data,true);
        xhr.send();
    }else{
        xhr.open(method,url,true);
        xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");
        xhr.send(data);
    }
    xhr.onreadystatechange = function(){
        (xhr.readyState == 4 && xhr.status == 200) ? fnSucc(xhr.responseText) : fnFaild();
    }
}