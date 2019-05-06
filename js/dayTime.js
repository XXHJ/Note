
	function startTime(){
				var today=new Date();
				var h=today.getHours();
				var m=today.getMinutes();
				var s=today.getSeconds();
				var y=today.getFullYear()
				var m1=today.getMonth();
				var r=today.getDate();
				
				m=checkTime(m);
				s=checkTime(s);
				document.getElementById('zb').innerHTML=y+"年"+ (m1+1) +"月"+r+"日" + h+":"+m+":"+s;
				t=setTimeout('startTime()',500);
			}
		
			function checkTime(i)
			{
			if (i<10) 
			  {i="0" + i;}
			  return i;
			}
