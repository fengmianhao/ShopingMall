$(function(){
		   rigsterChartNormalFun();
		   
		 //ͼ��Ŀ�Ⱥ͸߶�����
         var width="470",height="200";
		   
		   //�û��ֲ�
		   var userDistribute = new FusionCharts("chart/Pie2D.swf", "userDistributeChart", width, height, "0", "0");
		   userDistribute.setDataURL("data/Pie2D_3.xml");		   
		   userDistribute.render("userDistribute");
		   
		   
           //�����Ż��ֲ�
 		     var visitDoorDistribute = new FusionCharts("chart/Column3D.swf", "visitDoorDistributeChart", width, height, "0", "0");
		   visitDoorDistribute.setDataURL("data/Column3D_4.xml");		   
		   visitDoorDistribute.render("visitDoorDistribute");
 

		      //��������
		    var contentType = new FusionCharts("chart/Column3D.swf", "contentTypeChart",width, height, "0", "1");
	        contentType.setDataURL("data/Column3D_5.xml");
	        contentType.render("contentType");
        
		  //�ն�ƽ̨����
		    var terminalPlatformType = new FusionCharts("chart/Pie2D.swf", "terminalPlatformTypeChart", width, height, "0", "1");
	        terminalPlatformType.setDataURL("data/Pie2D_5.xml");
	        terminalPlatformType.render("terminalPlatformType");
			
			//�ն�Ʒ������
		    var terminalBrandType = new FusionCharts("chart/Pie2D.swf", "terminalBrandTypeChart", width, height, "0", "1");
	        terminalBrandType.setDataURL("data/Pie2D_4.xml");
	        terminalBrandType.render("terminalBrandType");	 
			
			 

  });
