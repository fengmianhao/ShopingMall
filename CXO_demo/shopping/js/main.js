
//注册控件
 var connect=false 
 var xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
 xmlDoc.load( "../../config.xml");
 var c = $.trim($(xmlDoc).find('connect').text())
 var myPhone1=$.trim($(xmlDoc).find('mobile_contactor:eq(0)').find('phone').text()) //Kethy phone
 var myPhone2=$.trim($(xmlDoc).find('mobile_contactor:eq(1)').find('phone').text())  //Frank phone
 var demoPersonName1=$.trim($(xmlDoc).find('mobile_contactor:eq(0)').find('name').text())  //Kethy
 var demoPersonName2=$.trim($(xmlDoc).find('mobile_contactor:eq(1)').find('name').text())   //Frank
 var webPersonPhone1=$.trim($(xmlDoc).find('web_contactor:eq(0)').find('phone').text())
 var webPersonPhone2=$.trim($(xmlDoc).find('web_contactor:eq(1)').find('phone').text())
 var webPersonName1=$.trim($(xmlDoc).find('web_contactor:eq(0)').find('name').text())//vance
 var webPersonName2=$.trim($(xmlDoc).find('web_contactor:eq(1)').find('name').text())//phlipe
 var console=$.trim($(xmlDoc).find('console').text());
 
var onlineFriend = "";
 // onlineFriend[0]=myPhone1;
//各个Detail页面的变量 begin	
	var userName=webPersonName1;
				if(readCookie('user_phone','Welcome,'+webPersonPhone1).split(',')[1]==webPersonPhone2){
				  userName=webPersonName2;
				}
	var path='images/small_lady.jpg'; 
	//各个Detail页面的变量 end	
	
   var currentUser=webPersonName1;
   if(readCookie('user_phone','Welcome,'+webPersonPhone1).split(',')[1]==webPersonPhone2){
	   currentUser=webPersonName2;
	   }	
//
function addChannel(){
var channelName=readCookie(readCookie('user_phone','Welcome,'+webPersonPhone1).split(',')[1],'');
  if(channelName!=''){
	 $('.main_nav_items li:last').after('<li><a href="Picture.html">'+channelName+'</a></li>');
	 
	}	
}

var openActiveX = true;

$(function(){ 		
		   addChannel();
           doEmailSMSChatEvent();
		   
   
			//注册控件
		if(c=='1'){
			 connect=true;	
			 $('body').append('<object id="MYAvtiveX" classid="clsid:49A13EF8-4EA4-45DE-B671-F9FDB38A8640"> </object>');
 
		} 
		
		   //样式监听
		   $('#default').click(function(){
 			 writeCookie('theStyle','default');		
			 $('#theMain').attr('href','skin/default/css/main.css');
									 })
			$('#purple').click(function(){
 			  writeCookie('theStyle','purple');		
			  $('#theMain').attr('href','skin/purple/css/main.css');
									 })
		   
		   
		   $('#presentBtn').click(function(){
			  lightBoxOn('presentPop','Present to Friend');							   
			 if(connect){
				   MYAvtiveX.getOnlineFriend();
			 }
										   })
		   
		   $('#recommendBtn').click(function(){
			lightBoxOn('recommendedPop','Recommend to Friend');	
			if(connect){
				   MYAvtiveX.getOnlineFriend();
			 }
											 })
		   //样式检验
/*		   var aStyle=readCookie('theStyle','default');
		   if(aStyle=='default'){
			 $('#theMain').attr('href','skin/default/css/main.css');
 			 }else{
			$('#theMain').attr('href','skin/purple/css/main.css');	 
			}*/
		   
		   $('.top_logininfo span:eq(0)').text(readCookie('user_phone','Welcome,'+webPersonPhone1));//读取用户电话号码
 		   check_user();
 		   $('.user_show li').click(function(){
			 if($(this).hasClass('current_user')) return;
			    $('.user_show li').removeClass('current_user');
				$(this).addClass('current_user');
				writeCookie('user_phone','Welcome,'+$(this).find('a').text());
				$('.top_logininfo span:eq(0)').text(readCookie('user_phone','Welcome,'+webPersonPhone1));//及时见效果
				      if(connect){
							 MYAvtiveX.logout();
							 MYAvtiveX.login($(this).find('a').text());							 
							}
							
					check_user();		
				});
 		   
		   $(".top_logininfo").hover(function(){
			$(".user_show").show();							 
									  },
							function(){
			$(".user_show").hide();							
								      });  
 
//针对CXO_Demo 里面的btn出现可输入文字的解决方案
 		   var btn_text = new Array();
		  $('.btn_center').each(function(i){
				//btn_text[i]=$.trim($(this).text());		
				btn_text[i]=$(this).html()
				$(this).attr('my_index',i);//人为的索引
    			  });
		  
		     $('.btn_center').click(function(){
 						$(this).addClass('btn_bug');				  
				  });
		  
 		   $('body').keyup(function(){
						$('.btn_bug').each(function(){
  							var my_index = parseInt($(this).attr('my_index'));	
 							$(this).html(btn_text[my_index]);
 						  });	
 				});
	

//右上角的快速链接
   $("#Qlink").hover(function(){
			$(".Qlink_list").toggle();	
			$(".top_lnk").css({"position":"relative","z-index":"1000"});
			
								 },
					   function(){
			
			$(".Qlink_list").toggle();	
		$(".top_lnk").css("position","static");
						   });
		   
   });


//My World  
function getDiv(con,path,name){
  var str=' <div class="mall_myInfo_list">';
      str+='<strong><a href="#"><img src="'+path+'"/></a></strong>';
      str+=' <div class="mall_myInfo_right">';
      str+='<h3><a href="#">'+name+'</a></h3>';                            
      str+='<ul>'; 
	  str+='<li><span><img src="images/shop_info_icon1.jpg" align="absmiddle"/>'+con+'</span></li>';                            
      str+='<li><span style=" float:left;">one minute before</span> <a href="javascript:void(0)" class="toRecommend">Comment(0)</a></li>';   
	  str+='<li  style="text-align:left; display:none; height:85px;">';                             
      str+='<div class="nofloat"></div>';                                  
      str+='<img src="images/small_lady.jpg"   style="border:1px solid #ccc; display:inline;" /> ';                                   
	  str+='<textarea  style=" width:300px; height:50px;"></textarea>';								 
	  str+='<input type="button" value="Comment"  class="top_search_btn commentNow"  onmouseover="this.className = \'top_search_btnover commentNow\'" onmouseout="this.className=\'top_search_btn commentNow\'" style=" margin:3px 0 0 60px;"/></li>';								 
	  str+='</ul>';							  
	  str+='</div>';							 
	  str+='</div>';							  
     return str;
 }

function getLi(text,path,name){
  var time=new Date();
   var str='<li style="text-align:left; height:60px;"><img src="'+path+'"  style="float:left;" />';
  str+='<p style="float:left; width:280px; margin:8px;"><a href="#">'+name+'</a>:'+text+'<p>';
  str+='<p style="float:left; width:280px;">'+ time.getHours()+':'+time.getMinutes()+' <a href="#">Reply</a><p></li>';
  return str;
}


//My World  

function ShowLinkDiv(){
    if(!$.browser.msie ){
	 document.getElementById('qlinkDiv').style.display='block';  
	 var o=document.getElementById('outDiv');
	 o.style.position='relative';
	}
	
	   }
	   
	  function CloseLinkDiv(){
	   if(!$.browser.msie ){
	   document.getElementById('qlinkDiv').style.display='none';  
	  var o=document.getElementById('outDiv');
	 o.style.position='static';
	   }
}

function doEmailSMSChatEvent(){
			//注册上传图片		  					
	setMyImgPath('images/rain.jpg','attach_id','accessories')
	setMyImgPath('images/forest.jpg','mms_uploadId','accessorie_mms')
	
	$(".bottomIcon a:eq(1)").click(function(){
			//$('#smsDivP').html('Send E-mail');
			//$('#smsTabTitle1').click();
 			$("#smsPop_out_div").show();
											})
	$(".bottomIcon a:eq(2)").click(function(){
		//	$('#smsDivP').html('Send SMS/MMS');
 	     	//$('#smsTabTitle2').click();
		 	$("#emailPop_out_div").show();
											})
	}

	
 function check_user(){
		if(readCookie('user_phone','Welcome,'+webPersonPhone1).split(',')[1]==webPersonPhone2){//用户2
							$('.user_show li').removeClass('current_user');
							$('.user_show li:eq(1)').addClass('current_user');
						    $('#person_img').attr('src','images/theBoy.gif');
		             		$('.bottomStat li:eq(0) img,.mall_myInfo_right ul li:(2)>img').attr('src','images/philip.jpg');
							 $('#onlineName').text('philip');
							 //myWorld右边friends变化
							 $('#myWorldRight .circle_corner_box,.friendActive,.information,.follow').hide();
							 $('#myWorldRight .circle_corner_box:eq(2),#myWorldRight .circle_corner_box:eq(3),.friendActive:eq(1),.information:eq(1),.follow:eq(1)').show();
							 //Music不同用户看到不同的recommend
							 $('.musicTarget').hide();
							 $('.musicTarget:eq(1)').show();
							 $('.musicTarget:eq(3)').show();
							 
 							/*if(connect){
							 MYAvtiveX.logout();
							 MYAvtiveX.login(webPersonPhone2);
							 
							}*/
							
						 }else if(readCookie('user_phone','Welcome,'+webPersonPhone1).split(',')[1]==webPersonPhone1){
 							$('.user_show li').removeClass('current_user');
							$('.user_show li:eq(0)').addClass('current_user');
						    $('#person_img').attr('src','images/Vance.jpg');
				           $('.bottomStat li:eq(0) img,.mall_myInfo_right ul li:(2)>img').attr('src','images/small_lady.jpg');
                           $('#onlineName').text('vance');
						   	 //myWorld右边friends变化
							 $('#myWorldRight .circle_corner_box,.friendActive,.information,.follow').hide();
							 $('#myWorldRight .circle_corner_box:eq(0),#myWorldRight .circle_corner_box:eq(1),.friendActive:eq(0),.information:eq(0),.follow:eq(0)').show();
							 
							 //Music不同用户看到不同的recommend
							 $('.musicTarget').hide();
							 $('.musicTarget:eq(0)').show();
							 $('.musicTarget:eq(2)').show();
							 
						/*	if(connect){
							 MYAvtiveX.logout();
							 MYAvtiveX.login(webPersonPhone1);
 							}*/
						 }
	  }

function registeSelfService(){
		  if(readCookie('user_phone','Welcome,'+webPersonPhone1).split(',')[1]==webPersonPhone2){
			   $('.user159').css('display','none');
			   $('.user158').css('display','block');
			   $('.bottomStat li:eq(0) img').attr('src','images/philip.jpg');
			   $('#onlineName').text(webPersonName2)
			}else{
				$('.user159').css('display','block');
				$('.user158').css('display','none'); 
			     $('.bottomStat li:eq(0) img').attr('src','images/small_lady.jpg')
				 $('#onlineName').text(webPersonName1)
			}
			
			$('.user_show li:eq(0)').click(function(){
				$('.user159').css('display','block');
				$('.user158').css('display','none'); 	
				$('.bottomStat li:eq(0) img').attr('src','images/small_lady.jpg')
				  $('#onlineName').text(webPersonName1)
													})
			
			$('.user_show li:eq(1)').click(function(){
				$('.user159').css('display','none');
				$('.user158').css('display','block'); 	
				$('.bottomStat li:eq(0) img').attr('src','images/philip.jpg')
				  $('#onlineName').text(webPersonName2)
													})

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
	//上传图片
	//D:\sdpDemo\2010612\CXO_demo\shopping\images\artists.jpg
   //file:///D:/sdpDemo/2010612/CXO_demo/shopping/Communication.html# 
function setMyImgPath(path,uploadBtnID,receieveInputID){
       $('#'+uploadBtnID).click(function(){
	
      var myUrl=document.location.href;
      var tmpUrl=myUrl.split('///')[1];
      var arrM=tmpUrl.split('/');
	  var old=arrM[arrM.length-1];	  
      $('#'+receieveInputID).val(tmpUrl.replace(old,path).replace(/\//g,'\\'))
        })
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
  // StyleSheet
 function writeCSS(){
      document.write('<link title="css0" href="skin/default/css/main.css" rel="stylesheet" disabled="true" type="text/css" />');
	 document.write('<link title="css1" href="skin/purple/css/main.css" rel="stylesheet" disabled="true" type="text/css" />');
     setStyleSheet(readCookie("stylesheet","css0"));
}
  
function setStyleSheet(strCSS){
  var objs=document.getElementsByTagName("link");
  var intFound=0;
  for(var i=0;i<objs.length;i++){
    if(objs[i].type.indexOf("css")>-1&&objs[i].title){
      objs[i].disabled = true;
      if(objs[i].title==strCSS) intFound=i;
    }
  }
  objs[intFound].disabled = false;
  writeCookie("stylesheet",objs[intFound].title);
}

     function getDates(){
	var date=new Date();						   
	return date.getFullYear()+"/"+(date.getMonth()+1)+"/"+date.getDate()+"  "+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds()+"\n ";			
 	 }
	 
	 
	 
		function fillGroupMate(arr){
		if(arr.length==0) return ''
		var s=''
		for(var i=0;i<arr.length;i++){
			s +='<p style="padding-left:10px;">'+arr[i]+'</p>'
		}
		return s;
		}
	 
	 	function registerTree(targetBtn,okBtn,cancelBtn,receiverBtn,treeId){
				$("#"+targetBtn+",#"+cancelBtn+"").click(function(){
	       $("#"+treeId).slideToggle();									  
										  });	
 			//对checkbox进行事件
			$("#"+treeId+" .person li input[type='checkbox']").click(function(){
			 $(this).toggleClass("is_select");								   
											   });
			
			//对tree的ok按钮进行事件
			$("#"+okBtn).click(function(){
				 var add_person = '';		
				 if($("#"+treeId+" .person li input.is_select").size()==0) return ;//如果选择的联系人的数量为0，就返回
				 $("#"+treeId+" .person li input.is_select").each(function(){
						add_person +=$(this).next("a").text()+",";	 
			 });								 
		      add_person = add_person.substr(0,add_person.length-1)
		
			$("#"+receiverBtn).val($("#"+receiverBtn).text()+add_person);
			      $("#"+treeId).slideToggle();	
			 });
			$("#"+treeId+" .switch_img").click(function(){
				$(this).parent().find(".person").toggle();//展开 收起
				if($(this).parent().find(".person").css("display")=="none"){
					$(this).attr("src","images/btn_icon_add.gif");
				}else{
					$(this).attr("src","images/btn_icon_sub.gif");
				}	});
			
				 $("#"+treeId+" .parent_checkbox").click(function(){
					if($(this).attr("checked")){
						$(this).parent().find("input").attr("checked",true);
						$(this).parent().find("input").addClass("is_select");
					}	else{
					$(this).parent().find("input").removeAttr("checked");	
					$(this).parent().find("input").removeClass("is_select");
					}							  
				});
		}	 


	
		function add_aFriend_inLeftMenu(phone,name){
 	 var s='<li style="display: block;" class="friend_left_list" >'+name+' ('+phone+')</li>'
		 s+='<li class="friend_left_over" style="display: none;">'	    
		 s+='<a href="#"><img src="images/default_friend_img.jpg" class="f_bg" /></a>'						
		 s+='<div class="fr">'                              
		 s+='<p style="height:18px"><strong class="darkred">'+name+'</strong>　<span>'+phone+'</span></p>'                              
		 s+='<div style="height:23px">' 
		 s+='<a href="#" class="fr"><img src="images/friend_locat.gif" /></a>'
		 s+='<p style="width:96px; overflow:hidden; white-space:nowrap" class="fl"></p>'                                   
		 s+='</div>'        
		 s+='<p class="friend_control"><a href="#" title="Message" class="left_msg"><img src="images/icon_ems_small.png"  /></a><a href="#" title="Email" class="left_email"><img src="images/icon_email_small.png"  /></a><a href="#" title="Call" class="left_voip"><img src="images/icon_voip_small.png" /></a><a href="#" title="Chat" class="left_chat"><img src="images/icon_chat_small.png"  /></a><a href="#">More</a></p>'
		 s+='</div>'               						
		 s+='</li>'                                   
		return s
}	
		
	function addGroupFun(gName,gArr){
		var s='<li flag="leftmenuTitle">'
		 s+='<span class="leftmenu_actli_left"><img src="skin/default/images/leftmenu_fold.gif" width="15" height="15" class="leftmenu_icon" />'
		 s+='<img src="images/line_group.gif" width="16" height="16" style="margin:7px 4px 7px 0" align="absmiddle" />'+gName+' (<span class="brown">0/'+gArr.length+'</span>)</span></li>'
		 s+='<li class="leftmenu_level" style="display: none; padding:0 1px 3px 3px">'
		 s+='<ul>'
		 for(var i=0;i<gArr.length;i++){
		 s+='<li  style="display: block;" class="friend_left_list" >'+gArr[i].name+' ('+gArr[i].value+')</li>'
		 s+='<li class="friend_left_over" style="display: none;">'	 
		 s+='<a href="#"><img src="images/sale_pic'+(i+2)+'.jpg" class="f_bg" /></a>'
		 s+='<div class="fr">'
		 s+='<p style="height:18px"><strong class="darkred">'+gArr[i].name+'</strong>　'+gArr[i].value+'</p>'
		 s+=' <div style="height:23px">'
		 s+='<a href="com_manage_map_j.html#friend_locat_S" class="fr"><img src="images/friend_locat.gif"/></a>'
		 s+='<p style="width:96px; overflow:hidden; white-space:nowrap" class="fl"></p>'
		 s+='</div>'
		 s+='<p class="friend_control"><a href="#" title="Message"><img src="images/icon_ems_small.png" /></a><a href="#" title="Email"><img src="images/icon_email_small.png" /></a><a href="#" title="Call">'
		 s+='<img src="images/icon_voip_small.png"/></a><a href="#" title="Chat"><img src="images/icon_chat_small.png" /></a><a href="#">More</a></p>'
		 s+='</div></li>'
		 }
         s+='</ul></li>'                                
         return s;                             
 		}	
	
	function add_aFriend(phone,name,email,msn){
		var str ='<li class="friend_info_list"><div class="fl"><a href="#"><img src="images/default_friend_img.jpg"/></a>'
		    str +='<p><em>'+name+'</em>&nbsp;'+phone+'&nbsp;&nbsp;&nbsp;</p>'
			str +='<p><span>Email:</span> <a href="#">'+email+'</a>　　<span>MSN:</span> <a href="#">'+msn+'</a></p>'
            str +='<p><img src="images/icon_list_friend1.jpg" align="absmiddle"/> <span>Statue:</span> Online</p>'
			str +='<div class="show_div" style=" display:none">'
            str +='<p style="padding:5px; text-align:left"><a href="#" class="email_pop">E-mail</a> | <a href="#" class="sms_pop" >SMS</a>'
			str +=' | <a href="#"  class="voip_pop">Call</a> | <a href="#"  class="chat_pop">Chat</a>　More>></p>'
            str +='<div class="show_div_1"><img src="images/default_friend_img.jpg" width="53" height="53"/><h5>'+name+'</h5><p>'+phone+'</p></div>'
            str +='</div>'
			str +='</div>'                	
            str +='<div class="fr"><a href="#">Welcome to my space >></a>'                   
            str +='<ul onmouseover="btnOver(this);" onmouseout="btnOut(this);" class="btn_div_normal ">'  
			str +=' <li class="btn_left"></li>'
            str +='<li class="btn_center"><span class="arrow_down">More</span></li>'                    
            str +='<li class="btn_right"></li>'                   
            str +='<li class="nofloat"></li>'                   
            str +='</ul></div></li>'                   
 		return str;
		}


   function registerEmailSmsVoipChatEvent(isConnect,n1,n2,p1,p2){
 		$(".pop_div_con").draggable();//注册拖动事件
 		$(".centerUp img").live('click',function(){
  				 if(this.name="smsPop_out_div"){
					$(".rece_input,.msg_text").val('');	
			         $("#"+this.name).hide();
 
				} 
				if(this.name="chatPop_out_div"){
					$("#receiver_chat_input,#content_chat").val('');	
				$("#"+this.name).hide();
				}  
				   if(this.name="voipPop_out_div"){
					$("#hold_down").click();
					$("#clear_num").click();
			    	$("#"+this.name).hide();
				}
				//	emailPop_out_div
				 if(this.name="emailPop_out_div"){
					$(".rece_input,.msg_text").val('');	
			         $("#"+this.name).hide();
 
				} 
			
					
		});
		
	   		//注册各自的Tree事件	
 			registerTree("address_book_chat","chat_tree_ok","chat_tree_cancel","receiver_chat_input","chatTree")
			registerTree("address_book_mms","mms_tree_ok","mms_tree_cancel","receiver_mms_input","mmsTree")
			registerTree("address_book_email","email_tree_ok","email_tree_cancel","receiver_email_input","emailTree")
			//email
			$('#email_send').click(function(){
			  if($("#receiver_email_input").val()==''){
				  alert('Please select the Receiver ')
				  return 0
				 }		
			  if($("#email_sub_input").val()==''){
				 alert('The Subject must not be null!') 
				  return 0
				  }
			  if($("#email_content").val()==''){
				  alert('The content must not be null!')
				  return 0
				  } 

			if(isConnect){
				  MYAvtiveX.getOnlineFriend();
				
				var accessories=$('#accessories').val().replace(/\\/g,"\\\\");
				var Arr = $('#accessories').val().split("\\");
				//alert(accessories)
				if($("#receiver_email_input").val()==n1||$("#receiver_email_input").val()==n2){
				   if(accessories!=''){
						
					     if($("#receiver_email_input").val()==n1){
						MYAvtiveX.sendEmail(p1,$('#email_sub_input').val(),$("#email_content").val()+'<attach>'+Arr[Arr.length-1]+'</attach>');
						MYAvtiveX.sendFileTo(p1,$('#accessories').val());
					  }else{
						  MYAvtiveX.sendEmail(p2,$('#email_sub_input').val(),$("#email_content").val()+'<attach>'+Arr[Arr.length-1]+'</attach>');
						MYAvtiveX.sendFileTo(p2,$('#accessories').val());
						  
					  }
				    }else{
						 if($("#receiver_email_input").val()==n1){
						 MYAvtiveX.sendEmail(p1,$('#email_sub_input').val(),$("#email_content").val());  
					  }else{
						  MYAvtiveX.sendEmail(p2,$('#email_sub_input').val(),$("#email_content").val());  
					  }
					
					}	
		          }
			 }
				 alert('E-mail has send to your friends!');	
				 $("#email_content").val('')
											})
			$('#email_reset').click(function(){
				   $("#receiver_email_input").val('');	
			       $("#email_sub_input").val('');
			       $("#email_content").val('')							 
											 })
			
			//mms事件
			$('#mms_send').click(function(){
				if($("#receiver_mms_input").val()=='') {
					alert('Please select the Receiver ') ;
					return;
					}				
 				if($("#content_mms").val()=='') {
					alert('The content must not be null! ') ;
					return;
				}
			 if(isConnect){
				   MYAvtiveX.getOnlineFriend();
				 
				 var accessories_mms=$('#accessorie_mms').val().replace(/\\/g,"\\\\");
				 var mmsArr=$('#accessorie_mms').val().split("\\");
				 if($("#receiver_mms_input").val()==n1||$("#receiver_mms_input").val()==n2){
					 if(accessories_mms!=''){
						  
						   if($('#receiver_mms_input').val()==n1){
							 MYAvtiveX.sendTo(p1,$("#content_mms").val()+'<attach>'+mmsArr[mmsArr.length-1]+'</attach>',2); //发送文本信息 
							 MYAvtiveX.sendFileTo(p1 ,$('#accessorie_mms').val())//发送附件信息 
							
							}else{
							 MYAvtiveX.sendTo(p2,$("#content_mms").val()+'<attach>'+mmsArr[mmsArr.length-1]+'</attach>',2); //发送文本信息 
							 MYAvtiveX.sendFileTo(p2 ,$('#accessorie_mms').val())//发送附件信息
							}
							 
                     }else{
					     
						     if($('#receiver_mms_input').val()==n1){
							  MYAvtiveX.sendTo(p1,$("#content_mms").val(),2); //发送文本信息    
							 }else{
							  MYAvtiveX.sendTo(p2,$("#content_mms").val(),2); //发送文本信息    	 
							}
					  }
				
				 }
 			  } 
 				alert('Message has send to your friends!');	
				$("#content_mms").val('');						  
										  })
 			
			//聊天发送按钮
			$("#chat_send").click(function(){
				if($("#receiver_chat_input").val()=='') {
					alert('Please select the Receiver ') ;
					return;
					}
				if($("#chatInput_content").val()=='') {
				alert('The content of chat must no be null ') ;
				return ;
				}
			
				$("#content_chat").val($("#content_chat").text()+"\n"+getDates()+currentUser+" : "+$("#chatInput_content").text()+"\n\n");		
			 if(isConnect){		
			   MYAvtiveX.getOnlineFriend();
			 
				 if($("#receiver_chat_input").val()==n1||$("#receiver_chat_input").val()==n2){
					  if($("#receiver_chat_input").val()==n1){
						 MYAvtiveX.sendTo(p1,$("#chatInput_content").val(),1);//集成
						}else{
					      MYAvtiveX.sendTo(p2,$("#chatInput_content").val(),1);//集成
					    }
					 
				
				 }
			  }
			//	alert('Message has send to your friends')
				$("#chatInput_content").val('');				   
										   });
	 			//聊天close按钮
			$("#chat_close").click(function(){
				$("#chatPop_out_div").css("display","none");	
 			    $("#chatTree").css("display","none");
			    $("#chatTree").find("input").removeAttr('checked');
			    $("#chatTree").find("input").removeClass('is_select');
			    $('#content_chat').val('');
 				document.getElementById('receiver_chat_input').value='';
			 });
			
		//清空按钮C	
			$("#clear_num").click(function(){
				$("#vop_input").val('');						   
			 });
			
			$(".voIpDiv a").not("#clear_num").mousedown(function(){
				$("#vop_input").val($("#vop_input").val()+$(this).text());		
			   });
      //拨号键进行事件
	  var intervalTime =null;var sec=0;mins=0; mins_html=null;sec_html=null;
          $("#call_person").click(function(){
					$("#vop_input").css("display","none");		
					$(".voIpDiv_input_calling").css("display","block");
					$(".voIpDiv_input_calling").find("h4").text($("#vop_input").val());
					
				intervalTime=window.setInterval(function(){
					//00:00
					if(sec>=60){
						mins++;
						sec=0;
					}else{
						sec++;
						}
					if(mins>=60){
						mins=0;
						}
					if(sec<10){
						sec_html='0'+sec;
						}else{
						sec_html=sec+'';	
						}		
					if(mins<10){
						mins_html='0'+mins;
						}else{
						mins_html=mins+'';	
							}							
					$(".voIpDiv_input_calling").find("input").val(mins_html+':'+sec_html);							
												},1000)
					});
		  //挂号键的事件
		  $("#hold_down").click(function(){
				    $("#vop_input").css("display","block");		
					$(".voIpDiv_input_calling").css("display","none");
					window.clearInterval(intervalTime);
					$(".voIpDiv_input_calling").find("input").val('00:00');
					sec=0;mins=0;
 				 });
	   
					//改变相应的TabPanel上面的title
			$('#InfoDiv ul').click(function(){
						$('#smsDivP').html(this.title)					
			})

	   }		
		
	function registerLeftAddGroupFriendEvent(isRightList){
 				//send SMS
	$('.left_msg').live('click',function(){
 					$("#smsPop_out_div").show();							
					$('#smsDivP').html('Send SMS/MMS')					
				    changeTab('smsTabTitle', 'smsTabContent',1, 2);
					$("#receiver_mms_input").val($(this).parent().prev().prev().find('strong').text())	
			        $("#receiver_email_input").val($(this).parent().prev().prev().find('strong').text());	
 			})	
		
	$('.left_email').live('click',function(){
			$("#smsPop_out_div").show();
		    $('#smsDivP').html('Send E-mail')
		    changeTab('smsTabTitle', 'smsTabContent', 2, 2);					   
			$("#receiver_mms_input").val($(this).parent().prev().prev().find('strong').text())	
			$("#receiver_email_input").val($(this).parent().prev().prev().find('strong').text());
			})	

     	$('.left_voip').live('click',function(){
			$("#voipPop_out_div").show();
		   $('#vop_input').val($(this).parent().prev().prev().find('span').text());
		   $("#call_person").click();
			})	
		
     	$('.left_chat').live('click',function(){
			$("#chatPop_out_div").show();
			$("#receiver_chat_input").val($(this).parent().prev().prev().find('strong').text());
			})

		  $("#addNewFriend").click(function(){
				lightBoxOn('addFriendPop','Add Friend')							 
											})
		  
		  $('#add_friend_cancel').click(function(){
					$("#lightBox").hide()		
					$("#addFriendPop").hide()
												 })
		  
		   $('#add_friend_ok').mousedown(function(){
					if($.trim($("#contact_num").val())==""){
					alert("sorry,the mobile can not be null")	
					return 0
					}	
					if(!/^\d+$/.test($.trim($("#contact_num").val()))){
						alert('sorry,the format of phone number is incorrect')
						return 0
						}
					
					if($.trim($("#contact_name").val())==""){
					alert("sorry,the name can not be null")	
					return 0
					}	
					if($.trim($("#contact_email").val())==""){
					alert("sorry,the email can not be null")	
					return 0
					}
					if(!/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([.-]\w+)*/.test($.trim($("#contact_email").val()))){
						alert('sorry,the format of email number is incorrect')
						return 0
						}
					
					if($.trim($("#contact_msn").val())==""){
					alert("sorry,the msn can not be null")	
					return 0
					}
					if(!/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([.-]\w+)*/.test($.trim($("#contact_msn").val()))){
						alert('sorry,the format of msn number is incorrect')
						return 0
						}
					
 $(".friend_info_list:eq(0)").before(add_aFriend($("#contact_num").val(),$("#contact_name").val(),$("#contact_email").val(),$("#contact_msn").val()))
		var total = parseInt($('#friendLi .brown:eq(0)').html().split('/')[1])
	var cur=parseInt($('#friendLi .brown:eq(0)').html().split('/')[0])
	$('#friendLi .brown:eq(0)').html(cur+'/'+(total+1))
	$("#actListSale li:last").after(add_aFriend_inLeftMenu($("#contact_num").val(),$("#contact_name").val()))
	$('#friendNum').html(parseInt($('#friendNum').html())+1)
	if(isRightList) {register_showDivFun()}
 	$('#add_friend_cancel').click()
 											  })
		  
			  
		  	   $('#add_group_cancel').click(function(){
					$("#lightBox").hide()		
					$("#addGroupPop").hide()
					$(".addGropuUl").removeClass("beSelected")	
					$("#leftCon li").each(function(){
					$("#rightCon").append($(this).clone())
					 $(this).remove()
				   })					
		      })
			  
		  $("#addGroup").click(function(){		
						$("#groupName").val('')		
						$("#groupmate").val('')
						lightBoxOn('addGroupPop','Add Group')		
										})
		  
			 $('.addGropuUl li').live('click',function(){
						$(this).toggleClass('beSelected')					 
											 })
		  $('#add_left').click(function(){
				$("#rightCon li").each(function(){
					if($(this).hasClass('beSelected')){
					 $(this).removeClass("beSelected")	
					 $("#leftCon").append($(this).clone())
					 $(this).remove()
					}							
				})						
		 })
		  
		  $('#delete_right').click(function(){
			$("#leftCon li").each(function(){
					if($(this).hasClass('beSelected')){
					 $(this).removeClass("beSelected")	
					 $("#rightCon").append($(this).clone())
					 $(this).remove()
					}							
				})							
 		  })
			
			
		  $("#add_group_ok").click(function(){
				if($.trim($("#groupName").val())=='') {
					alert("The name of group must no be null!") 
					return 0
				}
				var arr=[]
				$("#leftCon li").each(function(i){
				 	arr[i]={"name":$(this).text(),"value":this.id}					
				})	
				
 		   $('.leftmenu_level:last').after(addGroupFun($('#groupName').val(),arr))
			$('#add_group_cancel').click()
											})
		if(!isRightList){
 		  $('.leftmenu_icon').live('click',function(){
				if($(this).parent().parent().hasClass("leftmenu_actli")) return;
				$('.leftmenu_ul li').removeClass("leftmenu_actli")
				$('.leftmenu_level').hide()
			    $('.leftmenu_icon').attr("src","skin/default/images/leftmenu_fold.gif")
				$(this).parent().parent().addClass('leftmenu_actli')							 
		    	$(this).parent().parent().next().show()						 
				$(this).attr("src","skin/default/images/leftmenu_exd.gif")	
 											 })
		  
		$('.friend_left_list').live("mouseover",function(){
				$('.friend_left_over').hide()	
				$(this).next().css({"margin-top":"-30px","position":"relative"})
				$(this).next().show()										 
			 })
 			}  
 		}	
		
//各个Detail页面
function confirmCurrentUser(){
			if(readCookie('user_phone','Welcome,'+webPersonPhone1).split(',')[1]==webPersonPhone2){
			    userName=webPersonName2;
				path='images/philip.jpg';
			//下面的进行切换用户
				$('#commentsNew p:eq(0)').remove();
				$('#commentsNew div:eq(0)').before('<p style="margin:3px 0 3px 10px;"><strong>'+webPersonName2+' (<span style="color:#F60;">'+webPersonPhone2+'</span>)</strong></p>');
		}else{
				userName=webPersonName1;
				path='images/small_lady.jpg';
			//下面的进行切换用户
				$('#commentsNew p:eq(0)').remove();
				$('#commentsNew div:eq(0)').before('<p style="margin:3px 0 3px 10px;"><strong>'+webPersonName1+' (<span style="color:#F60;">'+webPersonPhone1+'</span>)</strong></p>');
		}	
	}

//接收手机客户端发过来的评论
function updateCommentFromMobile(content,from){
	var color_bg='comments_fuscous';
	if($("#commentsList > div:eq(0)").hasClass("comments_fuscous")){
		color_bg='comments_normal';
	}
    var p="images/Kethy.png";
	if(from=="Frank") p="images/Frank.png";
	$("#commentsList > div:eq(0)").before(
	getCommentContent(getCurrentTime(),content,color_bg,from,p));
	$("#commentsList div").css("position","static");
}

//注册回复事件
function registerReply(){
			 $("#submit_btn").click(function(){
				//1.先判空
				if($.trim(document.getElementById("commentsmessage").value)==''){
					alert("the comment should not be null!");
					return false;
				}
				//2.判别验证码是否正确
				if($("#validate_code").val()=='kja8'||$("#validate_code").val()=='kJa8'){
					if($("#find_div_clear")){
					 $("#find_div_clear").remove();
					}
					
					var color_bg='comments_fuscous';
					if($("#commentsList > div:eq(0)").hasClass("comments_fuscous")){
						color_bg='comments_normal';
					}
				
					$("#commentsList > div:eq(0)").before(getCommentContent(getCurrentTime(),document.getElementById("commentsmessage").value,color_bg,userName,path));
					$("#commentsList div").css("position","static");
					//$(this).find('.btn_left').attr('id')
					if(connect){
 						MYAvtiveX.sendComment(userName,getCurrentTime(),$('#commentsmessage').val(),parseInt($(this).find('.btn_left').attr('id')));
 					}
					document.getElementById("commentsmessage").value='';
				}else{
					alert( "validate code  is not correct,please input again!");
					return false;
				}
		   });

	}

function registerDownPresentRecommend(){
	
	   if(connect){
		  MYAvtiveX.getOnlineFriend();
		}	
	 //presentJs
		   
		   $("#prenset_ok").click(function(){
			$("#first_table").hide();				   
			$("#sencond_table").show();	
			//如果与cxo连接 
			 if(connect){
				  MYAvtiveX.sendTo(onlineFriend.split(',')[0],$('#present_msg').val(),5);
				 if(onlineFriend.split(',')[1] != ""){
				  MYAvtiveX.sendTo(onlineFriend.split(',')[1],$('#present_msg').val(),5);	 
				 }
			  }
			
			});
		   
		   $(".popwin_icon_close").click(function(){
			$("#first_table").show();				   
			$("#sencond_table").hide(); });
		   
		  $(".presentClose").click(function(){
				//
				$("#lightBox").hide();
				$("#presentPop").hide();
				$("#first_table").show();	
				$("#sencond_table").hide();
					
		  }); 	
			
		//  recommend_Js
		  
		   $("#recommend_ok").click(function(){
			$("#recommend_first_table").hide();				   
			$("#recommend_sencond_table").show();	
			  //如果与cxo连接 
			 if(connect){
				 MYAvtiveX.sendTo(onlineFriend.split(',')[0],$('#recommend_msg').val(),6);
				 if(onlineFriend.split(',')[1] != ""){
					MYAvtiveX.sendTo(onlineFriend.split(',')[1],$('#recommend_msg').val(),6); 
					 }
			  }
			
			});
		   
		   $(".popwin_icon_close").click(function(){
			$("#recommend_first_table").show();				   
			$("#recommend_sencond_table").hide(); });
		   
		  $(".presentClose").click(function(){
				//
				$("#lightBox").hide();
				$("#recommendedPop").hide();
				$("#recommend_first_table").show();	
				$("#recommend_sencond_table").hide();
		  }); 

	  //downLoadJs

		    $("#downLoad_close").click(function(){
				$("#lightBox").hide();
				$("#downLoadPop").hide();
				 if(connect){
			   MYAvtiveX.getOnlineFriend();
					  MYAvtiveX.sendDownLoad(onlineFriend.split(',')[0],$("#downloadName").text(),$("#downloadPrice").text());
					  
					  if(onlineFriend.split(',')[1] != ""){
						 MYAvtiveX.sendDownLoad(onlineFriend.split(',')[1],$("#downloadName").text(),$("#downloadPrice").text());  
					  }
					  
					  
			 
			 }
		   }); 
}
	

 function getCommentContent(current_time,content,bg_cls,issu,imgPath){
			   var content_str ='<div class="'+bg_cls+'">';
			       content_str +='<div class="comments_inner">';
				   content_str +='<div class="comments_content">';
				   content_str +='<div class="inner_padding">';
				   content_str +=' <div class="comments_content_top">';
				   content_str +=' <div class="comments_nikename"><a href="#">'+issu+'</a></div>';
				   content_str +='<div class="comments_info">'+current_time+'</div>';
    			   content_str +=' <div class="nofloat"></div>';
				   content_str +=' </div>';
				   content_str +=' <div class="comments_message">'+content+'</div>';
				   content_str +=' </div>';
				   content_str +='</div>';
				   content_str +='<div class="comments_corner"></div>';
				   content_str +='<div class="comments_face"><img src="'+imgPath+'" width="54" height="54" border="0" /></div>';
				   content_str +='<div class="nofloat"></div>';
				   content_str +=' </div>';
				   content_str +=' </div>';
			     return content_str;
			   }
		   
		   function getCurrentTime(){
			   var date = new Date();
			   var month='';
			   switch(date.getMonth()){
				   case 0:month='Jan'; break;
				   case 1:month='Feb'; break;
				   case 2:month='Mar'; break;
				   case 3:month='Apr'; break;
				   case 4:month='May'; break;
				   case 5:month='Jun'; break;
				   case 6:month='Jul'; break;
				   case 7:month='Aug'; break;
				   case 8:month='Sep'; break;
				   case 9:month='Oct'; break;
				   case 10:month='Nov'; break;
				   case 11:month='Dec'; break;
				   }
			   return month+" "+date.getDate()+","+date.getFullYear();   
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

//control loading bar
function loadingSlider(oEvent,actObj,curId,defaultId){
	var e = oEvent || window.event; 
	var curBar = document.getElementById(curId);
	var trueWidth = document.getElementById(defaultId).offsetWidth;
	var startX = e.clientX;
	var origX = actObj.offsetLeft;
    var deltaX = startX - origX;
	
	if (document.addEventListener) {  
        document.addEventListener("mousemove", moveHandler, true);
        document.addEventListener("mouseup", upHandler, true);
    }
    else if (document.attachEvent) {  
        actObj.setCapture( );
        actObj.attachEvent("onmousemove", moveHandler);
        actObj.attachEvent("onmouseup", upHandler);
        actObj.attachEvent("onlosecapture", upHandler);
    }
    else {  
        var oldmovehandler = document.onmousemove; // used by upHandler( )
        var olduphandler = document.onmouseup;
        document.onmousemove = moveHandler;
        document.onmouseup = upHandler;
    }
  function moveHandler(e) {
		if((e.clientX - deltaX)<0) {
			 actObj.style.left = "0px";
			 curBar.style.width = "0px";
		}
		else {
			if((e.clientX - deltaX) <= trueWidth ){
				 actObj.style.left = (e.clientX - deltaX)/100 * 98 + "px";
				 curBar.style.width = (e.clientX - deltaX) +"px";
			}
		}
        // And don't let anyone else see this event.
        if (e.stopPropagation) e.stopPropagation( );  // DOM Level 2
        else e.cancelBubble = true;                  // IE
    }

    function upHandler(e) {
        if (document.removeEventListener) {  // DOM event model
            document.removeEventListener("mouseup", upHandler, true);
            document.removeEventListener("mousemove", moveHandler, true);
        }
        else if (document.detachEvent) {  // IE 5+ Event Model
            actObj.detachEvent("onlosecapture", upHandler);
            actObj.detachEvent("onmouseup", upHandler);
            actObj.detachEvent("onmousemove", moveHandler);
            actObj.releaseCapture( );
        }
        else {  // IE 4 Event Model
            // Restore the original handlers, if any
            document.onmouseup = olduphandler;
            document.onmousemove = oldmovehandler;
        }

        if (e.stopPropagation) e.stopPropagation( );  // DOM Level 2
        else e.cancelBubble = true;                  // IE
    }
}

//player Volumn Control
function volumnControl(obj,oEvent,aimId){
	var aimObj = document.getElementById(aimId);
	var e = oEvent || window.event; 
	var target = e.target || e.srcElement;  
	var imgArray = obj.getElementsByTagName("img"); 
	for(var i=0;i<imgArray.length;i++){ 
	   imgArray[i]._num = i; 
	} 
	if(target.tagName=="IMG"){ 
	   for(var j=0;j<imgArray.length;j++){ 
			if(j<=target._num){ 
				 var imgSrc =  imgArray[j].src;
				 var newImg = imgSrc.replace("grey","yellow");
				 imgArray[j].src=newImg; 
				 aimObj.className = aimObj.className.replace("_player_silence","_player_volumn");
			} 
			else { 
				 var imgSrc =  imgArray[j].src;
				 var newImg = imgSrc.replace("yellow","grey");
				 imgArray[j].src=newImg; 
			} 
	   } 
	} 
} 
//control media play or pause
function playPauseMeida(actObj){
	if(actObj.className.indexOf("_player_play")>=0){
		actObj.className = actObj.className.replace("_player_play","_player_pause");	
	}
	else {
		actObj.className = actObj.className.replace("_player_pause","_player_play");	
	}
}

function silenceVolumn(actObj,aimId){
	var aimObj = document.getElementById(aimId);
	var aimImg = aimObj.getElementsByTagName("img");
	if(actObj.className.indexOf("_player_volumn")>=0){
		actObj.className = actObj.className.replace("_player_volumn","_player_silence");
		for(var j=0;j<aimImg.length;j++){ 
			 var imgSrc =  aimImg[j].src;
			 var newImg = imgSrc.replace("yellow","grey");
			 aimImg[j].src=newImg; 
		}
	}
	else {
		actObj.className = actObj.className.replace("_player_silence","_player_volumn");
		for(var j=0;j<3;j++){ 
			 var imgSrc =  aimImg[j].src;
			 var newImg = imgSrc.replace("grey","yellow");
			 aimImg[j].src=newImg; 
		}
	}
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
		/*listItem.onclick = function() {
			if(-1!=this.className.indexOf("_on"))
			{
				return true;
			}
			themeListState(this, listItems);
			switchStyle(this.id);
		}*/
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
function showSelfServList(actId) {
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
	//if(this.focus){this.blur()}
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
				 if(this.id.substr(0,this.id.length-1)=='staut_'){
					 var s=parseInt(this.id.split('_')[1])
					if(connect) MYAvtiveX.changeStatus(s)   //状态集成
					//alert("成功改变状态");
					 }
					 
					  
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
	actObj.onmouseout = popMenu.onmouseout = function() {
		bShow = false;
		t=setTimeout(popMenu.hide,300);
	}
	document.body.onclick = function() {
		t=setTimeout(popMenu.hide,10);
	}
	if(typeof(subname)!="undefined"){
		if(popMenu.style.display !="none"){
			actObj.className = "current_link";
			popMenu.onmouseout = popMenu.onmouseover = function(){
				actObj.className = "current_link";
				bShow = true;
				clearTimeout(t);
				//alert(fobj.id)
			}
		}
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


//ad switch
var notAuto = false;
function switchAd(itemsId,contentId,textId){
	var items = document.getElementById(itemsId).getElementsByTagName("li");
	var textCon = document.getElementById(textId).getElementsByTagName("li");
	var conObj = document.getElementById(contentId);
	var contents = conObj.getElementsByTagName("li");
	var conTop = [];
	document.getElementById(itemsId).onmouseover = function(){notAuto = true};
	document.getElementById(itemsId).onmouseout = function(){notAuto = false};
	for(var i=0;i<contents.length;i++){
		conTop.push(-contents[i].offsetTop);
	}
	for(var j=0;j<items.length;j++){
		items[j].setAttribute("index",j);
		items[j].onmouseover = function(){
			var curNum = this.getAttribute("index");
			for(var n=0;n<items.length;n++){
				if(items[n].className.indexOf("_current")>=0){
					items[n].className = items[n].className.replace("_current","_normal");	
				}
				if(textCon[n].className.indexOf("_current")>=0){
					textCon[n].className = textCon[n].className.replace("_current","_normal");	
				}
			}
			moveElement(contentId,conTop[curNum],5);
			if(this.className.indexOf("_normal")>=0){
				this.className = this.className.replace("_normal","_current");
			}
			if(textCon[curNum].className.indexOf("_normal")>=0){
				textCon[curNum].className = textCon[curNum].className.replace("_normal","_current");
			}
		}
	}
}
function autoSwitch(itemsId,contentId,textId){
	if(notAuto) return false;
	var items = document.getElementById(itemsId).getElementsByTagName("li");
	var textCon = document.getElementById(textId).getElementsByTagName("li");
	var conObj = document.getElementById(contentId);
	var contents = conObj.getElementsByTagName("li");
	var conTop = [];
	var curNum =0;
	for(var i=0;i<contents.length;i++){
		conTop.push(-contents[i].offsetTop);
	}
	for(var j=0;j<items.length;j++){
		if(items[j].className.indexOf("_current")>=0){
			curNum = j;
		}
	}	
	if(curNum == (items.length -1)){
		for(var n=0;n<items.length;n++){
			if(items[n].className.indexOf("_current")>=0){
				items[n].className = items[n].className.replace("_current","_normal");	
			}
			if(textCon[n].className.indexOf("_current")>=0){
				textCon[n].className = textCon[n].className.replace("_current","_normal");	
			}
		}
		items[0].className = items[0].className.replace("_normal","_current");
		textCon[0].className = textCon[0].className.replace("_normal","_current");
		moveElement(contentId,conTop[0],10);
	}
	else{
		for(var n=0;n<items.length;n++){
			if(items[n].className.indexOf("_current")>=0){
				items[n].className = items[n].className.replace("_current","_normal");	
			}
			if(textCon[n].className.indexOf("_current")>=0){
				textCon[n].className = textCon[n].className.replace("_current","_normal");	
			}
		}
		items[curNum+1].className = items[curNum+1].className.replace("_normal","_current");
		textCon[curNum+1].className = textCon[curNum+1].className.replace("_normal","_current");
		moveElement(contentId,conTop[curNum+1],10);	
	}
}
function moveElement(elementId,final_top,interval) {
	var element = document.getElementById(elementId);
	var speed = 1;
	if(document.all) {
		speed = 10;
	}
	else {
		speed =5;
	}
	
	if (element.movement) {
		clearTimeout(element.movement);
	}
	if (!element.style.marginTop) {
		element.style.marginTop = "0px";
	}
	var mt = parseInt(element.style.marginTop);
	if (mt == final_top) {
		return true;
	}
	if (mt < final_top) {
		var dist = Math.ceil((final_top - mt)/speed);
		mt = mt + dist;
	}
	if (mt > final_top) {
		var dist = Math.ceil((mt - final_top)/speed);
		mt = mt - dist;
	}
	element.style.marginTop = mt + "px";
	var repeat = "moveElement('"+elementId+"',"+final_top+","+interval+")";
	element.movement = setTimeout(repeat,interval);

}
 
