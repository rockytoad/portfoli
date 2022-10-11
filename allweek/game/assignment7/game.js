window.onload = pageLoad;

function pageLoad() {
	document.getElementById("start").onclick = startGame;

}

function startGame() {
	alert("Ready");
	addBox();
	timeStart();
}

function timeStart() {
	var TIMER_TICK = 1000;
	var timer = null;
	var min = 0.5; // 0.5 minute
	var second = min*60;
	var x = document.getElementById('clock');
	//setting timer using setInterval function
	timer = setInterval(timeCount, TIMER_TICK);

	function timeCount() {
		var allbox = document.querySelectorAll("#game-layer div");
		second -= 1;
		x.innerHTML = second;

		if (allbox.length == 0 && second > 0) {
			alert("you win")
			clearScreen();
			clearInterval(timer);
		}
		else if (allbox.length != 0 && second <= 0) {
			alert("you lose")
			clearScreen();
			clearInterval(timer)
			
		}
	}
}

function addBox() {
	// สร้างกล่องตาม input ที่เราใส่ 
	var numbox = document.getElementById("numbox").value;
	var gameLayer = document.getElementById("game-layer");
	var colorDrop = document.getElementById("color").value;
	for (var i = 0; i < numbox; i++) {
		var tempbox = document.createElement("div");
		tempbox.className = "square";

		tempbox.id = "box" + i;
		tempbox.style.backgroundColor = colorDrop;
		tempbox.style.left = Math.random()*(500 - 25) + "px";
		tempbox.style.top = Math.random() * (500 - 25) + "px";
		//add element to HTML node
		gameLayer.appendChild(tempbox);
		bindBox(tempbox);

	}
}

function bindBox(box) {
	//เมื่อกดแล้ว กล่องจะหายไป
	box.onclick = function (click) {
		box.parentNode.removeChild(box)
	}
}

function clearScreen() {
	// ทำการลบ node ของกล่องทั้งหมด ออกจาก หน้าจอ
	var allbox = document.querySelectorAll("#game-layer div");

	//delete all  div
	for (var i = 0; i < allbox.length; i++) {
		allbox[i].removeChild(box);
		
	}
}




