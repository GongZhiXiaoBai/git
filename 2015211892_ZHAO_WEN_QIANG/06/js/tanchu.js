   $("#carousel_1").FtCarousel();
//   滑动部分 
                $(document).ready(function (){  
                    $("#a3,#a4,#ns").click(function (){  
                        $('html, body').animate({  
                            scrollTop: $(".ns").offset().top  
                        }, 2000)
                    });
                    $("#nvs,#a1,#a5").click(function (){  
                        $('html, body').animate({  
                            scrollTop: $(".nvs").offset().top  
                        }, 2000) 
                    });   
                    $("#pw,#a6").click(function (){  
                        $('html, body').animate({  
                            scrollTop: $(".pw").offset().top  
                        }, 2000) 
                    });  
                    $("#gy").click(function (){  
                        $('html, body').animate({  
                            scrollTop: $(".gy").offset().top  
                        }, 2000)
                    }); 
                    $("#wl,#a2").click(function (){  
                        $('html, body').animate({  
                            scrollTop: $(".wl").offset().top  
                        }, 2000)
                    }); 
                    $("#xg").click(function (){  
                        $('html, body').animate({  
                            scrollTop: $(".xg").offset().top  
                        }, 2000)
                    });  
                });  
            // <!-- 滑动部分 -->
            // var he=  window.screen.availHeight;
            // $("#show").css("height",he);
// 购物加减
 var num_jia = document.getElementById("num-jia");
        var num_jian = document.getElementById("num-jian");
        var input_num = document.getElementById("input-num");

        num_jia.onclick = function() {

            input_num.value = parseInt(input_num.value) + 1;
        }

        num_jian.onclick = function() {

            if(input_num.value <= 0) {
                input_num.value = 0;
            } else {

                input_num.value = parseInt(input_num.value) - 1;
            }
        }
// 购物加减
// 弹出和收回
function tanchu() {
        var obj = document.getElementById("show");
        obj.style.cssText = "    animation: myfirst2 500ms;\n" +
            "    -webkit-animation-fill-mode:forwards" 
            $("body").css("overflow-y","hidden");       }
 function shouhui() {
        var obj = document.getElementById("show");
        obj.style.cssText = "    animation: myfirst1 500ms;\n" +
            "    -webkit-animation-fill-mode:forwards" 
            $("body").css("overflow-y","auto");       }

            $(".ware .img").click(function (){     tanchu();  });
            $("#font #f1").click(function (){     shouhui();$("#gwc").css({"position":"absolute","z-index":"100","right":"0px"});     });
// 填写数字
var n="<&nbsp;男士商品";
var v="<&nbsp;女士商品";
var p="<&nbsp;品味生活";
var a1="劳力士";
var a11="￥990000.00";
var a111="劳力士，以庄重、实用、不显浮华的风格广受成功人士喜爱，劳力士（Rolex）是瑞士钟表业的经典品牌。劳力士表最初的标志为一只伸开五指的手掌，它表示该品牌的手表完全是靠手工精雕细琢的，后来才逐渐演变为皇冠的注册商标，以示其在手表领域中的霸主地位，展现着劳力士在制表业的帝王之气。";
var a2="兰博基尼";
var a22="￥66666666.00";
var a222="兰博基尼（Automobili Lamborghini S.p.A.）是一家意大利汽车生产商，全球顶级跑车制造商及欧洲奢侈品标志之一，公司坐落于意大利圣亚加塔·波隆尼（Sant'Agata Bolognese），由费鲁吉欧·兰博基尼在1963年创立。";
var a3="Vertu手机";
var a33="￥660000.00";
var a333="作为2002年创立的尊贵手机品牌，VERTU的宗旨就是替世界各地的富翁量身定做手机。由于该品牌手机的独特性，想要定做手机的用户只有在预约情况下或者特定的专卖店才能得到VERTU手机。";

var b1="LV包";
var b11="￥90000.00";
var b111="自1854年以来，代代相传至今的路易威登，以卓越品质、杰出创意和精湛工艺成为时尚旅行艺术的象征 。产品包括手提包，旅行用品，小型皮具，配饰，鞋履，成衣，腕表，高级珠宝及个性化订制服务等。2017年6月6日，《2017年BrandZ最具价值全球品牌100强》公布，路易威登名列第29位。";
var b2="YSL口红";
var b22="￥666.00";
var b222="YSL圣罗兰美妆, 颠覆性法国高定设计师品牌, 自由,大胆,始终引领当下. “着我装者, 着我妆” YSL美以其独特的风格, 自由游走于优雅与率性之间. 彩妆拒绝乏味,护肤悦享生命,香水为爱而生.";
var b3="优质高跟鞋";
var b33="￥6600.00";
var b333="高跟鞋是一种鞋跟特别高的鞋，使穿此鞋人的脚跟明显比脚趾高。高跟鞋有许多种不同款式，尤其是在鞋跟的变化上更是非常多，如细跟、粗跟、楔型跟、钉型跟、槌型跟、刀型跟等。";

var c1="茶具";
var c11="￥990.00";
var c111="现代人所说的“茶具”主要指茶壶、茶杯、茶勺等这类饮茶器具。唐代文学家皮日休《茶具十咏》中所列出的茶具种类有“茶坞、茶人、茶笋、茶籝、茶舍、茶灶、茶焙、茶鼎、茶瓯、煮茶。”其中“茶坞”是指种茶的凹地。“茶人”，按照现代观点，不应纳入器具。";
var c2="十字绣";
var c22="￥666.00";
var c222="十字绣是一种古老的民族刺绣，具有悠久的历史。在中国许多民族的日常生活中，一直以来就普遍存在着自制的十字绣的工艺品。由于各国文化的不尽相同，随着时间的推移，十字绣在各国的发展也都形成了各自不同的风格，无论是绣线、面料的颜色还是材质、图案，都别具匠心。";
var c3="灯具";
var c33="￥6600.00";
var c333="灯具，是指能透光、分配和改变光源光分布的器具，包括除光源外所有用于固定和保护光源所需的全部零部件，以及与电源连接所必需的线路附件。现代灯具包括家居照明,商业照明,工业照明,道路照明,景观照明,特种照明等。";
$(".ware #img4").click(function (){  $("#show #pic").css({"background":"url(img/04.png) no-repeat","background-size":"100% 100%"});    $("#font #f1").html(n);$("#font #sh").html(a1);$("#font #f2").html(a11);$("#font p").html(a111);  });
$(".ware #img6").click(function (){  $("#show #pic").css({"background":"url(img/06.png) no-repeat","background-size":"100% 100%"});    $("#font #f1").html(n);$("#font #sh").html(a2);$("#font #f2").html(a22);$("#font p").html(a222);  });
$(".ware #img5").click(function (){  $("#show #pic").css({"background":"url(img/05.png) no-repeat","background-size":"100% 100%"});   $("#font #f1").html(n);$("#font #sh").html(a3);$("#font #f2").html(a33);$("#font p").html(a333);  });

$(".ware #img7").click(function (){  $("#show #pic").css({"background":"url(img/07.png) no-repeat","background-size":"100% 100%"});    $("#font #f1").html(v);$("#font #sh").html(b1);$("#font #f2").html(b11);$("#font p").html(b111);  });
$(".ware #img8").click(function (){  $("#show #pic").css({"background":"url(img/08.png) no-repeat","background-size":"100% 100%"});    $("#font #f1").html(v);$("#font #sh").html(b2);$("#font #f2").html(b22);$("#font p").html(b222);  });
$(".ware #img9").click(function (){  $("#show #pic").css({"background":"url(img/09.png) no-repeat","background-size":"100% 100%"});   $("#font #f1").html(v);$("#font #sh").html(b3);$("#font #f2").html(b33);$("#font p").html(b333);  });

$(".ware #img10").click(function (){  $("#show #pic").css({"background":"url(img/10.png) no-repeat","background-size":"100% 100%"});    $("#font #f1").html(p);$("#font #sh").html(c1);$("#font #f2").html(c11);$("#font p").html(c111);  });
$(".ware #img11").click(function (){  $("#show #pic").css({"background":"url(img/11.png) no-repeat","background-size":"100% 100%"});    $("#font #f1").html(p);$("#font #sh").html(b2);$("#font #f2").html(c22);$("#font p").html(c222);  });
$(".ware #img12").click(function (){  $("#show #pic").css({"background":"url(img/12.png) no-repeat","background-size":"100% 100%"});   $("#font #f1").html(p);$("#font #sh").html(b3);$("#font #f2").html(c33);$("#font p").html(c333);  });


var DemoStorage = window.localStorage;
DemoStorage.setItem("a", "0"); 
DemoStorage.setItem("c", "0"); 

// 添加购物车
$("#add").click(function (){
if(input_num.value!=0){
var a=input_num.value;
var aa=DemoStorage["a"];
var cc=DemoStorage["c"];
var a=parseFloat(a)+parseFloat(aa);
var b=$("#f2").html().substr(1);
var c=a*b;
var c=parseFloat(c)+parseFloat(cc);
var d="￥"+c;
DemoStorage.setItem("a", a); 
DemoStorage.setItem("c", c); 
$("#num").html(a);
$("#pri").html(d);
$("#gwc").css({"position":"fixed","z-index":"100","right":"15px"}); 

}
});
