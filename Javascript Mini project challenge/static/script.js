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

var i=document.querySelector(".blackjack-hit-button");
i.addEventListener("click", blackjackhit);

function blackjackhit(){
	alert('Don`t touchedd me');
}