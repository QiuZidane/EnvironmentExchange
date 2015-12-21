tester = {
	clear : function() {
		log.clear();
	},
	/*------------------log test--------------------------------*/
	test_client_log : function() {
		log.initTime();
		log.logString("-----test wrap log string:------");
		log.logString("log warp is 4");
		log.setWrapLength(4);
		log.logString("log 0123456789AB as:");
		log.logLine("0123456789AB");
		log.logString("log 0123456789 as:");
		log.logLine("0123456789");
		log.logString("log 012 as:");
		log.log("012");
		log.logString("log 01 as:");
		log.log("01");
		log.logString("log 0 as:");
		log.logLine("0");
		log.logString("log warp is 35");
		log.setWrapLength(35);
		log.log("log empty string:");
		log.log("");
		log.logString("-----log null object:------");
		log.log(null);
		log.logString("----og undefined object:------");
		var temp;
		log.log(temp); // undefined data.
		log.logString("-----log  a function:------");
		log.log(this.test_client_alert);
		log.logString("----- log   an object:------");
		log.log(tester);
		log.logString("-----test  over.--------");
		log.logTime();
	},
	test_client_log_usedTime: function() {
		log.log("-----test time used display:-----");
		log.log("display 9999ms time used:");
		log.logString(log.usedTime(9999));
		log.log("display 10ms time used:");
		log.logString(log.usedTime(10));
		log.log("display 999999ms time used:");
		log.logString(log.usedTime(99999));
		log.log("display 1999999000ms time used:");
		log.logString(log.usedTime(1999999000));
	},
    test_log_logJsonEncodeData:function(){
	    var a={
	    		a:1,
	    		b:2
	    };
	    log.logString("test log test_log_logJsonEncodeData");
	    log.logJsonEncodeData(coder.encode(JSON.stringify(a)));
	},
	test_client_protocolName : function() {
		log.log("protocol test templte.");
	},
	/*------------------client.alert--------------------------------*/
	test_client_alert : function() {
		client.alert("alert unit test", "hello ICBC", "log.logLine",
				"log.logJsonString");
	},
	/*------------------client.exitApp--------------------------------*/
	test_exitApp : function() {
		client.exitApp("log.logJsonString","log.logJsonString");
	},

	/*------------------client.saveData--------------------------------*/
	test_saveData_success : function() {
		var testData = {
			a : 1,
			b : 2,
			c : "3",
			d : true
		};
		client.saveData("testData", testData, "log.logLine",	"log.logJsonEncodeData");
	},
	test_saveData_falied : function() {
		client.saveData("testData", null,  "log.logLine","log.logJsonEncodeData");
	},
	 test_client_confirm:function(){
		client.confirm("here is title for confirm","here is detail for confirm",  "log.logLine","log.logJsonEncodeData");
	},
	test_client_prompt:function (){
		client.prompt("here is title","here is message tip for input:", "log.logLine","log.logJsonEncodeData");
	},
	test_client_saveData_success:function(){
		var dataName="abc";
		var dataValue="123";
		client.saveData(dataName, dataValue, "log.logLine","log.logJsonEncodeData");
	},
	test_client_saveData_falied:function(){
		var dataName="abc";
		client.saveData(dataName, null, "log.logLine","log.logJsonEncodeData");
	},
	test_client_loadData_success:function(){
		var dataName="abc";
		client.loadData(dataName,"log.logJsonEncodeData","log.logJsonEncodeData");
	},
	loadData:function(msg){
		log.logLine(msg);
		var dataName="abc";
		client.loadData(dataName, "log.logLine","log.logJsonEncodeData");
	},
	test_client_loadData_failed:function(){
		var dataName="kkk";
		client.loadData(dataName, "log.logJsonEncodeData","log.logJsonEncodeData");
	},
	test_client_clearData:function(){
		var dataName="abc";
		client.clearData(dataName, "log.logLine","log.logJsonEncodeData");
	},
	test_client_getAllData:function(){
		client.getAllData("log.logJsonEncodeData","log.logJsonEncodeData");
	},
	test_client_clearAllData:function(){
		client.clearAllData( "log.logLine","log.logJsonEncodeData");
	},
	getAllData:function(msg){
		log.logLine("save data result:"+msg);
		client.getAllData("log.log.logJsonEncodeData","log.logJsonEncodeData");
	},
	test_client_getDeviceInfo: function (){
		 client.getDeviceInfo("log.logJsonEncodeData", "log.logJsonEncodeData");
	 },
	test_client_initDeviceInfo: function (callback){
		 client.initDeviceInfo("log.logJsonEncodeData", "log.logJsonEncodeData",callback);
	 },
	 test_client_checkUpdate: function (){
		 client.checkUpdate("log.logJsonEncodeData", "log.logJsonEncodeData"); 
	 },
	 test_client_getPackage: function(callback){
	 	 client.getPackage("log.logJsonEncodeData", "log.logJsonEncodeData", callback);
	 },
	 //------------cache test ---------------------
	 test_client_cleanCache: function (){
		 client.cleanCache("log.logLine", "log.logJsonEncodeData");
	 },
	 test_client_enableCache:function(){
		 client.enableCache("log.logLine", "log.logJsonEncodeData");
	 },
	 test_client_disableCache:function(){
		 client.disableCache("log.logLine", "log.logJsonEncodeData");
	 },
	 //------------init test -------------------------
	 test_client_init: function (){
		 client.init("log.logLine", "log.logJsonEncodeData");
	 },
	 test_client_saveLang:function (){
		 client.saveLang("zh-CN","log.logLine", "log.logJsonEncodeData");
	 },
	 test_client_saveZone:function(){
		 client.saveZone("110","log.logLine", "log.logJsonEncodeData");
	 },
	 //----------------test  log utility------------------
	 test_client_startLog:function(){
		 client.startLog("log.logLine", "log.logJsonEncodeData");
	 },
	 test_client_stopLog:function(){
		 client.stopLog("log.logLine", "log.logJsonEncodeData");
	 },
	 test_client_saveScreen:function(){
		 client.saveScreen("/Users/kfzxzhuhaq/Desktop/UploadSource/testsaveScreen0830.png", "log.logLine", "log.logJsonEncodeData");
	 },
	 test_client_uploadScreen:function(){
		 client.uploadScreen("/Users/kfzxzhuhaq/Desktop/UploadSource/001Screen.png", "http://localhost:8080/mobileTest/TestUploadFile","log.logLine", "log.logJsonEncodeData");
	 },
	 test_client_getScreenList:function(){
		 client.getScreenList("log.logLine", "log.logJsonEncodeData");
	 },
	 //-------------------test presendWindow-------------------	 
	 test_client_presendWindow:function(){
		 client.presendWindow("http://localhost:8080/mobileTest/index.html", "100","100","300","400","0","log.logLine", "log.logJsonEncodeData");
	 },
	 //-------------------test setClientEventHandler-------------------	 
	 test_client_setClientEventHandler:function()
	 {
		 var event = ["home","back","menu"];
		 var doEvent = ["doHome()","doBack()","doMenu()"];
		 client.setClientEventHandler(event,doEvent,"log.logLine", "log.logJsonEncodeData");
		 
	 },
	 //-------------------test Utility -------------------
	 test_client_pickPhoto:function(){
		 client.pickPhoto("http://192.168.1.87:8080/mobileTest/TestUploadFile","log.logLine", "log.logJsonEncodeData");
	 },
	 test_client_takePhoto:function(){
		 client.takePhoto("http://192.168.1.87:8080/mobileTest/TestUploadFile","takePhoto", "log.logJsonEncodeData", "log.logJsonEncodeData");
	 },
	 test_client_screenLock:function()
	 {
		 client.screenLock("log.logLine", "log.logJsonEncodeData");
	 },
	 test_client_showTabBar:function(showFlag)
	 {
		client.showTabBar(showFlag, "/test/clientUI/tabBarPage.html", "log.logLine", "log.logJsonEncodeData"); 
	 },
	 test_client_tabBarBtnClicked:function(btnId)
	 {
		 var pageUrlStr = "";
		 
		 if(btnId == "btn0")
		 {
			 pageUrlStr = "/test/clientUI/showTabBar.html";
		 }
		 else if(btnId == "btn1")
		 {
			 pageUrlStr	= "/test/cachedHtml/mainMenu1.html"; 
		 }
		 else if(btnId == "btn2")
		 {
			 pageUrlStr = "/test/cachedHtml/mainMenu2.html";
		 }

		 client.activePage(pageUrlStr, "log.logLine", "log.logJsonEncodeData"); 
	 },
	 test_client_scanCode:function(){
		 client.scanCode("scanCode","","log.logLine", "log.logJsonEncodeData");
	 },
	 test_client_datepicker:function(){
		 client.datepicker("datepicker","","log.logLine", "log.logJsonEncodeData");
	 },
	 connectPushServer:function(connectionName,flag,onSuccess,onError,onhandleMsg){
		 if(flag){
			client.connect(connectionName,flag,onSuccess,onError,onhandleMsg);
		 }else{
			client.disconnect(connectionName,flag,onSuccess,onError,"");
		 }
	 },
	 test_client_subscribe:function(connectionName,onSuccess,onError){
		client.subscribe(connectionName,onSuccess,onError);
	 },
	 test_client_unsubscribe:function(){
		// client.unsubscribe("unsubscribe","","log.logLine", "log.logJsonEncodeData");
	 },
	 test_client_publish:function(){
		// client.publish("publish","","log.logLine", "log.logJsonEncodeData");
	 },
	 
};
