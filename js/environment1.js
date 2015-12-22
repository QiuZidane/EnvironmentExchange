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

    
}

// 增加地址
function addEnvironment(){
    var elistitem = document.querySelectorAll("li[name]");    
    var parentlist = document.getElementById('envirlist');
    var newli = document.createElement('li');
    var textnode = document.createTextNode('测试环境'+ (elistitem.length+1) + ': 122.133.xxx.xxx : 123456');
    newli.appendChild(textnode);
    newli.setAttribute('name','elist');
    newli.setAttribute('class','list-group-item');
    newli.setAttribute('id','list'+ (elistitem.length+1));
    newli.setAttribute('href','#');    
    parentlist.appendChild(newli);

    // 更新全局对象envlist.item
    envlist.item = document.querySelectorAll("li[name]");;

}


var envirlist = document.getElementById('envirlist');
if (envirlist) {
    console.log(envirlist);
    envirlist.addEventListener('click', listSelect, false);
};

var addenvir = document.getElementsByClassName('addenvir');
if (addenvir) {
    console.log(addenvir[0]);
    addenvir[0].addEventListener('click', addEnvironment, false);
};



// var environment;
// function initEnvData() {
//     console.log('123');
//     var dataroot = "../envir.json";
//     $.getJSON(dataroot, function(data) {
//         console.log("data = "+data);
//         environment = data;
//     });
//     console.log('123');
// }

// initEnvData();
// console.log(environment);
// console.log(JSON.stringify(jsondata));