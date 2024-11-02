$(document).ready(function() {
    $(".filter").click(function() {
        $(".filter").removeClass("active");
        $(this).addClass("active");

        var category = $(this).data("category");
        if (category === "all") {
            $(".gallery-box").fadeIn();
        } else {
            $(".gallery-box").each(function() {
                if ($(this).data("category") === category) {
                    $(this).fadeIn();
                } else {
                    $(this).fadeOut();
                }
            });
        }
    });

    $(".gallery-wrap a").click(function(event) { 
        event.preventDefault();
        var pop_image = $(this).attr('href');
        $("body").append('<div class="pop_img_wrap"><div class="pop_img"><img src="'+pop_image+'"></div></div>');
        $(".pop_img_wrap").addClass('active');

        $(".pop_img_wrap").click(function() {
            $(".pop_img_wrap").addClass('dactive');
            setTimeout(function(){
                $(".pop_img_wrap").remove();
            }, 300);
        });

        $(".pop_img").click(function(event) {
            event.stopPropagation();
        });
    });
});