let readyToPlay = false;
let daltonico = false;


function revealColor(daltonico) {
	if (daltonico == true) {
		let elements = document.querySelectorAll('.correct');
		for (let i = 0; i < elements.length; i++) {
			elements[i].style.backgroundColor = '#FFD2E2';
		}
	} else {
		let elements = document.querySelectorAll('.correct');
		for (let i = 0; i < elements.length; i++) {
			elements[i].style.backgroundColor = '#F4E04D ';
		}
	}
}

// hace que vuelva al color predeterminado despues de 4 sec
function vanishColor() {
	let elements = document.querySelectorAll('.correct');
	for (let i = 0; i < elements.length; i++) {
		elements[i].style.backgroundColor = '';
	}
}

// se muestran durantos los segundos
function showCorrectCellsSomeSeconds(seconds) {
	if (readyToPlay == true) {
		return 0
	} else {
		revealColor(daltonico);
		setTimeout(() => {
			vanishColor()
		}, seconds);
	}
}


function toggle(id) {
	if (readyToPlay == false) {
		return 0
	} else {
		let element = document.getElementById(id);
		element.classList.toggle('toggled');
	}
}

// Recorre la tabla y hace que las celdas sean clicables
function loadToggleOnCells() {
	readyToPlay = true;
	let elements = document.getElementsByTagName('td');
	for (let i = 0; i < elements.length; i++) {
		elements[i].addEventListener("click", toggle());
	}

}

// carga las celdas correctas y las ilumina (fallo)
function startFanfare(seconds) {
	showCorrectCellsSomeSeconds(seconds);
	setTimeout(() => {
		loadToggleOnCells();
	}, seconds);
}


function solve() {
	let elements = document.querySelectorAll('.toggled');
	let corrects = document.querySelectorAll('.correct');

	if (elements === corrects) {
		return true;
	} if (elements == null || corrects == null) {
		return false;
	} if (elements.length !== corrects.length) {
		return false;
	}

	for (let i = 0; i < elements.length; ++i) {
		if (elements[i] !== corrects[i]) {
			return false;
		}
	}
	return true;
}

function postGame() {
	let result = solve();
	if (result === true) {
		window.location = './victoria.php';
	}
	else {
		window.location = './derrota.php';
	}
}

function addClassAllDocument() {
	daltonico = true;
	var all = document.getElementsByTagName("*");
	for (var i=0, max=all.length; i < max; i++) {
		all[i].classList.add("daltonico");
	}

}
function removeClassAllDocument() {
	var all = document.getElementsByTagName("*");
	for (var i=0, max=all.length; i < max; i++) {
	all[i].classList.remove("daltonico");
	}
}

function on(){
addClassAllDocument();
}

function off(){
removeClassAllDocument();
}

var checkbox = document.getElementById('checkbox');

checkbox.addEventListener("change", comprueba, false);

function comprueba(){
if(checkbox.checked){
  on();
}else{
 off();
}
}