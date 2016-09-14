/********
   写于2016-9-14，用时一天，莫宝军
*********/

!function($){
    function Tooltip(target,options){
      this.init(target,options,"tooltip");
    }
    Tooltip.prototype={
      init:function(target,options,namespace){
        this.target=target;
        this.options=this.getOptions(options);
        this.namespace=namespace;
        var triggers=this.options.trigger.split(" ");
        for(var i=0;i<triggers.length;i++){
          if(triggers[i]=="click"){
            this.target.on("click."+this.namespace,$.proxy(this.show,this));
          }else{
            if(triggers[i]){
            this.target.on("mouseenter."+this.namespace,$.proxy(this.show,this));
            this.target.on("mouseleave."+this.namespace,$.proxy(this.hide,this));
           }
          }
        }

      },
      show:function(){ 
        //trigger的时候显示的tooltip效果
        var placement,
            arrowPlacement,
            $tip,$content,
            borderWidth=$.fn.tooltip.tooltipArrowBorderWidth;
        var tipWidth,tipHeight,contentWidth,contentHeight;
        var targetWidth,targetHeight,targetLeft,targetTop;
        targetWidth=this.target.innerWidth();
        targetHeight=this.target.innerHeight();
        targetLeft=this.target.offset().left;   //这里不可以用position，要用offset，因为position获取的是元素left和top的值，而我们实际需要的值是元素的左上角距document左上角的值
        targetTop=this.target.offset().top;
       // 这里要注意的一个情况是mouseenter之后可能会有click
        if(this.$tip){
           $tip=this.$tip;
           if(!$tip.find(".tooltip-arrow").hasClass(this.options.placement)){
               $tip.insertAfter(this.target);
           }else{
            return;
           }
        }else{
          this.$tip=$tip=$(this.options.template);
          $tip.insertAfter(this.target);
        }
      //  $tip.css("display","none");
        this.options.html?($tip.find(".tooltip-content").html(this.options.title)):($tip.find(".tooltip-content").text(this.options.title));
        //$tip.find(".tooltip-content").text(this.options.title);  //考虑是用text函数还是html函数，因为支持在title中使用html元素
         tipWidth=$tip.innerWidth();
         tipHeight=$tip.innerHeight();
         $content=$tip.find(".tooltip-content");
         contentWidth=$content.innerWidth();
         contentHeight=$content.innerHeight();
        switch(this.options.placement){
          case "top":
          placement={top:targetTop-tipHeight,left:targetLeft+targetWidth/2-tipWidth/2};
          arrowPlacement={top:borderWidth+contentHeight,left:contentWidth/2};
          break
          case "bottom":
          placement={top:targetTop+targetHeight,left:targetLeft+targetWidth/2-tipWidth/2};
          arrowPlacement={top:0,left:contentWidth/2};
          break
          case "left":
          placement={top:targetTop+targetHeight/2-tipHeight/2,left:targetLeft-tipWidth};
          arrowPlacement={top:contentHeight/2,left:contentWidth+borderWidth};
          break
          case "right":
          placement={top:targetTop+targetHeight/2-tipHeight/2,left:targetLeft+targetWidth};
          arrowPlacement={top:contentHeight/2,left:0};
          break
          default:return;
        }
        //接下来是css的使用了
           $tip.find(".tooltip-arrow").addClass(this.options.placement).css(arrowPlacement);
           $tip.css(placement);$tip.css("display","none");
           if(this.options.animation){
            $tip.fadeIn(1000);
           }
      },
      hide:function(){
        //取消tooltip效果
        if(this.options.animation){
          this.$tip.fadeOut(1000,function(){
            $(this).remove();
          });
        }else{
        this.$tip.remove();
        }
        this.$tip="";  //这里必须要重置$tip，要不然会导致上面判断出问题
      },
      getOptions:function(options){
        return $.extend({},$.fn.tooltip.defaults,this.target.data(),options);
      }
    }
    $.fn.tooltip=function(options){
         this.each(function(){
             var $this=$(this);
             var tooltip=new Tooltip($this,options);
         });
    }

   $.fn.tooltip.tooltipArrowBorderWidth=5;   //这个是template的tooltip小三角默认的border-width
   $.fn.tooltip.defaults={
      html:false,         //在title中是否有html元素
      animation:true,     //是否要动画显示
      placement:"top",    //提示放置的位置，top，left，right，bottom
      title:"I am default title",  //提示信息
      trigger:"click hover",       //触发提示信息的方式
      template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-content"></div></div>'   //提示的html结构，对应的css样式在同目录的css文件中
    }
}(window.jQuery);