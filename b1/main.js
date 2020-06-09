$(document).ready(function(){
    function ani() {
        $(".ban1").not(":animated").animate({"margin-left":"-1280px"},500, function(){
            $(".ban1 li").eq(0).appendTo(".ban1");
            $(".ban1").css("margin-left","0");
        });
    }
    var intv = setInterval(function(){ ani(); }, 4000);
    
});    