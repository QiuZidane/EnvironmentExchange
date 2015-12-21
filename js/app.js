var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        console.log('Received Event: ' + id);
    }
};

app.initialize();

//alert
if(obj = $("#alert-submit")){
    obj.bind('click', function () {
        title = $("#alert-title").val();
        msg = $("#alert-msg").val();
        button_lable = $("#alert-button").val();
        navigator.notification.alert(msg, null, title, button_lable);
    });
}

//confirm
if(obj = $("#confirm-submit")){
    obj.bind('click', function () {
        title = $("#confirm-title").val();
        msg = $("#confirm-msg").val();
        button_ok_lable = $("#confirm-button-ok").val();
        button_cancel_lable = $("#confirm-button-cancel").val();
        navigator.notification.confirm(msg, function(buttonIndex){
                if(buttonIndex == 1){
                    $("#result_area").html("您点击了 "+button_ok_lable);
                }else if(buttonIndex == 2){
                    $("#result_area").html("您点击了 "+button_cancel_lable);
                }
            }, title, [button_ok_lable, button_cancel_lable]);
    });
}

//prompt
if(obj = $("#prompt-submit")){
    obj.bind('click', function () {
        title = $("#prompt-title").val();
        msg = $("#prompt-msg").val();
        default_value = $("#prompt-default").val();
        button_ok_lable = $("#prompt-button-ok").val();
        button_cancel_lable = $("#prompt-button-cancel").val();
        navigator.notification.prompt(msg, function(results){
                if(results.buttonIndex == 1){
                    $("#result_area").html("您点击了 "+button_ok_lable+" , 输入的内容为：‘"+results.input1+"’");
                }else if(results.buttonIndex == 2){
                    $("#result_area").html("您点击了 "+button_cancel_lable);
                }  
            }, title, [button_ok_lable, button_cancel_lable], default_value);
    });
}

//camera
if(obj = $("#camera-submit")){
    obj.bind('click', function () {
        navigator.camera.getPicture(onCameraSuccess, onCameraFail, { 
                                                     quality: 50,
                                             destinationType: Camera.DestinationType.DATA_URL,
                                                   allowEdit: true });
    });
}

function onCameraSuccess(imageData) {
    $("#camera-result").css("display","block");
    $("#camera-result").attr("src", "data:image/jpeg;base64," + imageData);
}

function onCameraFail(message) {
    $("#camera-result").css("display","none");
	navigator.notification.alert("原因: "+ message, null, "拍照失败", "确定");
}

//photo
if(obj = $("#photo-submit")){
    obj.bind('click', function () {
        navigator.camera.getPicture(onPhotoSuccess, onPhotoFail, { 
                                                     quality: 50,
                                             destinationType: Camera.DestinationType.DATA_URL,
                                                  sourceType: Camera.PictureSourceType.PHOTOLIBRARY });
    });
}

function onPhotoSuccess(imageData) {
    $("#camera-result").css("display","block");
    $("#camera-result").attr("src", "data:image/jpeg;base64," + imageData);
}

function onPhotoFail(message) {
    $("#camera-result").css("display","none");
    navigator.notification.alert("原因: "+ message, null, "获取图片失败", "确定");
}

//scan
if(obj = $("#scan-submit")){
    obj.bind('click', function () {
        navigator.barcodeScanner.scan(onScanSuccess, onScanFail);
    });
}

function onScanSuccess(result) {
    resultString = "扫描结果：" + result.text;
    $("#result_area").html(resultString);
}

function onScanFail(message) {
    $("#result_area").html("");
    navigator.notification.alert("原因: "+ message, null, "扫描二维码失败", "确定");
}

//device
if(obj = $("#device-submit")){
    obj.bind('click', function () {
        resultString = "设备信息" 
                        +"</br>model: " + device.model
                        +"</br>platform: " + device.platform
                        +"</br>uuid: " + device.uuid
                        +"</br>version: " + device.version
                        +"</br>simulator: " + device.isVirtual
                        +"</br>serial: " + device.serial;
        $("#result_area").html(resultString);
    });
}