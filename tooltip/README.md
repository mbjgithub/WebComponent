һ��Tooltip���ʹ�÷���

��1����ҳ��������"tooltip.css","jquery-1.12.2.js","tooltip.js"�����ļ�

��2����jquery�����Ҫ���tooltip��jquery�������磺$(".center").tooltip({placement:"left",title:"you hover me",html:true});

��3��tooltip����ʹ�ã�tooltip(options),����options��һ�����󣬿�ѡ�ģ�������������
             html:false,         //�����title����htmlԪ�أ��Ƿ��Ը�html�ĸ�ʽ��ʾ��ʾ��Ϣ
             animation:true,     //�Ƿ�Ҫ������ʾtooltip
             placement:"top",    //tooltip�ķ��õ�λ�ã�top��left��right��bottom
             title:"I am default title",  //��ʾ��Ϣ
             trigger:"click hover"       //������ʾ��Ϣ�ķ�ʽ
      �����ֵ����tooltipʹ�� ��Ĭ��ֵ������ͨ������options���󸲸�����

��4����ͬĿ¼����һ��"testTooltip.html"�ļ�������ʹ�ÿ�����ļ�

�����ܽ�

��1��template�е�tooltipԪ����ü���padding�����Һ�tooltip-arrow��border-width��ֵ��ȣ���������tooltip-arrow�Ķ�λ��Ҳ��������tooltip�Ķ�λ��

��2��ע���������ʹ�ã�var changedShow=$.proxy(show,this);��ͱ�ʾ����˭����changedShow�����������this���Ǵ�������thisָ��Ķ���

��3�����û�hover��ʱ�����ʾtooltip������Ҫ�����û�hover��ʱ����click����ʱ�Ͳ����ڲ���һ��tooltip��

��4����ȡԪ���൱��document��left��top�ĺ�����jquery��offset��������position��position��ȡ����css�е�top��left��ʽ������˵���븸��λԪ�ص�left��top




