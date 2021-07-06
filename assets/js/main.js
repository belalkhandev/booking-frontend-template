(function($){
    "use-strict"

    jQuery(document).ready(function(){
        $('.search-box-body').css({
            "min-height": document.querySelector(".search-box-items.active").clientHeight
        });

        window.addEventListener('resize', function(event) {
            $('.search-box-body').css({
                "min-height": document.querySelector(".search-box-items.active").clientHeight
            });
    
        }, true);

        
        //on click tab item
        $(document).on('click', '.search-item', function() {
            let _self = $(this);
            let target_item = _self.data('target_item');          
            $('.search-item, .search-box-items').removeClass('active');
            $(_self).addClass('active');
            $(target_item).addClass('active');
            let box_height = document.querySelector(target_item).clientHeight;
            console.log(box_height);
            $('.search-box-body').css({
                "min-height": box_height
            })
        })

        //sliders 
        if($('.sliders').length > 0) {
            $('.sliders').owlCarousel({
                items: 1,
                loop: true,
                autoplay: true,
                autoplayTimeout: 4000,
                animateOut: 'fadeOut',
                animateIn: 'fadeIn',
                smartSpeed:1000,
                touchDrag  : true,
                mouseDrag  : false,
                nav: false,
                dots: false
            });
        }


    });

}(jQuery))
