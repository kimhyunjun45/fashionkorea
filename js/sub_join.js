$(function(){
    // plus,minus
    var current = 1;
    var $window = $(window);
    var $body=$(".contents_inner .left a, .contents_inner .left span, .contents_inner .join_table th label, .contents_inner .join_table td span.userPw_span")
    var $btnZoomIn = $(".button-zoomin");
    var $btnZoomOut = $(".button-zoomout");

    var h2_size = $(".left h2");
    var left_size = $(".left ul li a");
    var rigt_td_size = $(".right td");
    var rigt_th_size = $(".right th");

    function size_up(){
        $(h2_size).css("font-size",)
    }

    $btnZoomIn.on("click",function(){
        current += 0.1; zoom();
    });
    $btnZoomOut.on("click",function(){
        current -= 0.1; zoom();
    });

    function zoom(){
        if(current>1.4){
            alert('더이상 화면을 확대할 수 없습니다.');
            return false;
        }
        if(current<0.8){
            alert('더이상 화면을 축소할 수 없습니다.');
            return false;
        }
        $body.css({
            zoom:current,
            '-moz-fransform': 'scale('+current+')'
        });
    }
})