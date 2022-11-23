$(document).ready(()=>{
    let x = 0;
    $(window).resize(()=>{
        if(x==0){
            if($(window).width()<=600){
                $(".picture img").hide();
                $(".header").before(`<div class="picture picture2">
                <img src="./image.jpeg" alt="image" style="margin:auto;">
                </div>`)
                x = 1;
            }
        }
        if($(window).width()<=600){
            $(".picture img").hide();
            $(".header").before(`<div class="picture picture2">
            <img src="./image.jpeg" alt="image" style="margin:auto;">
            </div>`)
        }else{
            $(".picture2").remove()
            $(".picture img").show()
        }
    })
})