!function(){
   $.fn.print=function(){
   	  return this.each(function(){
   	  	var $this=$(this);
   	  	var html=$this.html();
   	  	var progress=0;
        $this.html();
        var timer=window.setInterval(function(){
            var current=html.substr(progress,1);
            if(current=="<"){
            	progress=html.indexOf(">",progress)+1;
            }else{
            	progress++;
            }
            $this.html(html.substring(0,progress) +(progress & 1 ? '_' : ''));
            if(progress>=html.length){
            	window.clearInterval(timer);
            }
        },70);
   	  });
   }
}(window.jQuery)