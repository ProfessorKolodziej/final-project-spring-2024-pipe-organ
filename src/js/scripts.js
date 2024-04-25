// This is where you should write all JavaScript
// for your project. Remember a few things as you start!
// - Use let or const for all variables
// - Do not use jQuery - use JavaScript instead
// - Do not use onclick - use addEventListener instead
// - Run npm run test regularly to check autograding
// - You'll need to link this file to your HTML :)

//Visual Portion Learn
const topSection = document.querySelector('#top');
const middleSection = document.querySelector('#middle');
const bottomSection = document.querySelector('#bottom');

function showInformation() {
	const shownItems = document.querySelectorAll('.show');
}
for (item of shownItems) {
	item.classList.remove('show');
}

topSection.addEventListener("onmouseover", showInformation);
middleSection.addEventListener("onmouseover", showInformation);
bottomSection.addEventListener("onmouseover", showInformation);

//Audio portion Listen
function playAudio() {
	let audio = document.getElementById("Principal-16");
	playAudio();
}

function playAudio() {
	let audio = document.getElementById("Vox");
	playAudio();
}

function playAudio() {
	let audio = document.getElementById("Principal-8");
	playAudio();
}

function playAudio() {
	let audio = document.getElementById("Nazard");
	playAudio();
}

function playAudio() {
	let audio = document.getElementById("Trumpet");
	playAudio();
}
