var money = 0;
var upgrade = 1;

function clickBtn() {
	money = money + upgrade
	document.getElementByTagName("h1")[0].firstChild.data = money + "$";
}

function update() {
money = money - 100; document.getElementsByTagName("h1")[0].firstChild.data = money + "$";
if1();
upgrade += 1;
}

function update1() {
score = score - 150;
document.getElementsByTagName("h1")[0].firstChild.data = score + "$";
if1();
upgrade += 2;
}

function update2() {
score = score - 250; document.getElementsByTagName("h1")[0].firstChild.data = score + "$";
if1();
upgrade += 3;
}

function update3() {
score = score - 500;
document.getElementsByTagName("h1")[0].firstChild.data = score + "$"; if1(); upgrade += 10;
}

function auto() {
score = score - 10000;
document.getElementsByTagName("h1")[0].firstChild.data = score + "$";
if1();
setTimeout("plusauto()", 1000);
}

function if1 () {
if (score < -1) {
document.write("You spent so much money!");
}
}

function plusauto () {
score += upgrade;
document.getElementsByTagName("h1")[0].firstChild.data = score + "$";
setTimeout("auto1()", 1000);
}

function auto1 () {
score += upgrade;
setTimeout("plusauto()", 1000);
document.getElementsByTagName("h1")[0].firstChild.data = score + "$";
}
