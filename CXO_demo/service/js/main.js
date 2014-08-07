/****************** 计算对象的位置 *************************/
function getAbsolutePos(el) {
	var r = { x: el.offsetLeft, y: el.offsetTop };
	if (el.offsetParent) {
		var tmp = getAbsolutePos(el.offsetParent);
		r.x += tmp.x;
		r.y += tmp.y;
	}
	return r;
}

//各种浏览器的判断参数
var isIE6 = false;
var isIE = false;
var firefox = false;
var chrome = false;
var opera = false;
var safari = false;
var Sys = {};
var ua = navigator.userAgent.toLowerCase();
var s;
(s = ua.match(/msie ([\d.]+)/)) ? Sys.ie = s[1] :
(s = ua.match(/firefox\/([\d.]+)/)) ? Sys.firefox = s[1] :
(s = ua.match(/chrome\/([\d.]+)/)) ? Sys.chrome = s[1] :
(s = ua.match(/opera.([\d.]+)/)) ? Sys.opera = s[1] :
(s = ua.match(/version\/([\d.]+).*safari/)) ? Sys.safari = s[1] : 0;

//以下进行参数的赋值
if (Sys.ie) {
	isIE = true;
	if(Sys.ie == 6){
		isIE6 = true;
	}
}
if (Sys.firefox) firefox = true;
if (Sys.chrome) chrome = true;
if (Sys.opera) opera = true;
if (Sys.safari) safari = true;

//各种获取对象的函数
//通过id找对象
function getId(id){
	if(document.getElementById(id))
		return document.getElementById(id);
	else
		return false;
}
//通过id中的关键字找一类对象
function getObjID(type,keyword,fid){
	var fobj = 	typeof(fid) == "undefined"?document:getId(fid);
	var newArr = new Array();
	var items = fobj.getElementsByTagName(type);
	for(var i=0;i<items.length;i++){
		if(items[i].id && items[i].id.indexOf(keyword)>=0){
			newArr.push(items[i]);
		}
	}
	return newArr;
}

//鼠标经过显示列表详情
function showDetail(actObj,fid){
	var fobj = getId(fid);
	var num = actObj.id.split("_")[1];
	var details = getObjID("li","itemDetail_",fid);
	var simples = getObjID("li","itemSimple_",fid);
	
	for(var i=0;i<details.length;i++){
		details[i].style.display = "none";
		simples[i].style.display = "block";
	}
	actObj.style.display = "none";
	getId("itemDetail_"+num).style.display = "block";
}

/************切换风格***************/
//显示切换风格列表
function showThemeList() {
	var itemW = 82;		//单个风格图标宽度
	var itemH = 71;		//单个风格图标高度
	var borderW = 16;	//边框宽度
	var borderH = 16; 	//边框高度
	var maxLen = 6;		//每行最多显示按钮个数
	var panelW;			//皮肤选择窗口宽度
	var panelH;			//皮肤选择窗口高度
	var actObj = document.getElementById("topLnkTheme");
	var listObj = document.getElementById("theme");
	var actPos = getAbsolutePos(actObj);
	listObj.style.display = "block";
	if(listObj.init)
	{
		listObj.style.left = actPos.x - listObj.offsetWidth/2 + actObj.offsetWidth/2 + "px";
		listObj.style.top = actPos.y + "px";
		return true;
	}
	var listContainerObj = document.getElementById("themeContainer");
	var listBodyObj = document.getElementById("themeBody");
	var listTopObj = document.getElementById("themeTop");
	var listTopCenterObj = document.getElementById("themeTopCenter");
	var listMiddleObj = document.getElementById("themeMiddle");
	var listMiddleLeftObj = document.getElementById("themeMiddleLeft");
	var listMiddleCenterObj = document.getElementById("themeMiddleCenter");
	var listMiddleRightObj = document.getElementById("themeMiddleRight");
	var listBottomObj = document.getElementById("themeBottom");
	var listBottomCenterObj = document.getElementById("themeBottomCenter");
	var themeListMaskerObj = document.getElementById("themeMasker");
	var titleItem = document.getElementById("themeTitle");
	var themeTitleCenterObj = document.getElementById("themeTitleCenter");
	var listItems = listMiddleCenterObj.getElementsByTagName("li");
	if(listItems.length>6)
	{
		panelW = itemW * 6 + borderW;
		if(listItems.length%6==0)
		{
			panelH = parseInt(listItems.length/6) * itemH + borderH;
		}
		else
		{
			panelH = (parseInt(listItems.length/6)+1) * itemH + borderH;
		}
	}
	else
	{
		panelW = itemW * listItems.length + borderW;
		panelH = itemH + borderH;
	}
	if(isIE6)
	{
		panelW += 4;
	}
	
	listObj.style.width = listContainerObj.style.width = listBodyObj.style.width = listTopObj.style.width = listMiddleObj.style.width =		listBottomObj.style.width = panelW + "px";
	listTopCenterObj.style.width = listMiddleCenterObj.style.width = listBottomCenterObj.style.width = (panelW - borderW) + "px";
	listMiddleLeftObj.style.height = listMiddleCenterObj.style.height = listMiddleRightObj.style.height = (panelH - borderH) + "px";
	listObj.style.top = actPos.y + "px";
	if(isIE6){
		themeListMaskerObj.style.height = panelH - titleItem.offsetHeight + "px";
		themeListMaskerObj.style.width = panelW -6 + "px";
		themeListMaskerObj.style.left = "3px";
		themeListMaskerObj.style.top = actPos.y + titleItem.offsetHeight + "px";
	}
	titleItem.style.width = actObj.offsetWidth + 2 + "px";
	themeTitleCenterObj.style.width = (actObj.offsetWidth + 2 - borderW) + "px";
	themeTitleCenterObj.getElementsByTagName("span").item(0).innerHTML = actObj.getElementsByTagName("span").item(0).innerHTML;
	var difference = document.documentElement.clientWidth - actPos.x - titleItem.offsetWidth/2;
	var diff = difference - listContainerObj.offsetWidth/2;
	
	if(diff <= 0){
		var offset = eval(Math.abs(parseInt(diff))+1);
		if(document.documentElement.clientWidth < document.body.scrollWidth ){
			var bodyPos = getAbsolutePos(document.body);
			var newleft = bodyPos.x + document.body.scrollWidth-listContainerObj.offsetWidth;
			listObj.style.left = newleft + "px";
			var titleLeft = actPos.x - newleft;
			titleItem.style.left = titleLeft + "px";
		}
		else {
			listObj.style.left = actPos.x - panelW/2 + actObj.offsetWidth/2 - offset + "px";
			titleItem.style.left = (panelW/2 - actObj.offsetWidth/2) + offset + "px";
		}
	}
	else {
		listObj.style.left = actPos.x - panelW/2 + actObj.offsetWidth/2  + "px";
		titleItem.style.left = (panelW/2 - actObj.offsetWidth/2) + "px";
	}
	
	for(var i=0; i<listItems.length; i++)
	{
		var listItem = listItems[i];
		listItem.onmouseover = function() {
			this.className = this.className.replace("_normal", "_over");
		}
		listItem.onmouseout = function() {
			this.className = this.className.replace("_over", "_normal");
		}
		listItem.onclick = function() {
			if(-1!=this.className.indexOf("_on"))
			{
				return true;
			}
			themeListState(this, listItems);
			switchStyle(this.id);
		}
	}
	listObj.onmouseout = function() {
		this.style.display = "none";
	}
	listObj.onmouseover = function() {
		this.style.display = "block";
	}
//	listObj.init = true;
}
//更改当前样式状态
function themeListState(toItem, itemArr) {
	var toClassName;
	for(var i=0; i<itemArr.length; i++)
	{
		itemArr[i].className = itemArr[i].className.replace("_on", "_normal");
	}
	toItem.className = toItem.className.replace("_normal", "_on");
	toItem.className = toItem.className.replace("_over", "_on");
}
//切换风格
function switchStyle(styleName) {
	var linkObjs = document.getElementsByTagName("link");
	var regx = /skin\/\w*\/css/i;
	for(var i=0; i<linkObjs.length; i++)
	{
		var linkAttr = linkObjs[i].attributes["fortheme"].nodeValue;
		if("yes"==linkAttr)
		{
			var linkObj = linkObjs[i];
			var hrefStr = linkObj.href;
			var skinPath = hrefStr.replace(regx, "skin/"+styleName+"/css");
			linkObj.href = skinPath;
		}
	}
	if(isIE6)
	{
		DD_belatedPNG.fix('.top_search_btn,.play_big_icon,.themelist_left, .themelist_right, .themelist_center, #themeListTitle, span.top_lnk_theme, .moremenu div,.select_popdiv_left ,.select_popdiv_right ,.select_popdiv_bl,.select_popdiv_bc,.select_popdiv_br,.select_popdiv_tl ,.select_popdiv_tc ,.select_popdiv_tr ');
	}
}

//显示自助服务下拉列表
function showSelfServList() {
	var borderW = 16;	//边框宽度
	var borderH = 16; 	//边框高度
	var panelW;			//皮肤选择窗口宽度
	var panelH;			//皮肤选择窗口高度
	var actObj = document.getElementById("topLnkSelfserv");
	var listObj = document.getElementById("selfserv");
	var actPos = getAbsolutePos(actObj);
	listObj.style.display = "block";
	if(listObj.init)
	{
		listObj.style.left = actPos.x + "px";
		listObj.style.top = actPos.y + "px";
		return true;
	}
	var listContainerObj = document.getElementById("selfservContainer");
	var listBodyObj = document.getElementById("selfservBody");
	var listTopObj = document.getElementById("selfservTop");
	var listTopCenterObj = document.getElementById("selfservTopCenter");
	var listMiddleObj = document.getElementById("selfservMiddle");
	var listMiddleLeftObj = document.getElementById("selfservMiddleLeft");
	var listMiddleCenterObj = document.getElementById("selfservMiddleCenter");
	var listMiddleRightObj = document.getElementById("selfservMiddleRight");
	var listBottomObj = document.getElementById("selfservBottom");
	var listBottomCenterObj = document.getElementById("selfservBottomCenter");
	var selfservListMaskerObj = document.getElementById("selfservMasker");
	var titleItem = document.getElementById("selfservTitle");
	var selfservTitleCenterObj = document.getElementById("selfservTitleCenter");
	var selfservItemObj = document.getElementById("selfservItem");
	var listItems = selfservItemObj.getElementsByTagName("li");
	var moremenuItemOverObj = document.getElementById("moremenuItemOver");
	moremenuItemOverObj.style.display = "block";
	
	panelW = selfservItemObj.offsetWidth + borderW;
	panelH = selfservItemObj.offsetHeight + borderH;
	
	moremenuItemOverObj.style.width = panelW - 12 + "px"; 
	listObj.style.width = selfservListMaskerObj.style.width = listContainerObj.style.width = listBodyObj.style.width = listTopObj.style.width = listMiddleObj.style.width = listBottomObj.style.width = panelW + "px";
	listTopCenterObj.style.width = listMiddleCenterObj.style.width = listBottomCenterObj.style.width = (panelW - borderW) + "px";
	listMiddleLeftObj.style.height = listMiddleCenterObj.style.height = listMiddleRightObj.style.height = (panelH - borderH) + "px";
	listObj.style.left = actPos.x  + "px";
	listObj.style.top = actPos.y + "px";
	
	titleItem.style.width = actObj.offsetWidth + 4 + "px";
	selfservTitleCenterObj.style.width = (actObj.offsetWidth + 4 - borderW) + "px";
	titleItem.style.left = "0px";
	selfservTitleCenterObj.getElementsByTagName("span").item(0).innerHTML = actObj.getElementsByTagName("span").item(0).innerHTML;
	for(var i=0; i<listItems.length; i++)
	{
		var listItem = listItems[i];
		listItem.onmouseover = function() {
			moremenuListItemOver(this, moremenuItemOverObj);
		}
		listItem.onmouseout = function() {
			moremenuListItemOut(moremenuItemOverObj);
		}
	}
	listObj.onmouseout = function() {
		this.style.display = "none";
	}
	listObj.onmouseover = function() {
		this.style.display = "block";
	}
	moremenuItemOverObj.style.display = "none";
	listObj.init = true;
}
function moremenuListItemOver(actObj, overObj) {
	overObj.style.display = "block";
	if(document.getElementById("selfserv").style.display=="none"){
		document.getElementById("selfserv").style.display = "block";
		var actPos = getAbsolutePos(actObj);
		document.getElementById("selfserv").style.display = "none";
	}
	else {
		var actPos = getAbsolutePos(actObj);
	}
	actPos.innerHTML = actPos.x;
	overObj.style.top = actPos.y - 42 + "px";
}
function moremenuListItemOut(actObj) {
	actObj.style.display = "none";
}

/*图片鼠标效果*/
function iconEffect(imgObj, path) {
	imgObj.src = path;
}

/****************** 按钮动作 *************************/
function btnAct(id) {
	
}
function btnOver(ulObj) {
	ulObj.className = ulObj.className.replace("_normal", "_over");
}
function btnOut(ulObj) {
	ulObj.className = ulObj.className.replace("_over", "_normal");
}

/**************** 切换左侧菜单状态 *******************/
function switchLeftmenu(id,actObj) {
	if(typeof(actObj) != "undefined"){
		var leftmenuObj = actObj.parentNode;
	}
	else {
		var leftmenuObj = document.getElementById("leftmenu");
	}
	var leftmenuOnObj = document.getElementById("leftmenuOn");
	var leftmenuItems = leftmenuObj.getElementsByTagName("li");
	var menuItem = leftmenuItems.item(id);
	var pos = getAbsolutePos(menuItem);
	leftmenuOnObj.style.top = pos.y + "px";
		if(typeof(actObj) != "undefined"){
			leftmenuOnObj.style.left = pos.x - 6 + "px";
		}
	leftmenuOnObj.innerHTML = "<span>" + menuItem.innerHTML + "</span>";
	leftmenuOnObj.style.display = "block";
}

/*************切换TAB页****************/
function changeTab(itemID,contentID,id, total)
{
	var theTabTitle = document.getElementById(itemID+id);
	var theTabContent = document.getElementById(contentID+id);
	for(var i=1; i<=total; i++)
	{
		var tempTabTitle = document.getElementById(itemID+i);
		var tempTabContent = document.getElementById(contentID+i);
		tempTabTitle.className = "tab_title_normal";
		tempTabContent.style.display = "none";
	}
	theTabTitle.className = "tab_title_on";
	theTabContent.style.display = "";
}

//控制左侧菜单和右侧内容的高度一致，针对非树形左侧菜单的情况
function getRightHeight(){
	if(document.getElementById("leftBarhide")) {
		document.getElementById("leftBarhide").style.height = document.getElementById("selfSevericeRight").offsetHeight +"px";
	}
	document.getElementById("selfServiceLeft").style.height = "auto";
	var trueHeight = document.getElementById("selfServiceLeft").offsetHeight;
	if(trueHeight < document.getElementById("selfSevericeRight").offsetHeight) {
		document.getElementById("selfServiceLeftInner").style.height=document.getElementById("selfSevericeRight").offsetHeight - 25 +"px";
	}
	else {
		document.getElementById("selfServiceLeftInner").style.height = "auto";
	}
}

//编辑tags列表
function tagsItemOver(actObj) {
	//actObj.className = actObj.className.replace("_normal", "_over");
}
function tagsItemOut(actObj) {
	//actObj.className = actObj.className.replace("_over", "_normal");
}
function showTagsEditor(actObj) {
	var editor = document.getElementById("tagsEditor");
	if(editor.sl)
	{
		clearTimeout(editor.sl);
	}
	var editorItems = editor.getElementsByTagName("li");
	var inpLi = editorItems.item(4);
	var editLi = editorItems.item(3);
	var delLi = editorItems.item(2);
	var saveLi = editorItems.item(1);
	var cancelLi = editorItems.item(0);
	var inpObj = editor.getElementsByTagName("input").item(1);
	var tempInpObj = editor.getElementsByTagName("input").item(0);
	editor.style.display = "block";
	
	if(actObj)
	{
		editLi.style.display = delLi.style.display = "block";
		saveLi.style.display = cancelLi.style.display = "none";
		var pos = getAbsolutePos(actObj);
		inpLi.style.visibility = "hidden";
		editor.style.left = pos.x + "px";
		editor.style.top = pos.y + "px";
		editor.currentObj = actObj;
		inpObj.value = actObj.getElementsByTagName("span").item(0).innerHTML;
	}
}
function hideTagsEditor() {
	var editor = document.getElementById("tagsEditor");
	if(editor.sl)
	{
		clearInterval(editor.sl);
	}
	editor.sl = setTimeout("hideTagsEditorTim()", 100);
}
function hideTagsEditorTim() {
	var editor = document.getElementById("tagsEditor");
	if(editor.sl)
	{
		clearTimeout(editor.sl);
	}
	editor.style.display = "none";
}
function doEditor() {
	var editor = document.getElementById("tagsEditor");
	var editorItems = editor.getElementsByTagName("li");
	var inpLi = editorItems.item(4);
	var editLi = editorItems.item(3);
	var delLi = editorItems.item(2);
	var saveLi = editorItems.item(1);
	var cancelLi = editorItems.item(0);
	var inpObj = editor.getElementsByTagName("input").item(1);
	var tempInpObj = editor.getElementsByTagName("input").item(0);
	editLi.style.display = delLi.style.display = "none";
	saveLi.style.display = cancelLi.style.display = "block";
	inpLi.style.visibility = "visible";
}
//打分系统
function rate(obj,oEvent){ 
if(obj.rateFlag) return; 
var e = oEvent || window.event; 
var target = e.target || e.srcElement;  
var imgArray = obj.getElementsByTagName("img"); 
for(var i=0;i<imgArray.length;i++){ 
   imgArray[i]._num = i; 
   imgArray[i].onclick=function(){ 
    if(obj.rateFlag) return; 
    obj.rateFlag=true; 
   } 
} 
if(target.tagName=="IMG"){ 
   for(var j=0;j<imgArray.length;j++){ 
    if(j<=target._num){ 
	 var imgSrc =  imgArray[j].src;
	 var newImg = imgSrc.replace("grey","yellow");
     imgArray[j].src=newImg; 
    } else { 
	 var imgSrc =  imgArray[j].src;
	 var newImg = imgSrc.replace("yellow","grey");
     imgArray[j].src=newImg; 
	
    } 
   } 
} else { 
   for(var k=0;k<imgArray.length;k++){ 
   	var imgSrc =  imgArray[k].src;
	var newImg = imgSrc.replace("yellow","grey");
    imgArray[k].src=newImg; 
   } 
} 
} 
//选择列表展现方式
function selectStyle(actobj){
	var fobj = actobj.parentNode;
	var imgs = fobj.getElementsByTagName("img");
	var curimg = actobj.getElementsByTagName("img")[0];
	
	for(var i=0;i<imgs.length;i++){
		if(imgs[i].src.indexOf("_cur") >= 0){
			var imgsrc = imgs[i].src;
			imgs[i].src	= imgsrc.replace("_cur","_notcur");
		}
	}
	var curimgsrc = curimg.src;
	curimg.src=curimgsrc.replace("_notcur","_cur");
}

//输入框，文本域焦点状态
function formItemFocus(actObj) {
	actObj.className = actObj.className.replace("_normal", "_over");
}
function formItemBlur(actObj) {
	actObj.className = actObj.className.replace("_over", "_normal");
}

//获取短信验证码
function getSmsCode(num) {
	//以下编获取短信码相关脚本
	
	//切换说明
	if(1==num)
	{
		var explainObj1 = document.getElementById("smscodeExplain1");
		var explainObj2 = document.getElementById("smscodeExplain2");
		explainObj1.style.display = "none";
		explainObj2.style.display = "block";
	}
}
//开通彩信
function orderMMS() {
	var explainObj1 = document.getElementById("mmsExplain1");
	var explainObj2 = document.getElementById("mmsExplain2");
	if("none"==explainObj1.style.display)
	{
		
		explainObj1.style.display = "block";
		explainObj2.style.display = "none";
	}
	else
	{
		
		explainObj1.style.display = "none";
		explainObj2.style.display = "block";
	}
}
//展开/收缩高级注册信息栏
function showHideAdvInfo(actObj, infoId) {
	var infoObj = document.getElementById(infoId);
	if("none"==infoObj.style.display)
	{
		infoObj.style.display = "block";
		actObj.className = actObj.className.replace("_closed", "_opened");
	}
	else
	{
		infoObj.style.display = "none";
		actObj.className = actObj.className.replace("_opened", "_closed");
	}
}

/************弹出窗口LightBox************/
//打开弹出窗口
//lightBoxOn(contentId, titleStr, w, h)
//contentId  窗口内容模块ID
//titleStr   窗口标题文字
//w          窗口宽度，默认适应内容大小
//h          窗口高度，默认适应内容大小
function lightBoxOn(contentId, titleStr, w, h) {
	initPopWin(contentId, titleStr, w, h);	
	var lightBoxContainerObj = document.getElementById("lightBoxContainer");
	lightBoxContainerObj.contentId = contentId;
	setScreenCenter();
	lightBoxContainerObj.st = setInterval("setScreenCenter()", 10);
}
//关闭弹出窗口
function lightBoxOff() {
	var lightBoxContainerObj = document.getElementById("lightBoxContainer");
	var contentObj = document.getElementById(lightBoxContainerObj.contentId);
	clearInterval(lightBoxContainerObj.st);
	var lightBoxObj = document.getElementById("lightBox");
	lightBoxObj.style.display = "none";
	contentObj.style.display = "none";
	contentObj.contentId = null;
}
//计窗口下方黑色遮照区域大小
function resizeMaskSize() {
	var lightBoxObj = document.getElementById("lightBox");
	var lightBoxBgObj = document.getElementById("lightBoxBg");
	var lightBoxMaskObj = document.getElementById("lightBoxMask");
	var lightBoxIfraObj = document.getElementById("lightBoxIfra");
	var maskW = document.body.scrollWidth<document.body.offsetWidth?document.body.offsetWidth:document.body.scrollWidth;
	var maskH = document.body.scrollHeight<document.body.offsetHeight?document.body.offsetHeight:document.body.scrollHeight;
	
	lightBoxObj.style.width = lightBoxBgObj.style.width = lightBoxMaskObj.style.width = lightBoxIfraObj.width = maskW + "px";
	lightBoxObj.style.height = lightBoxBgObj.style.height = lightBoxMaskObj.style.height = lightBoxIfraObj.style.height = maskH + "px";
}
//重定位窗口内容位置
function reContentPos(contentId) {
	var contentObj = document.getElementById(contentId);
	var lightBoxBodyCenter = document.getElementById("lightBoxBodyCenter");
	var bodyPos = getAbsolutePos(lightBoxBodyCenter);
	contentObj.style.left = (bodyPos.x + 10) + "px";
	contentObj.style.top = (bodyPos.y + 10) + "px";
}
//计算屏幕大小
function setScreenCenter() {
	var obj = document.getElementById("lightBoxContainer");
	
	resizeMaskSize();
	
	var scrollT; 
	var scrollL;
	var clientH;
	var clientW;
	
	if (typeof window.pageYOffset != 'undefined') { 
	   scrollT = window.pageYOffset;
	   scrollL = window.pageXOffset;
	} 
	else if (typeof document.compatMode != 'undefined' && 
		 document.compatMode != 'BackCompat') { 
	   scrollT = document.documentElement.scrollTop;
	   scrollL = document.documentElement.scrollLeft;
	} 
	else if (typeof document.body != 'undefined') { 
	   scrollT = document.body.scrollTop; 
	   scrollL = document.body.scrollLeft; 
	}
	
	if (typeof document.compatMode != 'undefined' && 
		 document.compatMode != 'BackCompat') {
	   clientH = document.documentElement.clientHeight;
	   clientW = document.documentElement.clientWidth;
	}
	else 
	{
		clientH = document.body.clientHeight;
		clientW = document.body.clientWidth;
	}
	
	//alert("offsetHeight:"+ document.body.offsetHeight+ "  clientHeight:"+document.body.scrollHeight);
	if(clientH>document.body.scrollHeight&&document.body.scrollHeight>obj.offsetHeight)
	{
		clientH = document.body.scrollHeight;
	}

	var centerX = scrollL + (clientW-obj.offsetWidth)/2;
	var centerY = scrollT + (clientH-obj.offsetHeight)/2;
	
	obj.style.top = centerY + "px";
	obj.style.left = centerX + "px";
	
	reContentPos(obj.contentId)
}
//初始化弹出窗口，计算窗口大小
function initPopWin(contentId, titleStr, w, h) {
	var lightBoxObj = document.getElementById("lightBox");
	lightBoxObj.style.display = "block";
	
	var contentObj = document.getElementById(contentId);
	contentObj.style.display = "block";
	var lightBoxHeader = document.getElementById("lightBoxHeader");
	var lightBoxHeaderCenter = document.getElementById("lightBoxHeaderCenter");
	var lightBoxBody = document.getElementById("lightBoxBody");
	var lightBoxBodyLeft = document.getElementById("lightBoxBodyLeft");
	var lightBoxBodyCenter = document.getElementById("lightBoxBodyCenter");
	var lightBoxBodyRight = document.getElementById("lightBoxBodyRight");
	var lightBoxFooter = document.getElementById("lightBoxFooter");
	var lightBoxFooterCenter = document.getElementById("lightBoxFooterCenter");
	var winTitle = document.getElementById("popwinTitle");
	winTitle.innerHTML = titleStr;
	
	//计算窗口大小
	var sideL = 16;		//左边框宽度
	var sideR = 16;		//右边框宽度
	var headerH = 37;	//标题高度
	var footerH = 16;	//底边框高度
	var contentPadding = 10;
	var cw, ch;
	cw = w?w:(contentObj.offsetWidth+sideL+sideR+contentPadding*2);		
	ch = h?h:(contentObj.offsetHeight+headerH+footerH+contentPadding*2);
	lightBoxHeader.style.width = lightBoxFooter.style.width = lightBoxBody.style.width = cw + "px";
	lightBoxHeaderCenter.style.width = lightBoxFooterCenter.style.width = lightBoxBodyCenter.style.width = (cw - sideL - sideR) + "px";
	lightBoxBodyLeft.style.height = lightBoxBodyRight.style.height = lightBoxBody.style.height = lightBoxBodyCenter.style.height = (ch - headerH - footerH) + "px";
}

/*更改个人头像弹出窗口*/
//显示自助服务下拉列表
function chooserFace() {
	var borderW = 16;	//边框宽度
	var borderH = 16; 	//边框高度
	var panelW;			//皮肤选择窗口宽度
	var panelH;			//皮肤选择窗口高度
	var actObj = document.getElementById("userFace");
	var listObj = document.getElementById("cface");
	var actPos = getAbsolutePos(actObj);
	listObj.style.display = "block";
	if(listObj.init)
	{
		listObj.style.left = actPos.x-borderW/4 + "px";
		listObj.style.top = (actPos.y + actObj.offsetHeight) + "px";
		return true;
	}
	var listContainerObj = document.getElementById("cfaceContainer");
	var listBodyObj = document.getElementById("cfaceBody");
	var listTopObj = document.getElementById("cfaceTop");
	var listTopCenterObj = document.getElementById("cfaceTopCenter");
	var listMiddleObj = document.getElementById("cfaceMiddle");
	var listMiddleLeftObj = document.getElementById("cfaceMiddleLeft");
	var listMiddleCenterObj = document.getElementById("cfaceMiddleCenter");
	var listMiddleRightObj = document.getElementById("cfaceMiddleRight");
	var listBottomObj = document.getElementById("cfaceBottom");
	var listBottomCenterObj = document.getElementById("cfaceBottomCenter");
	var cfaceListMaskerObj = document.getElementById("cfaceMasker");
	var cfaceMaskerIfra = document.getElementById("cfaceIfra");
	var cfaceItemObj = document.getElementById("cfaceItem");
	var listItems = cfaceItemObj.getElementsByTagName("img");
	
	panelW = cfaceItemObj.offsetWidth + borderW;
	panelH = cfaceItemObj.offsetHeight + borderH;
	
	listObj.style.width = cfaceListMaskerObj.style.width = listContainerObj.style.width = listBodyObj.style.width = listTopObj.style.width = listMiddleObj.style.width = listBottomObj.style.width = panelW + "px";
	listTopCenterObj.style.width = listMiddleCenterObj.style.width = listBottomCenterObj.style.width = (panelW - borderW) + "px";
	listMiddleLeftObj.style.height = listMiddleCenterObj.style.height = listMiddleRightObj.style.height = cfaceListMaskerObj.style.height = (panelH - borderH) + "px";
	cfaceMaskerIfra.height = panelH;
	cfaceMaskerIfra.width = panelW;
	listObj.style.left = actPos.x-borderW/4 + "px";
	listObj.style.top = (actPos.y + actObj.offsetHeight) + "px";
	
	for(var i=0; i<listItems.length; i++)
	{
		var listItem = listItems[i];
		listItem.onclick = function() {
			listObj.style.display = "none";
			changeFaceView(this.src);
		}
	}
	listObj.onmouseout = function() {
		this.style.display = "none";
	}
	listObj.onmouseover = function() {
		this.style.display = "block";
	}
	listObj.init = true;
}
function changeFaceView(newSrc) {
	var viewFaceImg = document.getElementById("faceImg");
	viewFaceImg.src = newSrc;
}

//判断对象是否存在
function hasObj(contentId){
	if(document.getElementById(contentId)) return true;
	else return false;
}
//获取菜单列表的高度
function getPopListHeight(contentId){
	var listObj = document.getElementById(contentId);
	var listHeight = 0;
	if(listObj.style.display == "none"){
		listObj.style.display = "block";
	}
	listHeight = listObj.offsetHeight;
	listObj.style.display = "none";
	return listHeight;
}
/************选择节目日期弹出下拉窗口showPopSelect************/
//打开弹出窗口
//contentId  窗口内容模块ID
//w          窗口宽度，默认适应内容大小
function initPopSelect(contentId,aimId, w) {
	if(!hasObj("selectPopDiv")){
		var popMenu = document.createElement("div");
		var menuCon = "";
		popMenu.id = "selectPopDiv";
		popMenu.className = "popdiv_common";
		menuCon += "<div>";
		menuCon += "<div class=\"select_popdiv_top\"><div class=\"select_popdiv_tl\"></div><div class=\"select_popdiv_tc\" id=\"selectPopDivTopCenter\"></div><div class=\"select_popdiv_tr\"></div></div>";
		menuCon += "<div class=\"select_popdiv_left\"><div class=\"select_popdiv_right\"><div id=\"selectPopDivInner\" class=\"select_popdiv_center\"></div></div></div>";
		menuCon += "<div class=\"select_popdiv_bottom\"><div class=\"select_popdiv_bl\"></div>";
		menuCon += "<div class=\"select_popdiv_bc\" id=\"selectPopDivBottomCenter\"></div><div class=\"select_popdiv_br\"></div></div></div>";
		popMenu.innerHTML = menuCon;
		
		document.body.appendChild(popMenu);
		//document.body.insertBefore(popMenu,document.body.childNodes[0]); 

	}
	else popMenu = document.getElementById("selectPopDiv");
	var listHeight = getPopListHeight(contentId).toString();
	//alert(listHeight)
	popMenu.style.width = w+10+"px";
	document.getElementById("selectPopDivInner").style.width = w+"px";
	document.getElementById("selectPopDivBottomCenter").style.width = document.getElementById("selectPopDivTopCenter").style.width = w -3+"px";
	document.getElementById("selectPopDivInner").innerHTML = document.getElementById(contentId).innerHTML;
	popMenu.style.display = "block";
	if(document.all){
		if(!hasObj("popSelect_frame")){
			var popSelect_frame = document.createElement("iframe");
			popSelect_frame.id = "popSelect_frame";
			document.body.appendChild(popSelect_frame);
		}
		else  popSelect_frame = document.getElementById("popSelect_frame");
		with(popSelect_frame.style){
			width = w + 4 + "px";
			height = getPopListHeight(contentId) + 9 + "px";
			display = "block";
			border = "none";
			position = "absolute";
			zIndex = "5000";
		}
	}
	var popas = popMenu.getElementsByTagName("li");
	for(var n=0;n<popas.length;n++){
		popas[n].onclick = function() {
			if(typeof(aimId)!="undefined"){
				var aimobj = document.getElementById(aimId);
				var licontent = this.getElementsByTagName("span")[1].innerHTML;
				aimobj.innerHTML = licontent;
			}
			popMenu.style.display = "none";
			if(document.all) popSelect_frame.style.display = "none";
			bShow = false;
		}
	}
}
//弹出节目日期选择下拉框
var bShow = false;
function showPopSelect(actObj,contentId,aimId,w,xdispersion,ydispersion){
	var t;
	bShow = true;
	var actFaObjPos = getAbsolutePos(actObj);
	initPopSelect(contentId,aimId, w);
	var popMenu = document.getElementById("selectPopDiv");
	
	//alert(popMenu.id);
	if(typeof(xdispersion)=="undefined"){
		popMenu.style.left = actFaObjPos.x + "px";
	}
	else {
		popMenu.style.left = actFaObjPos.x - xdispersion + "px";
		//alert(xdispersion)
	}

	if(typeof(ydispersion)=="undefined"){
		popMenu.style.top = actFaObjPos.y + "px";
	}
	else {
		popMenu.style.top = actFaObjPos.y - ydispersion + "px";
		//alert(ydispersion)
	}
	
	if(document.all){
		var popSelect_frame = document.getElementById("popSelect_frame");
		if(typeof(xdispersion)=="undefined"){
			popSelect_frame.style.left = actFaObjPos.x + 3 + "px";
		}
		else {
			popSelect_frame.style.left = actFaObjPos.x - xdispersion+ 3 + "px";
		}
		
		if(typeof(ydispersion)=="undefined"){
			popSelect_frame.style.top = actFaObjPos.y +3 + "px";
		}
		else {
			popSelect_frame.style.top = actFaObjPos.y - ydispersion + 3 + "px";
		}
	}
	clearTimeout(t);
	
	popMenu.hide = function() {
		if(!bShow){
			popMenu.style.display = "none";
			if(document.all) popSelect_frame.style.display = "none";
		}
		bShow = false;
	}
	
	popMenu.onmouseover = function(){
		bShow = true;
		clearTimeout(t);
	}
	popMenu.onmouseout = function() {
		bShow = false;
		t=setTimeout(popMenu.hide,300);
	}
	document.body.onclick = function() {
		t=setTimeout(popMenu.hide,10);
	}
}
//lrc scroll 
function lrcScroll(fid){
	var scrollTime = 0;
	if(hasObj(fid)){
		var fobj = document.getElementById(fid);
	}
	if(fobj.getElementsByTagName("li")[0]){
		var lrclis = fobj.getElementsByTagName("li");
		var heightArr = new Array();
		for(var i=0;i<lrclis.length;i++){
			heightArr.push(lrclis[i].offsetHeight);
		}
	}	
	var j=0;
	scrollTime = setInterval(function(){ lrclis[j].className = "cur_lrc";if(j>0){lrclis[j-1].className = "";} if(j>1){var scrollHeight = heightArr[j]; fobj.scrollTop += scrollHeight;}  if(j<lrclis.length-1) j++; if(lrclis[lrclis.length-1].className == "cur_lrc"){ j = 0; fobj.scrollTop = 0; clearTimeout(scrollTime);}},2000);
}
//lrc box show and hide
function showLrc(actObj, lrcId){
	var lrcObj = document.getElementById(lrcId);
	var lrcBox = lrcObj.getElementsByTagName("div")[0];
	var initHeight = lrcObj.offsetHeight;
	
	if(initHeight > 17){
		lrcObj.style.height = "17px";
		lrcBox.style.display = "none";
		actObj.className = "lrc_arrow_down";
	}
	else {
		lrcObj.style.height = "130px";
		lrcBox.style.display = "block";
		actObj.className = "lrc_arrow_up";
	}
}
//leftmenu expand and fold
var secmenu = new Array();
var menutitle = new Array();
function expandSecMenu(actObj,id){
	var fobj = actObj.parentNode;
	var templis = fobj.getElementsByTagName("li");
	
	if(menutitle == null || menutitle == ""){
		for(var j=0;j<templis.length;j++){
			if(templis[j].getAttribute("flag") == "leftmenuTitle"){
				menutitle.push(templis[j]);
			}
		}
	}
	if(secmenu == null || secmenu == ""){
		for(var i=0;i<templis.length;i++){
			if(templis[i].className == "leftmenu_level"){
				secmenu.push(templis[i]);
			}
		}
	}
	for(var n=0;n<menutitle.length;n++){
		menutitle[n].className = "";
		secmenu[n].style.display = "none";
		var menuicon = menutitle[n].getElementsByTagName("img")[0];
		if(menuicon.src.indexOf("leftmenu_exd")>=0){
			menuicon.src = menuicon.src.replace("leftmenu_exd","leftmenu_fold");
		}
	}
	var icon = actObj.getElementsByTagName("img")[0];
	icon.src = icon.src.replace("leftmenu_fold","leftmenu_exd");
	actObj.className = "leftmenu_actli";
	secmenu[id].style.display = "block";
	var leftmenuOnObj = document.getElementById("leftmenuOn");
	if(leftmenuOnObj.style.display !="none"){
		leftmenuOnObj.style.display = "none";
	}
	var changefirstli = secmenu[id].getElementsByTagName("li")[0];
	switchLeftmenu(0,changefirstli);
}
//change search mode 
function changeSearchMode(flag) {
	if(flag=="advance"){
		document.getElementById("searchAdvanceTable").style.display = "";
		document.getElementById("searchBasicTable").style.display = "none";
	}
	else {
		document.getElementById("searchAdvanceTable").style.display = "none";
		document.getElementById("searchBasicTable").style.display = "";
	}
	
}
//user define column ----- change size
function changeColumnSize(actObj){
	var fobj = actObj.parentNode;
	while(fobj.tagName.toLowerCase() != "div" || fobj.className != "circle_corner_box"){
		fobj = fobj.parentNode;	
	}
	var tempDivs = fobj.getElementsByTagName("div");
	var tempInputs = fobj.getElementsByTagName("input");
	for(var i=0;i<tempDivs.length;i++){
		if(tempDivs[i].getAttribute("flag") == "columnTitle")	{
			var columnTitle = tempDivs[i];
		}
		if(tempDivs[i].getAttribute("flag") == "columnContent")	{
			var columnContent = tempDivs[i];
		}
		if(tempDivs[i].getAttribute("flag") == "columnMore")	{
			var columnbtn = tempDivs[i];
		}
	}
	for(var j=0;j<tempInputs.length;j++){
		if(tempInputs[j].getAttribute("flag") == "columnBtn")	{
			var columnbtn = tempInputs[j];
		}
	}
	
	if(actObj.className == "min_column"){
		columnTitle.className = "normal_title_noborder";
		columnContent.style.display = "none";
		columnbtn.style.display = "none";
		actObj.className = "max_column";
	}
	else {
		columnTitle.className = "normal_title";
		columnContent.style.display = "block";
		columnbtn.style.display = "block";
		actObj.className = "min_column";
	}
}

  // *** Cookies ***
function writeCookie(name, value) { 
	exp = new Date(); 
	//exp.setTime(exp.getTime() + (86400 * 1000 * 30));
	exp.setTime(exp.getTime() + (1200 * 1000)); //20分钟
	document.cookie = name + "=" + escape(value) + "; expires=" + exp.toGMTString() + "; path=/"; 
} 
function readCookie(name,defaultVal) { 
	var search; 
	search = name + "="; 
	offset = document.cookie.indexOf(search); 
	if (offset != -1) { 
		offset += search.length; 
		end = document.cookie.indexOf(";", offset); 
		if (end == -1){
			end = document.cookie.length;
		}
		return unescape(document.cookie.substring(offset, end)); 
	}else{
		return defaultVal;
	}
}
//user define column -- delete column
function deleteColumn(actObj){
	var fobj = actObj.parentNode;
	
	while(fobj.tagName.toLowerCase() != "div" || fobj.className != "circle_corner_box"){
		fobj = fobj.parentNode;	
	}
	fobj.parentNode.removeChild(fobj);
	//fobj.style.display = "none";	
}
//add column and cancel column
function addCancelColumn(actObj,flag){
	var fobj = actObj.parentNode;
	
	while(fobj.tagName.toLowerCase() != "div" || fobj.className != "add_function"){
		fobj = fobj.parentNode;	
	}
	if(flag == "add"){
		fobj.innerHTML = "<div class=\"add_succes\"><img src=\"images/add_success.gif\" width=\"16\" height=\"16\" />Added</div><div class=\"add_cancle\"><a href=\"#none\" onclick=\"addCancelColumn(this,\'cancel\');\">Cancel</a></div><div class=\"nofloat\"></div>";	
	}
	else {
		fobj.innerHTML = "<ul onclick=\"btnAct(0);addCancelColumn(this,\'add\');\" onmouseover=\"btnOver(this);\" onmouseout=\"btnOut(this);\" class=\"btn_div_normal\"><li class=\"btn_left\"></li><li class=\"btn_center\">Add it now</li><li class=\"btn_right\"></li><li class=\"nofloat\"></li></ul>";
	}		
}

//注册左导航事件
function rigesterLeftNav(){
			  $("#leftmenu li").click(function(){
				$("#leftmenu li").removeClass("leftmenuOn");
				$("#leftmenu li a").removeClass("leftmenuOn");
			  	$(this).addClass("leftmenuOn");	
				$(this).find("a").addClass("leftmenuOn");
			}).hover(function(){
				$(this).find(".over").addClass("menuOn");
				$(this).find(".over").fadeIn(800);
											},
								function(){
				$(this).find(".over").fadeOut(200);			
				
									});
		   
		    $("a").focus(function(){
    		if(this.blur){ this.blur();}
			});
	}

//右上角快速链接
$(function(){
 $("#Qlink").hover(function(){
			$(".Qlink_list").toggle();				 
								 },
					   function(){
			$(".Qlink_list").toggle();	
						   });		   
		   
});
