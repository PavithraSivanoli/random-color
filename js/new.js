var but = document.createElement("button");
but.setAttribute("id","but");
but.setAttribute("onclick","run()");
but.innerHTML="Start to click and see the colors!";
document.body.appendChild(but);

function run()
{
	var randomColor = Math.floor(Math.random()*150);
    document.getElementById("but");
	document.body.style.backgroundColor = '#' + randomColor;
}
