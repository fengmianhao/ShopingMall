function leftmenuOver(menuObj) {
	if("leftmenu_td_on"!=menuObj.className)
	{
		menuObj.className = "leftmenu_td_over";
	}
}
function leftmenuOut(menuObj) {
	if("leftmenu_td_on"!=menuObj.className)
	{
		menuObj.className = "leftmenu_td_off";
	}
}

function changeMenuState(theID, totalNo, url) {
	for(var i=1; i<=totalNo; i++)
	{
		var tempMenuObj = document.getElementById("leftmenu"+i);
		tempMenuObj.className = "leftmenu_td_off";
	}
	
	var theMenuObj = document.getElementById("leftmenu"+theID);
	theMenuObj.className = "leftmenu_td_on";
	
	if(""!=url&&url)
	{
		parent.mainFrame.location.href = url;
	}
}

function showHiddenAdvDate() {
	var advDateObj = document.getElementById("advDateSet");
	var cboxObj = document.getElementsByName("cycle");
	if(true==cboxObj[2].checked)
	{
		advDateObj.style.display = "block";
	}
	else
	{
		advDateObj.style.display = "none";
	}
}

function addAttachment(totalNum) {
	var hasAdd = false;
	
	for( var i=1; i<=totalNum; i++)
	{
		var amTr = document.getElementById("amtr"+i);
		if("none"==amTr.style.display)
		{
			amTr.style.display = "block";
			hasAdd = true;
			break;
		}
	}
	
	if(!hasAdd)
	{
		alert("Can't add more than " + totalNum + " Attachment !");
	}
}

function delAttachment(acNum) {
	var amTr = document.getElementById("amtr"+acNum);
	amTr.style.display = "none";
}