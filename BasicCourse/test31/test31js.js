/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-06-05 15:36:27
 * @version $Id$
 */
var sourceData = [{
	    product: "手机",
	    region: "华东",
	    sale: [120, 100, 140, 160, 180, 185, 190, 210, 230, 245, 255, 270]
	}, {
	    product: "手机",
	    region: "华北",
	    sale: [80, 70, 90, 110, 130, 145, 150, 160, 170, 185, 190, 200]
	}, {
	    product: "手机",
	    region: "华南",
	    sale: [220, 200, 240, 250, 260, 270, 280, 295, 310, 335, 355, 380]
	}, {
	    product: "笔记本",
	    region: "华东",
	    sale: [50, 60, 80, 110, 30, 20, 70, 30, 420, 30, 20, 20]
	}, {
	    product: "笔记本",
	    region: "华北",
	    sale: [30, 35, 50, 70, 20, 15, 30, 50, 710, 130, 20, 20]
	}, {
	    product: "笔记本",
	    region: "华南",
	    sale: [80, 120, 130, 140, 70, 75, 120, 90, 550, 120, 110, 100]
	}, {
	    product: "智能音箱",
	    region: "华东",
	    sale: [10, 30, 4, 5, 6, 5, 4, 5, 6, 5, 5, 25]
	}, {
	    product: "智能音箱",
	    region: "华北",
	    sale: [15, 50, 15, 15, 12, 11, 11, 12, 12, 14, 12, 40]
	}, {
	    product: "智能音箱",
	    region: "华南",
	    sale: [10, 40, 10, 6, 5, 6, 8, 6, 6, 6, 7, 26]
	}];
	var rs=document.getElementsByName("region");
	var con1=document.getElementById("con1");
	var table1=document.getElementById("table-wrapper");
	var ps=document.getElementsByName("product");
	//返回选择的值哦
	function backvalue(){
		for(var q=0;q<rs.length;q++){
			if (rs[q].checked==true) {
				var rscon=rs[q].value;
				console.log(rscon);
				
			}
		}
		for(var q=0;q<ps.length;q++){
			if (ps[q].checked==true) {
				var pscon=ps[q].value;
				console.log(pscon);
				
			}
		}
		return {a1:rscon,b1:pscon};
	}
	//初始化
	var ab=backvalue();
	var a1=ab.a1;
	var b1=ab.b1;
	buildtable(a1,b1);
	//总函数
	con1.onchange=function all(){
		var ab=backvalue();
		var a1=ab.a1;
		var b1=ab.b1;
		var table=[];
		table=document.getElementsByTagName("table");
		//奇怪哦 直接remove会报错。
		for(var i=0;i<=table.length-1;i++){
			table1.removeChild(table[i]);
		}
		console.log(table);
		buildtable(a1,b1);
	}
	//建表
	function buildtable(a1,b1){
		var table=document.createElement("table");
		table.border="1px";
		for(var i=0;i<2;i++){
			if (i==0) {
				var tr = table.insertRow();
				for(var j=0;j<14;j++){
					if(j==0){
						td = tr.insertCell();
						td.innerHTML="商品";

					}else if(j==1){
						td = tr.insertCell();
						td.innerHTML="地区";
					}else if(j>1){
						td = tr.insertCell();
						td.innerHTML=j-1+"月";
						
					}
				}
			}else{

				tr = table.insertRow();
				for(var c=0;c<14;c++){
					if(c==0){
						for(var p in sourceData){
							if (sourceData[p].product==b1&&sourceData[p].region==a1) {
								td = tr.insertCell();
								td.innerHTML=sourceData[p].product;
							}
						}
						

					}else if(c==1){
						for(var p in sourceData){
							if (sourceData[p].product==b1&&sourceData[p].region==a1) {
								td = tr.insertCell();
								td.innerHTML=sourceData[p].region;
							}
						}
					}else{
						for(var p in sourceData){
							if (sourceData[p].product==b1&&sourceData[p].region==a1) {
								td = tr.insertCell();
								td.innerHTML=sourceData[p].sale[c-2];
							}
						}
					}
				}
			}
			
		} 
		 
		document.querySelector("#table-wrapper").appendChild(table);
	}
	//没错我获取了一堆id不准打我
	var rr=document.getElementById("region-radio-wrapper");
	var pr=document.getElementById("product-radio-wrapper");
	var rwrapper=document.getElementsByName("region-cb");
	var pwrapper=document.getElementsByName("product-cb");
	var checkall1=document.getElementById("checkall1");	
	var table2=document.getElementById("table-wrapper2");
	var c1=document.getElementById("c1");
	var c2=document.getElementById("c2");
	var c3=document.getElementById("c3");
	var c4=document.getElementById("c4");
	var c5=document.getElementById("c5");
	var c6=document.getElementById("c6");

	//最后一个点击的不会去除
	rr.onclick=function isornotcheck(){
		var flag=false;
		for(i=0;i<rwrapper.length-1;i++){
			if(rwrapper[i].checked==true){
				flag=true;
				break;
			}
		}
		if(!flag){
            return false ;
        }
	}
	pr.onclick=function isornotcheck(){
		var flag=false;
		for(i=0;i<pwrapper.length-1;i++){
			if(pwrapper[i].checked==true){
				flag=true;
				break;
			}
		}
		if(!flag){
            return false ;
        }
	}
	//点全选会全选中
	checkall1.onclick=function(){
		if(checkall1.checked==true){
			c1.checked=true;c2.checked=true;c3.checked=true;
			//为什么for循环不行？？（挠头）
			// for(i=0;i<rwrapper.length-1;i++){
			// 	alert(rwrapper[i].value);
			// 	rwrapper[i].checked==true;
			// }
		}else if(checkall1.checked==false){
			c2.checked=false;c3.checked=false;
		}
	}
	checkall2.onclick=function(){
		if(checkall2.checked==true){
			c4.checked=true;c5.checked=true;c6.checked=true;
		}else if(checkall2.checked==false){
			c5.checked=false;c6.checked=false;
		}
	}
	
	//初始化
	var ab2=backvalue2();
	var a2=ab2.a1;
	var b2=ab2.b1;
	buildtable2(a2,b2);
	//总函数
	con2.onchange=function(){
		var ab2=backvalue2();
		var a2=ab2.a1;
		var b2=ab2.b1;
		console.log(a2,b2);
		var table=[];
		table2.innerHTML="";
		console.log(table);
		buildtable2(a2,b2);
	}


	function backvalue2(){
		var rwrappercon=[];
		for(var q=0;q<rwrapper.length;q++){
			if (rwrapper[q].checked==true) {
				rwrappercon.push(rwrapper[q].value);
				// console.log(rwrappercon);
				
			}
		}
		var pwrappercon=[];
		for(var q=0;q<pwrapper.length;q++){
			
			if (pwrapper[q].checked==true) {
				pwrappercon.push(pwrapper[q].value);
				// console.log(pwrappercon);
				
			}
		}
		return {a1:rwrappercon,b1:pwrappercon};
	}
	//建表
	function buildtable2(a1,b1){
		var a1length=a1.length;
		var b1length=b1.length;
		console.log(a1length);
		var table=document.createElement("table");
		table.border="1px";
		for(var i=0;i<=a1length*b1length;i++){
			if (i==0) {
				var tr = table.insertRow();
				for(var j=0;j<14;j++){
					if(j==0){
						var td = tr.insertCell();
						td.innerHTML="商品";

					}else if(j==1){
						td = tr.insertCell();
						td.innerHTML="地区";
					}else if(j>1){
						td = tr.insertCell();
						td.innerHTML=j-1+"月";
						
					}
				}
			}else{
				
			}
		} 
		for(var b=0;b<b1length;b++){
			for(var a=0;a<a1length;a++){
				tr = table.insertRow();
				for(c=0;c<14;c++){
					if(c==0){
						td = tr.insertCell();
						td.innerHTML=a1[a];
					}else if(c==1){
						td = tr.insertCell();
						td.innerHTML=b1[b];
					}else if(c>1){
						for(var p in sourceData){
							if (sourceData[p].product==b1[b]&&sourceData[p].region==a1[a]) {
								td = tr.insertCell();
								td.innerHTML=sourceData[p].sale[c-2];
							}
						}
						
					}
				}
			}
		}
		document.querySelector("#table-wrapper2").appendChild(table);
	}
