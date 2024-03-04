	function easy(){
		life=3;
		l=0;
		left=0;
		rr=0;
		score=0;
		noShoot=0;
		function oppRight(){
			l--;
		}
		function right(){
			l++;
		}
		setTimeout(function(){
			document.getElementById("e1").style.top=(-document.getElementById("table2").clientHeight);
			document.getElementById("e2").style.top=(-document.getElementById("table2").clientHeight);
			document.getElementById("e3").style.top=(-document.getElementById("table2").clientHeight);
			document.getElementById("e4").style.top=(-document.getElementById("table2").clientHeight);
			document.getElementById("e5").style.top=(-document.getElementById("table2").clientHeight);
			document.getElementById("e6").style.top=(-document.getElementById("table2").clientHeight);
			document.getElementById("e7").style.top=(-document.getElementById("table2").clientHeight);
		},50);
		//enemy spawning
		setInterval(function spawnEnemy(){
			r=Math.floor(Math.random() * 7) + 1;
			if(r==1)
			{
				document.getElementById("e1").style.transitionProperty="top";
				document.getElementById("e1").style.transitionDuration="7s";
				drop=((document.getElementById("box").clientHeight/100)*85.72)-document.getElementById("e1").clientHeight;
				document.getElementById("e1").style.top=drop;
				setTimeout(function dmg(){
					if(document.getElementById("e1").style.transitionDuration=="0s")
					{
						score=score+100;
						return false;
					}
					life=life-1;
				},7000);
				setTimeout(function(){
					document.getElementById("e1").style.transitionProperty="top";
					document.getElementById("e1").style.transitionDuration="0s";
					document.getElementById("e1").style.top=(-document.getElementById("table2").clientHeight);
				},7000);
			}
			else if(r==2)
			{
				document.getElementById("e2").style.transitionProperty="top";
				document.getElementById("e2").style.transitionDuration="7s";
				drop=((document.getElementById("box").clientHeight/100)*85.72)-document.getElementById("e2").clientHeight;
				document.getElementById("e2").style.top=drop;
				setTimeout(function dmg(){
					if(document.getElementById("e2").style.transitionDuration=="0s")
					{
						score=score+100;
						return false;
					}
					life=life-1;
				},7000);
				setTimeout(function(){
					document.getElementById("e2").style.transitionProperty="top";
					document.getElementById("e2").style.transitionDuration="0s";
					document.getElementById("e2").style.top=(-document.getElementById("table2").clientHeight);
				},7000);
			}
			else if(r==3)
			{
				document.getElementById("e3").style.transitionProperty="top";
				document.getElementById("e3").style.transitionDuration="7s";
				drop=((document.getElementById("box").clientHeight/100)*85.72)-document.getElementById("e3").clientHeight;
				document.getElementById("e3").style.top=drop;
				setTimeout(function dmg(){
					if(document.getElementById("e3").style.transitionDuration=="0s")
					{
						score=score+100;
						return false;
					}
					life=life-1;
				},7000);
				setTimeout(function(){
					document.getElementById("e3").style.transitionProperty="top";
					document.getElementById("e3").style.transitionDuration="0s";
					document.getElementById("e3").style.top=(-document.getElementById("table2").clientHeight);
				},7000);
			}
			else if(r==4)
			{
				document.getElementById("e4").style.transitionProperty="top";
				document.getElementById("e4").style.transitionDuration="7s";
				drop=((document.getElementById("box").clientHeight/100)*85.72)-document.getElementById("e4").clientHeight;
				document.getElementById("e4").style.top=drop;
				setTimeout(function dmg(){
					if(document.getElementById("e4").style.transitionDuration=="0s")
					{
						score=score+100;
						return false;
					}
					life=life-1;
				},7000);
				setTimeout(function(){
					document.getElementById("e4").style.transitionProperty="top";
					document.getElementById("e4").style.transitionDuration="0s";
					document.getElementById("e4").style.top=(-document.getElementById("table2").clientHeight);
				},7000);
			}
			else if(r==5)
			{
				document.getElementById("e5").style.transitionProperty="top";
				document.getElementById("e5").style.transitionDuration="7s";
				drop=((document.getElementById("box").clientHeight/100)*85.72)-document.getElementById("e5").clientHeight;
				document.getElementById("e5").style.top=drop;
				setTimeout(function dmg(){
					if(document.getElementById("e5").style.transitionDuration=="0s")
					{
						score=score+100;
						return false;
					}
					life=life-1;
				},7000);
				setTimeout(function(){
					document.getElementById("e5").style.transitionProperty="top";
					document.getElementById("e5").style.transitionDuration="0s";
					document.getElementById("e5").style.top=(-document.getElementById("table2").clientHeight);
				},7000);
			}
			else if(r==6)
			{
				document.getElementById("e6").style.transitionProperty="top";
				document.getElementById("e6").style.transitionDuration="7s";
				drop=((document.getElementById("box").clientHeight/100)*85.72)-document.getElementById("e6").clientHeight;
				document.getElementById("e6").style.top=drop;
				setTimeout(function dmg(){
					if(document.getElementById("e6").style.transitionDuration=="0s")
					{
						score=score+100;
						return false;
					}
					life=life-1;
				},7000);
				setTimeout(function(){
					document.getElementById("e6").style.transitionProperty="top";
					document.getElementById("e6").style.transitionDuration="0s";
					document.getElementById("e6").style.top=(-document.getElementById("table2").clientHeight);
				},7000);
			}
			else if(r==7)
			{
				document.getElementById("e7").style.transitionProperty="top";
				document.getElementById("e7").style.transitionDuration="7s";
				drop=((document.getElementById("box").clientHeight/100)*85.72)-document.getElementById("e7").clientHeight;
				document.getElementById("e7").style.top=drop;
				setTimeout(function dmg(){
					if(document.getElementById("e7").style.transitionDuration=="0s")
					{
						score=score+100;
						return false;
					}
					life=life-1;
				},7000);
				setTimeout(function(){
					document.getElementById("e7").style.transitionProperty="top";
					document.getElementById("e7").style.transitionDuration="0s";
					document.getElementById("e7").style.top=(-document.getElementById("table2").clientHeight);
				},7000);
			}
		},8000);
		livesHandler=setInterval(function(){
			if(life==3)
			{
				document.getElementById("sl1").style.display="block";
				document.getElementById("sl2").style.display="block";
				document.getElementById("sl3").style.display="block";
			}
			else if(life==2)
			{
				document.getElementById("sl1").style.display="none";
				document.getElementById("sl2").style.display="block";
				document.getElementById("sl3").style.display="block";
			}
			else if(life==1)
			{
				document.getElementById("sl1").style.display="none";
				document.getElementById("sl2").style.display="none";
				document.getElementById("sl3").style.display="block";
			}
			else if(life==0)
			{
				document.getElementById("sl1").style.display="none";
				document.getElementById("sl2").style.display="none";
				document.getElementById("sl3").style.display="none";
				location.reload();
				noShoot=1;
				clearInterval(livesHandler);
			}
			else if(life<=-1)
			{
				life=0;
			}
			else if(life>=4)
			{
				life=3;
			}
		},100);
		//spaceship movement
		function shoot(){
			if(document.getElementById("energyBar").clientHeight<=document.getElementById("energyHeight").clientHeight/5||noShoot==1)
			{
				return false;
			}
			else
			{
				energyBarHeight=document.getElementById("energyHeight").clientHeight;
				subtract=(energyBarHeight/5)+1;
				document.getElementById("energyBar").style.height=document.getElementById("energyBar").clientHeight-subtract;
			}
			if(l==-3)
			{
				document.getElementById("blast1").style.transitionProperty="height, top";
				document.getElementById("blast1").style.transitionDuration="0.1s, 0.4s";
				height=(document.getElementById("shootTable").clientHeight/100)*20;
				document.getElementById("blast1").style.height=height;
				setTimeout(function(){
					document.getElementById("blast1").style.top=-(document.getElementById("box").clientHeight/100)*80;
					document.getElementById("e1").src="images/explosion.gif";
					setTimeout(function(){
						document.getElementById("e1").style.transitionProperty="top";
						document.getElementById("e1").style.transitionDuration="0s";
						document.getElementById("e1").style.top=(-document.getElementById("table2").clientHeight);
						document.getElementById("e1").src="images/enemy.png";					
					},200);
				},100);
				setTimeout(function(){
					document.getElementById("blast1").style.transitionProperty="height, top";
					document.getElementById("blast1").style.transitionDuration="0s, 0s";
					document.getElementById("blast1").style.height=0+"%";
					document.getElementById("blast1").style.top=0;
				},500);
			}
			if(l==-2)
			{
				document.getElementById("blast2").style.transitionProperty="height, top";
				document.getElementById("blast2").style.transitionDuration="0.1s, 0.4s";
				height=(document.getElementById("shootTable").clientHeight/100)*20;
				document.getElementById("blast2").style.height=height;
				setTimeout(function(){
					document.getElementById("blast2").style.top=-(document.getElementById("box").clientHeight/100)*80;
					document.getElementById("e2").src="images/explosion.gif";
					setTimeout(function(){
						document.getElementById("e2").style.transitionProperty="top";
						document.getElementById("e2").style.transitionDuration="0s";
						document.getElementById("e2").style.top=(-document.getElementById("table2").clientHeight);
						document.getElementById("e2").src="images/enemy.png";						
					},200);
				},100);
				setTimeout(function(){
					document.getElementById("blast2").style.transitionProperty="height, top";
					document.getElementById("blast2").style.transitionDuration="0s, 0s";
					document.getElementById("blast2").style.height=0+"%";
					document.getElementById("blast2").style.top=0;
				},500);
			}
			if(l==-1)
			{
				document.getElementById("blast3").style.transitionProperty="height, top";
				document.getElementById("blast3").style.transitionDuration="0.1s, 0.4s";
				height=(document.getElementById("shootTable").clientHeight/100)*20;
				document.getElementById("blast3").style.height=height;
				setTimeout(function(){
					document.getElementById("blast3").style.top=-(document.getElementById("box").clientHeight/100)*80;
					document.getElementById("e3").src="images/explosion.gif";
					setTimeout(function(){
						document.getElementById("e3").style.transitionProperty="top";
						document.getElementById("e3").style.transitionDuration="0s";
						document.getElementById("e3").style.top=(-document.getElementById("table2").clientHeight);
						document.getElementById("e3").src="images/enemy.png";						
					},200);
				},100);
				setTimeout(function(){
					document.getElementById("blast3").style.transitionProperty="height, top";
					document.getElementById("blast3").style.transitionDuration="0s, 0s";
					document.getElementById("blast3").style.height=0+"%";
					document.getElementById("blast3").style.top=0;
				},500);
			}
			if(l==0)
			{
				document.getElementById("blast4").style.transitionProperty="height, top";
				document.getElementById("blast4").style.transitionDuration="0.1s, 0.4s";
				height=(document.getElementById("shootTable").clientHeight/100)*20;
				document.getElementById("blast4").style.height=height;
				setTimeout(function(){
					document.getElementById("blast4").style.top=-(document.getElementById("box").clientHeight/100)*80;
					document.getElementById("e4").src="images/explosion.gif";
					setTimeout(function(){
						document.getElementById("e4").style.transitionProperty="top";
						document.getElementById("e4").style.transitionDuration="0s";
						document.getElementById("e4").style.top=(-document.getElementById("table2").clientHeight);
						document.getElementById("e4").src="images/enemy.png";						
					},200);
				},100);
				setTimeout(function(){
					document.getElementById("blast4").style.transitionProperty="height, top";
					document.getElementById("blast4").style.transitionDuration="0s, 0s";
					document.getElementById("blast4").style.height=0+"%";
					document.getElementById("blast4").style.top=0;
				},500);
			}
			if(l==1)
			{
				document.getElementById("blast5").style.transitionProperty="height, top";
				document.getElementById("blast5").style.transitionDuration="0.1s, 0.4s";
				height=(document.getElementById("shootTable").clientHeight/100)*20;
				document.getElementById("blast5").style.height=height;
				setTimeout(function(){
					document.getElementById("blast5").style.top=-(document.getElementById("box").clientHeight/100)*80;
					document.getElementById("e5").src="images/explosion.gif";
					setTimeout(function(){
						document.getElementById("e5").style.transitionProperty="top";
						document.getElementById("e5").style.transitionDuration="0s";
						document.getElementById("e5").style.top=(-document.getElementById("table2").clientHeight);
						document.getElementById("e5").src="images/enemy.png";						
					},200);
				},100);
				setTimeout(function(){
					document.getElementById("blast5").style.transitionProperty="height, top";
					document.getElementById("blast5").style.transitionDuration="0s, 0s";
					document.getElementById("blast5").style.height=0+"%";
					document.getElementById("blast5").style.top=0;
				},500);
			}
			if(l==2)
			{
				document.getElementById("blast6").style.transitionProperty="height, top";
				document.getElementById("blast6").style.transitionDuration="0.1s, 0.4s";
				height=(document.getElementById("shootTable").clientHeight/100)*20;
				document.getElementById("blast6").style.height=height;
				setTimeout(function(){
					document.getElementById("blast6").style.top=-(document.getElementById("box").clientHeight/100)*80;
					document.getElementById("e6").src="images/explosion.gif";
					setTimeout(function(){
						document.getElementById("e6").style.transitionProperty="top";
						document.getElementById("e6").style.transitionDuration="0s";
						document.getElementById("e6").style.top=(-document.getElementById("table2").clientHeight);
						document.getElementById("e6").src="images/enemy.png";						
					},200);
				},100);
				setTimeout(function(){
					document.getElementById("blast6").style.transitionProperty="height, top";
					document.getElementById("blast6").style.transitionDuration="0s, 0s";
					document.getElementById("blast6").style.height=0+"%";
					document.getElementById("blast6").style.top=0;
				},500);
			}
			if(l==3)
			{
				document.getElementById("blast7").style.transitionProperty="height, top";
				document.getElementById("blast7").style.transitionDuration="0.1s, 0.4s";
				height=(document.getElementById("shootTable").clientHeight/100)*20;
				document.getElementById("blast7").style.height=height;
				setTimeout(function(){
					document.getElementById("blast7").style.top=-(document.getElementById("box").clientHeight/100)*80;
					document.getElementById("e7").src="images/explosion.gif";
					setTimeout(function(){
						document.getElementById("e7").style.transitionProperty="top";
						document.getElementById("e7").style.transitionDuration="0s";
						document.getElementById("e7").style.top=(-document.getElementById("table2").clientHeight);
						document.getElementById("e7").src="images/enemy.png";						
					},200);
				},100);
				setTimeout(function(){
					document.getElementById("blast7").style.transitionProperty="height, top";
					document.getElementById("blast7").style.transitionDuration="0s, 0s";
					document.getElementById("blast7").style.height=0+"%";
					document.getElementById("blast7").style.top=0;
				},500);
			}
		}
		setInterval(function(){
			if(document.getElementById("energyBar").clientHeight>=document.getElementById("energyHeight").clientHeight-1)
			{
				return false;
			}
			else
			{
				energyBarHeight=document.getElementById("energyHeight").clientHeight;
				add=(energyBarHeight/5)+1;
				document.getElementById("energyBar").style.height=document.getElementById("energyBar").clientHeight+add;
			}
		},3000);
		document.onkeydown=function(event){
			var x = event.key;
			var y = event.which || event.keyCode;
			if(y==37)
			{
				l--;
			}
			else if(y==39)
			{
				l++;
			}
			if(y==38||y==32)
			{
				shoot();
			}
		}
		setInterval(function(){
			document.getElementById("shootButton").onClick="shoot()";
			document.getElementById("left").onClick="oppRight()";
			document.getElementById("right").onClick="right()";
			if(l>=4)
			{
				l=3;
			}
			else if(l<=-4)
			{
				l=-3;
			}
			if(l==-3)
			{
				document.getElementById("ss1").style.display="block";
				document.getElementById("ss2").style.display="none";
				document.getElementById("ss3").style.display="none";
				document.getElementById("ss4").style.display="none";
				document.getElementById("ss5").style.display="none";
				document.getElementById("ss6").style.display="none";
				document.getElementById("ss7").style.display="none";
			}
			if(l==-2)
			{
				document.getElementById("ss2").style.display="block";
				document.getElementById("ss1").style.display="none";
				document.getElementById("ss3").style.display="none";
				document.getElementById("ss4").style.display="none";
				document.getElementById("ss5").style.display="none";
				document.getElementById("ss6").style.display="none";
				document.getElementById("ss7").style.display="none";
			}
			if(l==-1)
			{
				document.getElementById("ss3").style.display="block";
				document.getElementById("ss2").style.display="none";
				document.getElementById("ss1").style.display="none";
				document.getElementById("ss4").style.display="none";
				document.getElementById("ss5").style.display="none";
				document.getElementById("ss6").style.display="none";
				document.getElementById("ss7").style.display="none";
			}
			if(l==0)
			{
				document.getElementById("ss4").style.display="block";
				document.getElementById("ss2").style.display="none";
				document.getElementById("ss3").style.display="none";
				document.getElementById("ss1").style.display="none";
				document.getElementById("ss5").style.display="none";
				document.getElementById("ss6").style.display="none";
				document.getElementById("ss7").style.display="none";
			}
			if(l==1)
			{
				document.getElementById("ss5").style.display="block";
				document.getElementById("ss2").style.display="none";
				document.getElementById("ss3").style.display="none";
				document.getElementById("ss4").style.display="none";
				document.getElementById("ss1").style.display="none";
				document.getElementById("ss6").style.display="none";
				document.getElementById("ss7").style.display="none";
			}
			if(l==2)
			{
				document.getElementById("ss6").style.display="block";
				document.getElementById("ss2").style.display="none";
				document.getElementById("ss3").style.display="none";
				document.getElementById("ss4").style.display="none";
				document.getElementById("ss5").style.display="none";
				document.getElementById("ss1").style.display="none";
				document.getElementById("ss7").style.display="none";
			}
			if(l==3)
			{
				document.getElementById("ss7").style.display="block";
				document.getElementById("ss2").style.display="none";
				document.getElementById("ss3").style.display="none";
				document.getElementById("ss4").style.display="none";
				document.getElementById("ss5").style.display="none";
				document.getElementById("ss6").style.display="none";
				document.getElementById("ss1").style.display="none";
			}
			document.getElementById("table2").style.top=-document.getElementById("table2").clientHeight;
			document.getElementById("table2").style.left=document.getElementById("box").clientWidth/100*90;
			document.getElementById("energyBar").style.top=-document.getElementById("energyHeight").clientHeight*6;
			document.getElementById("energyBar").style.left=0;
			document.getElementById("scoreText").innerHTML="SCORE:"+score;
			document.getElementById("shootButton").onclick=function(){
				shoot();
			}
			document.getElementById("left").onclick=function(){
				oppRight();
			}
			document.getElementById("right").onclick=function(){
				right();
			}
		},10);
	}
	function medium(){
		life=3;
		l=0;
		left=0;
		rr=0;
		score=0;
		noShoot=0;
		function oppRight(){
			l--;
		}
		function right(){
			l++;
		}
		setTimeout(function(){
			document.getElementById("e1").style.top=(-document.getElementById("table2").clientHeight);
			document.getElementById("e2").style.top=(-document.getElementById("table2").clientHeight);
			document.getElementById("e3").style.top=(-document.getElementById("table2").clientHeight);
			document.getElementById("e4").style.top=(-document.getElementById("table2").clientHeight);
			document.getElementById("e5").style.top=(-document.getElementById("table2").clientHeight);
			document.getElementById("e6").style.top=(-document.getElementById("table2").clientHeight);
			document.getElementById("e7").style.top=(-document.getElementById("table2").clientHeight);
		},50);
		//enemy spawning
		setInterval(function spawnEnemy(){
			r=Math.floor(Math.random() * 7) + 1;
			if(r==1)
			{
				document.getElementById("e1").style.transitionProperty="top";
				document.getElementById("e1").style.transitionDuration="2.5s";
				drop=((document.getElementById("box").clientHeight/100)*85.72)-document.getElementById("e1").clientHeight;
				document.getElementById("e1").style.top=drop;
				setTimeout(function dmg(){
					if(document.getElementById("e1").style.transitionDuration=="0s")
					{
						score=score+100;
						return false;
					}
					life=life-1;
				},2500);
				setTimeout(function(){
					document.getElementById("e1").style.transitionProperty="top";
					document.getElementById("e1").style.transitionDuration="0s";
					document.getElementById("e1").style.top=(-document.getElementById("table2").clientHeight);
				},2500);
			}
			else if(r==2)
			{
				document.getElementById("e2").style.transitionProperty="top";
				document.getElementById("e2").style.transitionDuration="2.5s";
				drop=((document.getElementById("box").clientHeight/100)*85.72)-document.getElementById("e2").clientHeight;
				document.getElementById("e2").style.top=drop;
				setTimeout(function dmg(){
					if(document.getElementById("e2").style.transitionDuration=="0s")
					{
						score=score+100;
						return false;
					}
					life=life-1;
				},2500);
				setTimeout(function(){
					document.getElementById("e2").style.transitionProperty="top";
					document.getElementById("e2").style.transitionDuration="0s";
					document.getElementById("e2").style.top=(-document.getElementById("table2").clientHeight);
				},2500);
			}
			else if(r==3)
			{
				document.getElementById("e3").style.transitionProperty="top";
				document.getElementById("e3").style.transitionDuration="2.5s";
				drop=((document.getElementById("box").clientHeight/100)*85.72)-document.getElementById("e3").clientHeight;
				document.getElementById("e3").style.top=drop;
				setTimeout(function dmg(){
					if(document.getElementById("e3").style.transitionDuration=="0s")
					{
						score=score+100;
						return false;
					}
					life=life-1;
				},2500);
				setTimeout(function(){
					document.getElementById("e3").style.transitionProperty="top";
					document.getElementById("e3").style.transitionDuration="0s";
					document.getElementById("e3").style.top=(-document.getElementById("table2").clientHeight);
				},2500);
			}
			else if(r==4)
			{
				document.getElementById("e4").style.transitionProperty="top";
				document.getElementById("e4").style.transitionDuration="2.5s";
				drop=((document.getElementById("box").clientHeight/100)*85.72)-document.getElementById("e4").clientHeight;
				document.getElementById("e4").style.top=drop;
				setTimeout(function dmg(){
					if(document.getElementById("e4").style.transitionDuration=="0s")
					{
						score=score+100;
						return false;
					}
					life=life-1;
				},2500);
				setTimeout(function(){
					document.getElementById("e4").style.transitionProperty="top";
					document.getElementById("e4").style.transitionDuration="0s";
					document.getElementById("e4").style.top=(-document.getElementById("table2").clientHeight);
				},2500);
			}
			else if(r==5)
			{
				document.getElementById("e5").style.transitionProperty="top";
				document.getElementById("e5").style.transitionDuration="2.5s";
				drop=((document.getElementById("box").clientHeight/100)*85.72)-document.getElementById("e5").clientHeight;
				document.getElementById("e5").style.top=drop;
				setTimeout(function dmg(){
					if(document.getElementById("e5").style.transitionDuration=="0s")
					{
						score=score+100;
						return false;
					}
					life=life-1;
				},2500);
				setTimeout(function(){
					document.getElementById("e5").style.transitionProperty="top";
					document.getElementById("e5").style.transitionDuration="0s";
					document.getElementById("e5").style.top=(-document.getElementById("table2").clientHeight);
				},2500);
			}
			else if(r==6)
			{
				document.getElementById("e6").style.transitionProperty="top";
				document.getElementById("e6").style.transitionDuration="2.5s";
				drop=((document.getElementById("box").clientHeight/100)*85.72)-document.getElementById("e6").clientHeight;
				document.getElementById("e6").style.top=drop;
				setTimeout(function dmg(){
					if(document.getElementById("e6").style.transitionDuration=="0s")
					{
						score=score+100;
						return false;
					}
					life=life-1;
				},2500);
				setTimeout(function(){
					document.getElementById("e6").style.transitionProperty="top";
					document.getElementById("e6").style.transitionDuration="0s";
					document.getElementById("e6").style.top=(-document.getElementById("table2").clientHeight);
				},2500);
			}
			else if(r==7)
			{
				document.getElementById("e7").style.transitionProperty="top";
				document.getElementById("e7").style.transitionDuration="2.5s";
				drop=((document.getElementById("box").clientHeight/100)*85.72)-document.getElementById("e7").clientHeight;
				document.getElementById("e7").style.top=drop;
				setTimeout(function dmg(){
					if(document.getElementById("e7").style.transitionDuration=="0s")
					{
						score=score+100;
						return false;
					}
					life=life-1;
				},2500);
				setTimeout(function(){
					document.getElementById("e7").style.transitionProperty="top";
					document.getElementById("e7").style.transitionDuration="0s";
					document.getElementById("e7").style.top=(-document.getElementById("table2").clientHeight);
				},2500);
			}
		},3000);
		livesHandler=setInterval(function(){
			if(life==3)
			{
				document.getElementById("sl1").style.display="block";
				document.getElementById("sl2").style.display="block";
				document.getElementById("sl3").style.display="block";
			}
			else if(life==2)
			{
				document.getElementById("sl1").style.display="none";
				document.getElementById("sl2").style.display="block";
				document.getElementById("sl3").style.display="block";
			}
			else if(life==1)
			{
				document.getElementById("sl1").style.display="none";
				document.getElementById("sl2").style.display="none";
				document.getElementById("sl3").style.display="block";
			}
			else if(life==0)
			{
				document.getElementById("sl1").style.display="none";
				document.getElementById("sl2").style.display="none";
				document.getElementById("sl3").style.display="none";
				location.reload();
				noShoot=1;
				clearInterval(livesHandler);
			}
			else if(life<=-1)
			{
				life=0;
			}
			else if(life>=4)
			{
				life=3;
			}
		},100);
		//spaceship movement
		function shoot(){
			if(document.getElementById("energyBar").clientHeight<=document.getElementById("energyHeight").clientHeight/5||noShoot==1)
			{
				return false;
			}
			else
			{
				energyBarHeight=document.getElementById("energyHeight").clientHeight;
				subtract=(energyBarHeight/5)+1;
				document.getElementById("energyBar").style.height=document.getElementById("energyBar").clientHeight-subtract;
			}
			if(l==-3)
			{
				document.getElementById("blast1").style.transitionProperty="height, top";
				document.getElementById("blast1").style.transitionDuration="0.1s, 0.4s";
				height=(document.getElementById("shootTable").clientHeight/100)*20;
				document.getElementById("blast1").style.height=height;
				setTimeout(function(){
					document.getElementById("blast1").style.top=-(document.getElementById("box").clientHeight/100)*80;
					document.getElementById("e1").src="images/explosion.gif";
					setTimeout(function(){
						document.getElementById("e1").style.transitionProperty="top";
						document.getElementById("e1").style.transitionDuration="0s";
						document.getElementById("e1").style.top=(-document.getElementById("table2").clientHeight);
						document.getElementById("e1").src="images/enemy.png";					
					},200);
				},100);
				setTimeout(function(){
					document.getElementById("blast1").style.transitionProperty="height, top";
					document.getElementById("blast1").style.transitionDuration="0s, 0s";
					document.getElementById("blast1").style.height=0+"%";
					document.getElementById("blast1").style.top=0;
				},500);
			}
			if(l==-2)
			{
				document.getElementById("blast2").style.transitionProperty="height, top";
				document.getElementById("blast2").style.transitionDuration="0.1s, 0.4s";
				height=(document.getElementById("shootTable").clientHeight/100)*20;
				document.getElementById("blast2").style.height=height;
				setTimeout(function(){
					document.getElementById("blast2").style.top=-(document.getElementById("box").clientHeight/100)*80;
					document.getElementById("e2").src="images/explosion.gif";
					setTimeout(function(){
						document.getElementById("e2").style.transitionProperty="top";
						document.getElementById("e2").style.transitionDuration="0s";
						document.getElementById("e2").style.top=(-document.getElementById("table2").clientHeight);
						document.getElementById("e2").src="images/enemy.png";						
					},200);
				},100);
				setTimeout(function(){
					document.getElementById("blast2").style.transitionProperty="height, top";
					document.getElementById("blast2").style.transitionDuration="0s, 0s";
					document.getElementById("blast2").style.height=0+"%";
					document.getElementById("blast2").style.top=0;
				},500);
			}
			if(l==-1)
			{
				document.getElementById("blast3").style.transitionProperty="height, top";
				document.getElementById("blast3").style.transitionDuration="0.1s, 0.4s";
				height=(document.getElementById("shootTable").clientHeight/100)*20;
				document.getElementById("blast3").style.height=height;
				setTimeout(function(){
					document.getElementById("blast3").style.top=-(document.getElementById("box").clientHeight/100)*80;
					document.getElementById("e3").src="images/explosion.gif";
					setTimeout(function(){
						document.getElementById("e3").style.transitionProperty="top";
						document.getElementById("e3").style.transitionDuration="0s";
						document.getElementById("e3").style.top=(-document.getElementById("table2").clientHeight);
						document.getElementById("e3").src="images/enemy.png";						
					},200);
				},100);
				setTimeout(function(){
					document.getElementById("blast3").style.transitionProperty="height, top";
					document.getElementById("blast3").style.transitionDuration="0s, 0s";
					document.getElementById("blast3").style.height=0+"%";
					document.getElementById("blast3").style.top=0;
				},500);
			}
			if(l==0)
			{
				document.getElementById("blast4").style.transitionProperty="height, top";
				document.getElementById("blast4").style.transitionDuration="0.1s, 0.4s";
				height=(document.getElementById("shootTable").clientHeight/100)*20;
				document.getElementById("blast4").style.height=height;
				setTimeout(function(){
					document.getElementById("blast4").style.top=-(document.getElementById("box").clientHeight/100)*80;
					document.getElementById("e4").src="images/explosion.gif";
					setTimeout(function(){
						document.getElementById("e4").style.transitionProperty="top";
						document.getElementById("e4").style.transitionDuration="0s";
						document.getElementById("e4").style.top=(-document.getElementById("table2").clientHeight);
						document.getElementById("e4").src="images/enemy.png";						
					},200);
				},100);
				setTimeout(function(){
					document.getElementById("blast4").style.transitionProperty="height, top";
					document.getElementById("blast4").style.transitionDuration="0s, 0s";
					document.getElementById("blast4").style.height=0+"%";
					document.getElementById("blast4").style.top=0;
				},500);
			}
			if(l==1)
			{
				document.getElementById("blast5").style.transitionProperty="height, top";
				document.getElementById("blast5").style.transitionDuration="0.1s, 0.4s";
				height=(document.getElementById("shootTable").clientHeight/100)*20;
				document.getElementById("blast5").style.height=height;
				setTimeout(function(){
					document.getElementById("blast5").style.top=-(document.getElementById("box").clientHeight/100)*80;
					document.getElementById("e5").src="images/explosion.gif";
					setTimeout(function(){
						document.getElementById("e5").style.transitionProperty="top";
						document.getElementById("e5").style.transitionDuration="0s";
						document.getElementById("e5").style.top=(-document.getElementById("table2").clientHeight);
						document.getElementById("e5").src="images/enemy.png";						
					},200);
				},100);
				setTimeout(function(){
					document.getElementById("blast5").style.transitionProperty="height, top";
					document.getElementById("blast5").style.transitionDuration="0s, 0s";
					document.getElementById("blast5").style.height=0+"%";
					document.getElementById("blast5").style.top=0;
				},500);
			}
			if(l==2)
			{
				document.getElementById("blast6").style.transitionProperty="height, top";
				document.getElementById("blast6").style.transitionDuration="0.1s, 0.4s";
				height=(document.getElementById("shootTable").clientHeight/100)*20;
				document.getElementById("blast6").style.height=height;
				setTimeout(function(){
					document.getElementById("blast6").style.top=-(document.getElementById("box").clientHeight/100)*80;
					document.getElementById("e6").src="images/explosion.gif";
					setTimeout(function(){
						document.getElementById("e6").style.transitionProperty="top";
						document.getElementById("e6").style.transitionDuration="0s";
						document.getElementById("e6").style.top=(-document.getElementById("table2").clientHeight);
						document.getElementById("e6").src="images/enemy.png";						
					},200);
				},100);
				setTimeout(function(){
					document.getElementById("blast6").style.transitionProperty="height, top";
					document.getElementById("blast6").style.transitionDuration="0s, 0s";
					document.getElementById("blast6").style.height=0+"%";
					document.getElementById("blast6").style.top=0;
				},500);
			}
			if(l==3)
			{
				document.getElementById("blast7").style.transitionProperty="height, top";
				document.getElementById("blast7").style.transitionDuration="0.1s, 0.4s";
				height=(document.getElementById("shootTable").clientHeight/100)*20;
				document.getElementById("blast7").style.height=height;
				setTimeout(function(){
					document.getElementById("blast7").style.top=-(document.getElementById("box").clientHeight/100)*80;
					document.getElementById("e7").src="images/explosion.gif";
					setTimeout(function(){
						document.getElementById("e7").style.transitionProperty="top";
						document.getElementById("e7").style.transitionDuration="0s";
						document.getElementById("e7").style.top=(-document.getElementById("table2").clientHeight);
						document.getElementById("e7").src="images/enemy.png";						
					},200);
				},100);
				setTimeout(function(){
					document.getElementById("blast7").style.transitionProperty="height, top";
					document.getElementById("blast7").style.transitionDuration="0s, 0s";
					document.getElementById("blast7").style.height=0+"%";
					document.getElementById("blast7").style.top=0;
				},500);
			}
		}
		setInterval(function(){
			if(document.getElementById("energyBar").clientHeight>=document.getElementById("energyHeight").clientHeight-1)
			{
				return false;
			}
			else
			{
				energyBarHeight=document.getElementById("energyHeight").clientHeight;
				add=(energyBarHeight/5)+1;
				document.getElementById("energyBar").style.height=document.getElementById("energyBar").clientHeight+add;
			}
		},2000);
		document.onkeydown=function(event){
			var x = event.key;
			var y = event.which || event.keyCode;
			if(y==37)
			{
				l--;
			}
			else if(y==39)
			{
				l++;
			}
			if(y==38||y==32)
			{
				shoot();
			}
		}
		setInterval(function(){
			document.getElementById("shootButton").onClick="shoot()";
			document.getElementById("left").onClick="oppRight()";
			document.getElementById("right").onClick="right()";
			if(l>=4)
			{
				l=3;
			}
			else if(l<=-4)
			{
				l=-3;
			}
			if(l==-3)
			{
				document.getElementById("ss1").style.display="block";
				document.getElementById("ss2").style.display="none";
				document.getElementById("ss3").style.display="none";
				document.getElementById("ss4").style.display="none";
				document.getElementById("ss5").style.display="none";
				document.getElementById("ss6").style.display="none";
				document.getElementById("ss7").style.display="none";
			}
			if(l==-2)
			{
				document.getElementById("ss2").style.display="block";
				document.getElementById("ss1").style.display="none";
				document.getElementById("ss3").style.display="none";
				document.getElementById("ss4").style.display="none";
				document.getElementById("ss5").style.display="none";
				document.getElementById("ss6").style.display="none";
				document.getElementById("ss7").style.display="none";
			}
			if(l==-1)
			{
				document.getElementById("ss3").style.display="block";
				document.getElementById("ss2").style.display="none";
				document.getElementById("ss1").style.display="none";
				document.getElementById("ss4").style.display="none";
				document.getElementById("ss5").style.display="none";
				document.getElementById("ss6").style.display="none";
				document.getElementById("ss7").style.display="none";
			}
			if(l==0)
			{
				document.getElementById("ss4").style.display="block";
				document.getElementById("ss2").style.display="none";
				document.getElementById("ss3").style.display="none";
				document.getElementById("ss1").style.display="none";
				document.getElementById("ss5").style.display="none";
				document.getElementById("ss6").style.display="none";
				document.getElementById("ss7").style.display="none";
			}
			if(l==1)
			{
				document.getElementById("ss5").style.display="block";
				document.getElementById("ss2").style.display="none";
				document.getElementById("ss3").style.display="none";
				document.getElementById("ss4").style.display="none";
				document.getElementById("ss1").style.display="none";
				document.getElementById("ss6").style.display="none";
				document.getElementById("ss7").style.display="none";
			}
			if(l==2)
			{
				document.getElementById("ss6").style.display="block";
				document.getElementById("ss2").style.display="none";
				document.getElementById("ss3").style.display="none";
				document.getElementById("ss4").style.display="none";
				document.getElementById("ss5").style.display="none";
				document.getElementById("ss1").style.display="none";
				document.getElementById("ss7").style.display="none";
			}
			if(l==3)
			{
				document.getElementById("ss7").style.display="block";
				document.getElementById("ss2").style.display="none";
				document.getElementById("ss3").style.display="none";
				document.getElementById("ss4").style.display="none";
				document.getElementById("ss5").style.display="none";
				document.getElementById("ss6").style.display="none";
				document.getElementById("ss1").style.display="none";
			}
			document.getElementById("table2").style.top=-document.getElementById("table2").clientHeight;
			document.getElementById("table2").style.left=document.getElementById("box").clientWidth/100*90;
			document.getElementById("energyBar").style.top=-document.getElementById("energyHeight").clientHeight*6;
			document.getElementById("energyBar").style.left=0;
			document.getElementById("scoreText").innerHTML="SCORE:"+score;
			document.getElementById("shootButton").onclick=function(){
				shoot();
			}
			document.getElementById("left").onclick=function(){
				oppRight();
			}
			document.getElementById("right").onclick=function(){
				right();
			}
		},10);
	}
	function hard(){
		life=3;
		l=0;
		left=0;
		rr=0;
		score=0;
		noShoot=0;
		function oppRight(){
			l--;
		}
		function right(){
			l++;
		}
		setTimeout(function(){
			document.getElementById("e1").style.top=(-document.getElementById("table2").clientHeight);
			document.getElementById("e2").style.top=(-document.getElementById("table2").clientHeight);
			document.getElementById("e3").style.top=(-document.getElementById("table2").clientHeight);
			document.getElementById("e4").style.top=(-document.getElementById("table2").clientHeight);
			document.getElementById("e5").style.top=(-document.getElementById("table2").clientHeight);
			document.getElementById("e6").style.top=(-document.getElementById("table2").clientHeight);
			document.getElementById("e7").style.top=(-document.getElementById("table2").clientHeight);
			document.getElementById("energyBar").style.height="4%";
		},50);
		//enemy spawning
		setInterval(function spawnEnemy(){
			r=Math.floor(Math.random() * 7) + 1;
			if(r==1)
			{
				document.getElementById("e1").style.transitionProperty="top";
				document.getElementById("e1").style.transitionDuration="1.5s";
				drop=((document.getElementById("box").clientHeight/100)*85.72)-document.getElementById("e1").clientHeight;
				document.getElementById("e1").style.top=drop;
				setTimeout(function dmg(){
					if(document.getElementById("e1").style.transitionDuration=="0s")
					{
						score=score+100;
						return false;
					}
					life=life-1;
				},1500);
				setTimeout(function(){
					document.getElementById("e1").style.transitionProperty="top";
					document.getElementById("e1").style.transitionDuration="0s";
					document.getElementById("e1").style.top=(-document.getElementById("table2").clientHeight);
				},1500);
			}
			else if(r==2)
			{
				document.getElementById("e2").style.transitionProperty="top";
				document.getElementById("e2").style.transitionDuration="1.5s";
				drop=((document.getElementById("box").clientHeight/100)*85.72)-document.getElementById("e2").clientHeight;
				document.getElementById("e2").style.top=drop;
				setTimeout(function dmg(){
					if(document.getElementById("e2").style.transitionDuration=="0s")
					{
						score=score+100;
						return false;
					}
					life=life-1;
				},1500);
				setTimeout(function(){
					document.getElementById("e2").style.transitionProperty="top";
					document.getElementById("e2").style.transitionDuration="0s";
					document.getElementById("e2").style.top=(-document.getElementById("table2").clientHeight);
				},1500);
			}
			else if(r==3)
			{
				document.getElementById("e3").style.transitionProperty="top";
				document.getElementById("e3").style.transitionDuration="1.5s";
				drop=((document.getElementById("box").clientHeight/100)*85.72)-document.getElementById("e3").clientHeight;
				document.getElementById("e3").style.top=drop;
				setTimeout(function dmg(){
					if(document.getElementById("e3").style.transitionDuration=="0s")
					{
						score=score+100;
						return false;
					}
					life=life-1;
				},1500);
				setTimeout(function(){
					document.getElementById("e3").style.transitionProperty="top";
					document.getElementById("e3").style.transitionDuration="0s";
					document.getElementById("e3").style.top=(-document.getElementById("table2").clientHeight);
				},1500);
			}
			else if(r==4)
			{
				document.getElementById("e4").style.transitionProperty="top";
				document.getElementById("e4").style.transitionDuration="1.5s";
				drop=((document.getElementById("box").clientHeight/100)*85.72)-document.getElementById("e4").clientHeight;
				document.getElementById("e4").style.top=drop;
				setTimeout(function dmg(){
					if(document.getElementById("e4").style.transitionDuration=="0s")
					{
						score=score+100;
						return false;
					}
					life=life-1;
				},1500);
				setTimeout(function(){
					document.getElementById("e4").style.transitionProperty="top";
					document.getElementById("e4").style.transitionDuration="0s";
					document.getElementById("e4").style.top=(-document.getElementById("table2").clientHeight);
				},1500);
			}
			else if(r==5)
			{
				document.getElementById("e5").style.transitionProperty="top";
				document.getElementById("e5").style.transitionDuration="1.5s";
				drop=((document.getElementById("box").clientHeight/100)*85.72)-document.getElementById("e5").clientHeight;
				document.getElementById("e5").style.top=drop;
				setTimeout(function dmg(){
					if(document.getElementById("e5").style.transitionDuration=="0s")
					{
						score=score+100;
						return false;
					}
					life=life-1;
				},1500);
				setTimeout(function(){
					document.getElementById("e5").style.transitionProperty="top";
					document.getElementById("e5").style.transitionDuration="0s";
					document.getElementById("e5").style.top=(-document.getElementById("table2").clientHeight);
				},1500);
			}
			else if(r==6)
			{
				document.getElementById("e6").style.transitionProperty="top";
				document.getElementById("e6").style.transitionDuration="1.5s";
				drop=((document.getElementById("box").clientHeight/100)*85.72)-document.getElementById("e6").clientHeight;
				document.getElementById("e6").style.top=drop;
				setTimeout(function dmg(){
					if(document.getElementById("e6").style.transitionDuration=="0s")
					{
						score=score+100;
						return false;
					}
					life=life-1;
				},1500);
				setTimeout(function(){
					document.getElementById("e6").style.transitionProperty="top";
					document.getElementById("e6").style.transitionDuration="0s";
					document.getElementById("e6").style.top=(-document.getElementById("table2").clientHeight);
				},1500);
			}
			else if(r==7)
			{
				document.getElementById("e7").style.transitionProperty="top";
				document.getElementById("e7").style.transitionDuration="1.5s";
				drop=((document.getElementById("box").clientHeight/100)*85.72)-document.getElementById("e7").clientHeight;
				document.getElementById("e7").style.top=drop;
				setTimeout(function dmg(){
					if(document.getElementById("e7").style.transitionDuration=="0s")
					{
						score=score+100;
						return false;
					}
					life=life-1;
				},1500);
				setTimeout(function(){
					document.getElementById("e7").style.transitionProperty="top";
					document.getElementById("e7").style.transitionDuration="0s";
					document.getElementById("e7").style.top=(-document.getElementById("table2").clientHeight);
				},1500);
			}
		},2000);
		livesHandler=setInterval(function(){
			if(life==3)
			{
				document.getElementById("sl1").style.display="block";
				document.getElementById("sl2").style.display="block";
				document.getElementById("sl3").style.display="block";
			}
			else if(life==2)
			{
				document.getElementById("sl1").style.display="none";
				document.getElementById("sl2").style.display="block";
				document.getElementById("sl3").style.display="block";
			}
			else if(life==1)
			{
				document.getElementById("sl1").style.display="none";
				document.getElementById("sl2").style.display="none";
				document.getElementById("sl3").style.display="block";
			}
			else if(life==0)
			{
				document.getElementById("sl1").style.display="none";
				document.getElementById("sl2").style.display="none";
				document.getElementById("sl3").style.display="none";
				location.reload();
				noShoot=1;
				clearInterval(livesHandler);
			}
			else if(life<=-1)
			{
				life=0;
			}
			else if(life>=4)
			{
				life=3;
			}
		},100);
		//spaceship movement
		function shoot(){
			if(document.getElementById("energyBar").clientHeight<=document.getElementById("energyHeight").clientHeight/5||noShoot==1)
			{
				return false;
			}
			else
			{
				energyBarHeight=document.getElementById("energyHeight").clientHeight;
				subtract=(energyBarHeight/5)+1;
				document.getElementById("energyBar").style.height=document.getElementById("energyBar").clientHeight-subtract;
			}
			if(l==-3)
			{
				document.getElementById("blast1").style.transitionProperty="height, top";
				document.getElementById("blast1").style.transitionDuration="0.1s, 0.4s";
				height=(document.getElementById("shootTable").clientHeight/100)*20;
				document.getElementById("blast1").style.height=height;
				setTimeout(function(){
					document.getElementById("blast1").style.top=-(document.getElementById("box").clientHeight/100)*80;
					document.getElementById("e1").src="images/explosion.gif";
					setTimeout(function(){
						document.getElementById("e1").style.transitionProperty="top";
						document.getElementById("e1").style.transitionDuration="0s";
						document.getElementById("e1").style.top=(-document.getElementById("table2").clientHeight);
						document.getElementById("e1").src="images/enemy.png";					
					},200);
				},100);
				setTimeout(function(){
					document.getElementById("blast1").style.transitionProperty="height, top";
					document.getElementById("blast1").style.transitionDuration="0s, 0s";
					document.getElementById("blast1").style.height=0+"%";
					document.getElementById("blast1").style.top=0;
				},500);
			}
			if(l==-2)
			{
				document.getElementById("blast2").style.transitionProperty="height, top";
				document.getElementById("blast2").style.transitionDuration="0.1s, 0.4s";
				height=(document.getElementById("shootTable").clientHeight/100)*20;
				document.getElementById("blast2").style.height=height;
				setTimeout(function(){
					document.getElementById("blast2").style.top=-(document.getElementById("box").clientHeight/100)*80;
					document.getElementById("e2").src="images/explosion.gif";
					setTimeout(function(){
						document.getElementById("e2").style.transitionProperty="top";
						document.getElementById("e2").style.transitionDuration="0s";
						document.getElementById("e2").style.top=(-document.getElementById("table2").clientHeight);
						document.getElementById("e2").src="images/enemy.png";						
					},200);
				},100);
				setTimeout(function(){
					document.getElementById("blast2").style.transitionProperty="height, top";
					document.getElementById("blast2").style.transitionDuration="0s, 0s";
					document.getElementById("blast2").style.height=0+"%";
					document.getElementById("blast2").style.top=0;
				},500);
			}
			if(l==-1)
			{
				document.getElementById("blast3").style.transitionProperty="height, top";
				document.getElementById("blast3").style.transitionDuration="0.1s, 0.4s";
				height=(document.getElementById("shootTable").clientHeight/100)*20;
				document.getElementById("blast3").style.height=height;
				setTimeout(function(){
					document.getElementById("blast3").style.top=-(document.getElementById("box").clientHeight/100)*80;
					document.getElementById("e3").src="images/explosion.gif";
					setTimeout(function(){
						document.getElementById("e3").style.transitionProperty="top";
						document.getElementById("e3").style.transitionDuration="0s";
						document.getElementById("e3").style.top=(-document.getElementById("table2").clientHeight);
						document.getElementById("e3").src="images/enemy.png";						
					},200);
				},100);
				setTimeout(function(){
					document.getElementById("blast3").style.transitionProperty="height, top";
					document.getElementById("blast3").style.transitionDuration="0s, 0s";
					document.getElementById("blast3").style.height=0+"%";
					document.getElementById("blast3").style.top=0;
				},500);
			}
			if(l==0)
			{
				document.getElementById("blast4").style.transitionProperty="height, top";
				document.getElementById("blast4").style.transitionDuration="0.1s, 0.4s";
				height=(document.getElementById("shootTable").clientHeight/100)*20;
				document.getElementById("blast4").style.height=height;
				setTimeout(function(){
					document.getElementById("blast4").style.top=-(document.getElementById("box").clientHeight/100)*80;
					document.getElementById("e4").src="images/explosion.gif";
					setTimeout(function(){
						document.getElementById("e4").style.transitionProperty="top";
						document.getElementById("e4").style.transitionDuration="0s";
						document.getElementById("e4").style.top=(-document.getElementById("table2").clientHeight);
						document.getElementById("e4").src="images/enemy.png";						
					},200);
				},100);
				setTimeout(function(){
					document.getElementById("blast4").style.transitionProperty="height, top";
					document.getElementById("blast4").style.transitionDuration="0s, 0s";
					document.getElementById("blast4").style.height=0+"%";
					document.getElementById("blast4").style.top=0;
				},500);
			}
			if(l==1)
			{
				document.getElementById("blast5").style.transitionProperty="height, top";
				document.getElementById("blast5").style.transitionDuration="0.1s, 0.4s";
				height=(document.getElementById("shootTable").clientHeight/100)*20;
				document.getElementById("blast5").style.height=height;
				setTimeout(function(){
					document.getElementById("blast5").style.top=-(document.getElementById("box").clientHeight/100)*80;
					document.getElementById("e5").src="images/explosion.gif";
					setTimeout(function(){
						document.getElementById("e5").style.transitionProperty="top";
						document.getElementById("e5").style.transitionDuration="0s";
						document.getElementById("e5").style.top=(-document.getElementById("table2").clientHeight);
						document.getElementById("e5").src="images/enemy.png";						
					},200);
				},100);
				setTimeout(function(){
					document.getElementById("blast5").style.transitionProperty="height, top";
					document.getElementById("blast5").style.transitionDuration="0s, 0s";
					document.getElementById("blast5").style.height=0+"%";
					document.getElementById("blast5").style.top=0;
				},500);
			}
			if(l==2)
			{
				document.getElementById("blast6").style.transitionProperty="height, top";
				document.getElementById("blast6").style.transitionDuration="0.1s, 0.4s";
				height=(document.getElementById("shootTable").clientHeight/100)*20;
				document.getElementById("blast6").style.height=height;
				setTimeout(function(){
					document.getElementById("blast6").style.top=-(document.getElementById("box").clientHeight/100)*80;
					document.getElementById("e6").src="images/explosion.gif";
					setTimeout(function(){
						document.getElementById("e6").style.transitionProperty="top";
						document.getElementById("e6").style.transitionDuration="0s";
						document.getElementById("e6").style.top=(-document.getElementById("table2").clientHeight);
						document.getElementById("e6").src="images/enemy.png";						
					},200);
				},100);
				setTimeout(function(){
					document.getElementById("blast6").style.transitionProperty="height, top";
					document.getElementById("blast6").style.transitionDuration="0s, 0s";
					document.getElementById("blast6").style.height=0+"%";
					document.getElementById("blast6").style.top=0;
				},500);
			}
			if(l==3)
			{
				document.getElementById("blast7").style.transitionProperty="height, top";
				document.getElementById("blast7").style.transitionDuration="0.1s, 0.4s";
				height=(document.getElementById("shootTable").clientHeight/100)*20;
				document.getElementById("blast7").style.height=height;
				setTimeout(function(){
					document.getElementById("blast7").style.top=-(document.getElementById("box").clientHeight/100)*80;
					document.getElementById("e7").src="images/explosion.gif";
					setTimeout(function(){
						document.getElementById("e7").style.transitionProperty="top";
						document.getElementById("e7").style.transitionDuration="0s";
						document.getElementById("e7").style.top=(-document.getElementById("table2").clientHeight);
						document.getElementById("e7").src="images/enemy.png";						
					},200);
				},100);
				setTimeout(function(){
					document.getElementById("blast7").style.transitionProperty="height, top";
					document.getElementById("blast7").style.transitionDuration="0s, 0s";
					document.getElementById("blast7").style.height=0+"%";
					document.getElementById("blast7").style.top=0;
				},500);
			}
		}
		setInterval(function(){
			if(document.getElementById("energyBar").clientHeight>=((document.getElementById("energyHeight").clientHeight/5)*2))
			{
				return false;
			}
			else
			{
				energyBarHeight=document.getElementById("energyHeight").clientHeight;
				add=(energyBarHeight/5)+1;
				document.getElementById("energyBar").style.height=document.getElementById("energyBar").clientHeight+add;
			}
		},500);
		document.onkeydown=function(event){
			var x = event.key;
			var y = event.which || event.keyCode;
			if(y==37)
			{
				l--;
			}
			else if(y==39)
			{
				l++;
			}
			if(y==38||y==32)
			{
				shoot();
			}
		}
		setInterval(function(){
			document.getElementById("shootButton").onClick="shoot()";
			document.getElementById("left").onClick="oppRight()";
			document.getElementById("right").onClick="right()";
			if(l>=4)
			{
				l=3;
			}
			else if(l<=-4)
			{
				l=-3;
			}
			if(l==-3)
			{
				document.getElementById("ss1").style.display="block";
				document.getElementById("ss2").style.display="none";
				document.getElementById("ss3").style.display="none";
				document.getElementById("ss4").style.display="none";
				document.getElementById("ss5").style.display="none";
				document.getElementById("ss6").style.display="none";
				document.getElementById("ss7").style.display="none";
			}
			if(l==-2)
			{
				document.getElementById("ss2").style.display="block";
				document.getElementById("ss1").style.display="none";
				document.getElementById("ss3").style.display="none";
				document.getElementById("ss4").style.display="none";
				document.getElementById("ss5").style.display="none";
				document.getElementById("ss6").style.display="none";
				document.getElementById("ss7").style.display="none";
			}
			if(l==-1)
			{
				document.getElementById("ss3").style.display="block";
				document.getElementById("ss2").style.display="none";
				document.getElementById("ss1").style.display="none";
				document.getElementById("ss4").style.display="none";
				document.getElementById("ss5").style.display="none";
				document.getElementById("ss6").style.display="none";
				document.getElementById("ss7").style.display="none";
			}
			if(l==0)
			{
				document.getElementById("ss4").style.display="block";
				document.getElementById("ss2").style.display="none";
				document.getElementById("ss3").style.display="none";
				document.getElementById("ss1").style.display="none";
				document.getElementById("ss5").style.display="none";
				document.getElementById("ss6").style.display="none";
				document.getElementById("ss7").style.display="none";
			}
			if(l==1)
			{
				document.getElementById("ss5").style.display="block";
				document.getElementById("ss2").style.display="none";
				document.getElementById("ss3").style.display="none";
				document.getElementById("ss4").style.display="none";
				document.getElementById("ss1").style.display="none";
				document.getElementById("ss6").style.display="none";
				document.getElementById("ss7").style.display="none";
			}
			if(l==2)
			{
				document.getElementById("ss6").style.display="block";
				document.getElementById("ss2").style.display="none";
				document.getElementById("ss3").style.display="none";
				document.getElementById("ss4").style.display="none";
				document.getElementById("ss5").style.display="none";
				document.getElementById("ss1").style.display="none";
				document.getElementById("ss7").style.display="none";
			}
			if(l==3)
			{
				document.getElementById("ss7").style.display="block";
				document.getElementById("ss2").style.display="none";
				document.getElementById("ss3").style.display="none";
				document.getElementById("ss4").style.display="none";
				document.getElementById("ss5").style.display="none";
				document.getElementById("ss6").style.display="none";
				document.getElementById("ss1").style.display="none";
			}
			document.getElementById("table2").style.top=-document.getElementById("table2").clientHeight;
			document.getElementById("table2").style.left=document.getElementById("box").clientWidth/100*90;
			document.getElementById("energyBar").style.top=-document.getElementById("energyHeight").clientHeight*6;
			document.getElementById("energyBar").style.left=0;
			document.getElementById("scoreText").innerHTML="SCORE:"+score;
			document.getElementById("shootButton").onclick=function(){
				shoot();
			}
			document.getElementById("left").onclick=function(){
				oppRight();
			}
			document.getElementById("right").onclick=function(){
				right();
			}
		},10);
	}