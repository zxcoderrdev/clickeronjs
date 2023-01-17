var money = 0;
var upgrade = 1;

//add money for clicks
function clickBtn() {
	money = money + upgrade
	document.getElementByTagName("h1")[0].firstChild.data = money + "$";
}
//buying upgrades and use it
function update() {
money = money - 100; document.getElementsByTagName("h1")[0].firstChild.data = money + "$";
if1();
upgrade += 1;
}

function update1() {
money = money - 150;
document.getElementsByTagName("h1")[0].firstChild.data = money + "$";
if1();
upgrade += 2;
}

function update2() {
money = money - 250; document.getElementsByTagName("h1")[0].firstChild.data = money + "$";
if1();
upgrade += 3;
}

function update3() {
money = money - 500;
document.getElementsByTagName("h1")[0].firstChild.data = score + "$"; if1(); upgrade += 10;
}

//Autoclicker option
function auto() {
money = money - 10000;
document.getElementsByTagName("h1")[0].firstChild.data = money + "$";
if1();
setTimeout("plusauto()", 1000);
}

//Autoclicker settings
function plusauto () {
money += upgrade;
document.getElementsByTagName("h1")[0].firstChild.data = money + "$";
setTimeout("auto1()", 1000);
}

function auto1 () {
money += upgrade;
setTimeout("plusauto()", 1000);
document.getElementsByTagName("h1")[0].firstChild.data = money + "$";
}

//error if ur balance over -1
function if1 () {
if (money < -1) {
document.write("You spent so much money!");
}
}
