
var cards = ["r0.png","r11.png","r22.png","r33.png","r44.png","r55.png","r66.png","r7.png","r88.png","r0.png","r11.png","r22.png","r33.png","r44.png","r55.png","r66.png","r7.png","r88.png"];

function przetasowanie(tablica)
{
	for (var i = tablica.length-1; i>0; i--)
	{
		var j = Math.floor(Math.random()*(i+1));
		var temp = tablica[i];
		tablica [i] = tablica[j];
		tablica[j] = temp;
	}
}

var startaudio = new Audio("warcraft.mp3");

startaudio.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}, false);
startaudio.play();


startaudio.play();

var c0 = document.getElementById('c0');
var c1 = document.getElementById('c1');
var c2 = document.getElementById('c2');
var c3 = document.getElementById('c3');
var c4 = document.getElementById('c4');
var c5 = document.getElementById('c5');
var c6 = document.getElementById('c6');
var c7 = document.getElementById('c7');
var c8 = document.getElementById('c8');
var c9 = document.getElementById('c9');
var c10 = document.getElementById('c10');
var c11= document.getElementById('c11');

c0.addEventListener("click", function() { revealCard(0); });
c1.addEventListener("click", function() { revealCard(1); });
c2.addEventListener("click", function() { revealCard(2); });
c3.addEventListener("click", function() { revealCard(3); });
c4.addEventListener("click", function() { revealCard(4); });
c5.addEventListener("click", function() { revealCard(5); });
c6.addEventListener("click", function() { revealCard(6); });
c7.addEventListener("click", function() { revealCard(7); });
c8.addEventListener("click", function() { revealCard(8); });
c9.addEventListener("click", function() { revealCard(9); });
c10.addEventListener("click", function() { revealCard(10); });
c11.addEventListener("click", function() { revealCard(11); });
c12.addEventListener("click", function() { revealCard(12); });
c13.addEventListener("click", function() { revealCard(13); });
c14.addEventListener("click", function() { revealCard(14); });
c15.addEventListener("click", function() { revealCard(15); });
c16.addEventListener("click", function() { revealCard(16); });
c17.addEventListener("click", function() { revealCard(17); });


var oneVisible = false;
var turnCounter = 0; 
var visible_nr;
var lock = false;
var pairsLeft = 9;

function revealCard(nr)
{
	var opacityValue = $('#c'+nr).css('opacity');
	
	//alert('Opacity' + opacityValue);
	
	if (opacityValue !=0 && lock == false)
	{
		lock = true;
		
		var obraz = "url(img/" + cards[nr] + ")";
		$('#c'+nr).css('background-image', obraz); 
		$('#c'+nr).addClass('cardA'); 
		$('#c'+nr).removeClass('card'); 
	
	if(oneVisible == false)
	{
		oneVisible = true;	//first card
		visible_nr = nr;
		lock = false;
	}
	else
	{
		//second card
		
		if(cards[visible_nr] == cards[nr])
		{
			//alert("Para");
			setTimeout(function() {hide2Cards(nr, visible_nr)}, 750);
			
		}
		else
		{
			//alert("Pudło");
			setTimeout(function() {restore2Cards(nr, visible_nr)}, 1250);
			
		}
		
		turnCounter++;	
		$('.score').html('Turn counter: '+turnCounter);
		oneVisible = false;
	}
	}
	
	//alert(nr);
	
	
	
}

function hide2Cards(nr1, nr2)
{
	$('#c'+nr1).css('opacity', '0');
	$('#c'+nr2).css('opacity', '0');
	
	pairsLeft--;
	if (pairsLeft == 0)
	{
		$('.container').html('<h1 style="color:white; margin-top:50px;">You win!</br> Done in '+turnCounter+' turns</h1></br></br><span class="reset" style="cursor:pointer; color:#e9b64a;" onclick="location.reload() ">One more time?</span>');
	}
	
	lock = false;
}

function restore2Cards(nr1,nr2)
{
	$('#c'+nr1).css('background-image', 'url(img/karta.png'); 
	$('#c'+nr1).addClass('card'); 
	$('#c'+nr1).removeClass('cardA'); 
	
	$('#c'+nr2).css('background-image', 'url(img/karta.png'); 
	$('#c'+nr2).addClass('card'); 
	$('#c'+nr2).removeClass('cardA'); 
	
	lock = false;
}