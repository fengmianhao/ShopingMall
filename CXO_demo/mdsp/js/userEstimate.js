$(function(){

  		   rigsterChartNormalFun(); 
		  var month = new Date().getMonth();
		  $('#doMonth ').find("option:eq("+month+")").attr('selected','selected')

 		 //ͼ��Ŀ�Ⱥ͸߶�����
         var width="460",height="200";
		 
		  //����������
 		   var IncomeIncrease = new FusionCharts("chart/Column3D.swf", "IncomeIncreaseChart", "719", "240", "0", "0");
		   IncomeIncrease.setDataURL("data/Column3D_6.xml");		   
		   IncomeIncrease.render("IncomeIncrease");
		 
		   //��ͬ���͵�ҵ���Ƽ�����ֲ�
		      var differentTypeBusinessIncomeDistribute = new FusionCharts("chart/Bubble.swf", "differentTypeBusinessIncomeDistributeChart",width, "250", "0", "0");
		   differentTypeBusinessIncomeDistribute.setDataURL("data/Bubble_1.xml");		   
		   differentTypeBusinessIncomeDistribute.render("differentTypeBusinessIncomeDistribute");
		  
		   //�ײ��Ƽ�����������
		 	var packageRecommendIncomeIncrease = new FusionCharts("chart/Column3D.swf", "packageRecommendIncomeIncreaseChart", width,"250", "0", "1");
			packageRecommendIncomeIncrease.setDataURL("data/Column3D_7.xml");
			packageRecommendIncomeIncrease.render("packageRecommendIncomeIncrease");
		 
		  
		 //�Ƽ�ҵ�񶨹�������
	  	   var recommendBusinessOrderIncrease = new FusionCharts("chart/Line.swf", "recommendBusinessOrderIncreaseChart", width, height, "0", "0");
		   recommendBusinessOrderIncrease.setDataURL("data/Line2D_1.xml");		   
		   recommendBusinessOrderIncrease.render("recommendBusinessOrderIncrease");
		 
		   
		   //�Ƽ���ҵ������
		   var recommendBusinessType = new FusionCharts("chart/Pie2D.swf", "recommendBusinessTypeChart", width, height, "0", "0");
		   recommendBusinessType.setDataURL("data/Pie2D_6.xml");		   
		   recommendBusinessType.render("recommendBusinessType");
		   
		  
           //�Ƽ�������Ӧ�����ʣ������Ǹ����Ƽ�������
 		     var recommendChannelResponeIncrease = new FusionCharts("chart/MSLine.swf", "recommendChannelResponeIncreaseChart", width, height, "0", "0");
		   recommendChannelResponeIncrease.setDataURL("data/MSLine_3.xml");		   
		   recommendChannelResponeIncrease.render("recommendChannelResponeIncrease");

		      //�Ƽ�����������
		    var recommendChannelType = new FusionCharts("chart/Pie2D.swf", "recommendChannelTypeChart", "350", height, "0", "1");
	        recommendChannelType.setDataURL("data/Pie2D_7.xml");
	        recommendChannelType.render("recommendChannelType");
			
			   //��ǰ�����Ƽ�ҵ���û���
             var curOrderRecommendBusinessTimes = new FusionCharts("chart/AngularGauge.swf", "curOrderRecommendBusinessTimesChart", "300", "180", "0", "1");
		   curOrderRecommendBusinessTimes.setDataURL("data/Angular6.xml");		   
		   curOrderRecommendBusinessTimes.render("curOrderRecommendBusinessTimes");

		 //��ǰ�Ƽ���Ӧ����
 		 var curRecommendResponeTimes = new FusionCharts("chart/AngularGauge.swf", "curRecommendResponeTimesChart", "300", "180", "0", "1");
		   curRecommendResponeTimes.setDataURL("data/Angular5.xml");		
		   curRecommendResponeTimes.render("curRecommendResponeTimes");
  		   
		   					// ��ǰ�Ƽ�ҵ�����
		  var curRecommendBusinessTimes = new FusionCharts("chart/AngularGauge.swf", "curRecommendBusinessTimesIncreaseChart", "300", "180", "0", "1");
		   curRecommendBusinessTimes.setDataURL("data/Angular4.xml");		   
		   curRecommendBusinessTimes.render("curRecommendBusinessTimes");
		 


			  
			
  });
