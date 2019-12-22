//Challenge 1: Your age in Days

	function calculate() {
		// body...
		var year=prompt("In what year where you were born");
		var result=(2019-year)*365;
		var textResult=document.createTextNode('You are '+ result + ' days old ');
		var h1=document.createElement('h1');
		h1.setAttribute('id','final-result');
		h1.appendChild(textResult);
		document.getElementById('result').appendChild(h1);
	}

	function reset() {
		// body...
		document.getElementById('final-result').remove();
	}

//Challenge 2: Dog Generator

	function generateDog() {
		var img=document.createElement('img');
		img.setAttribute('src','https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ-NJx9NIijMlfyyoVmQnUiwvoPhi98E5WHDPUub2ty0jBjstKt');
		document.getElementById('image').appendChild(img);
		// body...
	}

//Challenge 3: Rock, Paper, Scissors

	function rpsGame(yourChoice) {
		//console.log(yourChoice)
		//console.log(yourChoice.id)

		var humanChoice, botChoice;
		humanChoice=yourChoice.id;
		botChoice=numberToChoice(randToRpsInt());
		console.log('bot choice=',botChoice)
		results =decideWinner(humanChoice, botChoice);// [0, 1] human lost | Bot win
		message = finalMessage(results) //{'messgae': 'you Won!!', 'color':'green' }
		console.log(message);
		rpsFrontEnd(humanChoice , botChoice, message) 
		// body...
  	}

  	function randToRpsInt() {
  		return Math.floor(Math.random()*3)
  		// body...
  	}

  	function numberToChoice(number) {
  		return['rock','paper','scissors'][number];
  		// body...
  	}

  	function decideWinner(yourChoice, botChoice) {
  		var rpsDatabase={
  			'rock':{'scissors':1, 'rock':0.5, 'paper': 0},
  			'paper':{'scissors':0, 'rock':1, 'paper': 0.5},
  			'scissors':{'scissors':0.5, 'rock':0, 'paper': 1},
  		}

  		var yourScore=rpsDatabase[yourChoice][botChoice]
  		var botScore=rpsDatabase[botChoice][yourChoice]
  	
  		return [yourScore, botScore];
  		// body...
  	}

  	function finalMessage([yourScore, botScore]) {
  		if(yourScore===0)
  	 		return {'message':'You Lost', 'color':'red'}
  		else if(yourScore=== 0.5)
  	 		return {'message':'You tied', 'color':'yellow'}
  		else
  	 		return {'message':'You Won', 'color':'green'}
  		// body...
  	}

  	function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage) {
  		var imagesDatabase={
  			'rock': document.getElementById('rock').src,
  			'paper':document.getElementById('paper').src,
  			'scissors':document.getElementById('scissors').src
  		}
  		//Remove All Images
  		document.getElementById('rock').remove();
  		document.getElementById('paper').remove();
  		document.getElementById('scissors').remove();
  	
  		var humanDiv=document.createElement('div');
  		var messageDiv=document.createElement('div');
  		var botDiv=document.createElement('div');

  		humanDiv.innerHTML="<img src='"+imagesDatabase[humanImageChoice]+"' height=150 width=150 style='box-shadow:0px 10px 50px rgba(37,50,233,1);'>" ;
  		messageDiv.innerHTML="<h1 style='color:"+finalMessage['color']+"; font-size:60px; padding:30px;'>"+finalMessage['message']+"</h1>"
  		botDiv.innerHTML="<img src='"+imagesDatabase[botImageChoice]+"' height=150 width=150 style='box-shadow:0px 10px 50px rgba(243,38,24,1);'>" ;
  		document.getElementById('flex-box-rps-div').appendChild(humanDiv);
  		document.getElementById('flex-box-rps-div').appendChild(messageDiv);
  		document.getElementById('flex-box-rps-div').appendChild(botDiv);
  		// body...
  	}

//Challenge 4: Change Color of All Buttons

	var allButtons=document.getElementsByTagName('button');
	console.log(allButtons);

	var copyAllButtons=[]
	for (let i = 0; i < allButtons.length; i++) {
		copyAllButtons.push(allButtons[i].classList[1]);
	}
	console.log(copyAllButtons)

	function buttonColorChange(buttonThingy){
		if(buttonThingy.value==='red'){
			buttonRed();
		}
		else if(buttonThingy.value==='green'){
			buttonGreen();
		}
		else if(buttonThingy.value==='reset'){
			buttonColorReset();
		}
		else if(buttonThingy.value==='random'){
			buttonColorRandom();
		}
		// body...
	}

	function buttonRed(){
		for (var i = 0; i < allButtons.length; i++) {
			allButtons[i].classList.remove(allButtons[i].classList[1])
			allButtons[i].classList.add('btn-danger');
		}
		// body...
	}

	function buttonGreen(){
		for (var i = 0; i < allButtons.length; i++) {
			allButtons[i].classList.remove(allButtons[i].classList[1])
			allButtons[i].classList.add('btn-success');
		}
		// body...
	}

	function buttonColorReset(){
		for (var i = 0; i < allButtons.length; i++) {
			allButtons[i].classList.remove(allButtons[i].classList[1]);
			allButtons[i].classList.add(copyAllButtons[i])
		}
		// body...
	}

	function buttonColorRandom(){
		var choices=['btn-primary','btn-danger','btn-warning','btn-success'];
		for (var i = 0; i < allButtons.length; i++) {
			allButtons[i].classList.remove(allButtons[i].classList[1])
			allButtons[i].classList.add(choices[Math.floor(Math.random()*4)]);
		}
		// body...
	}

//Challenge 5: Blackjack

	let blackjackGame={
		'you': {
			'scoreSpan' : '#your-blackjack-result',
			'div': '#your-box',
			'score':0,
		},
		'dealer': {
			'scoreSpan' : '#dealer-blackjack-result',
			'div': '#dealer-box',
			'score':0,
		},
		'cards':['A','2','3','4','5','6','7','8','9','10','J','Q','K'],
		'cardsMap':{'A':[1,11],'2':2,'3':3,'4':4,'5':5,'6':6,'7':7,'8':8,'9':9,'10':10,'J':10,'Q':10,'K':10},
	};

	const YOU=blackjackGame['you'];
	const DEALER=blackjackGame['dealer'];

	const hitSound=new Audio('static/sounds/swish.m4a');
	const winSound=new Audio('static/sounds/cash.mp3');
	const loseSound=new Audio('static/sounds/aww.mp3');


	document.querySelector('#blackjack-hit-button').addEventListener('click', blackjackHit);
	document.querySelector('#blackjack-stand-button').addEventListener('click', dealerLogic);
	document.querySelector('#blackjack-deal-button').addEventListener('click', blackjackDeal);


	function blackjackHit(){
		let rC=randomCard();
		updateScore(rC,YOU);
		showCard(rC,YOU);
		showScore(YOU)
		// body...
	}

	function randomCard() {
		let ri=Math.floor(Math.random()*13);
		return blackjackGame['cards'][ri]
		// body...
	}

	function showCard(card,activePlayer) {
		if (activePlayer['score']<=21){ 
			let cardImage=document.createElement('img');
			cardImage.src=`static/images/${card}.png`
			document.querySelector(activePlayer['div']).appendChild(cardImage);
			hitSound.play();
		}
		// body...
	}

	function updateScore(card,activePlayer) {
		if (card === 'A'&&activePlayer['score']+blackjackGame['cardsMap'][card][1]<=21) {
			activePlayer['score']+=blackjackGame['cardsMap'][card][1];	
		} else if (card==='A') {
			activePlayer['score']+=blackjackGame['cardsMap'][card][0];
		}
		else
			activePlayer['score']+=blackjackGame['cardsMap'][card];
		// body...
	}

	function showScore(activePlayer) {
		if (activePlayer['score']>21) {
			document.querySelector(activePlayer['scoreSpan']).textContent='BUST';
			document.querySelector(activePlayer['scoreSpan']).style.color='red';
		}
		else
			document.querySelector(activePlayer['scoreSpan']).textContent=activePlayer['score'];
		// body...
	}

	function blackjackDeal(){
		showResult(computeWinner());
		let yourImages = document.querySelector('#your-box').querySelectorAll('img');
		let dealerImages = document.querySelector('#dealer-box').querySelectorAll('img');
		for (var i = 0; i < yourImages.length; i++) {
			yourImages[i].remove();
		}
		for (var i = 0; i < dealerImages.length; i++) {
			dealerImages[i].remove();
		}

		YOU['score']=0;
		DEALER['score']=0;
		
		document.querySelector('#your-blackjack-result').textContent = 0;
		document.querySelector('#your-blackjack-result').style.color = 'white';

		document.querySelector('#dealer-blackjack-result').textContent = 0;
		document.querySelector('#dealer-blackjack-result').style.color = 'white';
	}

	function dealerLogic() {
		let card=randomCard();
		showCard(card,DEALER);
		updateScore(card,DEALER);
		showScore(DEALER);

		// body...
	}

	function computeWinner(){
		let winner;
		if(YOU['score']<=21){
			if (YOU['score']>DEALER['score'] || DEALER['score']>21){
				winner=YOU
			}else if (YOU['score']<DEALER['score']) {
				winner=DEALER;
			}else if(YOU['score']===DEALER['score']){
				winner="TIED"
			}
		}else if (YOU['score']>21 && DEALER['score']<=21) {
			winner=DEALER;
		}else if(YOU['score']>21 && DEALER['score']>21){
			winner="TIED"
		}
		return winner;
	}

	function showResult(winner) {
		let message, messageColor;

		if(winner===YOU){
			message="You won!!!!!";
			messageColor ='green';
			winSound.play();
		}
		else if(winner===DEALER){
			message="YOU LOST!!!!!!!";
			messageColor='red';
			loseSound.play();
		}
		else {
			message="Match Tied!!!!!";
			messageColor='yellow';
		}

		document.querySelector('#blackjack-result').textContent=message;
		document.querySelector('#blackjack-result').style.color=messageColor;
		// body...
	}