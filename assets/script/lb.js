function sleep(n){
    var start=new Date().getTime();
    while(true) if(new Date().getTime()-start>n) break;
}

/**
 * 将字符直接打印在目标上
 * 可以用静态成员数组的办法，将目标缓存，减少操作dom的消耗
 * #第三方库的元素选择器是否有做缓存
 **/

function Typing(params){
    params = params || {};
    var target = params.target;
    var message = params.message;
    var rate = params.rate || 150;
    var point_rate = 500;
    var pointer = params.pointer;
    var flash_pinter =function (){
        $(pointer).toggle();
    }
    // 启动光标
    setInterval(flash_pinter,point_rate);
    var point = 0;
    var messagelen = message.length;
    var Print2target = function(target,character){
    var _target = $(target);
    var new_content = _target.html()  + character;
    _target.html(new_content);
   }
   this.run = function(){
      ra = rate;
      if(!target){console.log("target not found");return;};
      if(point <= messagelen){
        ch = message.substr(point++,1);
        printch = ch;
        if(ch == '\\'){
            vch = message.substr(point++,1);
            if(vch == "n"){
                printch = "<br/>";
                // 换行延迟
                ra += 200;
            }
        }
        // else if(ch == " "){
            // printch = "&nbsp;";
        // }
        
        Print2target(target,printch);
        setTimeout(arguments.callee,ra);
      }else{
        console.log("done");
      }
   }
} 
var t = new Typing({pointer:'#pointer',target:'#textarea',message:"lvni is Typeing a message to you！\ndo  you know 试下中文"});
var t2 = new Typing({pointer:'#apointer',target:'#atextarea',
message:"中华人民共和国，在今天成立了,中文看起来还是比较短啊，再输入一段英文试试？\nup up down down"});
t.run();
t2.run();