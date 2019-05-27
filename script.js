// hier komt je code
// console.log("Hallo wereld!");
/* commentaar op
meerdere lijnen*/

let mijnCSS = document.querySelector("#switchcss");
let darkKnop = document.querySelectorAll(".dark")[0];
let lightKnop = document.querySelectorAll(".light")[0];
let menuKnop = document.querySelector(".menu");
let sideMenu = document.querySelector(".sidemenu");
let mijnMain = document.querySelector("main");
let mijnShowreels = document.querySelectorAll(".showreel");
let mijnSideDiv = document.querySelector(".sidediv");
let mijnSource;
let mijnAfbeelding = document.querySelector(".tentoonstelling");


function switchToLight() {
	mijnCSS.setAttribute("href","stijl-light.css");
	lightKnop.classList.remove("klikbaar");
	darkKnop.classList.add("klikbaar");
}
function switchToDark() {
	mijnCSS.setAttribute("href","stijl-dark.css");
	darkKnop.classList.remove("klikbaar");
	lightKnop.classList.add("klikbaar");
}
function showMenu() {
	sideMenu.classList.add("zichtbaarmenu");
	event.preventDefault();
}
function verbergMenu() {
	sideMenu.classList.remove("zichtbaarmenu");
	event.preventDefault();
}

//lightLink.addEventListener("click",switchToLight);
//darkLink.addEventListener("click",switchToDark);

function toonImg() {
	mijnSource = this.getAttribute("src");
	mijnAfbeelding.setAttribute("src", mijnSource);
	event.preventDefault();
	i=0;
	while (i<mijnShowreels.length) {
		mijnShowreels[i].classList.remove("aangeduid");
		i++;
	}
	this.classList.add("aangeduid");
}
i=0;
while (i<mijnShowreels.length) {
	mijnShowreels[i].addEventListener("click", toonImg);
	i++;
}

// voor inspiratie voor websites cargo collective websites
darkKnop.addEventListener("click", switchToDark);
lightKnop.addEventListener("click", switchToLight);
menuKnop.addEventListener("click", showMenu);
mijnMain.addEventListener("click", verbergMenu);

// 2 panels, eentje die fixed staat en de afbeelding toont waar je op geklikt hebt.  de andere toont alle kleine afbeeldingen.
