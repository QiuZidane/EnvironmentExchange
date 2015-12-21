function listSelect(event){
    var SELECTED = 'list-group-item active';
    var UNSELECTED = 'list-group-item';
    var targetlist = event.target;  // 找到触发click事件的list对象
    var listflag = targetlist.getAttribute('class');
    // console.log(btnflag);
    if (listflag == UNSELECTED) {
        console.log('由none更新为active');
        targetlist.setAttribute('class',SELECTED);   
        event.stopPropagation();   
    } else {
        console.log('由active更新为none');
        targetlist.setAttribute('class',UNSELECTED);   
        event.stopPropagation();
    };    
}


var envirlist = document.getElementById('envirlist');
if (envirlist) {
    console.log('envirlist');
    envirlist.addEventListener('click', listSelect, false);
};
