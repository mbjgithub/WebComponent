一、Tooltip组件使用方法

（1）在页面中引入"tooltip.css","jquery-1.12.2.js","tooltip.js"三个文件

（2）用jquery获得想要添加tooltip的jquery对象，例如：$(".center").tooltip({placement:"left",title:"you hover me",html:true});

（3）tooltip函数使用，tooltip(options),参数options是一个对象，可选的，包含的属性有
             html:false,         //如果在title中有html元素，是否以该html的格式显示提示信息
             animation:true,     //是否要动画显示tooltip
             placement:"top",    //tooltip的放置的位置，top，left，right，bottom
             title:"I am default title",  //提示信息
             trigger:"click hover"       //触发提示信息的方式
      上面的值都是tooltip使用 的默认值，可以通过传入options对象覆盖他们

（4）相同目录下有一个"testTooltip.html"文件，具体使用看这个文件

二、总结

（1）template中的tooltip元素最好加上padding，并且和tooltip-arrow的border-width的值相等，这样便于tooltip-arrow的定位，也便于整个tooltip的定位。

（2）注意代理函数的使用，var changedShow=$.proxy(show,this);这就表示不管谁调用changedShow函数，里面的this都是代理函数中this指向的对象

（3）当用户hover的时候会显示tooltip，但是要避免用户hover的时候在click，这时就不能在插入一个tooltip了

（4）获取元素相当于document的left和top的函数是jquery的offset，而不是position，position获取的是css中的top和left样式，或者说距离父定位元素的left和top




