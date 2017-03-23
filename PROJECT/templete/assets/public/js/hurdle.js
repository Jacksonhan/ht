	var photoHurdle = function()
	{
		//this.portrait = document.getElementById("portrait");
		//this.bg = document.getElementById("bg-images");
		this.arg = arguments;
	/*}
	photoHurdle.prototype.createHurdle = function()
	{*/
		var hurdle = document.createElement("div");
		hurdle.id = "hurdle";
		hurdle.className = "";
		hurdle.style.position="fixed";
		hurdle.style.top = "0";
		hurdle.style.left = "0";
		hurdle.style.zIndex = "1";
		hurdle.style.width = "100%";
		hurdle.style.height = "100%";
		hurdle.style.padding = "0 10px";
		hurdle.style.display = "none";
		hurdle.style.background = "rgba(0 , 0 , 0 , .5)";
		hurdle.innerHTML = "";
		document.body.appendChild(hurdle);
		var style = document.createElement("style");
		document.getElementsByTagName("head")[0].appendChild(style);
		return this;
	};
	photoHurdle.prototype.start = function( callback )
	{
		var on_off = true;
		function turn( cb )
		{
			document.getElementById("hurdle").style.display = on_off == true ? "block" : "none";
			on_off = !on_off;

			if( typeof cb === "function" )
			{
				cb();
			}
		}
		for( var i = 0 , length = this.arg.length ; i < length ; i ++ )
		{
			document.getElementById(this.arg[i]).onclick = document.getElementById(this.arg[i]).onclick = function(){turn()};
		}
		if( document.getElementById("hurdle-close") )
		{
			document.getElementById("hurdle-close").onclick = function(){turn(callback)};
		}

		return this;
	};
	photoHurdle.prototype.addBtn = function( _obj )
	{
		var styleText = ".custom-btn-container\n{\n\t position : fixed; left : 0; right : 0; bottom : 0; width : 90%; margin : 0 auto; border-radius : 3px; overflow : hidden; \n}\n.custom-btn-container .custom-btn-rows\n{\n\t margin : 5px auto 0; \n }\n .custom-btn-container button \n {\n\t width : 100%;\n\t display : block;\n\t padding : 10px 0; \n\t border : none; border-bottom : 1px solid #999; \n\t background : #fff; color : #000; \n }\n .custom-btn-container button:active\n{\n\t background : #ff8888; \n}\n.custom-btn-container .custom-btn-rows ul \n{\n\t width : 100%; \n\tmargin : 5px 0; padding : 10px ; -webkit-box-sizing : border-box; box-sizing : border-box;\n\tborder : 0; border-radius : 5px; \n\t background : #fff;  \n}\n.custom-btn-container .custom-btn-rows ul li  \n{\n\t width : 25%; margin : 10px 0;  display : inline-block; text-align : center;  \n}\n.custom-btn-container .custom-btn-rows ul li  img \n{\n\t width : 25px; \n}\n";
		
		document.getElementsByTagName("style")[0].innerHTML += styleText;
		

		var el = "<div class='custom-btn-container'>";
		el += "<div class='custom-btn-rows'>";
		for( var i = 0 in _obj.custom )
		{
			el += _obj.custom[i];
		}
		el += "</div>";
		el += typeof _obj.close === "string" ? "<div class='custom-btn-rows'><button id='hurdle-close' class='hurdle-close hurdle-custom-btn'>"+_obj.close+"</button></div>" : "";
		el += "</div>";
		document.getElementById("hurdle").innerHTML = el;
		
		return this;
	};
	photoHurdle.prototype.popup = function( _text )
	{
		document.getElementById("hurdleAlert") ? document.getElementById("hurdleAlert").parentNode.removeChild(document.getElementById("hurdleAlert")) : "";
		var styleText = ".hurdle-alert\n{\n\t position : absolute ; top : 30%;bottom : 0; left : 0; right : 0; width : 60%; height : 100px; margin : 0 auto; padding : 10px; -webkit-box-align : center;  border-radius : 5px; background : #fff; text-align : center; } .hurdle-alert p{  height : 50px; border-bottom : 1px solid #ddd;  overflow : auto; }  .hurdle-alert a{ display : block; margin : 10px 0; }";
		document.getElementsByTagName("style")[0].innerHTML += styleText;
		var el = document.createElement("div");
		el.id = "hurdleAlert";
		el.className = "hurdle-alert";
		el.innerHTML = "<p>"+ _text +"</p><a href='javascript:;' id='hurdle-close'>好的</a>";
		document.getElementById("hurdle").appendChild(el);

		return this;
	};