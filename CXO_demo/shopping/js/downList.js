$(function(){
		   //位置调整
		 handlePosition()
		 
		 $(window).resize(function(){
			 handlePosition()					   
								   })
	
		   
		   $("#inner_search_input").mousedown(function(){
			  $("#downList_search").show()									   
												   })
		   
		   var len=$("#downList_search li").size()
		  $('#downList_search li:eq(0)').attr("lastest","true")
		  $('#downList_search li:eq(0)').addClass("currentLi")
		   $(document).keyup(function(event){			
				var cur=0;
				$("#downList_search li").each(function(){
						if($(this).attr("lastest")){
								if(cur==0&&event.keyCode==38) return;
								if(cur==len-1&&event.keyCode==40) return;
								if(event.keyCode==13){//enter
									// $("#inner_search_input").val($(this).text())
									 $("#downList_search").hide()	
									}
								if(event.keyCode==38){//up
								  current(cur-1)
								  return 0								  
								}else if(event.keyCode==40){//down
								   current(cur+1)
								   return 0
								}
 						 }								   
						cur++;
				  })
			   })									  
			
			var current=function(k){
				  $("#downList_search li").removeAttr('lastest')	
				  $('#downList_search li:eq('+k+')').attr("lastest","true")
				  $("#downList_search li").removeClass('currentLi')
				  $('#downList_search li:eq('+k+')').addClass("currentLi")	
				}
											
			 //downList_search事件
		  $("#downList_search li").hover(function(){
						$("#downList_search li").removeAttr('lastest')	
						$(this).attr("lastest","true")	
						$("#downList_search li").removeClass('currentLi')
						$(this).addClass("currentLi")						  
												  },
										function(){						
						$(this).removeClass("currentLi")					     
								  }).click(function(){
									//alert() 									
								// $("#inner_search_input").val($(this).text())
								 $("#downList_search").hide()	
								 window.setTimeout(function(){
									//页面跳转	
									document.location="#"
															},500)
									               })
		  
		  $("#downList_search").mouseout(function(){
			$(this).find("li").each(function(){
			  if($(this).attr("lastest")) $(this).addClass("currentLi")							 
											 })
		                                           })								
											
		   })
			
	 function handlePosition(){
			   var p=document.getElementById("inner_search_input").getBoundingClientRect()
		       $("#downList_search").css({"left":p.left-2,"top":p.bottom})   
			   }