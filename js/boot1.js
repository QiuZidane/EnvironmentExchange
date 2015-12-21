function btnSelect(){
    var SELECTED = 'btn btn-info active';
    var UNSELECTED = 'btn btn-default';
    var btnflag = btn1.getAttribute('class');
    // console.log(btnflag);
    if (btnflag == UNSELECTED) {
        console.log('由none更新为active');
        btn1.setAttribute('class',SELECTED);        
    } else {
        console.log('由active更新为none');
        btn1.setAttribute('class',UNSELECTED);        
    };    
}

function listSelect(){
    var SELECTED = 'list-group-item active';
    var UNSELECTED = 'list-group-item';
    var listflag = list1.getAttribute('class');
    // console.log(btnflag);
    if (listflag == UNSELECTED) {
        console.log('由none更新为active');
        list1.setAttribute('class',SELECTED);        
    } else {
        console.log('由active更新为none');
        list1.setAttribute('class',UNSELECTED);        
    };    
}

function tableSelect(){
    var SELECTED = 'success';
    var UNSELECTED = '';
    var tableflag = table1.getAttribute('class');
    // console.log(btnflag);
    if (tableflag == UNSELECTED) {
        console.log('由none更新为active');
        table1.setAttribute('class',SELECTED);        
    } else {
        console.log('由active更新为none');
        table1.setAttribute('class',UNSELECTED);        
    };    
}


var btn1 = document.getElementById('btn1');
if (btn1) {
    btn1.addEventListener('click', btnSelect, false);
};
var list1 = document.getElementById('list1');
if (list1) {
    console.log('list1');
    list1.addEventListener('click', listSelect, false);
};
var table1 = document.getElementById('table1');
if (table1) {
    console.log('list1');
    table1.addEventListener('click', tableSelect, false);
};
