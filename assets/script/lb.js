alert('ok');
var $porinter = $('#pointer');
var $textarea = $('#textarea');
var msg = "This is a message typeed by lvni \n";
function flash_pinter(){
    $porinter.toggle();
}
function sleep(n){
    var start=new Date().getTime();
    while(true) if(new Date().getTime()-start>n) break;
}
function f2(){
/*长任务*/
sleep(3000);
text = "ln";
$textarea.html($textarea.html() + text);
}
function f3(){
text = " out ";
$textarea.html($textarea.html() + text);
}
function emf(){/*空函数，注册事件，实现异步*/}
function f1(){
    setTimeout(function(){$(emf).trigger('done')},1000);
    setInterval(flash_pinter,800);
}
$(emf).bind('done',f3);
$(emf).bind('done',f2);
f1();
alert('why');
