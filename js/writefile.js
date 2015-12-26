if(typeof(Storage)!=="undefined")
{
    console.log("Yes! localStorage and sessionStorage support!");
    // Some code.....
}
else
{
    consolg.log(" Sorry! No web storage support..");
}

var fileManager = function(){
    // 创建一个可以将文件翻译成文件流的对象
    var fso = new ActiveXObject(Scripting.FileSystemObject);

    // 创建一个textStream对象,三个参数
    // 1.  文件的绝对路径
    // 2.  文件的常数 只读=1，只写=2 ，追加=8 等权限。（ForReading 、ForWriting 或 ForAppending 。）；
    // 3.  一个布尔值 允许新建则为true 相反为false；
    var f = fso.createtextfile("C://a.txt",2,true);


}