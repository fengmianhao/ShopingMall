
<!--这些是新增图表的Js-->

  function rigsterChartNormalFun(){
   $(".dragable").sortable({
			connectWith: '.dragable'
		});
  $(".dragable").disableSelection();
  
/*function killErrors() 
{
return true;
}
window.onerror = killErrors;*/

			
			//里边列的function	 start 
			$('.column_icon').find('a:eq(0)').click(function(){
			  $(this).parent().parent().next().toggle();
 			   if($(this).hasClass('smallBig')){
				 $(this).removeClass('smallBig');
				 $(this).addClass('maxIcon');
				   return;
			   }else{
				 $(this).removeClass('maxIcon');
				 $(this).addClass('smallBig');
				return;
			   }
			})	  
			 
			 $('.closeRe').click(function(){
			  $(this).parent().parent().next().parent().remove();
			 })
				//里边列的function end	 
				 
			$('.theMenu li a').click(function(){
			if($(this).hasClass('cur_item')) return;	
			 $('.theMenu li a').removeClass('cur_item');
			 $(this).addClass('cur_item');
			 
			 $('.targetContent').hide();
			 $('#'+this.name).show();
			})	
			
			$('a').focus(function(){
			$(this).blur();
			})	 
			
			$('.menuBtn,.omenuBtn').hover(function(){
												  
				$(this).find('.mainBtnCloseIcon').show();							   
 												   },
												   
										 function(){
											
				$(this).find('.mainBtnCloseIcon').hide();					 
											     })
		
		$('.mainBtnCloseIcon').click(function(){
			  $(this).parent().parent().remove();								  
												  
												   })
 
  }
<!--这些是新增图表的Js-->


//portal树
function portalTree(){
 	 var cookie=readCookie('ChannelName','');
                if(cookie!=''){
                $("#jsTreeContainer ul").remove(); 
 						$("#jsTreeContainer").tree({
						  data  : {
							type  : "json",
							json  : [ 
								{ attributes: { id : "pjson2_1" }, data: "Portal", state: "open", children : [
 									{ attributes: { id: "pjson2_11"},data: "Music" , state: "open"},
									
									{ attributes: { id: "pjson2_15"},data: "Video", state: "open"},
									{ attributes: { id: "pjson2_18"},data: "Ereading", state: "open"},
									{ attributes: { id: "pjson2_22"},data: "Apps", state: "open"},
									{ attributes: { id: "pjson2_19"},data: "Game", state: "open"},
									{ attributes: { id: "pjson2_144"},data: cookie, state: "open"}
 							  ]}
							]
						  },
						  ui : {
							  theme_name : "classic"
						  },
						  cookies : { prefix : "tree1", opts : { path : '/' } } ,
						  callback : {
						  	onload : checkComplete
						  }
						});

                }

}
	  
	  
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

/****************** 顶部菜单Status *************************/
function topmenuOver(id) {
	var topmenuContainer = document.getElementById("topmenuContainer");
	var menuObj = document.getElementById("topmenuItem" + id);
	var menuOverObj = document.getElementById("topmenuOver");
	var menuOnObj = document.getElementById("topmenuOn");
	var menuPos = getAbsolutePos(menuObj);
	var menuContainerPos = getAbsolutePos(topmenuContainer);
	menuOverObj.style.display = "block";
	menuOverObj.style.width = menuObj.offsetWidth + "px";
	menuOverObj.style.left = (menuPos.x - menuContainerPos.x) + "px";
	if("block"==menuOnObj.style.display&&menuOnObj.style.left==menuOverObj.style.left)
	{
		menuOverObj.style.display = "none";;
	}
}
function topmenuOut() {
	var menuOverObj = document.getElementById("topmenuOver");
	menuOverObj.style.display = "none";
}
function topmenuOn(id) {
	var topmenuContainer = document.getElementById("topmenuContainer");
	var menuObj = document.getElementById("topmenuItem" + id);
	var menuOverObj = document.getElementById("topmenuOver");
	var menuOnObj = document.getElementById("topmenuOn");
	var menuPos = getAbsolutePos(menuObj);
	var menuContainerPos = getAbsolutePos(topmenuContainer);
	menuOverObj.style.display = "none";
	menuOnObj.style.display = "block";
	menuOnObj.style.width = menuObj.offsetWidth + "px";
	menuOnObj.style.left = (menuPos.x - menuContainerPos.x) + "px";
}

/****************** 按钮动作 *************************/
function btnAct(id) {
	
}
function btnOver(ulObj) {
	var liObjs = ulObj.getElementsByTagName("li");
	liObjs[0].className = "btn_left_over";
	liObjs[1].className = "btn_center_over";
	liObjs[2].className = "btn_right_over";
}
function btnOut(ulObj) {
	var liObjs = ulObj.getElementsByTagName("li");
	liObjs[0].className = "btn_left_normal";
	liObjs[1].className = "btn_center_normal";
	liObjs[2].className = "btn_right_normal";
}

/***************** 左侧菜单动作 ************************/
function showhideLeftColumn(act) {
	var leftColumnObj = document.getElementById("leftColumn");
	var rightColumnObj = document.getElementById("rightColumn");
	var leftColumnInnerObj = document.getElementById("leftColumnInner");
	var rightColumnInnerObj = document.getElementById("rightColumnInner");
	var leftFooterObj = document.getElementById("leftFooter");
	var leftShowBar = document.getElementById("leftBarShow");
	var leftHideBar = document.getElementById("leftBarhide");
	var leftMenuObj = document.getElementById("leftMenu");
	if("show"==act)
	{
		leftShowBar.style.display = "block";
		leftHideBar.style.display = "none";
		leftColumnObj.style.display = "block";
		rightColumnObj.style.margin = "0px 0px 0px -235px";
		rightColumnInnerObj.style.margin = "0px 0px 0px 235px";
		//leftColumnObj.style.height = rightColumnObj.offsetHeight + "px";
	}
	else
	{
		leftHideBar.style.display = "block";
		leftHideBar.style.height = rightColumnObj.offsetHeight + "px";
		leftShowBar.style.display = "none";
		leftHideBar.style.display = "block";
		leftColumnObj.style.display = "none";
		rightColumnObj.style.margin = "0px 0px 0px -20px";
		rightColumnInnerObj.style.margin = "0px 0px 0px 20px";
	}
}
function leftmenuOver(menuObj,flag) {
	if(typeof(flag) != "undefined"){
		if("leftmenu_sub_item_on"!=menuObj.className)
		{
			menuObj.className = "leftmenu_sub_item_over";
		}
	}
	else {
		if("leftmenu_list_item_on"!=menuObj.className)
		{
			menuObj.className = "leftmenu_list_item_over";
		}
	}
}
function leftmenuOut(menuObj,flag) {
	if(typeof(flag) != "undefined"){
		if("leftmenu_sub_item_on"!=menuObj.className)
		{
			menuObj.className = "";
		}
	}
	else {
		if("leftmenu_list_item_on"!=menuObj.className)
		{
			menuObj.className = "leftmenu_list_item";
		}
	}
}
function leftmenuAct(toURL) {
	location.href = toURL;
}

/**************表单行Status****************/
function selectRow(id, actObj) {
	//clearSelectRow(totalNum, actObj);
	if(actObj)
	{
		formItemFocus(actObj);
	}
	var theRow = document.getElementById("flistTr"+id);
	var theCells = theRow.getElementsByTagName("td");
	for(var i=0; i<theCells.length; i++)
	{
		var cellClass = theCells[i].className;
		if(cellClass.indexOf("flist_name") >=0 && cellClass.indexOf("_focus") <0 )
		{
			
			theCells[i].className = cellClass.replace("flist_name","flist_name_focus");
		}
		if(cellClass.indexOf("flist_content")>=0 && cellClass.indexOf("_focus") <0 )
		{
			
			theCells[i].className = cellClass.replace("flist_content","flist_content_focus");
		}
		if(cellClass.indexOf("flist_required")>=0 && cellClass.indexOf("_focus") <0)
		{
			
			theCells[i].className = cellClass.replace("flist_required","flist_required_focus");
		}
	}
}
function clearSelectRow(id,actObj) {
	if(actObj)
	{
		formItemBlur(actObj);
	}
	var theRow = document.getElementById("flistTr"+id);
	var theCells = theRow.getElementsByTagName("td");
	for(var i=0; i<theCells.length; i++)
	{
		var cellClass = theCells[i].className;
		if(cellClass.indexOf("flist_name_focus")>=0)
		{
			
			theCells[i].className = cellClass.replace("flist_name_focus","flist_name");
		}
		if(cellClass.indexOf("flist_content_focus")>=0)
		{
			
			theCells[i].className = cellClass.replace("flist_content_focus","flist_content");
		}
		if(cellClass.indexOf("flist_required_focus")>=0)
		{
			
			theCells[i].className = cellClass.replace("flist_required_focus","flist_required");
		}
	}
	/*for(var m=1; m<=totalNum; m++)
	{
		var toRow = document.getElementById("flistTr"+m);
		var toCells = toRow.getElementsByTagName("td");
		for(var n=0; n<toCells.length; n++)
		{
			if("flist_name_focus"==toCells[n].className)
			{
				toCells[n].className = "flist_name";
			}
			if("flist_content_focus"==toCells[n].className)
			{
				toCells[n].className = "flist_content";
			}
			if("flist_required_focus"==toCells[n].className)
			{
				toCells[n].className = "flist_required";
			}
		}
	}*/
}
function formItemFocus(actObj) {
	if(actObj)
	{
		if("input_text"==actObj.className)
		{
			actObj.className = "input_text_focus";
		}
		if("txtarea"==actObj.className)
		{
			actObj.className = "txtarea_focus";
		}
	}
}
function formItemBlur(actObj) {
	if(actObj)
	{
		if("input_text_focus"==actObj.className)
		{
			actObj.className = "input_text";
		}
		if("txtarea_focus"==actObj.className)
		{
			actObj.className = "txtarea";
		}
	}
}

/**********首页菜单详细Content切换***************/
function showDetails(id, total) {
	for(var i=1; i<=total; i++)
	{
		var actObj = document.getElementById("contentMenuItem"+i);
		var detailObj = document.getElementById("detail"+i);
		actObj.className = "listitem_lnk_right_off";
		detailObj.style.display = "none";
	}
	
	var theActObj = document.getElementById("contentMenuItem"+id);
	var theDetailObj = document.getElementById("detail"+id);
	theActObj.className = "listitem_lnk_right_on";
	theDetailObj.style.display = "block";
}

/**********显示/隐藏高级搜索Content**************/
function showHideAdvSearch() {
	var searchModule = document.getElementById("searchModule");
	var advContent = document.getElementById("advSearch");
	
	if("none"==advContent.style.display)
	{
		advContent.style.display = "";
		searchModule.className = "div_border";
	}
	else
	{
		advContent.style.display = "none";
		searchModule.className = "";
		
	}
}

/*************数据列表行Status****************/
function listTrOver(trObj) {
	if("dlist_tr_on"!=trObj.className)
	{
		trObj.className = "dlist_tr_over";
	}
}
function listTrOut(trObj) {
	if("dlist_tr_on"!=trObj.className)
	{
		trObj.className = "dlist_tr_normal";
	}
}
function listTrOn(cboxObj) {
	var trObj = cboxObj.parentNode.parentNode;
	
	if(cboxObj.checked)
	{
		trObj.className = "dlist_tr_on";
	}
	else
	{
		trObj.className = "dlist_tr_over";
	}
}
function listTrChange(tableId, act) {
	var listTable = document.getElementById(tableId);
	var trObjs = listTable.getElementsByTagName("tr");
	var classStr = "";
	if(act)
	{
		classStr = "dlist_tr_on";
	}
	else
	{
		classStr = "dlist_tr_normal";
	}
	for(var i=1; i<trObjs.length; i++)
	{
		trObjs[i].className = classStr;
	}
}
/*************选中/取消所有复选框****************/
//全选
//tableId  列表的Table元素ID
//inpObj   全选复选框对象
function selectAll(tableId, inpObj) {
	var listTable = document.getElementById(tableId);
	var cboxObjs = listTable.getElementsByTagName("input");
	for(var i=0; i<cboxObjs.length; i++)
	{
		if(inpObj!=cboxObjs[i]&&"checkbox"==cboxObjs[i].type.toLowerCase())
		{
			if(inpObj.checked)
			{
				cboxObjs[i].checked = true;
			}
			else
			{
				cboxObjs[i].checked = false;
			}
		}
	}
}
//单击列表中某个复选框，判断是否全部选中
//tableId   列表的Table元素ID
//allCBoxId 全选复选框ID
function checkSelectAll(tableId, allCBoxId) {
	var allCBox = document.getElementById(allCBoxId);
	var listTable = document.getElementById(tableId);
	var cboxObjs = listTable.getElementsByTagName("input");
	var isSelectAll = true;
	for(var i=0; i<cboxObjs.length; i++)
	{
		if(allCBox!=cboxObjs[i]&&"checkbox"==cboxObjs[i].type.toLowerCase())
		{
			if(!cboxObjs[i].checked)
			{
				isSelectAll = false;
			}
		}
	}
	if(isSelectAll)
	{
		allCBox.checked = true;
	}
	else
	{
		allCBox.checked = false;
	}
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
/************切换 tree tab 页 2009-08-06 chengjuan add************/
function changeTreeTab(self, fid, cfid)
{
	var tab_fobj = document.getElementById(fid);
	var c_divs = document.getElementById(cfid).getElementsByTagName("div");
	var tabs = tab_fobj.getElementsByTagName("ul");
	var cobjs = new Array();
	for(var i=0;i<c_divs.length;i++){
		if(c_divs[i].id != null && c_divs[i].id.indexOf("treeContent_")>=0){
			cobjs.push(c_divs[i]);
		}
	}
	for(var j=0;j<tabs.length;j++){
		tabs[j].className = "tab_tree_normal";
		cobjs[j].style.display = "none";
	}
	self.className = "tab_tree_on";
	var selfid = self.id;
	var num = selfid.split("_")[1];
	document.getElementById("treeContent_"+num).style.display = "block";	
}

/************弹出窗口LightBox************/
//打开弹出窗口
//lightBoxOn(contentId, titleStr, w, h)
//contentId  窗口Content模块ID
//titleStr   窗口标题文字
//w          窗口宽度，默认适应Content大小
//h          窗口高度，默认适应Content大小
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
//重定位窗口Content位置
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
	var lightBoxBodyLeftImg = lightBoxBodyLeft.getElementsByTagName("img").item(0);
	var lightBoxBodyRightImg = lightBoxBodyRight.getElementsByTagName("img").item(0);
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
	lightBoxBodyLeftImg.style.height = lightBoxBodyRightImg.style.height = (ch - headerH - footerH) + "px";
}

//侦听页面高度是否改变
function listenResize() {
	var LTRE = this;
	var mainContainerObj = document.getElementById("mainContainer");
	var rightColumnContentObj = document.getElementById("rightColumnContent");
	var leftContainerObj = document.getElementById("leftColumn");
	var leftInnerObj = document.getElementById("leftColumnInner");
	var treeContainerObj = document.getElementById("treeColumnInner");
	var leftBarObj = document.getElementById("leftBarhide");
	
	
	this.lastBodyH = rightColumnContentObj.offsetHeight;
	
	window.onload = function() {LTRE.init();}
	
	if(document.all)
	{
		rightColumnContentObj.onresize = function() { LTRE.resize(); }
	}
	else
	{
		setInterval("Listen.resize()", 10);
	}
	
	this.init = function() {
		LTRE.blockContainer();
		if(leftInnerObj)
		{
			leftInnerObj.style.height = (rightColumnContentObj.offsetHeight - 11) + "px";
		}
		if(treeContainerObj)
		{
			treeContainerObj.style.height = (rightColumnContentObj.offsetHeight + 0) + "px";
		}
		if(leftBarObj)
		{
			leftBarObj.style.height = (rightColumnContentObj.offsetHeight + 0) + "px";
		}
		LTRE.noneContainer();
	}
	
	this.resize = function() {
		LTRE.blockContainer();
		
		var newBodyH = rightColumnContentObj.offsetHeight;
		resizeH = newBodyH - LTRE.lastBodyH;
		if(leftInnerObj)
		{
			leftInnerObj.style.height = (leftInnerObj.offsetHeight + resizeH) + "px";
		}
		if(treeContainerObj)
		{
			treeContainerObj.style.height = (treeContainerObj.offsetHeight + resizeH) + "px";
		}
		if(leftBarObj)
		{
			leftBarObj.style.height = (leftBarObj.offsetHeight + resizeH) + "px";
		}
		LTRE.lastBodyH = newBodyH;
		
		LTRE.noneContainer();
	}
	
	this.blockContainer = function() {
		if(leftBarObj)
		{
			leftBarObj.isOpen = false;
		}
		if(leftContainerObj)
		{
			leftContainerObj.isOpen = false;
		}
		if("none"==leftBarObj.style.display)
		{
			leftBarObj.style.display = "block";
			leftBarObj.isOpen = true;
		}
		if("none"==leftContainerObj.style.display)
		{
			leftContainerObj.style.display = "block";
			leftContainerObj.isOpen = true;
		}
	}
	
	this.noneContainer = function() {
		if(leftBarObj.isOpen)
		{
			leftBarObj.style.display = "none";
			leftBarObj.isOpen = false;
		}
		if(leftContainerObj.isOpen)
		{
			leftContainerObj.style.display = "none";
			leftContainerObj.isOpen = false;
		}
	}
	
}
/************弹出窗口showPopMenu************/
//打开弹出窗口
//contentId  窗口Content模块ID
//w          窗口宽度，默认适应Content大小
function initPopMenu(contentId, w, notS) {
	if(!hasObj("popMenu")){
		var popMenu = document.createElement("div");
		var menuCon = "";
		popMenu.id = "popMenu";
		menuCon += "<div>";
		menuCon += "<div id=\"popMenu_top\"><div id=\"popMenu_Top_Left\"></div><div id=\"popMenu_Top_Center\"></div><div id=\"popMenu_Top_Right\"></div></div>";
		menuCon += "<div id=\"popMenu_center\"><div id=\"popMenu_Center_Left\"></div><div id=\"popMenu_Center_Content\"></div><div id=\"popMenu_Center_Right\"></div></div>";
		menuCon += "<div id=\"popMenu_bottom\"><div id=\"popMenu_Bottom_Left\"></div><div id=\"popMenu_Bottom_Center\"></div><div id=\"popMenu_Bottom_Right\"></div></div>";
		menuCon +="</div>";
		popMenu.innerHTML = menuCon;
		
		document.body.appendChild(popMenu);
		//document.body.insertBefore(popMenu,document.body.childNodes[0]); 

	}
	else popMenu = document.getElementById("popMenu");
	var listHeight = getPopListHeight(contentId).toString();
	//alert(listHeight)
	popMenu.style.width = w+18+"px";
	document.getElementById("popMenu_Center_Content").style.width = w+"px";
	document.getElementById("popMenu_Top_Center").style.width = document.getElementById("popMenu_Bottom_Center").style.width = w-18+"px";
	document.getElementById("popMenu_Center_Left").style.height = document.getElementById("popMenu_Center_Right").style.height = listHeight+"px";
	document.getElementById("popMenu_Center_Content").innerHTML = document.getElementById(contentId).innerHTML;
	popMenu.style.display = "block";
	if(document.all){
		if(!hasObj("popMenu_frame")){
			var popMenu_frame = document.createElement("iframe");
			popMenu_frame.id = "popMenu_frame";
			document.body.appendChild(popMenu_frame);
		}
		else  popMenu_frame = document.getElementById("popMenu_frame");
		with(popMenu_frame.style){
			width = w + 16 + "px";
			height = getPopListHeight(contentId) + 25 + "px";
			display = "block";
			border = "none";
		}
	}
	if(typeof(notS)!="undefined"){
		if(notS){
			document.getElementById(contentId+"_bottomShow").style.display = "none";	
		}
	}
	var popas = popMenu.getElementsByTagName("li");
	for(var n=0;n<popas.length;n++){
		popas[n].onclick = function() {
			popMenu.style.display = "none";
			if(document.all) popMenu_frame.style.display = "none";
			bShow = false;
		}
	}
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
//获取触发对象的坐标
function getAbsolutePos(el) {
	var r = { x: el.offsetLeft, y: el.offsetTop };
	if (el.offsetParent) {
		var tmp = getAbsolutePos(el.offsetParent);
		r.x += tmp.x;
		r.y += tmp.y;
	}
	return r;
}
//弹出收缩菜单
var bShow = false;
function showPopMenu(actObj,contentId,w,xdispersion,ydispersion,onchange,outchange){
	var t;
	bShow = true;
	var actFaObjPos = getAbsolutePos(actObj);
	initPopMenu(contentId, w);
	var popMenu = document.getElementById("popMenu");
	
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
	if(typeof(onchange)!="undefined"){
		if(onchange.indexOf("listItems")>=0){
			listItemson(actObj);
			actObj.parentNode.style.backgroundColor = "dbe4e2";
		}
	}
	
	if(document.all){
		var popMenu_frame = document.getElementById("popMenu_frame");
		if(typeof(xdispersion)=="undefined"){
			popMenu_frame.style.left = actFaObjPos.x + "px";
		}
		else {
			popMenu_frame.style.left = actFaObjPos.x - xdispersion + 6 + "px";
		}
		
		if(typeof(ydispersion)=="undefined"){
			popMenu_frame.style.top = actFaObjPos.y + "px";
		}
		else {
			popMenu_frame.style.top = actFaObjPos.y - ydispersion + 20 + "px";
		}
	}
	clearTimeout(t);
	
	popMenu.hide = function() {
		if(!bShow){
			popMenu.style.display = "none";
			if(document.all) popMenu_frame.style.display = "none";
			if(typeof(outchange)!="undefined"){
				if(outchange.indexOf("listItems")>=0){
					listItemsout(actObj);
					actObj.parentNode.style.backgroundColor = "f3f2f2";
				}
			}
		}
		bShow = false;
	}
	popMenu.onmouseover = function(){
		bShow = true;
		clearTimeout(t);
	}
	actObj.onmouseout=popMenu.onmouseout = function() {
		bShow = false;
		t=setTimeout(popMenu.hide,300);
	}
	document.body.onclick = function() {
		t=setTimeout(popMenu.hide,10);
	}
}
//判断对象是否存在
function hasObj(contentId){
	if(document.getElementById(contentId)) return true;
	else return false;
}
/************弹出窗口showPopTree************/
//打开弹出窗口
//contentId  窗口Content模块ID

function showPopTree(actObj,contentId){
	var t;
	var actFaObjPos = getAbsolutePos(actObj);
	var popTree = document.getElementById("popTree");
	
	//alert(popMenu.id);
	popTree.style.left = actFaObjPos.x - 3 + "px";
	popTree.style.top = actFaObjPos.y + 18+ "px";
	popTree.style.display = "block";
	
	if(document.all){
		if(!hasObj("popTree_frame")){
			var popTree_frame = document.createElement("iframe");
			popTree_frame.id = "popTree_frame";
			document.body.appendChild(popTree_frame);
		}
		else  popTree_frame = document.getElementById("popTree_frame");
		with(popTree_frame.style){
			width = popTree.offsetWidth - 4 + "px";
			height = popTree.offsetHeight + "px";
			display = "block";
			border = "none";
			left = actFaObjPos.x + "px";
			top = actFaObjPos.y+ 14 + "px";
		}
	}
	clearTimeout(t);
	
	popTree.hide = function() {
		popTree.style.display = "none";
		if(document.all) popTree_frame.style.display = "none";
	}
	popTree.onmouseover = function(){
		clearTimeout(t);
	}
	popTree.onmouseout  = actObj.onmouseout = function() {
		t=setTimeout(popTree.hide,300);
	}
}

//更换模版弹出窗口中的鼠标经过效果
function selectTemplate(fid){
	var lis = document.getElementById(fid).getElementsByTagName("li");
	for(var j=0;j<lis.length;j++){
		lis[j].onclick = function(){
			for(var n=0;n<lis.length;n++){
				lis[n].getElementsByTagName("a")[0].className = "";
			}
			this.getElementsByTagName("a")[0].className = "seleted_Template";
		}
	}
}

//Setting Common Menu弹出窗口中的鼠标经过效果
function selectMenu(fid){
	if(document.getElementById(fid).getElementsByTagName("li")[0]){
		var lis = document.getElementById(fid).getElementsByTagName("li");
		var items = new Array();
		for(var i=0;i<lis.length;i++){
			if(lis[i].className == "setmenu_list_item"){
				items.push(lis[i].getElementsByTagName("a")[0]);	
			}
		}
		if(items[0] != "undefined" || items[0] != null){
			for(var j=0;j<items.length;j++){
				items[j].onclick = function(){
					if(this.className == "selected_Item"){
						this.className = "";
					}
					else{
						this.className = "selected_Item";
					}
					
				}
			}
		}
	}
}

//Setting Common Menu弹出窗口选择菜单项动作
function selectMenuItems(leftMenuId,rightMenuId){
	var as = document.getElementById(leftMenuId).getElementsByTagName("a");
	var selectedItems = new Array();
	var selectedLinks = new Array();
	for(var i=0;i<as.length;i++){
		if(as[i].className == "selected_Item"){
			as[i].title = as[i].innerHTML;
			var newInner = as[i].parentNode.innerHTML.replace(/class="selected_Item"/g,"");
			if(document.all){
				var newInner = as[i].parentNode.innerHTML.replace(/class=selected_Item/g,"");
			}
			selectedItems.push(newInner);
			selectedLinks.push(as[i]);
		}
	}
	//alert(selectedLinks[0].id)
	if(selectedItems.length != 0){
		for(var j=0;j<selectedItems.length;j++){
			var rightLinks = document.getElementById(rightMenuId).getElementsByTagName("a");
			var notCreate = false;
			for(var n=0;n<rightLinks.length;n++){
				if(rightLinks[n].title ==selectedLinks[j].title){
					notCreate = true;	
				}
			}
			if(!notCreate){
				var selectedLi = document.createElement("li");
				selectedLi.className = "setmenu_list_item";
				selectedLi.innerHTML = selectedItems[j];
				document.getElementById(rightMenuId).appendChild(selectedLi);
				//alert(selectedLi.innerHTML)
			}
			selectedLinks[j].className = "";
			selectMenu(rightMenuId);
		}
	}
}
//Setting Common Menu弹出窗口去除菜单项动作
function removeMenuItems(rightMenuId){
	var as = document.getElementById(rightMenuId).getElementsByTagName("a");
	var removeItems = new Array();
	for(var i=0;i<as.length;i++){
		if(as[i].className == "selected_Item"){
			removeItems.push(as[i].parentNode);
		}
	}
	if(removeItems.length > 0){
		for(var j=0;j<removeItems.length;j++){
			document.getElementById(rightMenuId).removeChild(removeItems[j]);
		}
	}
}
//单选框鼠标经过、选择后效果
function listTrOnRadio(radioObj,fid) {
	var trs = document.getElementById(fid).getElementsByTagName("tr");
	var trObj = radioObj.parentNode.parentNode;
	var changeTrs = new Array();
	for(var i=0;i<trs.length;i++){
		if(trs[i].className == "dlist_tr_on" || trs[i].className == "dlist_tr_over" || trs[i].className == "dlist_tr_normal" ){
			changeTrs.push(trs[i]);
		}
	}
	
	if(radioObj.checked)
	{
		for(var j=0;j<changeTrs.length;j++){
			changeTrs[j].className = "dlist_tr_normal";
		}
		trObj.className = "dlist_tr_on";
	}
}

//首页左侧菜单点击交互效果
function listItemson(obj){
	obj.className = "lnk_selected";
}
function listItemsout(obj){
	obj.className = "lnk_normal";
}
function listItems(fid,obj){
	var templnk = document.getElementById(fid).getElementsByTagName("li");
	var lnk = new Array();
	for(var i=0;i<templnk.length;i++){
		if(templnk[i].className == "list_item"){
			lnk.push(templnk[i].getElementsByTagName("a")[0]);
		}
	}
	for(var j=0;j<lnk.length;j++){
		lnk[j].className = "lnk_normal";
		if(document.all){
			lnk[j].parentNode.style.backgroundColor = "#f3f2f2";	
		}
	}
	obj.className = "lnk_selected";
	if(document.all){
		obj.parentNode.style.backgroundColor = "#dbe4e2";	
	}
}
function showHideMenu(hideID,fID,obj){
	initPopMenu(fID, 150, true);
	if(document.getElementById(fID+"_"+hideID).style.display == 'none'){
		document.getElementById(fID+"_"+hideID).style.display = 'block';
	}
	initPopMenu(fID, 150, true);
}

/************弹出主导航二级菜单窗口showNavPopMenu************/
//打开弹出窗口
//contentId  窗口Content模块ID
//w          窗口宽度，默认适应Content大小

function initNavPopMenu(actObj,contentId, w) {
	if(!hasObj("popNavMenu")){
		var popNavMenu = document.createElement("div");
		var menuCon = "";
		popNavMenu.id = "popNavMenu";
		menuCon += "<div class=\"nav_pop\">";		
		menuCon += "<div class=\"nav_lnk\" id=\"navLinkList\"><div class=\"nav_lnk_left\"></div><div class=\"nav_lnk_right\"></div><div class=\"nav_lnk_center\"><span id=\"navLink\"></span></div></div>";		
		menuCon += "<div style=\"clear: both; z-index: 1000;\" id=\"navItems\">";
		menuCon += "<div style=\"height:6px; overflow:hidden\"><table width=\"100%\" height=\"6\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\"><tr><td width=\"3\" height=\"6\" valign=\"top\"><img src=\"images/nav_top_left.gif\" width=\"3\" height=\"6\" align=\"top\" /></td><td width=\"100%\"><div class=\"nav_top_center\"></div></td><td width=\"6\" height=\"6\" valign=\"top\"><img src=\"images/nav_top_right.png\" width=\"6\" height=\"6\" align=\"top\" /></td></tr></table></div>";
		menuCon += "<div class=\"nav_middle_left\"><div class=\"nav_middle_right\"><div class=\"nav_middle_box\" id=\"navSecLever\"></div></div></div>";
		menuCon += "<div style=\"height: 7px; overflow: hidden\"><table width=\"100%\" height=\"7\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\"><tr><td width=\"3\" height=\"7\" valign=\"top\"><img src=\"images/nav_bottom_left.png\" width=\"3\" height=\"7\" align=\"top\" /></td><td width=\"100%\"><div class=\"nav_bottom_center\"></div></td><td width=\"6\" height=\"7\" valign=\"top\"><img src=\"images/nav_bottom_right.png\" width=\"6\" height=\"7\" align=\"top\" /></td></tr></table></div>";
		menuCon +="</div></div>";
		
		popNavMenu.innerHTML = menuCon;
		
		document.body.appendChild(popNavMenu);
		//document.body.insertBefore(popMenu,document.body.childNodes[0]); 

	}
	else popNavMenu = document.getElementById("popNavMenu");

	popNavMenu.style.width = w+18+"px";
	document.getElementById("navLink").innerHTML = actObj.innerHTML;
	document.getElementById("navSecLever").innerHTML = document.getElementById(contentId).innerHTML;
	popNavMenu.style.display = "block";
	if(document.all){
		if(!hasObj("popNavMenu_frame")){
			var popNavMenu_frame = document.createElement("iframe");
			popNavMenu_frame.id = "popNavMenu_frame";
			document.body.appendChild(popNavMenu_frame);
		}
		else  popNavMenu_frame = document.getElementById("popNavMenu_frame");
		with(popNavMenu_frame.style){
			width = w + 5 + "px";
			height = getPopListHeight(contentId) + 10+ "px";
			display = "block";
			border = "none";
		}
	}
	var popas = popNavMenu.getElementsByTagName("li");
	for(var n=0;n<popas.length;n++){
		popas[n].onclick = function() {
			popNavMenu.style.display = "none";
			if(document.all) popNavMenu_frame.style.display = "none";
		}
	}
}

//弹出收缩菜单
var beNavShow = false;
function showNavPopMenu(actObj,contentId,w,xdispersion,ydispersion){
	var t;
	var actFaObjPos = getAbsolutePos(actObj);
	initNavPopMenu(actObj,contentId, w);
	var popNavMenu = document.getElementById("popNavMenu");
	beNavShow = true;
	
	//alert(popMenu.id);
	if(typeof(xdispersion)=="undefined"){
		popNavMenu.style.left = actFaObjPos.x + "px";
	}
	else {
		popNavMenu.style.left = actFaObjPos.x - xdispersion - 15 + "px";
		//alert(xdispersion)
	}

	if(typeof(ydispersion)=="undefined"){
		popNavMenu.style.top = actFaObjPos.y + "px";
	}
	else {
		popNavMenu.style.top = actFaObjPos.y - ydispersion - 56 + "px";
		//alert(ydispersion)
	}
	
	if(document.all){
		var popNavMenu_frame = document.getElementById("popNavMenu_frame");
		if(typeof(xdispersion)=="undefined"){
			popNavMenu_frame.style.left = actFaObjPos.x + "px";
		}
		else
			popNavMenu_frame.style.left = actFaObjPos.x - xdispersion - 4 + "px";
			
		if(typeof(ydispersion)=="undefined"){
			popNavMenu_frame.style.top = actFaObjPos.y + "px";
		}
		else
			popNavMenu_frame.style.top = actFaObjPos.y - ydispersion -4  + "px";
	}
	clearTimeout(t);
	
	popNavMenu.hide = function() {
		if(!beNavShow){
			popNavMenu.style.display = "none";
			if(document.all) popNavMenu_frame.style.display = "none";
		}
		beNavShow = false;
	}
	document.getElementById("navLinkList").onmouseover = document.getElementById("navItems").onmouseover = function(){
		//clearTimeout(t);
		beNavShow = true;
	}
	document.body.onmouseover = function() {
		popNavMenu.hide();
	}
	var popas = popNavMenu.getElementsByTagName("li");
	for(var n=0;n<popas.length;n++){
		popas[n].getElementsByTagName("a")[0].style.width = w - 25 +"px";
		popas[n].onclick = function() {
			popNavMenu.style.display = "none";
			if(document.all) popNavMenu_frame.style.display = "none";
		}
	}
}

//设置左侧菜单高度，小于右侧Content高度时保持和右侧一致，大于右侧时自由拉伸----针对两个树的情况
function setLeftHeight(){
	var isIE7 = false;
	var isIE = false;
	var firefox = false;
	var Sys = {};
	var ua = navigator.userAgent.toLowerCase();
	var s;
	(s = ua.match(/msie ([\d.]+)/)) ? Sys.ie = s[1] :
	(s = ua.match(/firefox\/([\d.]+)/)) ? Sys.firefox = s[1] : 0;
	
	//以下进行参数的赋值
	if(Sys.ie) {
		isIE = true;
		if(Sys.ie == 7){
			isIE7 = true;
		}
	}
	if(Sys.firefox) firefox = true;
	
	var difference = 0;
	if(firefox) difference = -4;
	if(isIE7) difference = 2;
	
	document.getElementById("treeContentBox_bg").style.height="auto";
	var trueHeight = document.getElementById("treeContentBox_bg").scrollHeight;

	//alert(trueHeight+"///"+  (document.getElementById("rightColumn").offsetHeight -51 - difference))
	if(trueHeight <= document.getElementById("rightColumn").offsetHeight -51 - difference) {
		document.getElementById("treeContentBox_bg").style.height= document.getElementById("rightColumn").offsetHeight -51 +"px";
	}
	else {
		document.getElementById("treeContentBox_bg").style.height= "auto";
	}
	if(document.getElementById("leftBarHide")){
		document.getElementById("leftBarHide").style.height= document.getElementById("rightColumn").offsetHeight +"px";
	}
}
//设置左侧菜单高度，小于右侧Content高度时保持和右侧一致，大于右侧时自由拉伸----针对一个树的情况
function setLeftHeightAlone(){
	var isIE7 = false;
	var isIE = false;
	var firefox = false;
	var Sys = {};
	var ua = navigator.userAgent.toLowerCase();
	var s;
	(s = ua.match(/msie ([\d.]+)/)) ? Sys.ie = s[1] :
	(s = ua.match(/firefox\/([\d.]+)/)) ? Sys.firefox = s[1] : 0;
	
	//以下进行参数的赋值
	if(Sys.ie) {
		isIE = true;
		if(Sys.ie == 7){
			isIE7 = true;
		}
	}
	if(Sys.firefox) firefox = true;
	
	var difference = 0;
	if(firefox) difference = -4;
	if(isIE7) difference = 2;
	
	document.getElementById("treeContentBox_bg").style.height="auto";
	if(document.getElementById("leftColumnInner")){
		document.getElementById("leftColumnInner").style.height = "auto";	
	}
	var trueHeight = document.getElementById("treeContentBox_bg").scrollHeight;

	if(trueHeight <= document.getElementById("rightColumn").offsetHeight -44 - difference) {
		document.getElementById("treeContentBox_bg").style.height= document.getElementById("rightColumn").offsetHeight -44 +"px";
	}
	else {
		document.getElementById("treeContentBox_bg").style.height= "auto";
	}
	if(document.getElementById("leftBarHide")) {
		document.getElementById("leftBarHide").style.height= document.getElementById("rightColumn").offsetHeight +"px";
	}
}

//控制左侧菜单和右侧Content的高度一致，针对非树形左侧菜单的情况
function getRightHeight(){
	if(document.getElementById("leftBarhide")) {
		document.getElementById("leftBarhide").style.height = document.getElementById("rightColumn").offsetHeight +"px";
	}
	document.getElementById("leftColumn").style.height = "auto";
	var trueHeight = document.getElementById("leftColumn").offsetHeight;
	if(trueHeight < document.getElementById("rightColumn").offsetHeight) {
		document.getElementById("leftColumnInner").style.height=document.getElementById("rightColumn").offsetHeight +"px";
	}
	else {
		document.getElementById("leftColumnInner").style.height = "auto";
	}
}
//嵌套tab中文件详情展开收缩效果
function showHideDetail(actObj,aid){
	var aimobj =  document.getElementById(aid);
	if(aimobj.style.display == "none"){
		aimobj.style.display = "block";
		if(actObj.innerHTML.indexOf("&lt;&lt;") >= 0 ){
			var inner = actObj.innerHTML;
			actObj.innerHTML = inner.replace("&lt;&lt;","&gt;&gt;");	
		}
	}
	else {
		aimobj.style.display = "none";
		
		if(actObj.innerHTML.indexOf("&gt;&gt;") >= 0 ){
			var inner = actObj.innerHTML;
			actObj.innerHTML = inner.replace("&gt;&gt;","&lt;&lt;");	
		}	
	}
}
//嵌套tab效果
function nestingTab(actObj,contentId){
	var fobj = document.getElementById(contentId).parentNode;
	var content = new Array();
	var divs = fobj.getElementsByTagName("div");
	var idKey = contentId.split("_")[0];
	for(var i=0;i<divs.length;i++){
		if(divs[i].id && divs[i].id.indexOf(idKey+"_")>=0){
			content.push(divs[i]);
		}
	}
	if(actObj.checked){
		for(var j=0;j<content.length;j++){
			content[j].style.display = "none";
		}
		document.getElementById(contentId).style.display = "block";
	}
}
//表单中的第三方Content显示隐藏效果
function showMoreContent(actObj,aim){
	var obj = document.getElementById(aim);
	if(actObj.checked) obj.style.display = '';
	else obj.style.display = 'none';
}
//Delete自己
function delObject(actobj){
	var fobj = actobj.parentNode;
	var root = fobj.parentNode;
	
	root.removeChild(fobj);
}

//查看终端Type
//各种浏览器的判断参数
var isIE6 = false;
var isIE = false;
var Sys = {};
var ua = navigator.userAgent.toLowerCase();
var s;
(s = ua.match(/msie ([\d.]+)/)) ? Sys.ie = s[1] : 0;

//以下进行参数的赋值
if (Sys.ie) {
	isIE = true;
	if(Sys.ie == 6){
		isIE6 = true;
	}
}
function showTerType(actObj,contentId){
	if(document.getElementById(contentId).style.display == "none"){
		var actFaObjPos = getAbsolutePos(actObj);
		var popType = document.getElementById(contentId);
		var popBg = document.getElementById("ter_frbg");
		var trueHeight = 0;
		//alert(popMenu.id);
		if(popType.style.display == "none"){
			popType.style.display = "block";
		}
		trueHeight = popType.offsetHeight;
		popType.style.display = "none";
		
		popType.style.left = actFaObjPos.x + "px";
		popType.style.top = actFaObjPos.y - trueHeight  + "px";
		popType.style.display = "block";
		popType.style.width = actObj.offsetWidth - 2+"px";
		if(isIE6){
			popType.style.width = actObj.offsetWidth - 19 +"px";		
		}
		popBg.style.display = "block";
		popBg.style.width = "100%";
		popBg.style.height = "100%";
		popBg.style.left = "0px";
		popBg.style.top = "0px";
	}
	else {
		document.getElementById(contentId).style.display = "none";
		document.getElementById("ter_frbg").style.display = "none";		
	}
}
function closeTerType(contentId){
	document.getElementById(contentId).style.display = "none";
	document.getElementById("ter_frbg").style.display = "none";	
}

/********可输入select框事件件*********/
function editableSelect() {
	var selObj = document.getElementById("editableSel");
	var inpObj = document.getElementById("editableInp");
	inpObj.value = selObj.value;
}
/********表格行移动效果***************/
//使表格行上移，接收参数为链接对象    
function moveUp(e){ 
	var evt=e||window.event; 
	var srcEl=evt.target||evt.srcElement; 
	var oRow=srcEl.parentNode.parentNode; 
	if(oRow.rowIndex>1){ 
	var oPreRow=oRow.parentNode.rows[oRow.rowIndex-1]; 
	swapRow(oRow,oPreRow); 
	} 
}    
//使表格行下移，接收参数为链接对象    
function moveDown(e){ 
	var evt=e||window.event; 
	var srcEl=evt.target||evt.srcElement; 
	var oRow=srcEl.parentNode.parentNode; 
	if(oRow.rowIndex!=oRow.parentNode.rows.length-1){ 
	var oLstRow=oRow.parentNode.rows[oRow.rowIndex+1]; 
	swapRow(oRow,oLstRow); 
	} 
}    
//使行置顶
function moveTop(e){
	var evt=e||window.event; 
	var srcEl=evt.target||evt.srcElement; 
	var oRow=srcEl.parentNode.parentNode; 
	if(oRow.rowIndex>1){ 
	var oPreRow=oRow.parentNode.rows[1]; 
	swapRow(oRow,oPreRow); 
	} 
}





function swapRow(oRow1,oRow2){ 
	var strTemp=""; 
	for(var i=0,nLen=oRow1.cells.length;i <nLen;i++){ 
	strTemp=oRow1.cells[i].innerHTML; 
	oRow1.cells[i].innerHTML=oRow2.cells[i].innerHTML; 
	oRow2.cells[i].innerHTML=strTemp; 
	} 
} 

/**切换文件Type**/
function switchFileType(selObj) {
	for(i=0; i<selObj.options.length; i++)
	{
		var j = i+1;
		var theFieldObj;
		var fieldObj = document.getElementById("fileType" + j);
		fieldObj.style.display = "none";
		if(true==selObj[i].selected)
		{
			
			theFieldObj = document.getElementById("fileType" + j);
		}
	}
	if(theFieldObj)
	{
		theFieldObj.style.display = "block";
	}
}

/****锁定/解锁指定表单*****/
function lockInput(cbox, targetID) {
	var targetObj = document.getElementById(targetID);
	if(true==cbox.checked)
	{
		targetObj.disabled = false;
		var inpObjs = targetObj.getElementsByTagName("input");
		for(i=0; i<inpObjs.length; i++)
		{
			inpObjs[i].disabled = false;
		}
		var selObjs = targetObj.getElementsByTagName("select");
		for(i=0; i<selObjs.length; i++)
		{
			selObjs[i].disabled = false;
		}
	}
	else
	{
		targetObj.disabled = true;
		var inpObjs = targetObj.getElementsByTagName("input");
		for(i=0; i<inpObjs.length; i++)
		{
			inpObjs[i].disabled = true;
		}
		var selObjs = targetObj.getElementsByTagName("select");
		for(i=0; i<selObjs.length; i++)
		{
			selObjs[i].disabled = true;
		}
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

/*======loading遮照效果====*/
function loadingBoxOn() {
	var loadingObj = document.getElementById("loadingBox");
	loadingObj.style.display = "block";
}
function loadingBoxOff() {
	var loadingObj = document.getElementById("loadingBox");
	loadingObj.style.display = "none";
}
/*======sub menu expand and fold=====*/
var submenutitleArr = new Array();
var submenucontentArr = new Array();
function expandLeftSubmenu(actObj,titleClass,itemClass,id){
	var fobj = 	actObj.parentNode;
	var templis = fobj.getElementsByTagName("li");
	if(submenutitleArr == null || submenutitleArr == "" ){
		for(var i=0;i<templis.length;i++){
			if(templis[i].className == titleClass){
				submenutitleArr.push(templis[i]);
			}
		}
	}
	if(submenucontentArr == null || submenucontentArr == "" ){
		for(var j=0;j<templis.length;j++){
			if(templis[j].className == itemClass){
				submenucontentArr.push(templis[j]);
			}
		}
	}
	for(var n=0;n<submenucontentArr.length;n++){
		submenucontentArr[n].style.display = "none";	
		var firsticon = submenutitleArr[n].getElementsByTagName("img")[0];
		if(firsticon.src.indexOf("_exp")>=0){
			firsticon.src = firsticon.src.replace("_exp","_fold");	
		}
	}
	var flagicon = actObj.getElementsByTagName("img")[0];  
	flagicon.src = flagicon.src.replace("_fold","_exp");
	submenucontentArr[id].style.display = "block";
}


		//注册时间控件事件	
  function registerDate(inputId,iconId){
	 $('#'+inputId).date_input();
	 var pos_2=document.getElementById(inputId).getBoundingClientRect();	 
     $("#"+iconId).parent().find(".date_selector").css({"left":pos_2.left-5,"top":pos_2.bottom}); 
	 $("#"+iconId).parent().find(".date_selector_ieframe").css({"left":pos_2.left-5,"top":pos_2.bottom});	
	  $("#"+iconId).mousedown(function(){	 
		 $(this).prev().find(".date_selector_ieframe").toggle();
		 $(this).prev().find(".date_selector").toggle();						  
		  });
 }


/*function changeWidth(){
  $('#top,.top_center').width('99%')
 $('body').children().width('99%')
	}*/
//右上角快速链接
$(function(){

 $("#Qlink").hover(function(){
			$(".Qlink_list").toggle();				 
								 },
					   function(){
			$(".Qlink_list").toggle();	
						   });		
 
// changeWidth();
 ///////
		   
});

window.onerror = function(message, url, line)
{
alert("Error.\nMessage:"+ message +"\nUrl:" + url + "\nLine:" + line)
return true;
} 



