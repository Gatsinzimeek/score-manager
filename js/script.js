var button1 = document.querySelector('#ctrl1');
var pr1 = document.querySelector('#Score1');
var Score1 = 0;

var button2 = document.querySelector('#ctrl2');
var pr2 = document.querySelector('#Score2');
var Score2 = 0;

var res = document.querySelector('#reset');

var winner = document.querySelector('#Winner');

button1.addEventListener('click', function(){
	var lim = document.querySelector('#limit').value;

	Score1++;

	pr1.textContent = Score1;

	if (Score1 == lim) {
		pr1.classList.add("green");
		button1.setAttribute("disabled", "true");
		button2.setAttribute("disabled", "true");

		printwinner();

	}

})


button2.addEventListener('click', function(){
	var lim = document.querySelector('#limit').value;

	Score2++;


	pr2.textContent = Score2;

	if (Score2 == lim){
		pr2.classList.add("green");
		button1.setAttribute("disabled", "true");
		button2.setAttribute("disabled", "true");
		printwinner();
	}

	
})

res.addEventListener("click", function(){
	button1.removeAttribute("disabled");
	button2.removeAttribute("disabled");


	pr1.classList.remove("green");
	pr2.classList.remove("green");

	Score1 = 0;
	Score2 = 0;

	pr1.textContent = Score1;
	pr2.textContent = Score2;

	document.querySelector('#limit').value = 5;

	winner.textContent = "";
})

function printwinner(){
	if (Score1 > Score2) {
		winner.textContent = "Player 1";
	}
	else{
		winner.textContent = "Player 2";

	}
}	