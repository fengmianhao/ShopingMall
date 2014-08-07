$(function(){

  		   rigsterChartNormalFun(); 
		  var month = new Date().getMonth();
		  $('#doMonth ').find("option:eq("+month+")").attr('selected','selected')

 		 //图表的宽度和高度设置
         var width="460",height="200";
		 
		  //收入增长率
 		   var IncomeIncrease = new FusionCharts("chart/Column3D.swf", "IncomeIncreaseChart", "719", "240", "0", "0");
		   IncomeIncrease.setDataURL("data/Column3D_6.xml");		   
		   IncomeIncrease.render("IncomeIncrease");
		 
		   //不同类型的业务推荐收入分布
		      var differentTypeBusinessIncomeDistribute = new FusionCharts("chart/Bubble.swf", "differentTypeBusinessIncomeDistributeChart",width, "250", "0", "0");
		   differentTypeBusinessIncomeDistribute.setDataURL("data/Bubble_1.xml");		   
		   differentTypeBusinessIncomeDistribute.render("differentTypeBusinessIncomeDistribute");
		  
		   //套餐推荐收入增长率
		 	var packageRecommendIncomeIncrease = new FusionCharts("chart/Column3D.swf", "packageRecommendIncomeIncreaseChart", width,"250", "0", "1");
			packageRecommendIncomeIncrease.setDataURL("data/Column3D_7.xml");
			packageRecommendIncomeIncrease.render("packageRecommendIncomeIncrease");
		 
		  
		 //推荐业务定购增长率
	  	   var recommendBusinessOrderIncrease = new FusionCharts("chart/Line.swf", "recommendBusinessOrderIncreaseChart", width, height, "0", "0");
		   recommendBusinessOrderIncrease.setDataURL("data/Line2D_1.xml");		   
		   recommendBusinessOrderIncrease.render("recommendBusinessOrderIncrease");
		 
		   
		   //推荐的业务类型
		   var recommendBusinessType = new FusionCharts("chart/Pie2D.swf", "recommendBusinessTypeChart", width, height, "0", "0");
		   recommendBusinessType.setDataURL("data/Pie2D_6.xml");		   
		   recommendBusinessType.render("recommendBusinessType");
		   
		  
           //推荐渠道响应增长率（竖列是各种推荐渠道）
 		     var recommendChannelResponeIncrease = new FusionCharts("chart/MSLine.swf", "recommendChannelResponeIncreaseChart", width, height, "0", "0");
		   recommendChannelResponeIncrease.setDataURL("data/MSLine_3.xml");		   
		   recommendChannelResponeIncrease.render("recommendChannelResponeIncrease");

		      //推荐的渠道类型
		    var recommendChannelType = new FusionCharts("chart/Pie2D.swf", "recommendChannelTypeChart", "350", height, "0", "1");
	        recommendChannelType.setDataURL("data/Pie2D_7.xml");
	        recommendChannelType.render("recommendChannelType");
			
			   //当前定购推荐业务用户数
             var curOrderRecommendBusinessTimes = new FusionCharts("chart/AngularGauge.swf", "curOrderRecommendBusinessTimesChart", "300", "180", "0", "1");
		   curOrderRecommendBusinessTimes.setDataURL("data/Angular6.xml");		   
		   curOrderRecommendBusinessTimes.render("curOrderRecommendBusinessTimes");

		 //当前推荐响应次数
 		 var curRecommendResponeTimes = new FusionCharts("chart/AngularGauge.swf", "curRecommendResponeTimesChart", "300", "180", "0", "1");
		   curRecommendResponeTimes.setDataURL("data/Angular5.xml");		
		   curRecommendResponeTimes.render("curRecommendResponeTimes");
  		   
		   					// 当前推荐业务次数
		  var curRecommendBusinessTimes = new FusionCharts("chart/AngularGauge.swf", "curRecommendBusinessTimesIncreaseChart", "300", "180", "0", "1");
		   curRecommendBusinessTimes.setDataURL("data/Angular4.xml");		   
		   curRecommendBusinessTimes.render("curRecommendBusinessTimes");
		 


			  
			
  });
