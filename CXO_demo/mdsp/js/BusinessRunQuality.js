$(function(){
		   rigsterChartNormalFun();

		   //ͼ��Ŀ�Ⱥ͸߶�����
         var width="470",height="200";
			
			//�û������
		   var custormerSatisfaction = new FusionCharts("chart/Bar2D.swf", "custormerSatisfactionChart", "205", "320", "0", "1");
	        custormerSatisfaction.setDataURL("data/Bar2D_1.xml");
	        custormerSatisfaction.render("custormerSatisfaction");
			
			//�û���
			 var userQuqlity = new FusionCharts("chart/AngularGauge.swf", "userQuqlityChart", "200", "180", "0", "1");
	        userQuqlity.setDataURL("data/Angular15_1.xml");
	        userQuqlity.render("userQuqlity");
			
			//�û�ARPU
			 var userARPU = new FusionCharts("chart/AngularGauge.swf", "userARPUChart", "200", "180", "0", "1");
	        userARPU.setDataURL("data/Angular15_2.xml");
	        userARPU.render("userARPU");
			
			//���ݷֲ�
			var contentDistribute = new FusionCharts("chart/Pie2D.swf", "contentDistributeChart", "310", "250", "0", "1");
	        contentDistribute.setDataURL("data/Pie2D_1.xml");
	        contentDistribute.render("contentDistribute");
		
		    			
			//ҵ��ʹ�����
			 var businessUseCondition = new FusionCharts("chart/MSLine.swf", "businessUseConditionChart", "417", "300", "0", "0");
	        businessUseCondition.setDataURL("data/MSLine_1.xml");
	        businessUseCondition.render("businessUseCondition");
		    
			//ҵ���������
			 var businessIncomeCondition = new FusionCharts("chart/MSColumn3DLineDY.swf", "businessIncomeConditionChart", "517", "350", "0", "0");
	        businessIncomeCondition.setDataURL("data/Col3DLineDY_1.xml");
	        businessIncomeCondition.render("businessIncomeCondition");
        
		
		   		   //��ǰҵ���˶�����
		      var curBusinessUnsubscribeTimes = new FusionCharts("chart/AngularGauge.swf", "curBusinessUnsubscribeTimesChart",width, height, "0", "1");
		   curBusinessUnsubscribeTimes.setDataURL("data/Angular2.xml");		   
		   curBusinessUnsubscribeTimes.render("curBusinessUnsubscribeTimes");
 
           //��ǰ�û���
		 	var curUserQuality = new FusionCharts("chart/Cylinder.swf", "curUserQualityChart", "140",height, "0", "1");
			curUserQuality.setDataURL("data/Cylinder3_1.xml");
			curUserQuality.render("curUserQuality");
		   
		   //��ǰҵ���������
		    var curBusinessBrowseTimes = new FusionCharts("chart/AngularGauge.swf", "curBusinessBrowseTimesChart", "350", height, "0", "1");
	        curBusinessBrowseTimes.setDataURL("data/Angular1.xml");
	        curBusinessBrowseTimes.render("curBusinessBrowseTimes");
			
			 //������� 
		     var sharedTimes = new FusionCharts("chart/AngularGauge.swf", "sharedTimesChart", "200", "200", "0", "1");
		   sharedTimes.setDataURL("data/numberOfSubscription.xml");		   
		   sharedTimes.render("sharedTimes");
			
			 //��ǰҵ������1
		    var addText_1 = new FusionCharts("chart/HLinearGauge.swf", "addText_1Chart", "350", "80", "0", "1");
	        addText_1.setDataURL("data/Linear1.xml");
	        addText_1.render("addText_1");
			
					 //��ǰҵ������2
		    var addText_2 = new FusionCharts("chart/AngularGauge.swf", "addText_2Chart", "350", height, "0", "1");
	        addText_2.setDataURL("data/Angular3.xml");
	        addText_2.render("addText_2");

		
		//ʵʱɨ��
		$('#timeScan').click(function(){
			//���ʱ��						  
			activeTiming();						  
									  })
		 function activeTiming(){
			 //��ʱ��,ÿ6��͸ı�һ������
			  var pool=window.setInterval(function(){
  					//��ǰҵ���˶�����				
					 var curBusinessUnsubscribeTimesChart = getChartFromId("curBusinessUnsubscribeTimesChart");
 			         curBusinessUnsubscribeTimesChart.setData(1,Math.random()*1 );
					 
					 //��ǰҵ���������
					  var curBusinessBrowseTimesChart = getChartFromId("curBusinessBrowseTimesChart");
 			         curBusinessBrowseTimesChart.setData(1,Math.random()*10 );
					 
					 //��ǰ�û���
					  var curUserQualityChart = getChartFromId("curUserQualityChart");
 			         curUserQualityChart.setData(Math.random()*100 );
					 
					 //�û�������
					  var sharedTimesChart = getChartFromId("sharedTimesChart");
 			         sharedTimesChart.setData(1,Math.random()*50 );
					 
					  //��ǰҵ������1
					  var addText_1Chart = getChartFromId("addText_1Chart");
 			         addText_1Chart.setData(1,Math.random()*100 );
					 
					 //��ǰҵ������2
					  var addText_2Chart = getChartFromId("addText_2Chart");
 			         addText_2Chart.setData(1,Math.random()*100 );
					 
			  },6000)
		  }
			  
				//selectLocation�˵���ѡ��
				var numPools=1;
			$('.selectLocation li:eq(0),.selectLocation li:eq(1)').click(function(){
 				if($(this).hasClass('curSelLi')) return;
				$('.selectLocation li').removeClass('curSelLi');
				$(this).addClass('curSelLi');
			        //EndOfMonth�������ݸı�
			         var userQuqlityChart = getChartFromId("userQuqlityChart");
 			         userQuqlityChart.setData(1,Math.random()*100 );
					  var userARPUChart = getChartFromId("userARPUChart");
 			         userARPUChart.setData(1,Math.random()*20 );
					
					 if(numPools==2) numPools=0;
					 numPools++; 
 					 businessUseCondition = new FusionCharts("chart/MSLine.swf", "businessUseConditionChart", "417", "300", "0", "0");
	                 businessUseCondition.setDataURL("data/MSLine_"+numPools+".xml");
	                 businessUseCondition.render("businessUseCondition");
					 
					 businessIncomeCondition = new FusionCharts("chart/MSColumn3DLineDY.swf", "businessIncomeConditionChart", "460", "350", "0", "0");
	                 businessIncomeCondition.setDataURL("data/Col3DLineDY_"+numPools+".xml");
	                 businessIncomeCondition.render("businessIncomeCondition");
					 
			custormerSatisfaction = new FusionCharts("chart/Bar2D.swf", "custormerSatisfactionChart", "200", "320", "0", "1");
	        custormerSatisfaction.setDataURL("data/Bar2D_"+numPools+".xml");
	        custormerSatisfaction.render("custormerSatisfaction");
			
			//���ݷֲ�
			 contentDistribute = new FusionCharts("chart/Pie2D.swf", "contentDistributeChart", "330", "250", "0", "1");
	        contentDistribute.setDataURL("data/Pie2D_"+numPools+".xml");
	        contentDistribute.render("contentDistribute");
					 
			            
			})
	  
			

			
  });
