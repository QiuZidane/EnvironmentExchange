var envlist = {    
    // item：环境行信息
    item : document.querySelectorAll("li[name]"),
    // selectedlist：返回选择的行
    selectedlist : function(){
        var SELECTED = "list-group-item active";
        var listitem = this.item;
        for (var i = 0; i < listitem.length; i++) {
            if (listitem[i].className == "list-group-item active") {
                // console.log(listitem[i])
                return listitem[i];
            };
        };
    },
}

// envjson:以json格式保存当前环境列表
function setJsonData(){
    var jsonstr = {};
    var listitem = document.querySelectorAll("li[name]");
    for (var i = 0; i < listitem.length; i++) {
        var name = listitem[i].getAttribute("name");        
        var url = listitem[i].getAttribute("href");
        jsonstr[name] = url;
    };
    // console.log(jsonstr);
    // console.log(JSON.stringify(jsonstr));
    return JSON.stringify(jsonstr);
}
    


// 设置点击列表事件:选取对应环境-->显示遮蔽-->跳转到对应url
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

    // 将列表url信息赋值给跳转和遮蔽内容
    var url = selectT.getAttribute('href');
    console.log('url='+url);
    document.getElementById('loading_text').innerHTML = "正在连接到:" + "<br>" + url;
    jumpToLoading(url);
        
}

// 跳转到loading事件
// 1、加遮蔽    
// 2、间隔1秒后跳转--只是demo这样，效果是遮蔽逐渐消失
function jumpToLoading(url){    
    shadowshow();
    var testUrl = (url=="index0.html") ? "index0.html" : "http://"+url;
    setTimeout(function(){
        window.location.assign(testUrl);
    },1000);
    console.log("testUrl="+testUrl);

}

// ======= 遮蔽处理 =======
function shadowshow(){
    document.getElementById("shadow").style.display = "block";
}
function shadowhide(){
    document.getElementById("shadow").style.display = "none";
}

// ======= 增加测试地址 =======
function addEnvironment(text,envaddress){
    var listitem = document.querySelectorAll("li[name]");    
    var parentlist = document.getElementById('envirlist');
    var newli = document.createElement('li');
    var address = envaddress || "122.133.111.32:9022";
    if (!envaddress) {  // 如果第二个参数是空，说明是鼠标点击新增事件
        text = '测试环境'+ (listitem.length+1);
        newli.innerHTML = '测试环境'+ (listitem.length+1) + ':' + address;
    } else {
        newli.innerHTML = text + ": " + envaddress;
    };    
    newli.setAttribute('name',text);
    newli.setAttribute('class','list-group-item');
    newli.setAttribute('id','list'+ (listitem.length+1));
    newli.setAttribute('href',address);     
    parentlist.appendChild(newli);

    // 更新全局对象envlist.item
    envlist.item = document.querySelectorAll("li[name]");
    setLocalStorage();
}



// 绑定列表点击事件
var envirlist = document.getElementById('envirlist');
if (envirlist) {
    // console.log(envirlist);
    envirlist.addEventListener('click', listSelect, false);
};


// 新增测试环境点击事件
var addenvir = document.getElementsByClassName('addenvir');
if (addenvir) {
    // console.log(addenvir[0]);
    addenvir[0].addEventListener('click', addEnvironment, false);
};


// 获取Json后调用addEnvironment方法更新列表环境
// demo:首次读取本地JSON文件-->用户新增环境后更新HTML并存储到localStorage--->再次登录页面时读取localStorage
// 后续改为首次读取服务器JSON文件展现-->用户新增环境后更新HTML并存储到localStorage-->后台将localStorage信息上传到服务器JSON文件
function getJsonList(){
    $.getJSON("envir.json", function(data) {  //这是异步方式获取Json数据，data就是json对象，不需要再转换了
        for (var key in data) {   
            addEnvironment(key,data[key]); 
            // console.log("address = "+ data[key]);   
        };  
    });
}
// 检测是否支持Html5-web存储
if(typeof(Storage)!=="undefined")
{
    console.log("支持Html5-web存储!");
    // 检查如果已有本地存储信息，则直接读取本地存储数据        
    if (localStorage.jsonflag == "has") {
        console.log("已有本地存储信息(记录数="+localStorage.sumoflist+")，则不读取文件内容");
        console.log(localStorage.jsondata);        
        var localdata = JSON.parse(localStorage.jsondata);
        for (var key in localdata) {   
            addEnvironment(key,localdata[key]); 
            // console.log("address = "+ localdata[key]);   
        };             

    } else {

        console.log("不存在本地存储信息，读取文件内容");
        getJsonList();
    };  

}    
else // 不支持则提示
{
    consolg.log(" Sorry!不支持Html5-web存储,暂时不支持实时增加测试环境!");
} 

/*
 * ======== localStorage处理 ========
 *
 */
// 设置LocalStorage,其中
// localStorage.jsonflag-存在json数据
// localStorage.sumoflist-测试环境的数目
// localStorage.jsondata-具体json数据，字符串形式存储

function setLocalStorage(){

    try{ 
        localStorage.setItem("jsonflag","has"); 
        localStorage.sumoflist = envlist.item.length;
        localStorage.jsondata = setJsonData();
    } catch(oException){ 
        if (oException.name == 'QuotaExceededError'){ 
        console.log('超出本地存储限额！'); 
        // 如果历史信息不重要了，可清空后再设置 
        localStorage.clear(); 
        // 两种设置方法
        localStorage.setItem("jsonflag","has"); 
        localStorage.sumoflist = envlist.item.length;
        localStorage.jsondata = setJsonData();
        } 
    }    
    console.log("设置本地存储属性，测试环境行数="+localStorage.sumoflist); 
};

// 清除localStorage.sumoflist localStorage.jsonflag
var removebtn = document.getElementById('remove');
removebtn.addEventListener('click',function(){
    localStorage.removeItem("sumoflist");
    localStorage.removeItem("jsonflag");
    localStorage.removeItem("jsondata");
    alert("已清空本地存储信息");
    //清空然后重新读取json文件的地址
    // for (var key in environmentList) {   
    //     addEnvironment(key,environmentList[key]); 
    //     console.log("address = "+ environmentList[key]);   
    // };     
},false);









