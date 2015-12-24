var envlist = {
    item : document.querySelectorAll("li[name]"),
    selectedlist : function(){
        var SELECTED = "list-group-item active";
        var listitem = this.item;
        for (var i = 0; i < listitem.length; i++) {
            if (listitem[i].className == "list-group-item active") {
                // console.log(listitem[i])
                return listitem[i];
            };
        };
    }
}

// 设置列表点击事件
function listSelect(event){
    var SELECTED = 'list-group-item active';
    var UNSELECTED = 'list-group-item';
    var activeT = envlist.selectedlist();   // 查找激活状态对象
    var selectT = event.target;             // click事件对象
    
    function setStatus(T){
        var activeFlag = T.getAttribute('class');
        if (activeFlag == UNSELECTED) {
            T.setAttribute('class',SELECTED);  
        } else {
            T.setAttribute('class',UNSELECTED);   
        };        
    }

    if (activeT) {     
        setStatus(activeT);
        setStatus(selectT);
    } else {    // 不存在激活状态的list，只需要处理click对象即可
        setStatus(selectT);
    };

    // 将列表url赋值给跳转按钮
    var url = selectT.getAttribute('href');
    console.log('url='+url);
    var gotourl = document.getElementById('gotourl');
    if (gotourl) {        
        gotourl.setAttribute('href',url);
    };

    jumpToLoading();
        
}

// 跳转到loading事件
// 1、加遮蔽    
// 2、间隔1秒后跳转--只是demo这样，效果是遮蔽逐渐消失
function jumpToLoading(){
    shadowshow();
    setTimeout()
}

function shadowshow(){
    document.getElementById("shadow").style.display = "block";
}  
  

function shadowhide(){
    document.getElementById("shadow").style.display = "none";
}

// 增加地址
function addEnvironment(text,envaddress){
    var elistitem = document.querySelectorAll("li[name]");    
    var parentlist = document.getElementById('envirlist');
    var newli = document.createElement('li');
    var address = envaddress || "122.138.29.154:8080";
    // var textnode = document.createTextNode('测试环境'+ (elistitem.length+1) + ':' + address);
    // newli.appendChild(textnode); // 创建text节点，或者直接设置innerHTML
    if (!envaddress) {  // 如果第二个参数是空，说明是鼠标点击新增事件
        newli.innerHTML = '测试环境'+ (elistitem.length+1) + ':' + address;
    } else {
        newli.innerHTML = text + ": " + envaddress;
    };    
    newli.setAttribute('name','elist');
    newli.setAttribute('class','list-group-item');
    newli.setAttribute('id','list'+ (elistitem.length+1));
    newli.setAttribute('href',address);     
    parentlist.appendChild(newli);

    // 更新全局对象envlist.item
    envlist.item = document.querySelectorAll("li[name]");;

}



// 列表点击事件
var envirlist = document.getElementById('envirlist');
if (envirlist) {
    console.log(envirlist);
    envirlist.addEventListener('click', listSelect, false);
};


// 新增列表行点击事件
var addenvir = document.getElementsByClassName('addenvir');
if (addenvir) {
    console.log(addenvir[0]);
    addenvir[0].addEventListener('click', addEnvironment, false);
};


// 获取Json后调用addEnvironment方法更新列表环境
$.getJSON("envir.json", function(data) {  //这是异步方式获取Json数据，data就是json对象，不需要再转换了
    for (var key in data) {   
        addEnvironment(key,data[key]); 
        console.log("address = "+ data[key]);   
    };
    // $("#list2").html("功能环境: 122.138.29.155");

});







