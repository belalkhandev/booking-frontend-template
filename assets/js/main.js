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

        //carousel 
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

        //tourist spot carousel 
        if($('#spotsCarousel').length > 0) {
            $('#spotsCarousel').owlCarousel({
                items: 4,
                loop: true,
                nav: false,
                autoplay: true,
                autoplayTimeout: 4000,
                margin: 15
            });
        }
        
        //resort carousel 
        if($('#resortsCarousel').length > 0) {
            $('#resortsCarousel').owlCarousel({
                items: 4,
                loop: true,
                dots: false,
                nav: true,
                navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
                autoplay: true,
                autoplayTimeout: 5000,
                margin: 15
            });
        }
        
        //packages carousel 
        if($('#pacakgesCarousel').length > 0) {
            $('#pacakgesCarousel').owlCarousel({
                items: 3,
                loop: true,
                dots: false,
                nav: true,
                navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
                autoplay: true,
                autoplayTimeout: 5000,
                margin: 15,
            });
        }

        //responsive menu
        const menus = $('.mainmenu').html();
        $('.responsive-menu').append(menus);

        $(document).on('click', '#rs-menu-bar', function() {
            $('.responsive-menu').toggleClass('show');
        });
        


    });

}(jQuery))
