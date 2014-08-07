$(function(){
  $(".dragable").sortable({
			connectWith: '.dragable'
		});
  $(".dragable").disableSelection();
  
function killErrors() 
{
return true;
}
window.onerror = killErrors;
		//主菜单的切换
		$('.tabMainMenu ul').click(function(){
		     if($(this).hasClass('menuBtn')) return;
			  $('.menuBtn').find('li:eq(0)').removeClass('mainMenuLeft').andSelf().addClass('omainMenuLeft');
			  $('.menuBtn').find('li:eq(1)').removeClass('mainMenuCenter').andSelf().addClass('omainMenuCenter');
			  $('.menuBtn').find('li:eq(2)').removeClass('mainMenuRight').andSelf().addClass('omainMenuRight');
			   $('.menuBtn').removeClass('menuBtn').andSelf().addClass('omenuBtn');
			 
			  $(this).removeClass('omenuBtn').andSelf().addClass('menuBtn');
			  $(this).find('li:eq(0)').removeClass('omainMenuLeft').andSelf().addClass('mainMenuLeft');
			  $(this).find('li:eq(1)').removeClass('omainMenuCenter').andSelf().addClass('mainMenuCenter');
 		      $(this).find('li:eq(2)').removeClass('omainMenuRight').andSelf().addClass('mainMenuRight');
			  
			  //show and hide 主菜单的切换
			 $('.flagMain').hide();
			 var idStr=$(this).find('li:eq(1)').attr('id');
			 $('#'+idStr.split('_')[1]).show();
			 
		})
		
		//图表的宽度和高度设置
         var width="460",height="200";
		 //图表的生成
	  	  var oneTest = new FusionCharts("chart/Line.swf", "oneTestChart", width, height, "0", "0");
		   oneTest.setDataURL("data/Line2D.xml");		   
		   oneTest.render("oneTest");
		 
		   
		   var twoTest = new FusionCharts("chart/Pie2D.swf", "twoTestChart", width, height, "0", "0");
		   twoTest.setDataURL("data/Pie2D.xml");		   
		   twoTest.render("twoTest");
		   
		      var threeTest = new FusionCharts("chart/Bubble.swf", "threeTestChart",width, height, "0", "0");
		   threeTest.setDataURL("data/Bubble.xml");		   
		   threeTest.render("threeTest");
		   
		     var thourTest = new FusionCharts("chart/Column3D.swf", "thourTestChart", width, height, "0", "0");
		   thourTest.setDataURL("data/Column3D_4.xml");		   
		   thourTest.render("thourTest");
 
		 	var sixTest = new FusionCharts("chart/Cylinder.swf", "sixTestChart", "140",height, "0", "1");
			sixTest.setDataURL("data/Cylinder3_1.xml");
			sixTest.render("sixTest");
		   
		    var fiveTest = new FusionCharts("chart/AngularGauge.swf", "fiveTestChart", "350", height, "0", "1");
	        fiveTest.setDataURL("data/Angular1.xml");
	        fiveTest.render("fiveTest");
			
			//custormerSatisfaction
		   var custormerSatisfaction = new FusionCharts("chart/Bar2D.swf", "custormerSatisfactionChart", "200", "350", "0", "1");
	        custormerSatisfaction.setDataURL("data/Bar2D_1.xml");
	        custormerSatisfaction.render("custormerSatisfaction");
			
			//EndOfMonth
			 var EndOfMonth1 = new FusionCharts("chart/AngularGauge.swf", "EndOfMonth1Chart", "250", "250", "0", "1");
	        EndOfMonth1.setDataURL("data/Angular15_1.xml");
	        EndOfMonth1.render("EndOfMonth1");
			
			//EndOfMonth
			 var EndOfMonth2 = new FusionCharts("chart/AngularGauge.swf", "EndOfMonth2Chart", "250", "250", "0", "1");
	        EndOfMonth2.setDataURL("data/Angular15_2.xml");
	        EndOfMonth2.render("EndOfMonth2");
			
			//EndOfMonth
			 var EndOfMonth3 = new FusionCharts("chart/AngularGauge.swf", "EndOfMonth3Chart", "250", "250", "0", "1");
	        EndOfMonth3.setDataURL("data/Angular15_3.xml");
	        EndOfMonth3.render("EndOfMonth3");
			
			
			
			//dailyExecutive
			 var dailyExecutive = new FusionCharts("chart/MSCombi2D.swf", "EndOfMonthChart", "460", "350", "0", "0");
	        dailyExecutive.setDataURL("data/Combi2D_1.xml");
	        dailyExecutive.render("dailyExecutive");
			
			//dailyVisit
			 var dailyVisit = new FusionCharts("chart/MSLine.swf", "EndOfMonthChart", "460", "350", "0", "0");
	        dailyVisit.setDataURL("data/MSLine_1.xml");
	        dailyVisit.render("dailyVisit");
        
		//在6秒之后改变图表的数据
			  var pool=window.setInterval(function(){
					 var fiveTestChart = getChartFromId("fiveTestChart");
 			         fiveTestChart.setData(1,Math.random()*100 );
					 
					  var sixTestChart = getChartFromId("sixTestChart");
 			         sixTestChart.setData(Math.random()*100 );
			  },6000)
			  
				//selectLocation菜单项选择
				var numPools=1;
			$('.selectLocation li').click(function(){
 				if($(this).hasClass('curSelLi')) return;
				$('.selectLocation li').removeClass('curSelLi');
				$(this).addClass('curSelLi');
			        //EndOfMonth罗盘数据改变
			         var EndOfMonth1Chart = getChartFromId("EndOfMonth1Chart");
 			         EndOfMonth1Chart.setData(1,Math.random()*100 );
					  var EndOfMonth1Chart = getChartFromId("EndOfMonth2Chart");
 			         EndOfMonth2Chart.setData(1,Math.random()*100 );
					  var EndOfMonth1Chart = getChartFromId("EndOfMonth3Chart");
 			         EndOfMonth3Chart.setData(1,Math.random()*100 );
					 if(numPools==5) numPools=1;
					 numPools++;
 					 dailyVisit = new FusionCharts("chart/MSLine.swf", "EndOfMonthChart", "460", "350", "0", "0");
	                 dailyVisit.setDataURL("data/MSLine_"+numPools+".xml");
	                 dailyVisit.render("dailyVisit");
					 
					 dailyExecutive = new FusionCharts("chart/MSCombi2D.swf", "EndOfMonthChart", "460", "350", "0", "0");
	                 dailyExecutive.setDataURL("data/Combi2D_"+numPools+".xml");
	                 dailyExecutive.render("dailyExecutive");
					 
			custormerSatisfaction = new FusionCharts("chart/Bar2D.swf", "custormerSatisfactionChart", "200", "350", "0", "1");
	        custormerSatisfaction.setDataURL("data/Bar2D_"+numPools+".xml");
	        custormerSatisfaction.render("custormerSatisfaction");
					 
			  
			})
	  
			  
			
			//里边列的function	 start 
			$('.column_icon').find('a:eq(0)').click(function(){
			   $(this).parent().parent().next().toggle();
			   if($(this).hasClass('smallBig')){
				 $(this).removeClass('smallBig');
				 $(this).addClass('maxIcon')
			   }else{
				 $(this).removeClass('maxIcon');
				 $(this).addClass('smallBig')
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
			
			//主菜单点击事件
			$('#closeMainMenu_1').click(function(){
			 $('.menuBtn:eq(0)').remove();
			 $('.curActive').remove();
			 $('.omenuBtn:eq(0)').click();
			 $('.oActive').show();
												 })
			
			$('#closeMainMenu_2').click(function(){
			 $('.omenuBtn:eq(0)').remove();
			 $('.oActive').remove();
			 $('.menuBtn:eq(0)').click();
			 $('.curActive').show();
												 })
			
			$('.menuBtn,.omenuBtn').hover(function(){
				$(this).find('.mainBtnClose').show();								   
 												   },
												   
										 function(){
				$(this).find('.mainBtnClose').hide();					 
											     })
			
			
			
  });
