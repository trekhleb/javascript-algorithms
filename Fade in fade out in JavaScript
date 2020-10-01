<html>
	<head>
 		<title>Basic Animation - Fade in & Out</title>
		<script type="text/javascript">
		
		var opacity =0;
		var intervalID=0;
		function fadeOut()
		{
			intervalID=setInterval(hide,20);
		}
		function fadeIn()
		{
			intervalID=setInterval(show,20);
		}
		function show()
		{
			var img = document.getElementById("img1");
			opacity = Number(window.getComputedStyle(img).getPropertyValue("opacity"));
			if(opacity<1)
			{
				opacity=opacity+0.1;
				img.style.opacity=opacity;
				console.log(opacity);
			}
			else
			{
				clearInterval(intervalID);
			}
		}
		function hide()
		{
			var img = document.getElementById("img1");
			opacity = Number(window.getComputedStyle(img).getPropertyValue("opacity"));
			if(opacity>0)
			{
				opacity=opacity-0.1;
				img.style.opacity=opacity;
				console.log(opacity);
			}
			else
			{
				clearInterval(intervalID);
			}
		}

		</script>
	</head>
	<body>
		
		<button onclick="fadeOut()" id="btnAdd">Fade Out</button>
		<br>
		<img  id="img1" src="imgs/simple_snippets.png" width="250px"/>
		<br>
		<button onclick="fadeIn()" id="btnStop">Fade In</button>
	</body>

</html>
