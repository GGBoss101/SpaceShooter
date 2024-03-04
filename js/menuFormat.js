	function f1(){
		document.getElementById("easyText").style.color="red";
	}
	function f2(){
		document.getElementById("mediumText").style.color="red";
	}
	function f3(){
		document.getElementById("hardText").style.color="red";
	}
	function fu1(){
		document.getElementById("easyText").style.color="white";
	}
	function fu2(){
		document.getElementById("mediumText").style.color="white";
	}
	function fu3(){
		document.getElementById("hardText").style.color="white";
	}
	function easyMode(){
		document.getElementById("menu").style.display="none";
		document.getElementById("game").style.display="block";
		setTimeout(function(){
			easy();
		},100);
	}
	function mediumMode(){
		document.getElementById("menu").style.display="none";
		document.getElementById("game").style.display="block";
		setTimeout(function(){
			medium();
		},100);
	}
	function hardMode(){
		document.getElementById("menu").style.display="none";
		document.getElementById("game").style.display="block";
		setTimeout(function(){
			hard();
		},100);
	}